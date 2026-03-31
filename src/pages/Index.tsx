import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Shield, Truck, Award, Star, ChevronLeft, ChevronRight, CheckCircle, Leaf, Users, Package, MapPin, Phone, MessageCircle, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { categories } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";
import ae from "@/assets/flags/ae.svg";
import sa from "@/assets/flags/sa.svg";
import gb from "@/assets/flags/gb.svg";
import us from "@/assets/flags/us.svg";
import de from "@/assets/flags/de.svg";
import jp from "@/assets/flags/jp.svg";
import kr from "@/assets/flags/kr.svg";
import my from "@/assets/flags/my.svg";
import sg from "@/assets/flags/sg.svg";
import qa from "@/assets/flags/qa.svg";
import om from "@/assets/flags/om.svg";
import kw from "@/assets/flags/kw.svg";
import bh from "@/assets/flags/bh.svg";
import ca from "@/assets/flags/ca.svg";
import au from "@/assets/flags/au.svg";
import nl from "@/assets/flags/nl.svg";
import globalTrade from "@/assets/global-trade-D7MRtin6.jpg";
import qualityControl from "@/assets/quality-control-CSJAzth2.jpg";
import certificatesImage from "@/assets/certifications-BNwBW07K.jpg";
import global2 from "@/assets/global-2.jpg";
import iso from "@/assets/ISO.png";
import fssai from "@/assets/FSSAI_logo.png";
import apeda from "@/assets/apeda.png";
import usda from "@/assets/USDA_logo.png";
import msme from "@/assets/msme.png";
import spiceBoard from "@/assets/Spices_Board_of_India_Logo.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const certificates = [iso, fssai, apeda, usda, msme, spiceBoard];

const testimonials = [
  { name: "Ahmed Al-Rashid", company: "Gulf Trading Co., UAE", text: "Exceptional quality rice and spices. GlobalExim has been our trusted supplier for over 3 years. Their attention to packaging and timely delivery is remarkable.", rating: 5 },
  { name: "Sarah Chen", company: "Asia Pacific Foods, Singapore", text: "Their consistent quality and timely delivery make them our go-to partner for Indian agricultural products. The team is very responsive and professional.", rating: 5 },
  { name: "James Wilson", company: "UK Fresh Imports, London", text: "The freshness and packaging quality of their vegetables is unmatched. We've increased our order volume by 3x since partnering with them.", rating: 5 },
  { name: "Yuki Tanaka", company: "Tokyo Spice House, Japan", text: "Best quality turmeric and spices we've sourced from India. GlobalExim maintains the highest standards consistently across every shipment.", rating: 5 },
];

const exportCountries = [
  { flag: ae, name: "UAE" },
  { flag: sa, name: "Saudi Arabia" },
  { flag: gb, name: "UK" },
  { flag: us, name: "USA" },
  { flag: de, name: "Germany" },
  { flag: jp, name: "Japan" },
  { flag: kr, name: "South Korea" },
  { flag: my, name: "Malaysia" },
  { flag: sg, name: "Singapore" },
  { flag: qa, name: "Qatar" },
  { flag: om, name: "Oman" },
  { flag: kw, name: "Kuwait" },
  { flag: bh, name: "Bahrain" },
  { flag: ca, name: "Canada" },
  { flag: au, name: "Australia" },
  { flag: nl, name: "Netherlands" },
];

const processSteps = [
  { icon: Leaf, title: "Farm Sourcing", desc: "Direct sourcing from certified farms across India's prime agricultural regions." },
  { icon: CheckCircle, title: "Quality Testing", desc: "Rigorous multi-stage quality checks at NABL-accredited labs." },
  { icon: Package, title: "Processing & Packing", desc: "State-of-the-art processing with export-grade packaging standards." },
  { icon: Truck, title: "Global Shipping", desc: "Temperature-controlled logistics with real-time tracking to your port." },
];

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
 
  const heroImages = [heroBg, global2];
  const [heroIndex, setHeroIndex] = useState(0);

  const [testimonialIdx, setTestimonialIdx] = useState(0);
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused || testimonials.length === 0) return;

  const interval = setInterval(() => {
    setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, [isPaused, testimonials.length]);

const current = testimonials[testimonialIdx];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden p-5">
        
        <div className="absolute inset-0 overflow-hidden">

          {heroImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="absolute w-full h-full object-cover"
              animate={{ opacity: heroIndex === i ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          ))}

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>

        </div>
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Globe className="w-4 h-4" /> Trusted Global Export Partner Since 2026
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary-foreground leading-tight">
              Premium Indian <br />
              <span className="text-primary">Agricultural Products</span><br />
              For The World
            </h1>
            <motion.p
              className="text-lg text-secondary-foreground/80 mt-6 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              From the fertile lands of India to your doorstep — we export the finest vegetables, fruits, spices, rice, and oil seeds to 30+ countries with uncompromised quality.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button size="lg" className="gradient-primary text-primary-foreground rounded-xl border-0 text-base h-12" asChild>
                <Link to="/products">Explore Products <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12"
                onClick={() => setQuoteOpen(true)}
              >
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12"
                asChild
              >
               
                <a
                  href="https://wa.me/919316490925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {["APEDA Certified", "ISO 22000", "FSSAI Approved", "GlobalGAP"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-secondary-foreground/60 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" /> {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-14 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={30} suffix="+" label="Countries Served" />
            <AnimatedCounter end={170} suffix="+" label="Products Exported" />
            <AnimatedCounter end={2} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Why Choose <span className="text-primary">AkbariExim</span></h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">We combine quality, reliability, and global reach to deliver the best agricultural products.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Certified Quality", desc: "APEDA, FSSAI, ISO certified products meeting international food safety standards." },
              { icon: Truck, title: "Global Logistics", desc: "Seamless shipping to 30+ countries with temperature-controlled delivery." },
              { icon: Award, title: "Premium Grade", desc: "Only the finest grade products from India's top agricultural regions." },
              { icon: Globe, title: "Worldwide Reach", desc: "Serving importers, distributors, and retailers across 5 continents." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-background border border-border rounded-2xl p-7 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Process */}
      {/* <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Our Export <span className="text-primary">Process</span></h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">A streamlined, transparent process from farm to your warehouse.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative"> */}
      {/* Connecting line */}
      {/* <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20" />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-primary font-bold text-sm">Step {i + 1}</span>
                <h3 className="text-lg font-bold text-foreground mt-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      <section className="py-14 bg-background">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Proven Global Trade <span className="text-primary">Excellence</span>
            </h2>

            <p className="text-muted-foreground max-w-lg leading-relaxed text-lg">
              With over 50 successful shipments across 30+ countries...
            </p>

            <div className="flex gap-6 pt-4 justify-center items-center">
              <div className="bg-muted border border-border rounded-xl px-8 py-5 shadow-sm w-full">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>

              <div className="bg-[#F9F2EA] border border-border rounded-xl px-8 py-5 shadow-sm w-full">
                <p className="text-3xl font-bold text-[#CF8B39]">100+</p>
                <p className="text-sm text-muted-foreground">Active Partners</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={globalTrade}
              alt="Global Trade"
              className="rounded-2xl shadow-xl object-cover w-full h-[380px]"
            />
          </motion.div>

        </div>
      </section>




      <section className="py-12 bg-muted">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Our 6-Step <span className="text-primary">Quality Process</span>
            </h2>

            <p className="text-muted-foreground mt-3 max-w-xl">
              From sourcing to delivery, every step ensures consistency,
              compliance, and customer satisfaction.
            </p>

            {/* STEPS */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
              {[
                {
                  title: "Source & Verify",
                  desc: "Partner with certified farms and yards. Verify credentials and quality standards."
                },
                {
                  title: "Inspect & Grade",
                  desc: "Third-party inspection and grading according to international standards."
                },
                {
                  title: "Process & Package",
                  desc: "Custom processing, packaging, and labeling as per buyer specifications."
                },
                {
                  title: "Document & Certify",
                  desc: "Complete export documentation including COO, phytosanitary, and test certificates."
                },
                {
                  title: "Ship & Track",
                  desc: "Coordinate with trusted carriers and provide real-time tracking updates."
                },
                {
                  title: "Deliver & Support",
                  desc: "Ensure smooth customs clearance and provide post-delivery support."
                }
              ].map((step, i) => (

                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="flex gap-4 pb-6"
                >
                  {/* NUMBER */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                    {i + 1}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg relative"
          >
            <img
              src={qualityControl}
              alt="Quality Testing"
              className="w-full h-full object-cover"
            />

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-5 left-5 bg-white rounded-xl shadow-md px-4 py-3 text-sm"
            >
              <p className="font-semibold text-primary">
                ISO Quality Certified
              </p>
              <p className="text-muted-foreground text-xs">
                ISO 9001:2015 certified processes ensuring consistent quality
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>



      {/* Featured Categories - Show all */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Export</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Our Product <span className="text-primary">Categories</span></h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Premium agricultural products sourced directly from India's finest farms.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categories.slice(0, 3).map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to="/products" className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-secondary-foreground">{cat.name}</h3>
                      <p className="text-xs text-secondary-foreground/70 mt-0.5">{cat.products.length} products available</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Button size="lg" className="gradient-primary text-primary-foreground rounded-xl border-0" asChild>
              <Link to="/products">View All Products <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Exporting To <span className="text-primary">30+ Countries</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Our products reach customers across the Middle East, Europe, Asia, and the Americas.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {exportCountries.map((country, i) => (
              <motion.div
                key={country.name}
                className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-xl shadow-sm border border-border hover:shadow-md hover:scale-105 transition-all"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-6 h-4 object-cover rounded-sm border"
                />

                <span className="text-sm font-medium text-foreground">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-16 bg-background overflow-hidden px-8">

        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase text-sm tracking-wider">
            Certification Approval
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications & Compliance Logos
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10"></div>

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
          >
            {[...certificates, ...certificates].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center 
          bg-muted border border-border 
          rounded-xl shadow-sm
          px-8 py-6
          min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="certificate"
                  className="h-10 md:h-12 object-contain"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </section>

      

      {/* Testimonials */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">What Our <span className="text-primary">Clients Say</span></h2>
          </motion.div>
          <div className="max-w-2xl mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                className="bg-muted rounded-2xl p-10 text-center"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground text-lg italic leading-relaxed mb-6">"{testimonials[testimonialIdx].text}"</p>
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold text-lg">{testimonials[testimonialIdx].name[0]}</span>
                </div>
                <p className="font-bold text-foreground">{testimonials[testimonialIdx].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[testimonialIdx].company}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === testimonialIdx ? "bg-primary w-6" : "bg-border"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

{/* Video Banner Section */}
<section className="w-full py-16 bg-background">

  {/* Heading */}
  <div className="text-center mb-10 px-6">
    <p className="text-primary font-semibold uppercase tracking-wider text-sm">
      Global Rice Export
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
      How Important is Rice?
    </h2>
  </div>

  {/* Video Block */}
  <div className="w-full px-6 md:px-16">

    <div className="
      relative w-full
      h-[220px]
      sm:h-[300px]
      md:h-[380px]
      lg:h-[420px]
      xl:h-[450px]
      rounded-2xl
      overflow-hidden
      shadow-xl
    ">

      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/BcXRKnYfPwY"
        title="Rice Export Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

    </div>

  </div>

</section>

      <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Client Feedback
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </motion.div>

        {/* SLIDER */}
        <div
          className="max-w-2xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIdx}
              className="bg-muted rounded-2xl p-10 text-center shadow-lg"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >

              {/* ⭐ STARS */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: current?.rating || 0 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-foreground text-lg italic leading-relaxed mb-6">
                "{current?.text}"
              </p>

              {/* AVATAR */}
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">
                  {current?.name?.[0]}
                </span>
              </div>

              {/* NAME */}
              <p className="font-bold text-foreground">{current?.name}</p>

              {/* COMPANY */}
              <p className="text-sm text-muted-foreground">
                {current?.company}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-8">

            {/* PREV */}
            <button
              onClick={() =>
                setTestimonialIdx((p) =>
                  (p - 1 + testimonials.length) % testimonials.length
                )
              }
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === testimonialIdx
                      ? "bg-primary w-6"
                      : "bg-border w-2.5"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={() =>
                setTestimonialIdx((p) => (p + 1) % testimonials.length)
              }
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>
    </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary-foreground">Ready to Source <span className="text-primary">Premium Products?</span></h2>
            <p className="text-secondary-foreground/70 mt-4 max-w-lg mx-auto text-lg">Get in touch with our team for competitive pricing, reliable supply, and world-class quality.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="gradient-primary text-primary-foreground rounded-xl border-0 h-12 text-base" onClick={() => setQuoteOpen(true)}>
                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12 text-base" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-primary/40 text-primary hover:bg-primary/10 h-12 text-base" asChild>
                <a href="tel:+919316490925" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteFormDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
};

export default Index;
