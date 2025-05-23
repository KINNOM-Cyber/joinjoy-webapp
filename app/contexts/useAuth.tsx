import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { useCookies } from "react-cookie";

type AuthState = {
  user: any;
};

type AuthAction = {
  updateCredential: (user: AuthState["user"]) => void;
  clearCredential: () => void;
};

const AuthContext = createContext<(AuthState & AuthAction) | null>(null);

const useAuth = () => {
  return use(AuthContext);
};

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<(AuthState & AuthAction) | null>(null);
  const [cookies, setCookie, remove] = useCookies(["token"]);

  const updateCredential = (user: any) => {
    setUser(user);
    const token = btoa(JSON.stringify(user));
    setCookie("token", token);
  };

  const clearCredential = () => {
    setUser(null);
    remove("token");
  };

  useEffect(() => {
    const token = cookies.token;

    if (token) {
      try {
        const decoded = atob(token);
        const user = JSON.parse(decoded);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, updateCredential, clearCredential }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthContextProvider };
