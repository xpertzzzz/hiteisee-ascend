import { PageHero } from "@/components/shared/PageHero";
import { Mail, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero 
        title="Career at Hiteisee" 
        subtitle="Join our team of passionate professionals dedicated to transforming businesses and fostering sustainable growth." 
        theme="career"
      />

      <section className="py-12 bg-background">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-blue-100 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
              <Briefcase className="w-6 h-6" />
            </div>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3 tracking-tight">
              Didn't Find Your <br/>
              <span className="text-primary">Desired Role?</span>
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
              Don't worry. At Hiteisee, we are always on the lookout for passionate, talented individuals who share our commitment to sustainable business transformation and innovation. While there may not be an open position that matches your specific skills or career goals at this moment, we encourage you to stay connected with us.
            </p>

            <a
              href="mailto:career@hiteisee.in"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary/90 shadow-md shadow-primary/20"
            >
              <Mail className="w-3.5 h-3.5" />
              Send Application via Email
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
