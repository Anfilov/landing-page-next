"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/x2kd54cbwa7n8glv1wpbz7eacuqp77wp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-12 rounded-xl border border-gold-400/20 bg-white/5 px-8 py-12 text-center backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D6BD68" strokeWidth="2" className="h-6 w-6">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[20px] font-semibold tracking-tight text-white">
          Děkujeme, ozveme se brzy.
        </p>
        <p className="mt-2 text-[14px] text-white/35">
          Vaši zprávu jsme přijali.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-lg text-left">
      <div className="space-y-5">
        {/* Jméno */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/30"
          >
            Jméno
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-gold-400/40 focus:ring-1 focus:ring-gold-400/20"
            placeholder="Vaše jméno"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/30"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-gold-400/40 focus:ring-1 focus:ring-gold-400/20"
            placeholder="vas@email.cz"
          />
        </div>

        {/* Zpráva */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-white/30"
          >
            Zpráva
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-gold-400/40 focus:ring-1 focus:ring-gold-400/20"
            placeholder="Popište svůj projekt..."
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary text-[15px] disabled:opacity-50"
          style={{ color: "#1A1A1A" }}
        >
          {status === "sending" ? "Odesílám..." : "Odeslat"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 text-center text-[13px] text-red-400">
          Nepodařilo se odeslat. Zkuste to prosím znovu.
        </p>
      )}
    </form>
  );
}
