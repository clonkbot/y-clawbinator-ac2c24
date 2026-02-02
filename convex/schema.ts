import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  applications: defineTable({
    userId: v.id("users"),
    companyName: v.string(),
    tagline: v.string(),
    description: v.string(),
    founderName: v.string(),
    founderEmail: v.string(),
    agentType: v.string(),
    website: v.optional(v.string()),
    twitterHandle: v.optional(v.string()),
    status: v.string(), // "pending", "accepted", "rejected"
    createdAt: v.number(),
  }).index("by_user", ["userId"]).index("by_status", ["status"]),
});
