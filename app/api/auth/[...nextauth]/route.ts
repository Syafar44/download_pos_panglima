import environment from "@/config/environment";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWTExtended, SessionExtended, UserExtended } from "@/types/Auth";
import authServices from "@/services/AuthServices";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 500,
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
        ): Promise<UserExtended | null> {
        const { email, password } = credentials as {
            email: string;
            password: string;
        };

        try {
            console.log("=== AUTHORIZE START ===");
            console.log("credentials:", { email, password });
            
            const result = await authServices.login({ email, password });
            
            console.log("result.status:", result.status);
            console.log("result.data:", JSON.stringify(result.data, null, 2));

            const data = result.data.data;

            if (result.status === 200 && data?.token) {
            return {
                id: data.id,
                name: data.name,
                email: data.email,
                department: data.department,
                roles: data.roles,
                customer: data.customer,
                accessToken: data.token,
            };
            }

            console.log("authorize: kondisi gagal, data:", data);
            return null;

        } catch (error: any) {
            console.error("=== AUTHORIZE ERROR ===");
            console.error("message:", error?.message);
            console.error("response status:", error?.response?.status);
            console.error("response data:", error?.response?.data);
            console.error("stack:", error?.stack);
            return null;
        }
        },
    }),
  ],

  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
      trigger,
      isNewUser,
      session,
    }: any) {
      if (user) {
        token.user = user as UserExtended;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: SessionExtended;
      token: JWTExtended;
    }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };