import { motion, useScroll, useTransform } from "motion/react";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Cpu, 
  BarChart3, 
  MessageSquare, 
  ShieldCheck,
  Star,
  Zap,
  UserCircle2,
  Briefcase,
  Globe,
  Code2,
  LineChart,
  Stethoscope,
  BookMarked,
  Heart,
  Moon
} from "lucide-react";
import { useRef } from "react";

// Import images to ensure they are bundled correctly by Vite
import HERO_BG from "./assets/images/hero_background_1778990052752.png";
import MATERI_BG from "./assets/images/materi_background_1778990066712.png";
import SKILL_BG from "./assets/images/skill_ai_hologram_1778990083994.png";
import DOKUMENTASI_IMG from "./assets/images/dokumentasi_halaqah_1778990599736.png";

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-3"
  >
    <div className="w-10 h-10 bg-gradient-to-br from-navy to-navy-dark rounded-full flex items-center justify-center font-bold text-white shadow-lg">
      H5
    </div>
    <span className="text-xl max-sm:text-[15px] max-sm:leading-[15px] font-bold tracking-widest text-navy">
      HALAQAH 5.0
    </span>
  </motion.div>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 text-center text-navy">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4"
    >
      {title.split(' ')[0]} <span className="text-gradient-gold">{title.split(' ').slice(1).join(' ')}</span>
    </motion.h2>
    {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#0a0909] max-w-2xl mx-auto text-lg italic font-light"
        >
        “{subtitle}”
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-[2px] bg-gold mx-auto mt-6 rounded-full opacity-50"
    />
  </div>
);

export default function App() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-soft-bg relative selection:bg-gold selection:text-navy overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 bg-abstract-grid opacity-100 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-islamic-pattern opacity-10 pointer-events-none z-0" />
      
      {/* Decorative Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed -top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="fixed -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-navy/5 blur-[120px] rounded-full z-0"
      />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 glass py-4 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/70">
            <a href="#about" className="hover:text-gold transition-colors">Program</a>
            <a href="#docs" className="hover:text-gold transition-colors">Dokumentasi</a>
            <a href="#materi" className="hover:text-gold transition-colors">Materi</a>
            <a href="#coach" className="hover:text-gold transition-colors">Coaching</a>
          </div>
          <a href="#register" className="px-6 py-2 bg-navy text-white text-[11px] max-sm:leading-[11px] font-bold rounded uppercase tracking-tighter hover:bg-navy-dark shadow-lg transition-all">
            Daftar Sekarang
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10 px-6">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-navy/60 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Generasi Emas Islam</span>
            <h1 className="text-7xl md:text-9xl max-sm:text-[40px] max-sm:leading-[40px] font-extrabold mb-8 leading-none tracking-tight text-navy">
              HALAQAH <span className="text-gradient-gold">5.0</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 italic font-light leading-relaxed"
          >
            “Dicari Pemuda Islam yang Ingin Terus Memperbaiki Diri, Sukses Dunia dan Tetap Ingat Akhirat”
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="#register"
              className="px-10 py-5 bg-gold text-white font-black rounded-xl text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
            >
              Gabung Sekarang
            </a>
            <a 
              href="#materi"
              className="px-10 py-5 bg-white border border-navy/10 text-navy font-bold rounded-xl text-sm uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all"
            >
              Lihat Materi
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT PROGRAM */}
      <section id="about" className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Benefit Program" subtitle="Platform pemberdayaan pemuda muslim masa depan dengan pendekatan holistik." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: BookOpen, text: "Belajar Islam level dasar - advance" },
              { icon: Users, text: "Komunitas pemuda muslim produktif" },
              { icon: Clock, text: "Mentoring intensif setiap pekan" },
              { icon: Zap, text: "Upgrade iman dan skill masa depan" },
              { icon: Heart, text: "Lingkungan positif dan islami" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-[2rem] text-center hover:border-gold/30 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-navy/10 group-hover:bg-navy group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8 text-navy group-hover:text-white" />
                </div>
                <p className="font-bold text-navy tracking-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: DOKUMENTASI KEGIATAN */}
      <section id="docs" className="py-24 relative overflow-hidden z-10 bg-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Dokumentasi Kegiatan" subtitle="Potret proses belajar dan interaksi para pemuda muslim Indonesia di HALAQAH." />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-navy/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-lg border border-navy/10"
            >
              <img 
                src={DOKUMENTASI_IMG} 
                alt="Dokumentasi Halaqah" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <h3 className="text-3xl font-bold text-navy mb-6 leading-tight">Membangun Karakter Melalui Kolaborasi</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Halaqah 5.0 bukan sekadar kajian rutin. Ini adalah wadah di mana pemuda muslim Indonesia berkumpul, berdiskusi, dan saling menginspirasi dalam lingkungan yang positif dan islami.
              </p>
              <ul className="space-y-4">
                {[
                  "Diskusi interaktif antar peserta",
                  "Sesi mentoring langsung oleh coach profesional",
                  "Workshop skill teknologi dan kepemimpinan",
                  "Ukhuwah yang terjalin erat antar sesama pemuda"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy font-semibold">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROGRAM INFO */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-navy/10 rounded-[3rem] p-12 shadow-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl max-sm:text-[25px] max-sm:leading-[25px] font-bold mb-8 flex items-center gap-3 text-navy">
                <span className="w-3 h-3 bg-gold rounded-full"></span> 
                Program <span className="text-gradient-gold">Info Dashboard</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, label: "Target", value: "Pria 20-30 Thn" },
                  { icon: MapPin, label: "Lokasi", value: "Cimanggis, Depok" },
                  { icon: Calendar, label: "Jadwal", value: "Ahad, 09:00" },
                  { icon: Clock, label: "Kick Off", value: "21 Juni 2026" }
                ].map((info, idx) => (
                  <div key={idx} className="bg-slate-50 border border-navy/5 rounded-2xl p-6">
                    <h4 className="text-navy/40 text-[10px] uppercase tracking-[0.2em] mb-2">{info.label}</h4>
                    <p className="text-xl font-bold text-navy">{info.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-gold/50 to-transparent rounded-[2.5rem] group"
            >
              <div className="bg-white rounded-[22px] overflow-hidden aspect-video">
                 <img 
                  src={HERO_BG} 
                  alt="Program Info Visual" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-all duration-1000" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 font-black uppercase text-2xl italic tracking-tighter text-white opacity-80">Limited Seats Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MATERI UTAMA */}
      <section id="materi" className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Materi Utama" subtitle="Kurikulum komprehensif untuk membentuk karakter muslim yang kaffah." />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-white border border-navy/10 rounded-[3rem] p-12 shadow-lg">
            {[
              "Ma’rifatullah", "Ma’rifatur Rasul", "Ma’rifatul Islam", "Ma’rifatul Insan",
              "Syahadatain", "Ikhlas", "Taubat", "Taqwa",
              "Shalat", "Tilawah Al-Qur’an", "Dzikir dan Doa", "Akhlaq Islami",
              "Ukhuwah Islamiyah", "Amar Ma’ruf Nahi Munkar", "Sabar dan Syukur", "Mujahadatun Nafs"
            ].map((materi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 border border-navy/5 rounded-xl p-4 flex items-center gap-3 hover:border-gold/50 transition-all hover:bg-white hover:shadow-md"
              >
                <span className="text-gold font-mono text-xs font-bold">{(idx + 1).toString().padStart(2, '0')}</span>
                <h4 className="font-bold text-sm tracking-tight text-navy/90">{materi}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FUTURE SKILLS */}
      <section className="py-24 relative overflow-hidden bg-white z-10 border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-3 bg-slate-50 border border-navy/10 rounded-[3rem] p-12 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-50" />
            <h3 className="text-navy/40 text-xs font-bold uppercase tracking-[0.3em] mb-8 relative z-10">Future Skills Protocol</h3>
            
            <div className="space-y-4 relative z-10">
              {[
                { label: "ARTIFICIAL INTELLIGENCE", val: "98%" },
                { label: "DIGITAL MARKETING", val: "95%" },
                { label: "FINANCIAL TECHNOLOGY", val: "88%" },
                { label: "HEALTH TECHNOLOGY", val: "90%" },
                { label: "ISLAMIC LEADERSHIP", val: "100%" }
              ].map((skill, idx) => (
                <div key={idx} className="font-mono text-sm group/line flex justify-between items-center border-b border-navy/10 pb-2 hover:border-gold/40 transition-colors">
                  <span className="text-navy/80 tracking-tighter">&gt; {skill.label}</span>
                  <span className="text-navy font-bold">{skill.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-navy/10 text-[10px] font-mono text-navy/40 uppercase"> System Active // Holographic Interface v2.0 </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative bg-white p-4 rounded-[3rem] border border-navy/10 overflow-hidden shadow-xl"
          >
            <img 
              src={SKILL_BG} 
              alt="AI Hologram Visual" 
              className="w-full h-full object-cover rounded-2xl opacity-80" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: PROFESSIONAL COACH */}
      <section id="coach" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Professional Coaches" subtitle="Dibimbing langsung oleh praktisi berpengalaman di bidangnya masing-masing." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Andy Wahyudi", role: "Senior Bankir" },
              { name: "Erwin Triana", role: "Senior Accountant" },
              { name: "Muhamad Rovianto", role: "Sr. Tech Solution" },
              { name: "Khalid Syaifullah", role: "Finance Professional" },
              { name: "Widy Harsanto", role: "Health Tech Expert" },
              { name: "Ahmad Faisal", role: "Islamic Education" },
              { name: "Sholeh", role: "IT Specialist" },
              { name: "Didik Andriyanto", role: "Public Relation" }
            ].map((coach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-navy/10 p-10 rounded-[2.5rem] hover:border-gold/50 transition-all shadow-[0_4px_20px_rgba(30,58,138,0.05)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] text-center overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="w-20 h-20 bg-gradient-to-br from-navy/5 to-navy/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-navy/20 group-hover:text-gold transition-all group-hover:rotate-6 group-hover:scale-110">
                  <UserCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-extrabold mb-2 tracking-tight text-navy relative z-10">{coach.name}</h4>
                <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em]">{coach.role}</p>
                
                <div className="mt-8 flex justify-center gap-4 text-navy/20 group-hover:text-navy/50 transition-all">
                  <Globe className="w-5 h-5 hover:text-navy cursor-pointer" />
                  <MessageSquare className="w-5 h-5 hover:text-navy cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIAL */}
      <section className="py-24 relative overflow-hidden z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <SectionHeading title="User Testimonial" subtitle="Apa kata mereka yang telah bergabung dalam perjalanan Hijrah Kreatif ini." />
          
          <div className="flex gap-6 animate-marquee-slow hover:pause">
            {[
              { name: "Farhan Maulana", comment: "Halaqah ini mengubah mindset saya tentang sukses. Ternyata dunia dan akhirat bisa seimbang." },
              { name: "Rizky Ramadhan", comment: "Komunitasnya sangat suportif. Saya mendapat teman baru yang punya visi yang sama untuk maju." },
              { name: "Andika Pratama", comment: "Materi skill teknologinya keren banget! Belum pernah ada kajian yang sekomplit ini bahas AI." },
              { name: "Yusuf Hakim", comment: "Mentoringnya daging semua. Coach-nya beneran praktisi top, jadi relevan sama dunia kerja." },
              { name: "Farhan Maulana", comment: "Halaqah ini mengubah mindset saya tentang sukses. Ternyata dunia dan akhirat bisa seimbang." },
              { name: "Rizky Ramadhan", comment: "Komunitasnya sangat suportif. Saya mendapat teman baru yang punya visi yang sama untuk maju." }
            ].map((testi, idx) => (
              <motion.div
                key={idx}
                className="min-w-[320px] md:min-w-[400px] p-10 bg-white rounded-[3rem] border border-navy/5 shadow-md"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold opacity-80" />)}
                </div>
                <p className="text-base italic text-slate-700 mb-10 leading-relaxed font-light">“{testi.comment}”</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center font-bold text-navy text-sm border border-navy/10">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-navy tracking-tight">{testi.name}</h5>
                    <span className="text-[9px] text-slate-400 uppercase tracking-[0.2em] block mt-1">Alumni Batch 4.0</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA REGISTER */}
      <section id="register" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-navy p-16 rounded-[4rem] text-center overflow-hidden shadow-[0_30px_100px_-20px_rgba(30,58,138,0.3)]"
          >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase tracking-tighter leading-none text-white">
                GABUNG <span className="text-gradient-gold">H5.0</span> SEKARANG
              </h2>
              
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto italic font-light">
                “Jangan lewatkan kesempatan menjadi bagian dari generasi emas muslim masa depan. Kuota terbatas!”
              </p>

              <motion.a
                href="https://s.id/daftar-halaqah"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-gold text-white px-12 py-6 rounded-2xl font-black text-xl max-sm:text-[12px] max-sm:leading-[15px] uppercase tracking-widest shadow-2xl hover:brightness-110 transition-all"
              >
                DAFTAR: s.id/daftar-halaqah
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="py-16 bg-white relative border-t border-navy/10 overflow-hidden z-10 text-navy/50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="text-center md:text-left">
              <Logo />
              <p className="mt-4 text-[11px] uppercase tracking-widest opacity-50 max-w-xs leading-loose italic">Membangun generasi pemuda muslim yang profesional, beriman, and bermanfaat bagi umat.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
              <h4 className="text-navy/30 font-bold uppercase tracking-[0.3em] text-[10px]">Kontak Sinergi:</h4>
              <a href="https://wa.me/08176707234" className="text-xl font-extrabold text-navy hover:text-gold transition-colors tracking-tighter">
                WA 0817-6707-234
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] gap-4">
            <p>© 2026 HALAQAH 5.0 PROJECT. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add a simple marquee animation in global CSS if not enough for framer motion
// But I'll try to stick to what we have or add a class in index.css
