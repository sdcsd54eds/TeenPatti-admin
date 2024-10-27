import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import { AuthContextType, User, UserProfile } from "./type";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [profileDetails, setProfileDetails] = useState<
    UserProfile | undefined
  >();
  const token = getCookie("token") || "";
  const UserId = getCookie("UserId") || "";

  function logout() {
    setLoading(true);
    deleteCookie("token");
    deleteCookie("UserId");
    setTimeout(() => {
      router.push("/");
      setLoading(false);
    }, 1000);
  }

  const memoedValue = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      error,
      logout,
      token,
      profileDetails,
      UserId,
    }),
    [user, loading, error],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
