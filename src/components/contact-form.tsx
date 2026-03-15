"use client";

import { sendEmail } from "@/app/actions";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result.error ?? "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-muted-foreground text-center py-4">
        Message sent! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-md mx-auto"
    >
      <input
        name="name"
        type="text"
        required
        placeholder="Name"
        className="w-full bg-transparent border-b border-border pb-2 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full bg-transparent border-b border-border pb-2 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        className="w-full bg-transparent border-b border-border pb-2 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors resize-none"
      />
      {status === "error" && (
        <p className="text-xs text-red-500">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-full rounded-md bg-foreground text-background text-sm py-2 px-4 hover:opacity-80 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
