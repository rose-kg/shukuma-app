import { auth, googleProvider } from "@/lib/firebase";
import { signInWithRedirect } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { useLocation } from "wouter";

export function GoogleLoginButton() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
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
