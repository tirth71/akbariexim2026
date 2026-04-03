import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, FileText, Package, Clock } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";
// const ContactForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     country: "",
//     product: "",
//     inquiry: "",
//     message: "",
//   });



const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    inquiry: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill required fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_pid1a6q",
        "template_nh5a1i6",
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          country: form.country,
          product: form.product,
          inquiry: form.inquiry,
          message: form.message,
        },
        "h4poJxYk3BqH5S9a_"
      )
      .then(() => {
        toast.success("Inquiry sent successfully!");

        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          product: "",
          inquiry: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send email");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const [quoteOpen, setQuoteOpen] = useState(false);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!form.name.trim() || !form.email.trim()) {
  //     toast.error("Please fill in required fields.");
  //     return;
  //   }
  //   toast.success("Message sent! We'll get back to you within 24 hours.");
  //   setForm({ name: "", email: "", phone: "", product: "", message: "" });
  // };

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden">
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.h1 className="text-3xl md:text-4xl font-extrabold" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <p className="text-secondary-foreground/70 mt-2">We'd love to hear from you. Get in touch for inquiries and quotes.</p>
        </div>
      </div>


      <motion.section
        className="py-16 bg-background"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

      >
        <div className="container mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-6">

            {/* General Inquiries */}
            <motion.div
              whileHover={{
                borderColor: "#166433",
                borderWidth: 2,
                scale: 1.03
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-muted rounded-2xl p-8 space-y-4 flex flex-col cursor-pointer border border-transparent"
            >
              <motion.div>
                <MessageCircle className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-lg font-bold text-foreground">
                General Inquiries
              </h3>

              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Product information and specifications</li>
                <li>General questions about our services</li>
                <li>Partnership opportunities</li>
              </ul>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@akbariexim.com"
                className="relative inline-block self-start text-primary font-medium cursor-pointer
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-full after:bg-primary
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
              >
                Send us an email →
              </a>
            </motion.div>

            {/* Request Quote */}



            <motion.div
              whileHover={{
                borderColor: "#166433",
                borderWidth: 2,
                scale: 1.03
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-muted rounded-2xl p-8 space-y-4 flex flex-col cursor-pointer border border-transparent"
            >
              <motion.div>
                <FileText className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-lg font-bold text-foreground">
                Request Quote
              </h3>

              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Detailed product quotations</li>
                <li>Custom packaging requirements</li>
                <li>Shipping and logistics planning</li>
              </ul>

              <a
                onClick={() => setQuoteOpen(true)}
                className="relative inline-block self-start text-primary font-medium cursor-pointer
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-full after:bg-primary
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
              >
                Fill the form →
              </a>
            </motion.div>

            <QuoteFormDialog
              open={quoteOpen}
              onClose={() => setQuoteOpen(false)}
            />


            {/* Track Shipment */}
            <motion.div
              whileHover={{
                borderColor: "#166433",
                borderWidth: 2,
                scale: 1.03
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-muted rounded-2xl p-8 space-y-4 flex flex-col cursor-pointer border border-transparent"
            >
              <motion.div>
                <Package className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-lg font-bold text-foreground">
                Track Shipment
              </h3>

              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Real-time shipment tracking</li>
                <li>Documentation status updates</li>
                <li>Delivery confirmations</li>
              </ul>

              <a
                href="tel:+91 9316490925"
                className="relative inline-block self-start text-primary font-medium cursor-pointer
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-full after:bg-primary
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
              >
                {/* <Phone className="w-4 h-4" /> */}
                Call manager →
              </a>
            </motion.div>

          </div>

        </div>
      </motion.section>


      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">


            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-muted rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Get a Detailed Quote
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Provide us with your requirements and we'll prepare a comprehensive quote with specifications, documentation, and logistics details.
                </p>

              </div>

              {/* Grid Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <Input
                  placeholder="Company Name *"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />

                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <Input
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <Input
                  placeholder="Country *"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                />

                {/* Product */}
                <Select
                  value={form.product}
                  onValueChange={(value) =>
                    setForm({ ...form, product: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Fresh Vegetables">Fresh Vegetables</SelectItem>
                    <SelectItem value="Premium Fruits">Premium Fruits</SelectItem>
                    <SelectItem value="Premium Spices">Premium Spices</SelectItem>
                    <SelectItem value="Basmati Rice">Basmati Rice</SelectItem>
                    <SelectItem value="Oil Seeds">Oil Seeds</SelectItem>
                    <SelectItem value="Grains & Pulses">Grains & Pulses</SelectItem>
                    <SelectItem value="Edible Oils">Edible Oils</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Inquiry Type */}
              <Select
                value={form.inquiry}
                onValueChange={(value) =>
                  setForm({ ...form, inquiry: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="What can we help you with?" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Request Quote">Request Quote</SelectItem>
                  <SelectItem value="Samples">Request Samples</SelectItem>
                  <SelectItem value="Partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="Supplier">Become a Supplier</SelectItem>
                  <SelectItem value="Product Information">Product Information</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              {/* Message */}
              <div className="space-y-2">

                <label className="text-sm font-semibold text-foreground">
                  Detailed Requirements *
                </label>

                <Textarea
                  className="w-full rounded-xl border border-border bg-background px-4 py-4 text-sm leading-6 resize-none h-[250px]"

                  placeholder={`Please provide details about:

• Product specifications and grades
• Quantity required (MT/containers)
• Packaging preferences
• Destination port
• Timeline and frequency
• Quality certifications needed
• Any special requirements`}

                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>


              {/* Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-primary text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending..." : "Send Request for Quote"}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 ml-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-muted-foreground">Reach out to us for product inquiries, pricing, or bulk orders. Our team responds within 24 hours.</p>
              </div>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Yogichowk , Surat, Gujarat 395010, India" },
                  { icon: Phone, label: "Phone", value: "+91 93164 90925" },
                  { icon: Mail, label: "Email", value: "info@akbariexim.com" },
                  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 9:00 AM – 6:00 PM IST" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary hover:text-white" asChild>
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
          </div>


          <motion.section
            className="py-16 bg-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">

              <div className="bg-background rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Need Immediate Assistance?
                </h2>

                {/* Description */}
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  For urgent inquiries or time-sensitive requirements, our team is available
                  24/7 to provide immediate support and guidance.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

                  {/* Call Button */}
                  <a
                    href="tel:+919316490925"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now: +91 93164 90925
                  </a>

                  {/* Email Button */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@akbariexim.com"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/10 transition"
                  >
                    <Mail className="w-5 h-5" />
                    Urgent Email
                  </a>

                </div>

              </div>

            </div>
          </motion.section>



          {/* Google Map Section */}
          <div className="w-full px-4 mt-10">
            <div className="max-w-7xl mx-auto">

              {/* Heading */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Our Location</h2>
                <p className="text-muted-foreground">Visit us or connect globally</p>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4290583498455!2d72.8885548!3d21.214828099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7a3077c639%3A0xb2a14f3ba5850acb!2sYogi%20Chowk!5e0!3m2!1sen!2sin!4v1774609597760!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>

  );

};

export default Contact;
