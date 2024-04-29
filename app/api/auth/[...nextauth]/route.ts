import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connect from '@/lib/db';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: (process.env.GITHUB_ID as string) ?? '',
      clientSecret: (process.env.GITHUB_SECRET as string) ?? '',
    }),
    GoogleProvider({
      clientId: (process.env.GOOGLE_CLIENT_ID as string) ?? '',
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            if (await bcrypt.compare(credentials.password, user.password)) {
              return user;
            }
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {},
  events: {},
};

export const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
