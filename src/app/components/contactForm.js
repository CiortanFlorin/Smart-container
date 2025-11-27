"use client";

import { useState } from "react";

export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      human: e.target.human.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!data.success) {
      setError(data.error || "A apărut o eroare. Te rugăm încearcă din nou.");
      return;
    }

    // SUCCESS
    setSuccess("Mesajul a fost trimis cu succes! Te vom contacta în curând.");
    e.target.reset();

    // Remove success message after 5s
    setTimeout(() => setSuccess(""), 5000);
  };

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="mx-auto px-4 text-center">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nume"
            required
            className="border p-3 rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="border p-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Mesaj"
            rows="5"
            required
            className="border p-3 rounded-lg"
          ></textarea>

          {/* HUMAN VERIFICATION */}
          <input
            name="human"
            type="text"
            placeholder="Cât face 3 + 2?"
            required
            className="border p-3 rounded-lg"
          />

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-600 font-medium -mt-2">{error}</p>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-600 font-medium -mt-2">{success}</p>
          )}

          <button
            type="submit"
            className="bg-(--color-accent) text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Trimite mesajul
          </button>
        </form>
      </div>
    </section>
  );
}
