import {
  Heart,
  Droplets,
  Clock,
  Shield,
  Users,
  Phone,
  CheckCircle2,
  Star,
  Activity,
  Thermometer,
  Stethoscope,
  MapPin,
  Award,
  Droplet,
  TestTube,
  Syringe,
} from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Available", description: "Round-the-clock blood availability for emergencies, any time, any day." },
  { icon: Shield, title: "100% Safe & Tested", description: "Every unit undergoes rigorous testing for HIV, Hepatitis, Malaria & more." },
  { icon: Heart, title: "Charitable Service", description: "Dedicated to saving lives with affordable and accessible blood bank services." },
  { icon: Droplets, title: "All Blood Groups", description: "Comprehensive stock of all 8 blood groups including rare types." },
  { icon: Users, title: "1000+ Donors", description: "Growing community of verified and healthy blood donors in Gorakhpur." },
  { icon: Stethoscope, title: "Component Separation", description: "Advanced component separation - platelets, plasma, RBC, and more." },
];

const steps = [
  { step: "1", title: "Call Us", description: "Reach us anytime for emergency blood requirements." },
  { step: "2", title: "Health Screening", description: "Health checkup to ensure safe donation." },
  { step: "3", title: "Safe Donation", description: "Painless, hygienic blood collection by trained professionals." },
  { step: "4", title: "Save Lives", description: "Your single donation can save up to 3 lives in need." },
];

const testimonials = [
  { name: "Rajesh Kumar", text: "Radhey Radhey Blood Bank saved my mother's life during an emergency at 2 AM. They had blood available instantly. Truly a lifesaver!", rating: 5 },
  { name: "Priya Sharma", text: "I have been donating here for 2 years. The staff is incredibly professional and the process is completely safe. Best blood bank in Gorakhpur!", rating: 5 },
  { name: "Amit Singh", text: "When my father needed surgery, they provided all required blood components quickly and professionally. Their service is commendable.", rating: 5 },
  { name: "Sunita Devi", text: "My husband met with a serious accident and we needed O- blood urgently at midnight. Radhey Radhey Blood Bank arranged it within 30 minutes. God bless this team!", rating: 5 },
  { name: "Vikram Yadav", text: "I donated blood here for the first time. The staff made me feel so comfortable and explained everything. Now I donate every 3 months. Highly recommended!", rating: 5 },
  { name: "Neha Gupta", text: "Best blood bank in entire Gorakhpur! My son needed platelets during dengue and they arranged it promptly. These people are doing great work.", rating: 5 },
  { name: "Ravi Verma", text: "Transparent, hygienic, and professional. I have referred many families here and everyone had a great experience. True charitable service!", rating: 5 },
  { name: "Anita Singh", text: "We live in a rural area near Sikariganj. During my delivery, I needed blood urgently. Radhey Radhey delivered it to the hospital on time. Forever grateful!", rating: 5 },
];

const stats = [
  { number: "5000+", label: "Lives Saved" },
  { number: "1000+", label: "Active Donors" },
  { number: "10K+", label: "Units Issued" },
  { number: "24/7", label: "Availability" },
];

const faqs = [
  { q: "Is blood really free?", a: "We are a charitable blood bank. Please contact us for pricing details and assistance." },
  { q: "How can I donate blood?", a: "Just call us or visit our centre. You should be 18-65 years old, weigh above 45kg, and be in good health." },
  { q: "How often can I donate?", a: "Every 3 months for males and every 4 months for females." },
  { q: "Is the blood safe?", a: "Yes. Every unit is tested for HIV, Hepatitis B & C, Malaria, and Syphilis before issue." },
  { q: "Do you provide blood components?", a: "Yes. We provide Whole Blood, Platelet Concentrate, Fresh Frozen Plasma, and Packed RBC." },
  { q: "Are you open 24/7?", a: "Yes, we are open 24 hours, 7 days a week including holidays for emergencies." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative bg-gradient-to-br from-red-50/80 via-white/60 to-orange-50/80 dark:from-[#0a0a0a] dark:via-[#111113] dark:to-[#0a0a0a] hero-pattern overflow-hidden backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary-light dark:bg-zinc-800 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
                Gorakhpur&apos;s Most Trusted Blood Bank
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Every Drop <span className="gradient-text">Counts</span>
                <br />
                Save a Life Today
              </h1>
              <p className="text-base sm:text-lg text-muted max-w-lg leading-relaxed">
                Radhey Radhey Charitable Blood &amp; Component Centre provides{" "}
                <strong>safe, and 24/7 blood availability</strong> in
                Gorakhpur. No charges, no conditions - just saving lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-red-500/30 min-h-[48px]">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Request Blood Now
                </a>
                <a href="#donate" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 text-primary border-2 border-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary-light dark:hover:bg-zinc-800 transition-all min-h-[48px]">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Become a Donor
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4 flex-wrap">
                {["24/7 Available", "Safe & Tested", "All Blood Groups"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    <span className="text-xs sm:text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero visual - smaller on mobile */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                <div className="absolute inset-3 sm:inset-4 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute inset-6 sm:inset-8 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-24 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-gradient-to-b from-red-500 to-red-700 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] animate-float shadow-2xl shadow-red-500/40 flex items-center justify-center">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-white/80 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 sm:py-16 md:py-20 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div>
              <span className="inline-block bg-primary-light dark:bg-zinc-800 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6">
                Gorakhpur&apos;s Most Trusted <span className="gradient-text">Charitable Blood Bank</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted leading-relaxed text-sm sm:text-base">
                <p>
                  Radhey Radhey Charitable Blood &amp; Component Centre was founded
                  with a simple yet powerful belief: <strong>no one should die because blood
                  is not available.</strong> Located in Sikariganj, Imlidih Bujurg, Gorakhpur,
                  we have grown into one of the most trusted blood banks in the region.
                </p>
                <p>
                  Our charitable model ensures that blood is provided <strong>affordably and accessible</strong> to
                  all patients in need. Through the generosity of our donors and the
                  dedication of our team, we have saved thousands of lives.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {[
                  { icon: Award, text: "5.0 Star Rated" },
                  { icon: Shield, text: "Fully Certified" },
                  { icon: Clock, text: "24/7 Operations" },
                  { icon: Heart, text: "100% Charitable" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 sm:gap-3 bg-gray-50 dark:bg-zinc-800/60 p-2.5 sm:p-3 rounded-xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-light dark:bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card dark:bg-zinc-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 dark:border-zinc-700/50">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary">Our Promise</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Safe and tested blood components",
                  "100% tested and safe blood components",
                  "Advanced component separation facility",
                  "Trained and certified medical professionals",
                  "24/7 emergency blood availability",
                  "Regular blood donation camps",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-secondary text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-16 md:py-20 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block bg-primary-light dark:bg-zinc-800 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Best Blood Bank in Gorakhpur
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base px-2">
              We are committed to providing the safest, fastest, and most reliable blood bank services in the region.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card dark:bg-zinc-900/60 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-zinc-700/50 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary-light dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 sm:py-16 md:py-20 bg-gray-50 dark:bg-[#111113]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block bg-primary-light dark:bg-zinc-800 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Complete Blood Bank Solutions
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base px-2">
              From whole blood to specialized components, we provide everything under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {[
              { icon: Droplet, title: "Whole Blood", desc: "Complete blood transfusion for surgeries and emergencies." },
              { icon: Activity, title: "Platelet Concentrate", desc: "For dengue, cancer patients with low platelet count." },
              { icon: Thermometer, title: "Fresh Frozen Plasma", desc: "For burn victims and clotting factor deficiencies." },
              { icon: TestTube, title: "Packed RBC", desc: "For severe anemia and chronic blood loss cases." },
            ].map((service) => (
              <div key={service.title} className="glass-card dark:bg-zinc-900/60 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all border border-gray-100 dark:border-zinc-700/50">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary-light dark:bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-1.5 sm:mb-2 text-sm sm:text-base">{service.title}</h3>
                <p className="text-muted text-xs sm:text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="donate" className="py-14 sm:py-16 md:py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block bg-white/10 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Donate Blood in 4 Simple Steps
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Donating blood is easy, safe, and can save up to 3 lives. Here is how the process works.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-white/20" />
                )}
                {/* Mobile connector line */}
                {index < 3 && index % 2 === 0 && (
                  <div className="md:hidden absolute top-7 right-0 w-[calc(50%-2rem)] h-0.5 bg-white/20" />
                )}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-red-500/30 min-h-[48px]">
              <Syringe className="w-4 h-4 sm:w-5 sm:h-5" />
              Become a Donor Today
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-14 sm:py-16 md:py-20 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block bg-primary-light dark:bg-zinc-800 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              What People Say About Us
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base px-2">
              Trusted by thousands of families across Gorakhpur for reliable blood bank services.
            </p>
          </div>
          {/* Mobile: 1-col scroll, Tablet: 2-col, Desktop: 4-col */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card dark:bg-zinc-900/60 p-6 sm:p-7 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-zinc-700/50 shadow-sm hover:shadow-lg transition-all min-w-[220px] sm:min-w-0 snap-start shrink-0 flex flex-col min-h-[280px] sm:min-h-[300px]">
                <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-2.5 sm:gap-3 mt-auto">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-primary-light dark:bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs sm:text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-xs sm:text-sm">{t.name}</h4>
                    <p className="text-muted text-[10px] sm:text-xs">Verified Donor</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16 md:py-20 bg-gray-50 dark:bg-[#111113]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block bg-primary-light dark:bg-zinc-800 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card dark:bg-zinc-900/60 rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-zinc-700/50">
                <h3 className="font-bold text-secondary mb-1.5 sm:mb-2 text-sm sm:text-base">{faq.q}</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-14 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Save a Life?
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Whether you need blood or want to donate, we are here for you. Join thousands of donors
            in Gorakhpur who are making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:+919140990376" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors min-h-[48px]">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now for Blood
            </a>
            <a href="https://wa.me/919140990376?text=Hi!%20I%20need%20blood%20from%20Radhey%20Radhey%20Blood%20Bank" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#128C7E] transition-colors min-h-[48px]">
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-center">
            <div>
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3 text-white/80" />
              <h4 className="font-bold mb-0.5 sm:mb-1 text-sm sm:text-base">Address</h4>
              <p className="text-white/70 text-xs sm:text-sm">Sikariganj, Jaddupatti, Imlidih Bujurg, UP 273213</p>
            </div>
            <div>
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3 text-white/80" />
              <h4 className="font-bold mb-0.5 sm:mb-1 text-sm sm:text-base">Phone</h4>
              <p className="text-white/70 text-xs sm:text-sm">+91 91409 90376</p>
            </div>
            <div>
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3 text-white/80" />
              <h4 className="font-bold mb-0.5 sm:mb-1 text-sm sm:text-base">Hours</h4>
              <p className="text-white/70 text-xs sm:text-sm">Open 24/7, All Days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
