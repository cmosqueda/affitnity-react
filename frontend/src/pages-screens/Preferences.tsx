// app/preferences/page.tsx
"use client";

import { useState } from "react";
import { pages } from "./preferences-components/pages";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Preferences() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const progressValue = ((currentPage + 1) / totalPages) * 100;
  const { title, content } = pages[currentPage];

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
            <Button onClick={nextPage} disabled={currentPage === totalPages - 1}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
