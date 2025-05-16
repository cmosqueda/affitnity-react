// app/preferences/page.tsx
"use client";

import { useUserPreferenceFormStore } from "@/stores/useUserPreferenceFormStore";
import { saveProfile, saveTarget } from "@/api/profileSetup";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { pages } from "./preferences-components/pages";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function Preferences() {
  // usenavigate
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pages.length;
  const isLastPage = currentPage === totalPages - 1;

  // Zustand values must be used inside component function
  // const gender = useUserPreferenceFormStore((state) => state.gender);
  // const birth_date = useUserPreferenceFormStore((state) => state.birth_date);
  // const experienceLevel = useUserPreferenceFormStore((state) => state.experience_level);
  // const height = useUserPreferenceFormStore((state) => state.height);
  // const weight = useUserPreferenceFormStore((state) => state.weight);
  // const bodyType = useUserPreferenceFormStore((state) => state.body_type);

  const nextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    } else {
      handleFinish();
    }
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleFinish = async () => {
    try {
      const {
        gender,
        birth_date,
        experience_level,
        height,
        weight,
        body_type,
        fitness_goals,
        fitness_focus,
        preferred_diet,
        diet_restrictions,
      } = useUserPreferenceFormStore.getState();

      if (!gender || !birth_date || !experience_level || !height || !weight || !body_type) {
        toast("Oops! You're missing details", {
          description: "Please fill in all the required fields.",
          action: {
            label: "Go back",
            onClick: () => setCurrentPage(0),
          },
        });
        return;
      }

      // First, create the Profile
      await saveProfile({
        gender,
        birth_date,
        weight,
        height,
        body_type,
      });

      // Then, create the Target (profile will be resolved via auth)
      await saveTarget({
        experience_level,
        fitness_goals,
        fitness_focus,
        preferred_diet,
        diet_restrictions,
      });

      navigate("/generate");
    } catch (error) {
      console.error(error);
      toast("Something went wrong", {
        description: "Could not save your preferences. Please try again.",
      });
    }
  };

  const progressValue = ((currentPage + 1) / totalPages) * 100;
  const current = pages[currentPage]; //  Safe access
  const title = current?.title || "Untitled";
  const content = current?.content || <p>Error loading page content.</p>;

  return (
    <div className="font-dmsans flex flex-col grow max-w-md mx-auto mt-10 mb-5 space-y-4">
      <Progress value={progressValue} className="bg-muted [&>div]:bg-brand" />
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h2 className="font-aeonik text-center text-3xl font-semibold">{title}</h2>
          {content}
          <div className="flex justify-between pt-4">
            <Button onClick={prevPage} disabled={currentPage === 0}>
              Previous
            </Button>
            <Button onClick={nextPage}>{isLastPage ? "Finish" : "Next"}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
