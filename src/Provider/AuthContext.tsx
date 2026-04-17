import type { User, UserCredential } from "firebase/auth";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  updateUser: (displayName: string, photoURL: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
  googleLogin: () => Promise<UserCredential>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
