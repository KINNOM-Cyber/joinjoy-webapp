import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useCookies } from "react-cookie";
import type { User } from "~/libs/auth";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
};

type AuthAction = {
  updateCredential: (user: User) => void;
  clearCredential: () => void;
};

type AuthContextType = AuthState & AuthAction;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const token = cookies.token;

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decodedUser = JSON.parse(atob(token)) as User;
      setUser(decodedUser);
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Invalid token", err);
      setUser(null);
      setIsAuthenticated(false);
      removeCookie("token");
    } finally {
      setLoading(false);
    }
  }, [cookies.token, removeCookie]);

  const updateCredential = (newUser: User) => {
    setUser(newUser);
    setIsAuthenticated(true);
    const token = window.btoa(JSON.stringify(newUser));
    setCookie("token", token, { path: "/", secure: true, sameSite: "lax" });
  };

  const clearCredential = () => {
    setUser(null);
    setIsAuthenticated(false);
    removeCookie("token", { path: "/" });
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      loading,
      updateCredential,
      clearCredential,
    }),
    [user, isAuthenticated, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
