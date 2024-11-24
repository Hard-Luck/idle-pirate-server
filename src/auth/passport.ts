import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { findOrCreateUser } from "../models/users";
import session from "express-session";
import app from "../app";

dotenv.config();

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
      callbackURL: "http://localhost:3000/auth/discord/callback",
      scope: ["identify", "email"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: { id: string },
      done: any
    ) => {
      try {
        const user = await findOrCreateUser(profile.id);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user as false | User | null | undefined);
});

passport.deserializeUser((obj, done) => {
  done(null, obj as false | User | null | undefined);
});

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.isAuthenticated() || process.env.NODE_ENV === "test") {
    return next();
  }
  res.redirect("/auth/discord");
}

export const authMiddleware = [
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
  }),
  passport.initialize(),
  passport.session(),
];
