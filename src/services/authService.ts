import { Session } from "next-auth";
import { signIn, signOut, getSession } from "next-auth/react";

interface User {
  id: string;
  name: string;
  email: string;
}

export const login = async (): Promise<void> => {
  try {
    await signIn("credentials", { redirect: false });
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Unable to log in");
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut({ redirect: false });
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Unable to log out");
  }
};

export const getAuthStatus = async (): Promise<User | null> => {
  try {
    const session = (await getSession()) as Session & { user: User };
    return session?.user || null;
  } catch (error) {
    console.error("Get auth status error:", error);
    throw new Error("Unable to retrieve authentication status");
  }
};
