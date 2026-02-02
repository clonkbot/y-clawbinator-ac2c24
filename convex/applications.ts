import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    return await ctx.db
      .query("applications")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const getMyApplication = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    const apps = await ctx.db
      .query("applications")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .first();
    return apps;
  },
});

export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("applications").collect();
    const pending = all.filter((a) => a.status === "pending").length;
    const accepted = all.filter((a) => a.status === "accepted").length;
    return { total: all.length, pending, accepted };
  },
});

export const submit = mutation({
  args: {
    companyName: v.string(),
    tagline: v.string(),
    description: v.string(),
    founderName: v.string(),
    founderEmail: v.string(),
    agentType: v.string(),
    website: v.optional(v.string()),
    twitterHandle: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Check if user already has an application
    const existing = await ctx.db
      .query("applications")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    if (existing) {
      throw new Error("You have already submitted an application");
    }

    return await ctx.db.insert("applications", {
      userId,
      companyName: args.companyName,
      tagline: args.tagline,
      description: args.description,
      founderName: args.founderName,
      founderEmail: args.founderEmail,
      agentType: args.agentType,
      website: args.website,
      twitterHandle: args.twitterHandle,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const withdraw = mutation({
  args: { id: v.id("applications") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const app = await ctx.db.get(args.id);
    if (!app || app.userId !== userId) {
      throw new Error("Application not found");
    }

    await ctx.db.delete(args.id);
  },
});
