import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Footprints,
  TrainFront,
  Bus,
  Ship,
  Clock,
  MapPin,
  Users,
  Ticket,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
} from "lucide-react";
import { BrushHighlight } from "@/components/Brush";

export const Route = createFileRoute("/upcoming")({
  head: () => ({
    meta: [
      { title: "The Saigon commute | VieBee" },
      {
        name: "description",
        content: "Experience Vietnam across four iconic transit cultures in one morning: walking, metro, bus, and waterbus.",
      },
    ],
  }),
  component: UpcomingEventPage,
});

type Lang = "en" | "vi";

const t = {
  en: {
    back: "Back to home",
    badge: "Limited, claim your spot now!",
    title: "The Saigon commute:",
    highlight: "Culture on the move",
    sub: "Explore Saigon from a local's perspective as you journey through four iconic transit cultures in one unforgettable morning.",
    routeLabel: "Four commute legs",
    routeHint: "Select a leg to preview",
    legs: [
      {
        mode: "Walking",
        place: "Saigon streets, alleys",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=80",
        caption: "Morning cà phê sữa đá and walking the historic alleys of District 1.",
        icon: Footprints,
      },
      {
        mode: "Metro",
        place: "Metro Line 1",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=900&q=80",
        caption: "Soaring along Vietnam's first urban railway between heritage roofs and skyscrapers.",
        icon: TrainFront,
      },
      {
        mode: "City bus",
        place: "VinBus - Electric",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
        caption: "Riding alongside everyday commuters with local storytelling from your host.",
        icon: Bus,
      },
      {
        mode: "Waterbus",
        place: "Bạch Đằng pier",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
        caption: "Catching the golden hour river breeze along the Saigon River.",
        icon: Ship,
      },
    ],
    meta: [
      { label: "Schedule", value: "Saturday, 8:00 AM – 1:00 PM", icon: Clock },
      { label: "Meeting point", value: "Bến Thành Central Station", icon: MapPin },
      { label: "Group size", value: "Max 12 guests", icon: Users },
      { label: "Inclusions", value: "All transit passes and coffee included", icon: Ticket },
    ],
    formTitle: "Reserve a seat",
    formSub: "Direct registration - we will email you the schedule.",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "Phone / Zalo (optional)",
    guestsLabel: "guests",
    submit: "Confirm reservation",
    reassurance: "Free community tour • Cancel anytime",
    thanks: "You are on the list! We will email you the details soon.",
  },
  vi: {
    back: "Quay lại trang chủ",
    badge: "Giới hạn, đặt chỗ ngay!",
    title: "Chuyện đi lại:",
    highlight: "Nét văn hoá di chuyển",
    sub: "Khám phá Sài Gòn qua lăng kính của người bản địa khi bạn trải nghiệm bốn nét văn hóa di chuyển đặc trưng trong một buổi sáng khó quên.",
    routeLabel: "Bốn chặng trải nghiệm",
    routeHint: "Chọn một chặng để xem ảnh",
    legs: [
      {
        mode: "Đi bộ",
        place: "Ngõ phố cổ và cà phê",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=80",
        caption: "Ngồi ghế cóc nhấp ngụm cà phê sữa đá và thong dong qua những con hẻm thức giấc sớm.",
        icon: Footprints,
      },
      {
        mode: "Tàu Metro",
        place: "Metro Tuyến 1",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=900&q=80",
        caption: "Lướt trên tuyến đường sắt đô thị hiện đại ngắm nhìn toàn cảnh thành phố từ trên cao.",
        icon: TrainFront,
      },
      {
        mode: "Xe buýt",
        place: "Tuyến buýt điện phố thị",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
        caption: "Hoà cùng dòng người đi học, đi làm trên xe buýt và nghe kể chuyện phố phường.",
        icon: Bus,
      },
      {
        mode: "Xe buýt sông",
        place: "Ga tàu thủy Bạch Đằng",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
        caption: "Tận hưởng làn gió mát và ngắm hoàng hôn buông xuống trên mặt nước sông Sài Gòn.",
        icon: Ship,
      },
    ],
    meta: [
      { label: "Thời gian", value: "Thứ Bảy, 08:00 – 13:00", icon: Clock },
      { label: "Điểm hẹn", value: "Ga Trung tâm Bến Thành", icon: MapPin },
      { label: "Quy mô", value: "Tối đa 12 người", icon: Users },
      { label: "Bao gồm", value: "Vé toàn bộ tàu xe và cà phê sáng", icon: Ticket },
    ],
    formTitle: "Giữ chỗ tham gia",
    formSub: "Đăng ký trực tiếp - VieBee sẽ liên hệ gửi lịch trình chi tiết.",
    namePlaceholder: "Họ và tên của bạn",
    emailPlaceholder: "email@cuaban.com",
    phonePlaceholder: "Số điện thoại / Zalo",
    guestsLabel: "người",
    submit: "Xác nhận giữ chỗ",
    reassurance: "Trải nghiệm miễn phí • Huỷ bất kỳ lúc nào",
    thanks: "Bạn đã có tên trong danh sách! VieBee sẽ sớm gửi thông tin qua email.",
  },
};

function UpcomingEventPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeLeg, setActiveLeg] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const c = t[lang];
  const currentLeg = c.legs[activeLeg] ?? c.legs[0];

  const LangToggle = (
    <div className="relative flex rounded-full bg-ink/5 p-0.5 text-xs font-semibold">
      <motion.span
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-ink"
        animate={{ left: lang === "en" ? 2 : "50%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {(["en", "vi"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`relative z-10 w-9 py-1 transition-colors ${lang === l ? "text-background" : "text-muted-foreground"}`}
        >
          {l === "en" ? "En" : "Vi"}
        </button>
      ))}
    </div>
  );

  return (
    <main className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 py-10 lg:py-0 overflow-y-auto lg:overflow-hidden bg-background">
      {/* Decorative backdrop blurs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-honey/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-sky/25 blur-3xl" />

      {/* Top Left Back Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 md:top-6 md:left-6 z-30 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-pop transition hover:-translate-y-0.5"
      >
        <ArrowLeft className="h-3.5 w-3.5 text-primary" />
        <span>{c.back}</span>
      </Link>

      {/* Top Right Language Switcher */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30">
        {LangToggle}
      </div>

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Header (Clean Sentence Case, No Uppercase) */}
        <div className="text-center mb-3 md:mb-4">
          <div className="inline-flex items-center rounded-full border-2 border-ink bg-honey px-3 py-0.5 text-xs font-semibold text-ink shadow-sm mb-1.5">
            <span>{c.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {c.title} <BrushHighlight>{c.highlight}</BrushHighlight>
          </h1>
          <p className="mx-auto mt-1 max-w-xl text-xs sm:text-sm font-light text-muted-foreground">
            {c.sub}
          </p>
        </div>

        {/* 2-Column Minimal Bento */}
        <div className="grid gap-4 md:grid-cols-12 items-start">
          {/* Left: Interactive Legs & Live Photo Preview */}
          <div className="md:col-span-7 rounded-3xl border-2 border-ink bg-card p-4 md:p-5 shadow-pop flex flex-col justify-between gap-3">
            <div>
              {/* Interactive Leg Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {c.legs.map((leg, index) => {
                  const Icon = leg.icon;
                  const isSelected = activeLeg === index;
                  return (
                    <button
                      key={leg.mode}
                      type="button"
                      onClick={() => setActiveLeg(index)}
                      className={`group flex flex-col items-center text-center p-2 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? "border-ink bg-honey/40 shadow-sm"
                          : "border-ink/10 bg-background/50 hover:border-ink/30 hover:bg-background"
                      }`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-ink bg-card text-ink mb-1 transition group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-xs text-foreground truncate w-full">
                        {leg.mode}
                      </span>
                      <span className="text-[10px] text-muted-foreground truncate w-full">
                        {leg.place}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Photo Display for the Active Leg */}
              <div className="relative h-44 sm:h-48 w-full rounded-2xl border-2 border-ink overflow-hidden bg-muted shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLeg.mode}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full w-full"
                  >
                    <img
                      src={currentLeg.image}
                      alt={currentLeg.place}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent flex items-end p-3.5">
                      <div className="text-background">
                        <div className="font-bold text-xs sm:text-sm text-honey">
                          {currentLeg.place}
                        </div>
                        <p className="text-[11px] text-background/90 line-clamp-2 mt-0.5 font-light">
                          {currentLeg.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Logistics Chips */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t-2 border-ink/10">
              {c.meta.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-2 rounded-lg border border-ink/10 bg-background/50 p-2">
                    <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="font-medium text-foreground text-[11px] truncate">
                      {m.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Direct Registration Form (Compact, No Stretch) */}
          <div className="md:col-span-5 rounded-3xl border-2 border-ink bg-honey-soft/50 p-4 md:p-5 shadow-pop">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-6 text-center space-y-3"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border-2 border-ink bg-honey text-ink">
                    <Check className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Reservation confirmed</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {c.thanks}
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 rounded-xl border-2 border-ink bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-pop transition hover:-translate-y-0.5"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    <span>{c.back}</span>
                  </Link>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!email.trim() || !fullName.trim() || isSubmitting) return;
                    setIsSubmitting(true);
                    try {
                      // shortcut: FormSubmit free endpoint relays directly to Gmail without a dedicated backend; requires one-time confirmation on first run
                      await fetch("https://formsubmit.co/ajax/viebee.contact@gmail.com", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: JSON.stringify({
                          name: fullName.trim(),
                          email: email.trim(),
                          phone: phone.trim() || "Not provided",
                          guests,
                          _subject: "[VieBee Event] RSVP for Saigon Commute Tour",
                          _captcha: "false",
                          message: `New RSVP for Saigon Commute Tour:\n- Name: ${fullName.trim()}\n- Email: ${email.trim()}\n- Phone: ${phone.trim() || "Not provided"}\n- Guests: ${guests}`,
                        }),
                      });
                    } catch (err) {
                      console.error("Event RSVP error:", err);
                    } finally {
                      setIsSubmitting(false);
                      setSubmitted(true);
                    }
                  }}
                  className="flex flex-col gap-3"
                >
                  <div>
                    <h2 className="text-base font-bold text-ink">{c.formTitle}</h2>
                    <p className="text-[11px] text-ink/70 mt-0.5">{c.formSub}</p>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={c.namePlaceholder}
                      className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2 text-xs text-ink outline-none transition focus:shadow-pop"
                    />

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={c.emailPlaceholder}
                      className="w-full rounded-xl border-2 border-ink bg-background px-3 py-2 text-xs text-ink outline-none transition focus:shadow-pop"
                    />

                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={c.phonePlaceholder}
                        className="col-span-2 rounded-xl border-2 border-ink bg-background px-3 py-2 text-xs text-ink outline-none transition focus:shadow-pop"
                      />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="col-span-1 rounded-xl border-2 border-ink bg-background px-2 py-2 text-xs text-ink outline-none transition focus:shadow-pop"
                      >
                        <option value="1">1 {c.guestsLabel}</option>
                        <option value="2">2 {c.guestsLabel}</option>
                        <option value="3">3 {c.guestsLabel}</option>
                        <option value="4+">4+ {c.guestsLabel}</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl border-2 border-ink bg-primary py-2.5 px-4 font-bold text-primary-foreground shadow-pop transition hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer text-xs flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "..." : c.submit}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[11px] text-ink/70">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{c.reassurance}</span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
