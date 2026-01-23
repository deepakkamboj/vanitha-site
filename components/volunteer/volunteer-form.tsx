"use client";

import React from "react"

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { volunteerRoles } from "@/data/team";

const availabilityOptions = [
  { value: "weekday-mornings", label: "Weekday Mornings" },
  { value: "weekday-afternoons", label: "Weekday Afternoons" },
  { value: "weekday-evenings", label: "Weekday Evenings" },
  { value: "weekend-mornings", label: "Weekend Mornings" },
  { value: "weekend-afternoons", label: "Weekend Afternoons" },
  { value: "flexible", label: "Flexible" },
];

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-primary/10 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Send className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
          Application Submitted!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for your interest in volunteering. We&apos;ll review your
          application and contact you within 3-5 business days.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setSelectedAvailability([]);
          }}
          variant="outline"
          className="mt-6"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required disabled={isSubmitting} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required disabled={isSubmitting} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Preferred Volunteer Role</Label>
        <Select name="role" required disabled={isSubmitting}>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            {volunteerRoles.map((role) => (
              <SelectItem key={role.title} value={role.title}>
                {role.title}
              </SelectItem>
            ))}
            <SelectItem value="any">Any / Open to Suggestions</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Availability (select all that apply)</Label>
        <div className="grid gap-2 md:grid-cols-2">
          {availabilityOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={option.value}
                checked={selectedAvailability.includes(option.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedAvailability([...selectedAvailability, option.value]);
                  } else {
                    setSelectedAvailability(
                      selectedAvailability.filter((v) => v !== option.value)
                    );
                  }
                }}
                disabled={isSubmitting}
              />
              <Label htmlFor={option.value} className="text-sm font-normal">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">
          Relevant Experience or Skills (Optional)
        </Label>
        <Textarea
          id="experience"
          name="experience"
          rows={3}
          placeholder="Tell us about any relevant experience or skills you have..."
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">Why do you want to volunteer?</Label>
        <Textarea
          id="motivation"
          name="motivation"
          rows={3}
          placeholder="Share what motivates you to volunteer with Vanitha..."
          required
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Application
          </>
        )}
      </Button>
    </form>
  );
}
