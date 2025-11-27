import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "wouter";

// Mock user type
type User = {
  id: string;
  name: string;
  email: string;
  streak: number;
  workoutsCompleted: number;
  joinDate: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Simulate checking local storage or session
    const storedUser = localStorage.getItem("shukuma_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    // In a real app, this would call Firebase Auth
    const mockUser = {
      id: "123",
      name: email.split("@")[0],
      email,
      streak: 5,
      workoutsCompleted: 42,
      joinDate: new Date().toLocaleDateString()
    };
    setUser(mockUser);
    localStorage.setItem("shukuma_user", JSON.stringify(mockUser));
    setLocation("/profile");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shukuma_user");
    setLocation("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
