import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Video,
  FileText,
  ShieldCheck,
  Calendar,
  Sparkles
} from "lucide-react";

export default function Payment() {
  return (
    <div className="min-h-screen bg-background relative pb-24">
      <PageHero
        title="Consultation Details"
        subtitle="Review the details of your professional consultation before proceeding to secure payment."
      />

      <div className="max-w-[1100px] mx-auto px-6 mt-14">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left info column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-7">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-blue-100">
              <div className="flex items-center gap-4 mb-7 pb-7 border-b border-blue-100">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-2xl font-heading font-black text-foreground tracking-tight">Expert Strategic Consultation</h2>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Book a 1-on-1 strategic consultation session with our senior advisors. This session is designed to address your specific corporate challenges, human capital planning, or industrial relations queries.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 hover:border-primary/20 hover:shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">45-Minute Session</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive discussion block dedicated entirely to your specific needs.</p>
                </div>

                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 hover:border-primary/20 hover:shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-3">
                    <Video className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">Virtual Meeting</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Conducted via secure video conference or direct audio call based on your preference.</p>
                </div>

                <div className="sm:col-span-2 p-5 rounded-xl bg-blue-50/60 border border-blue-100 hover:border-primary/20 hover:shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base mb-1">Actionable Summary</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Receive a detailed follow-up document outlining key strategies discussed and recommended next steps.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-base">
                  <Calendar className="w-5 h-5 text-primary" />
                  What to prepare:
                </h4>
                <ul className="space-y-3">
                  {["Brief overview of your current challenges", "Specific goals you want to achieve", "Any relevant background documentation"].map((prep, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-white border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="pt-0.5">{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Pricing Column */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 sticky top-32">
              <h3 className="text-xs font-bold mb-6 uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Scan to Pay
              </h3>

              <div className="flex justify-center mb-8">
                <div className="w-48 h-48 border-4 border-blue-100 rounded-2xl p-2 bg-white flex items-center justify-center">
                  {/* Generic QR placeholder or actual path if provided later */}
                  <img src="/qr.png" alt="Payment QR Code" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" }} />
                </div>
              </div>


              <div className="flex items-center gap-2 text-[11px] font-bold text-primary mb-7 justify-center bg-primary/5 py-3 rounded-xl border border-primary/15 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Secure UPI Payment
              </div>

              <p className="text-center text-[10px] text-muted-foreground mt-5 uppercase tracking-[0.2em] font-bold">
                Terms & conditions apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
