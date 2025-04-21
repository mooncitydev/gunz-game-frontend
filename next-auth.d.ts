import "next-auth/jwt";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth" {
  interface JWT {
    /** The user's role. */
    userRole?: "user" | "admin";
    accessToken: string | undefined;
  }
  interface Session {
    /** The user's role. */
    user: {
      sub: string | undefined;
      accessToken: string | undefined;
      name: string | undefined;
      email: string | undefined;
      image: string | undefined;
      userRole: string | undefined;
    };
  }
}
