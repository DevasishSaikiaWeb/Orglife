"use client";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Brand Foundation Design",
  "Content & Communication Design",
  "Animation Concept Development",
  "Digital Asset Strategy",
];

function toggle(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

function Form() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState<string[]>([]);

  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  function selectService(service: string) {
    setSelectedService((prev) => toggle(prev, service));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          organization,
          email,
          phone,
          services: selectedService,
          subject,
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback("Thanks! Your message has been sent — we’ll be in touch soon.");
      setName("");
      setOrganization("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setSelectedService([]);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 max-sm:w-full flex flex-col gap-6">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Name"
        />
        <input
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Organization name"
        />
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Email"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
          placeholder="Phone"
        />
      </div>

      <div>
        <p className="font-small-body">Select services (required) *</p>
        <div className="flex flex-wrap gap-4 mt-2">
          {services.map((service) => (
            <button
              type="button"
              onClick={() => selectService(service)}
              key={service}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 border-white/60 border-1 w-fit rounded-full ${
                selectedService.includes(service) ? "bg-[#fff8de] text-black" : ""
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border-white/60 focus:border-white border-1 outline-none h-10 px-4"
        placeholder="Subject"
      />

      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="border-white/60 focus:border-white border-1 outline-none pt-4 px-4"
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-white text-black w-40 h-12 rounded-full mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>

      {feedback && (
        <p
          className={`font-small-body ${
            status === "error" ? "text-red-400" : "text-green-400"
          }`}
          role="status"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

export default Form;
