import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { useSEO } from "../hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact NCERT Bhaiya | Get Help with NCERT & CBSE",
    description:
      "Get in touch with NCERT Bhaiya for questions about NCERT solutions, CBSE study material, or platform support. Email us at ncertbhaiya2504@gmail.com.",
    keywords:
      "contact NCERT Bhaiya, NCERT help, CBSE study help India, contact ncertbhaiya",
    canonical: "/contact",
  });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! We'll get back to you soon.");
    }, 800);
  }

  return (
    <Layout>
      <div className="min-h-screen bg-mesh-dark">
        {/* Hero */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-xs font-medium mb-6">
              <MessageSquare className="w-3 h-3" />
              We'd love to hear from you
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              data-ocid="contact.page"
            >
              Contact Us
            </h1>
            <p className="text-muted-foreground">
              Have a question, suggestion, or just want to say hi? Drop us a
              message below.
            </p>
          </div>
        </section>

        <section className="pb-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass-dark border border-border/30 rounded-2xl p-6">
                <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Get In Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-neon-purple/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-neon-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:ncertbhaiya2504@gmail.com"
                        className="text-sm text-neon-purple hover:underline break-all"
                        data-ocid="contact.link"
                      >
                        ncertbhaiya2504@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Youtube className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">YouTube</p>
                      <a
                        href="https://www.youtube.com/@Ncertbhaiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-red-400 hover:underline"
                      >
                        @Ncertbhaiya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-dark border border-border/30 rounded-2xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For inquiries, contact us at:{" "}
                  <a
                    href="mailto:ncertbhaiya2504@gmail.com"
                    className="text-neon-purple hover:underline font-medium"
                  >
                    ncertbhaiya2504@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="glass-dark border border-border/30 rounded-2xl p-8">
                <h2 className="font-bold text-xl mb-6">Send a Message</h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.modal"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50 resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full"
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
