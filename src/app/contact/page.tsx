"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import ParticleField from "@/components/ui/ParticleField";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", type: "general", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0"><ParticleField color="160, 132, 92" count={20} /></div>
        <div className="container-editorial relative z-10 text-center">
          <div className="text-label mb-4">Get in Touch</div>
          <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-4">Contact</h1>
          <p className="text-body text-slate max-w-2xl mx-auto text-lg">
            For research collaborations, media inquiries, or partnership opportunities.
          </p>
        </div>
      </section>

      <section className="section-padding gradient-section">
        <div className="container-editorial max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <SectionReveal direction="left">
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-walnut" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal font-manrope mb-1">Office</h3>
                      <p className="text-xs text-slate font-manrope leading-relaxed">Genome Valley, Shameerpet<br />Hyderabad, Telangana<br />India</p>
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>

              <SectionReveal direction="left" delay={0.1}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-walnut" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal font-manrope mb-1">Email</h3>
                      <p className="text-xs text-slate font-manrope">contact@drramupadhayaya.com</p>
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>

              <SectionReveal direction="left" delay={0.2}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-walnut" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal font-manrope mb-1">Phone</h3>
                      <p className="text-xs text-slate font-manrope">Available upon request</p>
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>

              <SectionReveal direction="left" delay={0.3}>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="block">
                  <GlassCard className="group cursor-pointer p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center shrink-0 group-hover:bg-walnut/10 transition-all">
                        <MessageCircle className="w-4 h-4 text-walnut" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-charcoal font-manrope group-hover:text-walnut transition-colors">WhatsApp</h3>
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
                <GlassCard className="p-8 md:p-10" hover={false}>
                  <h2 className="heading-editorial text-2xl font-bold text-charcoal mb-8">Send a Message</h2>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-walnut/5 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-6 h-6 text-walnut" />
                      </div>
                      <h3 className="heading-editorial text-xl text-charcoal mb-2">Message Sent</h3>
                      <p className="text-sm text-slate font-manrope">Thank you. We will respond shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-label text-[9px] mb-2">Name</label>
                          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-warm-white border border-border-subtle rounded-sm text-sm text-charcoal outline-none focus:border-walnut transition-all font-manrope shadow-sm" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-label text-[9px] mb-2">Email</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-warm-white border border-border-subtle rounded-sm text-sm text-charcoal outline-none focus:border-walnut transition-all font-manrope shadow-sm" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-label text-[9px] mb-2">Inquiry Type</label>
                        <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full px-4 py-3 bg-warm-white border border-border-subtle rounded-sm text-sm text-charcoal outline-none focus:border-walnut transition-all font-manrope shadow-sm">
                          <option value="general">General Inquiry</option>
                          <option value="research">Research Collaboration</option>
                          <option value="media">Media & Press</option>
                          <option value="partnership">Partnership</option>
                          <option value="speaking">Speaking Engagement</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-label text-[9px] mb-2">Subject</label>
                        <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 bg-warm-white border border-border-subtle rounded-sm text-sm text-charcoal outline-none focus:border-walnut transition-all font-manrope shadow-sm" placeholder="Subject" />
                      </div>
                      <div>
                        <label className="block text-label text-[9px] mb-2">Message</label>
                        <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-warm-white border border-border-subtle rounded-sm text-sm text-charcoal outline-none focus:border-walnut transition-all font-manrope resize-none shadow-sm" placeholder="Your message..." />
                      </div>
                      <button type="submit" className="btn-editorial btn-walnut w-full justify-center cursor-pointer">
                        <Send className="w-4 h-4" /> Send Message
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
