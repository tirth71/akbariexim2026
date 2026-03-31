import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Globe,
  TrendingUp,
  ShieldCheck,
  Truck,
  Leaf,
  Building2,
  Calendar,
  Phone,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import founder from "@/assets/logo/AkbariExim-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <div className="relative bg-secondary text-secondary-foreground py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          className="text-primary font-semibold uppercase tracking-widest text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Established 2026
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-primary">AkbariExim</span>
        </motion.h1>
        <motion.p
          className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Your trusted partner in global agricultural trade. We bridge the gap
          between India's rich agricultural heritage and international markets
          with uncompromised quality.
        </motion.p>
      </div>
    </div>

    {/* Stats Bar */}
    <section className="bg-background border-y border-border py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter end={2} suffix="+" label="Years Experience" />
          <AnimatedCounter end={30} suffix="+" label="Export Countries" />
          <AnimatedCounter end={170} suffix="+" label="Happy Clients" />
          <AnimatedCounter end={1000} suffix="MT+" label="Annual Export" />
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2026, AkbariExim has grown from a small trading firm to
              one of India's leading exporters of agricultural products. Our
              journey began with a simple vision — to showcase the best of
              Indian agriculture to the world.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a team of 50+ experienced professionals and a network
              spanning 30+ countries, we ensure that every product meets
              international quality standards while maintaining competitive
              pricing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with farmers, cooperatives, and processing units
              across India to source the finest agricultural produce, ensuring
              traceability and quality at every step of the supply chain.
            </p>
          </motion.div>

          {/* Mission/Vision/Team/Standards Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To deliver premium Indian agricultural products to global markets with uncompromised quality and reliability.",
                color: "text-primary",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the most trusted and preferred name in global agricultural trade by 2030.",
                color: "text-blue-500",
              },
              {
                icon: Users,
                title: "Our Team",
                desc: "50+ professionals dedicated to quality assurance, logistics, and client satisfaction across 5 offices.",
                color: "text-amber-500",
              },
              {
                icon: Award,
                title: "Our Standards",
                desc: "APEDA, FSSAI, ISO 22000, and GlobalGAP certified operations ensuring world-class quality.",
                color: "text-emerald-500",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <item.icon className={`w-9 h-9 ${item.color} mb-3`} />
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Founder Section */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={founder}
              alt="Founder"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase text-sm">
              Founder Message
            </span>

            <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-4">
              Meet Our Founder
            </h2>

            <h3 className="text-xl font-bold text-primary">
              Mr.Harshil Akbari
            </h3>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              At AKBARI EXIM, our vision has always been to connect India's
              agricultural excellence with global markets. We believe in
              delivering quality, trust, and long-term partnerships to our
              clients worldwide.
            </p>

            <p className="text-muted-foreground mt-3 leading-relaxed">
              With years of experience in international trade, our goal is to
              ensure every product meets global standards while supporting
              farmers and sustainable practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Company Milestones
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
          {[
            {
              year: "2025",
              title: "Company Founded",
              desc: "Started operations from a small office in Mumbai with a vision to export Indian agricultural products.",
            },
            // { year: "2013", title: "Expanded to 10 Countries", desc: "Achieved export presence in UAE, Saudi Arabia, UK, and 7 other countries within 3 years." },
            {
              year: "2026",
              title: "ISO 22000 Certified",
              desc: "Received ISO 22000 certification, reinforcing our commitment to food safety standards.",
            },
            // { year: "2018", title: "500+ Client Milestone", desc: "Built a loyal client base of 500+ importers, distributors, and retailers globally." },
            {
              year: "2026",
              title: "New Processing Facility",
              desc: "Opened a state-of-the-art processing and packaging facility in Gujarat.",
            },
            {
              year: "2026",
              title: "30+ Export Countries",
              desc: "Expanded to 30+ countries across Middle East, Europe, Asia, and North America.",
            },
          ].map((m, i) => (
            <motion.div
              key={m.year}
              className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-1" />
              <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-background rounded-2xl p-5 shadow-sm border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary font-bold text-sm">
                      {m.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Advantages
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Why Choose AkbariExim?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Quality Assurance",
              desc: "Every product undergoes rigorous quality checks with APEDA, FSSAI, and ISO certifications.",
            },
            {
              icon: Truck,
              title: "Reliable Logistics",
              desc: "End-to-end logistics support with temperature-controlled shipping and on-time delivery.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "Established trade relationships in 30+ countries with local market expertise.",
            },
            {
              icon: TrendingUp,
              title: "Competitive Pricing",
              desc: "Direct sourcing from farmers ensures the most competitive prices without compromising quality.",
            },
            {
              icon: Leaf,
              title: "Sustainable Practices",
              desc: "We promote sustainable farming and eco-friendly packaging across our supply chain.",
            },
            {
              icon: Building2,
              title: "Modern Infrastructure",
              desc: "State-of-the-art processing, sorting, and packaging facilities meeting global standards.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-muted rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Trust & Compliance
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            Our Certifications
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {[
            {
              name: "APEDA",
              desc: "Agricultural Products Export Development Authority",
            },
            {
              name: "FSSAI",
              desc: "Food Safety and Standards Authority of India",
            },
            { name: "ISO 22000", desc: "Food Safety Management Systems" },
            {
              name: "GlobalGAP",
              desc: "Good Agricultural Practices Certification",
            },
            {
              name: "Phytosanitary",
              desc: "Plant Health Compliance Certificate",
            },
            { name: "BIS", desc: "Bureau of Indian Standards" },
            { name: "Spice Board", desc: "Spice Board of India Certified" },
            { name: "HACCP", desc: "Hazard Analysis Critical Control Points" },
          ].map((cert, i) => (
            <motion.div
              key={cert.name}
              className="bg-background rounded-2xl p-5 text-center border border-border hover:border-primary/30 transition-colors"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-foreground text-sm">{cert.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Export Destinations */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Global Presence
          </span>

          <h2 className="text-3xl font-extrabold text-foreground mt-2">
            We Export To <span className="text-primary">30+ Countries</span>
          </h2>
        </motion.div>

        {/* Countries Data */}
        {(() => {
          const countries = [
            { code: "ae", name: "UAE" },
            { code: "sa", name: "Saudi Arabia" },
            { code: "gb", name: "United Kingdom" },
            { code: "us", name: "United States" },
            { code: "de", name: "Germany" },
            { code: "jp", name: "Japan" },
            { code: "kr", name: "South Korea" },
            { code: "my", name: "Malaysia" },
            { code: "sg", name: "Singapore" },
            { code: "qa", name: "Qatar" },
            { code: "om", name: "Oman" },
            { code: "kw", name: "Kuwait" },
            { code: "bh", name: "Bahrain" },
            { code: "ca", name: "Canada" },
            { code: "au", name: "Australia" },
            { code: "nl", name: "Netherlands" },
            { code: "fr", name: "France" },
            { code: "iq", name: "Iraq" },
            { code: "ir", name: "Iran" },
          ];

          return (
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {countries.map((country, i) => (
                <motion.div
                  key={country.code}
                  className="flex items-center gap-2 px-4 py-2.5 bg-muted rounded-xl text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:scale-105 hover:bg-green-50 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  {/* Flag */}
                  <img
                    src={`https://flagsapi.com/${country.code.toUpperCase()}/flat/32.png`}
                    alt={country.name}
                    className="w-6 h-4 object-cover rounded-sm border"
                  />

                  {/* Name */}
                  <span>{country.name}</span>
                </motion.div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-secondary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">
            Whether you're an importer, distributor, or retailer, we'd love to
            explore how we can serve your needs with premium Indian agricultural
            products.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl border-primary/40 text-primary bg-green-800 text-white hover:bg-primary/10 h-12 text-base"
            asChild
          >
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
