import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { useLocation } from "wouter";

export function GoogleLoginButton() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      if (user.email) {
        login(user.email);
        setLocation("/profile");
      } else {
        alert("Google login failed: No email returned.");
      }
    } catch (error) {
      alert("Google login failed: " + error);
    }
  };

  return (
    <Button type="button" className="w-full font-bold" onClick={handleGoogleLogin}>
      Sign in with Google
    </Button>
  );
}
