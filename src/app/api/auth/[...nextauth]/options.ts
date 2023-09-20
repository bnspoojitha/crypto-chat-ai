import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options: NextAuthOptions= {
    pages:{
        signIn: "auth/signin"
    },
   providers: [
  CredentialsProvider({
  
    name: 'Credentials',
 
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

        const user = {id:"45", username:"dilum",password:"password"};

        if(credentials?.username === user.username && credentials.password === user.password)
        {
            return user;
        }

    //  const res = await fetch(
    //         "http://3.26.157.3:5001/api-chatbot-ai/api/authenticate",
    //         {
    //           method: "POST",
    //           body: JSON.stringify({
    //             username: credentials?.username,
    //             password: credentials?.password
    //           }),
    //           headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //           },
    //         }
    //       );
    //   const user = await res.json()

   
    //   if (res.ok && user) {
    //     return user
    //   }
     
      return null
    }
  })
]
}