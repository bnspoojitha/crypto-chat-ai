import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Cookies from "js-cookie";

export const options: NextAuthOptions = {
  pages: {
    signIn: "auth/signin",
    signOut: "auth/signin",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          "http://3.26.157.3:5001/api-chatbot-ai/api/authenticate",
          {
            method: "POST",
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add custom data to the JWT token
      if (user) {
        token.id = user.id; // Add the user's ID to the token
        token.customField = user; // Add any other custom fields you want
      }
      return token;
    },

    async session({ session, token, user }) {
      // Session callback remains the same
      if (token) {
        session.user = token; // Add a custom property to store the entire token
      }
      return session;
    },
  },
};
