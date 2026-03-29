"use client";

import { useEffect, useRef, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  city: string;
  moveDate: string;
  homeSize: string;
  truckSize: string;
  mileage: string;
  stairsInfo: string;
  disassembly: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  city: "",
  moveDate: "",
  homeSize: "",
  truckSize: "",
  mileage: "",
  stairsInfo: "",
  disassembly: "",
  details: "",
};

const hasValue = (value: string) => value.trim().length > 0;

const validate = (state: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (!hasValue(state.name)) {
    errors.name = "Please add your full name.";
  }
  if (!hasValue(state.phone)) {
    errors.phone = "Please add a phone number.";
  } else if (!/^[0-9()+\-\s]{7,}$/.test(state.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!hasValue(state.city)) {
    errors.city = "Please add your current city.";
  }
  if (!hasValue(state.moveDate)) {
    errors.moveDate = "Please add your move date.";
  }
  if (!hasValue(state.details)) {
    errors.details = "Tell us a bit about the move.";
  }

  return errors;
};

export default function QuoteForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const showToast = (nextMessage: string) => {
    setToastMessage(nextMessage);
    setToastVisible(true);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 4000);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    const nextErrors = validate(formState);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thanks! We’ll be in touch shortly.");
      showToast("Email sent. We’ll be in touch shortly.");
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t send your request. Please try again."
      );
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
      <div>
        <input
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm placeholder:text-sm ${
            errors.name
              ? "border-red-400"
              : "border-[color:var(--brand-ember)]/20"
          }`}
          placeholder="Full name"
          value={formState.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "error-name" : undefined}
        />
        {errors.name ? (
          <p id="error-name" className="mt-2 text-sm text-red-600">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <input
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm placeholder:text-sm ${
            errors.phone
              ? "border-red-400"
              : "border-[color:var(--brand-ember)]/20"
          }`}
          placeholder="Phone number"
          value={formState.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "error-phone" : undefined}
        />
        {errors.phone ? (
          <p id="error-phone" className="mt-2 text-sm text-red-600">
            {errors.phone}
          </p>
        ) : null}
      </div>
      <div>
        <input
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm placeholder:text-sm ${
            errors.city
              ? "border-red-400"
              : "border-[color:var(--brand-ember)]/20"
          }`}
          placeholder="Current city"
          value={formState.city}
          onChange={(event) => updateField("city", event.target.value)}
          aria-invalid={Boolean(errors.city)}
          aria-describedby={errors.city ? "error-city" : undefined}
        />
        {errors.city ? (
          <p id="error-city" className="mt-2 text-sm text-red-600">
            {errors.city}
          </p>
        ) : null}
      </div>
      <div>
        <input
          type="date"
          className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm placeholder:text-sm ${
            errors.moveDate
              ? "border-red-400"
              : "border-[color:var(--brand-ember)]/20"
          }`}
          value={formState.moveDate}
          onChange={(event) => updateField("moveDate", event.target.value)}
          aria-invalid={Boolean(errors.moveDate)}
          aria-describedby={errors.moveDate ? "error-date" : undefined}
        />
        {errors.moveDate ? (
          <p id="error-date" className="mt-2 text-sm text-red-600">
            {errors.moveDate}
          </p>
        ) : null}
      </div>
      <div>
        <textarea
          className={`min-h-[120px] w-full rounded-2xl border bg-white px-4 py-3 text-sm placeholder:text-sm ${
            errors.details
              ? "border-red-400"
              : "border-[color:var(--brand-ember)]/20"
          }`}
          placeholder="Describe your move"
          value={formState.details}
          onChange={(event) => updateField("details", event.target.value)}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "error-details" : undefined}
        />
        {errors.details ? (
          <p id="error-details" className="mt-2 text-sm text-red-600">
            {errors.details}
          </p>
        ) : null}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            className="w-full rounded-2xl border border-[color:var(--brand-ember)]/20 bg-white px-4 py-3 text-sm placeholder:text-sm"
            placeholder="Home size (e.g., 2 bed / 1,200 sq ft)"
            value={formState.homeSize}
            onChange={(event) => updateField("homeSize", event.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full rounded-2xl border border-[color:var(--brand-ember)]/20 bg-white px-4 py-3 text-sm placeholder:text-sm"
            placeholder="Truck size needed (if known)"
            value={formState.truckSize}
            onChange={(event) => updateField("truckSize", event.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            className="w-full rounded-2xl border border-[color:var(--brand-ember)]/20 bg-white px-4 py-3 text-sm placeholder:text-sm"
            placeholder="Mileage / distance"
            value={formState.mileage}
            onChange={(event) => updateField("mileage", event.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full rounded-2xl border border-[color:var(--brand-ember)]/20 bg-white px-4 py-3 text-sm placeholder:text-sm"
            placeholder="Stairs / elevator info"
            value={formState.stairsInfo}
            onChange={(event) => updateField("stairsInfo", event.target.value)}
          />
        </div>
      </div>
      <div>
        <input
          className="w-full rounded-2xl border border-[color:var(--brand-ember)]/20 bg-white px-4 py-3 text-sm placeholder:text-sm"
          placeholder="Disassembly / assembly needed?"
          value={formState.disassembly}
          onChange={(event) => updateField("disassembly", event.target.value)}
        />
      </div>
      <button
        className="cta-button rounded-full px-6 py-3 text-sm font-semibold"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Submit request"}
      </button>
      {message ? (
        <p
          className={`text-xs ${
            status === "success" ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      ) : (
        <p className="text-xs text-[color:var(--muted)]">
          Prefer to talk? Call 334 912 2747.
        </p>
      )}
      <div
        className={`pointer-events-none fixed left-1/2 top-6 z-50 w-[90%] max-w-[360px] -translate-x-1/2 rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-200 ${
          toastVisible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </form>
  );
}
