"use client";

import React from "react"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  CreditCard,
  Building,
  Calendar,
  Zap,
  Check,
  ChevronRight,
  Mail,
  User,
  Phone,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DonationTier {
  name: string;
  amount: number;
  description: string;
  featured?: boolean;
}

interface InteractiveDonationFormProps {
  tiers: DonationTier[];
}

const presetAmounts = [25, 50, 100, 250, 500, 1000];

export function InteractiveDonationForm({
  tiers,
}: InteractiveDonationFormProps) {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState(1);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const currentAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const getImpactMessage = () => {
    if (!currentAmount) return "";
    if (currentAmount < 25) return "Every dollar counts!";
    if (currentAmount < 50) return "Provides meals for a family";
    if (currentAmount < 100) return "Supplies for a student";
    if (currentAmount < 250) return "One month of education";
    if (currentAmount < 500) return "Healthcare for 10 women";
    if (currentAmount < 1000) return "Emergency assistance";
    return "Life-changing impact!";
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary"
        >
          <Check className="h-10 w-10 text-primary-foreground" />
        </motion.div>
        <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
          Thank You for Your Generosity!
        </h3>
        <p className="mb-6 text-muted-foreground">
          Your {donationType === "monthly" ? "monthly " : ""}donation of $
          {currentAmount} will make a real difference in {"someone's"} life.
        </p>
        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to {formData.email}
        </p>
        <Button
          onClick={() => {
            setShowSuccess(false);
            setStep(1);
            setSelectedAmount(100);
            setCustomAmount("");
            setFormData({ firstName: "", lastName: "", email: "", phone: "" });
          }}
          className="mt-6 bg-primary hover:bg-primary/90"
        >
          Make Another Donation
        </Button>
      </motion.div>
    );
  }

  return (
    <Card className="overflow-hidden border-border/50 shadow-xl">
      {/* Progress Steps */}
      <div className="border-b border-border/50 bg-muted/30 px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {step > s ? <Check className="h-4 w-4" /> : s}
              </div>
              <span
                className={cn(
                  "hidden text-sm font-medium sm:inline",
                  step >= s ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {s === 1 ? "Amount" : "Details"}
              </span>
              {s < 2 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>

      <CardContent className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Donation Type Toggle */}
              <div className="flex justify-center">
                <div className="inline-flex rounded-xl border border-border/50 bg-muted/30 p-1">
                  <button
                    type="button"
                    onClick={() => setDonationType("one-time")}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all",
                      donationType === "one-time"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Zap className="h-4 w-4" />
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("monthly")}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all",
                      donationType === "monthly"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Calendar className="h-4 w-4" />
                    Monthly
                  </button>
                </div>
              </div>

              {donationType === "monthly" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-accent/10 p-4 text-center"
                >
                  <Sparkles className="mx-auto mb-2 h-5 w-5 text-accent" />
                  <p className="text-sm font-medium text-foreground">
                    Monthly giving has 12x the impact!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Help us plan ahead and create lasting change
                  </p>
                </motion.div>
              )}

              {/* Amount Selection */}
              <div>
                <Label className="mb-4 block text-center text-base font-semibold">
                  Select Amount
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={cn(
                        "relative flex h-16 items-center justify-center rounded-xl border-2 text-lg font-bold transition-all",
                        selectedAmount === amount
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/50 bg-card text-foreground hover:border-primary/50"
                      )}
                    >
                      ${amount}
                      {selectedAmount === amount && (
                        <motion.div
                          layoutId="selected-amount"
                          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
                        >
                          <Check className="h-3 w-3" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <Label
                  htmlFor="custom-amount"
                  className="mb-2 block text-sm font-medium"
                >
                  Or enter custom amount
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="h-14 pl-12 text-lg"
                    min="1"
                  />
                </div>
              </div>

              {/* Impact Message */}
              {currentAmount && currentAmount > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center"
                >
                  <Heart className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-medium text-foreground">
                    ${currentAmount}
                    {donationType === "monthly" ? "/month" : ""}{" "}
                    <span className="text-primary">{getImpactMessage()}</span>
                  </p>
                </motion.div>
              )}

              <Button
                onClick={() => setStep(2)}
                disabled={!currentAmount || currentAmount <= 0}
                className="w-full bg-primary py-6 text-lg hover:bg-primary/90"
              >
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Summary */}
              <div className="rounded-xl bg-muted/50 p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {donationType === "monthly" ? "Monthly" : "One-time"} Donation
                </p>
                <p className="text-3xl font-bold text-primary">
                  ${currentAmount}
                  {donationType === "monthly" && (
                    <span className="text-lg font-normal">/month</span>
                  )}
                </p>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="firstName"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="lastName"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <div className="relative mt-1.5">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="anonymous"
                    checked={isAnonymous}
                    onCheckedChange={(checked) =>
                      setIsAnonymous(checked as boolean)
                    }
                  />
                  <Label htmlFor="anonymous" className="text-sm cursor-pointer">
                    Make this donation anonymous
                  </Label>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <Label className="mb-3 block">Payment Method</Label>
                <RadioGroup defaultValue="card" className="grid gap-3 sm:grid-cols-2">
                  <Label
                    htmlFor="card"
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                  >
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Credit Card</span>
                  </Label>
                  <Label
                    htmlFor="bank"
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/50 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                  >
                    <RadioGroupItem value="bank" id="bank" />
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Bank Transfer</span>
                  </Label>
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-transparent"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-4 w-4" />
                      Donate ${currentAmount}
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Your donation is secure and encrypted. Tax receipts will be
                emailed to you.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
