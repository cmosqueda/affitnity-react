"use client";

// shadcn imports
import { Label } from "@/components/ui/label";

// import useAuth
import { useAuth } from "@/AuthContext";

// step 1
export default function Welcome() {
  const { user } = useAuth();

  return (
    <>
      <div className="space-y-4">
        <Label>Hello, {user?.first_name || "Guest"}. Let's get started for your fitness and diet plan.</Label>
      </div>
    </>
  );
}
