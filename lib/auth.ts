import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ],

    callbacks: {
        async redirect({ url, baseUrl }) {
            const finalUrl = url.startsWith(baseUrl) ? url : baseUrl;
            return finalUrl.endsWith("/blog") ? finalUrl : `${finalUrl}/blog`; // Append "/blog" only if not already present
        }
    }
}
