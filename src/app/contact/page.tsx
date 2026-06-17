"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import ParticleField from "@/components/ui/ParticleField";
import { Mail, MapPin, Phone, Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "general", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2) e.name = "Name is required (min 2 chars)";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Valid email is required";
    if (!formData.subject || formData.subject.trim().length < 3) e.subject = "Subject is required (min 3 chars)";
    if (!formData.message || formData.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setStatus("success");
      setFormData({ name: "", email: "", type: "general", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-lg text-sm text-text-primary outline-none transition-all font-manrope shadow-sm focus:shadow-md ${
      errors[field] ? "border-red-400 focus:border-red-500" : "border-border-subtle focus:border-teal"
    }`;

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-16 gradient-hero overflow-hidden">
        <div className="absolute inset-0"><ParticleField color="100, 130, 180" count={20} /></div>
        <div className="container-editorial relative z-10 text-center">
          <div className="text-label mb-4">Get in Touch</div>
          <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-4">Contact</h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent mx-auto mb-4" />
          <p className="text-body text-slate max-w-2xl mx-auto text-lg">
            For research collaborations, media inquiries, or partnership opportunities.
          </p>
        </div>
      </section>

      <section className="section-padding gradient-section">
        <div className="container-editorial max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Office", text: "Genome Valley, Shameerpet\nHyderabad, Telangana\nIndia", color: "#0d7377" },
                { icon: Mail, title: "Email", text: "contact@drramupadhayaya.com", color: "#2563eb" },
                { icon: Phone, title: "Phone", text: "Available upon request", color: "#059669" },
              ].map((item, i) => (
                <SectionReveal key={item.title} direction="left" delay={i * 0.1}>
                  <GlassCard className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: item.color + "12" }}>
                        <item.icon className="w-4 h-4" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary font-manrope mb-1">{item.title}</h3>
                        <p className="text-xs text-slate font-manrope leading-relaxed whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  </GlassCard>
                </SectionReveal>
              ))}
              <SectionReveal direction="left" delay={0.3}>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="block">
                  <GlassCard className="group cursor-pointer p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 group-hover:bg-emerald/15 transition-all">
                        <MessageCircle className="w-4 h-4 text-emerald" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary font-manrope group-hover:text-teal transition-colors">WhatsApp</h3>
                        <p className="text-xs text-slate font-manrope">Quick messaging</p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionReveal direction="right">
                <GlassCard className="p-7 md:p-9" hover={false}>
                  <h2 className="heading-editorial text-2xl font-bold text-text-primary mb-6">Send a Message</h2>
                  
                  {status === "success" ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-7 h-7 text-emerald" />
                      </div>
                      <h3 className="heading-editorial text-xl text-text-primary mb-2">Message Sent Successfully</h3>
                      <p className="text-sm text-slate font-manrope mb-6">Thank you. A confirmation email has been sent to your inbox.</p>
                      <button onClick={() => setStatus("idle")} className="btn-editorial btn-outline-warm">Send Another Message</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {status === "error" && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                          <p className="text-sm text-red-700 font-manrope">{errorMsg}</p>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-label text-[9px] mb-2">Name</label>
                          <input type="text" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: "" }); }} className={inputClass("name")} placeholder="Your name" />
                          {errors.name && <p className="text-xs text-red-500 mt-1 font-manrope">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-label text-[9px] mb-2">Email</label>
                          <input type="email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: "" }); }} className={inputClass("email")} placeholder="your@email.com" />
                          {errors.email && <p className="text-xs text-red-500 mt-1 font-manrope">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-label text-[9px] mb-2">Inquiry Type</label>
                        <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className={inputClass("type")}>
                          <option value="general">General Inquiry</option>
                          <option value="research">Research Collaboration</option>
                          <option value="media">Media & Press</option>
                          <option value="partnership">Partnership</option>
                          <option value="speaking">Speaking Engagement</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-label text-[9px] mb-2">Subject</label>
                        <input type="text" value={formData.subject} onChange={(e) => { setFormData({ ...formData, subject: e.target.value }); setErrors({ ...errors, subject: "" }); }} className={inputClass("subject")} placeholder="Subject" />
                        {errors.subject && <p className="text-xs text-red-500 mt-1 font-manrope">{errors.subject}</p>}
                      </div>
                      <div>
                        <label className="block text-label text-[9px] mb-2">Message</label>
                        <textarea rows={5} value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: "" }); }} className={`${inputClass("message")} resize-none`} placeholder="Your message..." />
                        {errors.message && <p className="text-xs text-red-500 mt-1 font-manrope">{errors.message}</p>}
                      </div>
                      <button type="submit" disabled={status === "loading"} suppressHydrationWarning className="btn-editorial btn-walnut w-full justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                        {status === "loading" ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                        ) : (
                          <><Send className="w-4 h-4" /> Send Message</>
                        )}
                      </button>
                    </form>
                  )}
                </GlassCard>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
