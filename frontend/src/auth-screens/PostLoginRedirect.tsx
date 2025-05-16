import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserStore } from "@/stores/useUserProfileStore";

export default function PostLoginRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, fetchProfile, isProfileComplete } = useUserStore();

  useEffect(() => {
    const handleRedirect = async () => {
      if (!token) return;

      try {
        await fetchProfile();
        const isComplete = isProfileComplete();

        const isOnLogin = location.pathname === "/login" || location.pathname === "/login-v2";

        if (isComplete && isOnLogin) {
          navigate("/"); // Redirect to home
        } else if (!isComplete && isOnLogin) {
          navigate("/preferences"); // Go to onboarding
        }
      } catch (err) {
        console.error("Profile fetch failed:", err);
      }
    };

    handleRedirect();
  }, [token]);

  return null;
}
