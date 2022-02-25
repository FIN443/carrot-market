import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "carrotsession",
  password: process.env.COOKIE_PASSWORD!,
};

// API URL 보호(암호화)
export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
