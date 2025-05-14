"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

export default function PersonalDetails() {
  const [gender, setGender] = useState<string | undefined>();
  const [experience, setExperience] = useState<string | undefined>();
  // const [bodyType, setBodyType] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <>
      <div className="space-y-4 ">
        <Label>Enter your personal details.</Label>

        {/* gender */}
        <div>
          <Label className="text-gray-500 my-3">Gender</Label>
          <Select onValueChange={setGender} defaultValue={gender}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* birthday */}
        <div>
          <Label className="text-gray-500 my-3">Birthday</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !selectedDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <Separator className="space-y-5"></Separator>

        {/* experience */}
        <div>
          <Label className="text-gray-500 my-3">Experience</Label>
          <Select onValueChange={setExperience} defaultValue={experience}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* body type */}
        {/* <div>
          <Label className="text-gray-500 my-3">Body Type</Label>
          <Select onValueChange={setBodyType} defaultValue={bodyType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option."></SelectValue>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Ectomorph">Ectomorph</SelectItem>
              <SelectItem value="Mesomorph">Mesomorph</SelectItem>
              <SelectItem value="Endomorph">Endomorph</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>
    </>
  );
}
