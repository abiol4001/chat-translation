import { FirestoreAdapter } from "@auth/firebase-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "./firebase-admin";

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(adminDb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    jwt: async ({user, token}) => {
      if(user) {
        token.sub = user.id
      }
      return token
    },
    session: async ({session, token}) => {
      if(session?.user) {
        if(token.sub) {
          session.user.id = token.sub;
        }
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
  },
};

export const getAuthSession = () => getServerSession(authOptions)