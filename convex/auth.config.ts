export default {
  providers: [
    {
      domain: process.env.AUTH_WORKOS_CLIENT_ID
        ? "https://api.workos.com/"
        : undefined,
      applicationID: process.env.AUTH_WORKOS_CLIENT_ID ?? "",
      clientID: process.env.AUTH_WORKOS_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH_WORKOS_API_KEY ?? "",
    },
  ],
}
