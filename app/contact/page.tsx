import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => alert("Message sent!"))
      .catch((err) => console.error(err));
  };

  return (
    <section className="container mx-auto py-12 pt-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="SIDDARTHA NANUVALA"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}