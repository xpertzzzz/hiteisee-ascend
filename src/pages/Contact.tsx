import { PageHero } from "@/components/shared/PageHero";
import { Mail, Phone, Building, ArrowRight, MessageSquare, Send } from "lucide-react";
import { addContact } from "@/lib/adminData";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    addContact({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      subject: "New Website Inquiry",
      message
    });

    const text = `New Inquiry:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919937509666?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    toast.success('Inquiry submitted successfully! Redirecting to WhatsApp...');
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <PageHero
        title="Start a Conversation"
        subtitle="Connect with our experts to discuss how we can help transform your business and create sustainable competitive advantage."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15">
                <MessageSquare className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80">Get In Touch</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-5 tracking-tight leading-[1.1]">
                Let's shape the{" "}
                <span className="text-primary">future together.</span>
              </h3>

              <p className="text-base text-muted-foreground mb-10 leading-relaxed border-l-2 border-primary/25 pl-4">
                Whether you're looking for strategic HR consulting or comprehensive industrial relations management, our team is ready to deliver complete people solutions.
              </p>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4 bg-white p-5 rounded-2xl border border-blue-100 hover:border-primary/20 hover:shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-foreground mb-1">Corporate Headquarters</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      2/6, Kanchanjanga VIP Enclaves, Chandrasekharpur, Bhubaneswar - 751016, Odisha, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 bg-white p-5 rounded-2xl border border-blue-100 hover:border-primary/20 hover:shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-foreground mb-1">Direct Lines</h4>
                    <a href="tel:+919937509666" className="text-sm text-muted-foreground hover:text-primary block">+91 9937509666</a>
                    <a href="tel:06742744700" className="text-sm text-muted-foreground hover:text-primary block">0674-2744700</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 bg-white p-5 rounded-2xl border border-blue-100 hover:border-primary/20 hover:shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-foreground mb-1">Electronic Mail</h4>
                    <a href="mailto:hiteiseeconsulting@gmail.com" className="text-sm text-muted-foreground hover:text-primary block">hiteiseeconsulting@gmail.com</a>
                    <a href="mailto:info@hiteisee.in" className="text-sm text-muted-foreground hover:text-primary block">info@hiteisee.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-blue-100 p-8 md:p-10 rounded-2xl shadow-sm">
                <div className="mb-7 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Send an Inquiry</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-primary px-4 pt-6 pb-2 outline-none rounded-xl peer"
                        placeholder=" "
                      />
                      <label htmlFor="firstName" className="absolute left-4 top-4 text-sm font-semibold text-muted-foreground transition-all duration-200 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                        First Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-primary px-4 pt-6 pb-2 outline-none rounded-xl peer"
                        placeholder=" "
                      />
                      <label htmlFor="lastName" className="absolute left-4 top-4 text-sm font-semibold text-muted-foreground transition-all duration-200 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                        Last Name
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-blue-50/50 border border-blue-100 focus:border-primary px-4 pt-6 pb-2 outline-none rounded-xl peer"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="absolute left-4 top-4 text-sm font-semibold text-muted-foreground transition-all duration-200 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                      Corporate Email
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-blue-50/50 border border-blue-100 focus:border-primary px-4 pt-6 pb-2 outline-none rounded-xl peer"
                      placeholder=" "
                    />
                    <label htmlFor="phone" className="absolute left-4 top-4 text-sm font-semibold text-muted-foreground transition-all duration-200 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                      Phone Number
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-blue-50/50 border border-blue-100 focus:border-primary px-4 pt-6 pb-2 outline-none rounded-xl resize-none peer"
                      placeholder=" "
                    />
                    <label htmlFor="message" className="absolute left-4 top-4 text-sm font-semibold text-muted-foreground transition-all duration-200 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                      Write your message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 shadow-md shadow-primary/20"
                  >
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
