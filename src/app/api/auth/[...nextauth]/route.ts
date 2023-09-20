import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          console.log(credentials, "credentials");
          const response = await fetch(
            "http://3.26.157.3:5001/api-chatbot-ai/api/authenticate",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );

          console.log(response, "user");
          const user = await response.json();

          if (response.ok && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          // Handle any errors that occur during the request
          console.error("An error occurred:", error);
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});
