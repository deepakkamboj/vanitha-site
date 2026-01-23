"use client";

import React from "react"

import { useState } from "react";
import { Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const presetAmounts = [25, 50, 100, 250, 500, 1000];

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const actualAmount =
    selectedAmount === "custom" ? Number(customAmount) || 0 : selectedAmount;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (actualAmount < 1) return;

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-primary/10 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Heart className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
          Thank You for Your Generosity!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Your {isMonthly ? "monthly " : ""}donation of ${actualAmount} will help
          transform lives. You&apos;ll receive a confirmation email shortly.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setSelectedAmount(100);
            setCustomAmount("");
          }}
          variant="outline"
          className="mt-6"
        >
          Make Another Donation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Donation Frequency */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Donation Frequency</Label>
        <div className="flex rounded-lg bg-muted p-1">
          <button
            type="button"
            onClick={() => setIsMonthly(false)}
            className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
              !isMonthly
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            One-time
          </button>
          <button
            type="button"
            onClick={() => setIsMonthly(true)}
            className={`flex-1 rounded-md py-2 text-sm font-medium transition-colors ${
              isMonthly
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Amount Selection */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Select Amount</Label>
        <RadioGroup
          value={selectedAmount === "custom" ? "custom" : String(selectedAmount)}
          onValueChange={(value) =>
            setSelectedAmount(value === "custom" ? "custom" : Number(value))
          }
          className="grid grid-cols-3 gap-3"
        >
          {presetAmounts.map((amount) => (
            <div key={amount}>
              <RadioGroupItem
                value={String(amount)}
                id={`amount-${amount}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`amount-${amount}`}
                className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
              >
                ${amount}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex items-center gap-3">
          <RadioGroupItem
            value="custom"
            id="amount-custom"
            checked={selectedAmount === "custom"}
            onClick={() => setSelectedAmount("custom")}
            className="peer sr-only"
          />
          <Label
            htmlFor="amount-custom"
            className={`flex cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-2 font-medium transition-colors ${
              selectedAmount === "custom"
                ? "border-primary bg-primary/10 text-primary"
                : "border-muted hover:bg-accent"
            }`}
          >
            Custom
          </Label>
          {selectedAmount === "custom" && (
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <Input
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="pl-7"
                min="1"
                required={selectedAmount === "custom"}
              />
            </div>
          )}
        </div>
      </div>

      {/* Donor Info */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      {/* Dedication */}
      <div className="flex items-center space-x-2">
        <Checkbox id="dedication" />
        <Label htmlFor="dedication" className="text-sm font-normal">
          Make this donation in honor or memory of someone
        </Label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        size="lg"
        disabled={isSubmitting || actualAmount < 1}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Heart className="mr-2 h-4 w-4" />
            Donate ${actualAmount || 0}
            {isMonthly ? "/month" : ""}
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Your donation is secure and tax-deductible. You&apos;ll receive a receipt
        for your records.
      </p>
    </form>
  );
}
