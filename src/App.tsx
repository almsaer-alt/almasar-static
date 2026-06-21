import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Truck,
  Car,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Clock,
  Route as RouteIcon,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const PHONES = ["+964 773 317 2211", "+964 774 020 3626"];
const WHATSAPP = "9647733172211";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "السلام عليكم، أرغب بالاستفسار عن خدمات المسار الذكي للنقل العام"
)}`;
const EMAIL = "almsar.alzaki@gmail.com";
const FB = "https://web.facebook.com/profile.php?id=61590926331105&locale=ar_AR";
const IG = "https://www.instagram.com/almsaer_/?hl=ar";

// Logo: public/logo.png — ضع ملف الشعار في مجلد public/
const LOGO = "/logo.png";

const services = [
  {
    icon: Truck,
    title: "خدمة توصيل الطلبات",
    desc: "توصيل سريع وآمن لطلباتك داخل بغداد بأسعار مناسبة.",
  },
  {
    icon: Car,
    title: "خدمة حجز السيارة",
    desc: "احجز سيارتك بسهولة مع سائقين محترفين وعلى مدار الساعة.",
  },
  {
    icon: GraduationCap,
    title: "خدمة نقل الطلاب",
    desc: "نقل آمن ومنظّم للطلاب من وإلى المدارس والجامعات.",
  },
  {
    icon: Sparkles,
    title: "خدمات أخرى قريباً",
    desc: "نعمل على إطلاق المزيد من الحلول الذكية لخدمتكم.",
  },
];

const features = [
  { icon: ShieldCheck, title: "أمان عالي", desc: "أسطول مفحوص وسائقون موثوقون." },
  { icon: Clock, title: "التزام بالوقت", desc: "خدمة سريعة ودقيقة في المواعيد." },
  { icon: RouteIcon, title: "تغطية واسعة", desc: "نخدمكم في جميع مناطق بغداد." },
];

const advantages = [
  "أسطول حديث ومجهّز",
  "سائقون محترفون وموثوقون",
  "أسعار شفافة ومنافسة",
  "دعم وتواصل سريع",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafcff]" dir="rtl">
      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="sticky top-0 z-40 border-b border-gray-200/60 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={LOGO}
              alt="المسار الذكي"
              className="h-11 w-auto rounded-md"
              onError={(e) => {
                // fallback to text if logo missing
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="leading-tight">
              <div
                className="text-base font-black"
                style={{ fontFamily: "Tajawal", color: "#1E2A5E" }}
              >
                المسار الذكي
              </div>
              <div className="text-[10px] tracking-widest text-gray-400">
                ALMASAR ALZAKI
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-600 md:flex">
            <a href="#services" className="transition-colors hover:text-[#9ACA3C]">
              خدماتنا
            </a>
            <a href="#about" className="transition-colors hover:text-[#9ACA3C]">
              من نحن
            </a>
            <a href="#contact" className="transition-colors hover:text-[#9ACA3C]">
              تواصل
            </a>
          </nav>

          {/* CTA + mobile menu toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONES[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#1E2A5E] shadow-glow transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
            >
              <Phone className="h-4 w-4" /> اتصل الآن
            </a>
            <button
              className="flex md:hidden text-[#1E2A5E]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="القائمة"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
              {[
                ["#services", "خدماتنا"],
                ["#about", "من نحن"],
                ["#contact", "تواصل"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#9ACA3C]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="home"
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg,#1E2A5E 0%,#2a3870 60%,#9ACA3C 140%)" }}
      >
        {/* dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          {/* Text */}
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#9ACA3C]" />
              شركة نقل عام في بغداد
            </span>
            <h1
              className="text-balance font-black leading-[1.15] text-4xl md:text-6xl"
              style={{ fontFamily: "Tajawal" }}
            >
              نقدّم حلول نقل{" "}
              <span className="text-[#9ACA3C]">متكاملة</span>، ذكية وآمنة.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              المسار الذكي للنقل العام — نوصلك بأمان وسرعة في جميع أنحاء بغداد،
              سواء للأفراد أو المؤسسات أو الطلاب.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full px-6 py-3 text-sm font-bold text-[#1E2A5E] shadow-glow transition-transform hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
              >
                تعرّف على خدماتنا
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Logo card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#9ACA3C]/30 blur-3xl" />
            <div className="rounded-[2rem] border border-white/20 bg-white p-8 backdrop-blur-xl shadow-elegant">
              <img
                src={LOGO}
                alt="شعار المسار الذكي"
                className="w-full rounded-2xl"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement!;
                  parent.innerHTML = `<div class="flex items-center justify-center h-40 text-[#1E2A5E] font-black text-2xl" style="font-family:Tajawal">المسار الذكي</div>`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES STRIP ═══════════════ */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#1E2A5E]"
                style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-[#1E2A5E]"
                  style={{ fontFamily: "Tajawal" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ACA3C]">
            خدماتنا
          </span>
          <h2
            className="mt-3 font-black text-[#1E2A5E] text-3xl md:text-5xl"
            style={{ fontFamily: "Tajawal" }}
          >
            حلول نقل تناسب احتياجك
          </h2>
          <p className="mt-4 text-gray-500">
            مجموعة من الخدمات المصمّمة لتوصيلك أنت وطلباتك بأقصى راحة وأمان.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#9ACA3C] hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-[#1E2A5E] transition-all group-hover:text-[#1E2A5E]"
                style={{ transition: "background 0.2s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "linear-gradient(135deg,#9ACA3C,#7eb82e)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#f3f4f6";
                }}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3
                className="font-bold text-[#1E2A5E] text-lg"
                style={{ fontFamily: "Tajawal" }}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
              />
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="bg-gray-50/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ACA3C]">
              من نحن
            </span>
            <h2
              className="mt-3 font-black text-[#1E2A5E] text-3xl md:text-5xl"
              style={{ fontFamily: "Tajawal" }}
            >
              شركة المسار الذكي للنقل العام
            </h2>
            <p className="mt-5 leading-loose text-gray-600">
              نسعى في{" "}
              <strong className="text-[#1E2A5E]">المسار الذكي</strong> إلى تقديم
              تجربة نقل عصرية وموثوقة في العراق، عبر دمج التكنولوجيا مع خدمة
              العملاء لضمان الأمان والسرعة والالتزام بالمواعيد. نخدم الأفراد
              والمؤسسات والطلاب من قلب بغداد — حي أور.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {advantages.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[#1E2A5E] font-bold text-xs"
                    style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
                  >
                    ✓
                  </span>
                  <span className="text-gray-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#9ACA3C]/20 blur-3xl" />
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-elegant">
              <img
                src={LOGO}
                alt="المسار الذكي"
                className="mx-auto w-full max-w-sm rounded-2xl"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="overflow-hidden rounded-3xl p-1 shadow-elegant"
          style={{ background: "linear-gradient(135deg,#1E2A5E 0%,#2a3870 60%,#9ACA3C 140%)" }}
        >
          <div className="grid gap-10 rounded-[1.4rem] bg-[#1E2A5E]/95 p-8 text-white md:grid-cols-2 md:p-14">
            {/* Left */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ACA3C]">
                تواصل معنا
              </span>
              <h2
                className="mt-3 font-black text-3xl md:text-5xl"
                style={{ fontFamily: "Tajawal" }}
              >
                جاهزون لخدمتك في أي وقت
              </h2>
              <p className="mt-4 text-white/70">
                اتصل بنا أو راسلنا عبر منصاتنا الاجتماعية لحجز خدمتك بسهولة.
              </p>

              <div className="mt-8 space-y-4">
                {PHONES.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                  >
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1E2A5E]"
                      style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
                    >
                      <Phone className="h-5 w-5" />
                    </span>
                    <span dir="ltr" className="font-bold tracking-wide">
                      {p}
                    </span>
                  </a>
                ))}

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 transition-colors hover:bg-[#25D366]/20"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white">
                    <MessageCircle className="h-5 w-5" fill="white" />
                  </span>
                  <span className="font-bold">واتساب — تواصل مباشر</span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1E2A5E]"
                    style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
                  >
                    <Mail className="h-5 w-5" />
                  </span>
                  <span dir="ltr" className="font-medium">
                    {EMAIL}
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1E2A5E]"
                    style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="font-medium">العراق / بغداد / حي أور</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Tajawal" }}
                >
                  تابعنا على
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  آخر العروض والأخبار على صفحاتنا الرسمية.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={FB}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3 font-bold">
                      <Facebook className="h-5 w-5 text-[#9ACA3C]" /> فيسبوك
                    </span>
                    <span className="text-xs text-white/50">@almsaer</span>
                  </a>
                  <a
                    href={IG}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3 font-bold">
                      <Instagram className="h-5 w-5 text-[#9ACA3C]" /> إنستغرام
                    </span>
                    <span className="text-xs text-white/50">@almsaer_</span>
                  </a>
                </div>
              </div>

              <div
                className="rounded-2xl p-6 text-[#1E2A5E]"
                style={{ background: "linear-gradient(135deg,#9ACA3C,#7eb82e)" }}
              >
                <h3
                  className="text-xl font-black"
                  style={{ fontFamily: "Tajawal" }}
                >
                  احجز خدمتك الآن
                </h3>
                <p className="mt-1 text-sm opacity-80">
                  اتصل مباشرة وسنرد عليك خلال دقائق.
                </p>
                <a
                  href={`tel:${PHONES[0].replace(/\s/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1E2A5E] px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> اتصل بنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-gray-100 bg-gray-50/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-gray-400 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={LOGO}
              alt=""
              className="h-8 w-auto rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span>© {new Date().getFullYear()} المسار الذكي للنقل العام — جميع الحقوق محفوظة.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={FB} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#1E2A5E]">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#1E2A5E]">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* ═══════════════ FLOATING WHATSAPP ═══════════════ */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل واتساب"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-bold text-white transition-transform hover:scale-105"
        style={{ boxShadow: "0 15px 40px -10px rgba(37,211,102,0.6)" }}
      >
        <MessageCircle className="h-5 w-5" fill="white" />
        <span className="hidden text-sm sm:inline">واتساب</span>
      </a>
    </div>
  );
}
