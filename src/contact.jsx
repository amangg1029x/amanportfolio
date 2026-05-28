import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// ─── Replace these with your actual EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = "service_cng3cj4";
const EMAILJS_TEMPLATE_ID = "template_y8x2ljq";
const EMAILJS_PUBLIC_KEY  = "EDNEXvt0m2Rxzm8_l";
// ──────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.purpose.trim())
      newErrors.purpose = "Purpose is required.";

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          purpose:      formData.purpose,
          message:      formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent! I'll get back to you soon 🚀", {
        style: {
          background: "#0f172a",
          color: "#fff",
          border: "1px solid #84cc16",
        },
        iconTheme: { primary: "#84cc16", secondary: "#0f172a" },
      });

      // Reset form
      setFormData({ name: "", email: "", purpose: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#0f172a",
          color: "#fff",
          border: "1px solid #ef4444",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // ── Field helper ────────────────────────────────────────────────────────────
  const inputBase =
    "text-white w-full p-4 border rounded-2xl bg-transparent outline-none transition-all duration-200 placeholder-gray-500 focus:border-lime-400 focus:ring-1 focus:ring-lime-400";

  const errorBorder = "border-red-500";
  const normalBorder = "border-white/30";

  return (
    <section id="contact" className="py-16 px-4 sm:px-10">
      <Toaster position="top-right" reverseOrder={false} />

      <p className="flex bg-gradient-to-r from-pink-600 to-white/20 w-max bg-clip-text text-transparent text-5xl px-2 justify-self-center mb-8">
        Contact
      </p>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl border border-white/20 rounded-2xl bg-slate-950 p-8 shadow-xl shadow-black/50">
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-1">
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
              />
              {errors.name && (
                <span className="text-red-400 text-sm pl-2">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBase} ${errors.email ? errorBorder : normalBorder}`}
              />
              {errors.email && (
                <span className="text-red-400 text-sm pl-2">{errors.email}</span>
              )}
            </div>

            {/* Purpose */}
            <div className="flex flex-col gap-1">
              <input
                id="contact-purpose"
                type="text"
                name="purpose"
                placeholder="Purpose (e.g. Job Opportunity, Collaboration)"
                value={formData.purpose}
                onChange={handleChange}
                className={`${inputBase} ${errors.purpose ? errorBorder : normalBorder}`}
              />
              {errors.purpose && (
                <span className="text-red-400 text-sm pl-2">{errors.purpose}</span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputBase} resize-none ${errors.message ? errorBorder : normalBorder}`}
              />
              {errors.message && (
                <span className="text-red-400 text-sm pl-2">{errors.message}</span>
              )}
            </div>

            {/* Submit */}
            <button
              id="contact-submit"
              type="submit"
              disabled={loading}
              className="text-white text-lg font-semibold bg-lime-500 hover:bg-lime-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 py-4 px-10 rounded-full self-center mt-2 min-w-40 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
