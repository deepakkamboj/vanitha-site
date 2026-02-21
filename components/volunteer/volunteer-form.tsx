"use client";

import React from "react";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const roleOptions = [
  "Event Coordinator",
  "Education Mentor",
  "Community Outreach",
  "Administrative Volunteer",
  "Fundraising Team",
];

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          Thank you for your interest in volunteering. We&apos;ll be in touch
          soon.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
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
      <div className="space-y-2">
        <Label htmlFor="role">Select a role</Label>
        <Select name="role" required disabled={isSubmitting}>
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            {roleOptions.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
            <SelectItem value="any">Any / Open to Suggestions</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="about">Tell us about yourself and how you&apos;d like to help</Label>
        <Textarea
          id="about"
          name="about"
          rows={4}
          placeholder="Share your background and what motivates you to volunteer with Vanitha..."
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
