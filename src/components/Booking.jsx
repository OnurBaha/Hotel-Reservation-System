import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Booking({ setView, room }) {
  const todayStr = "2026-06-21";
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [liveCheckIn, setLiveCheckIn] = useState(todayStr);
  const [liveCheckOut, setLiveCheckOut] = useState("2026-06-28");
  const [liveAdults, setLiveAdults] = useState(2);
  const [liveChildren, setLiveChildren] = useState(0);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkInDate: liveCheckIn,
      checkOutDate: liveCheckOut,
      adults: liveAdults,
      children: liveChildren,
    },
  });

  if (!room) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-500 mb-4">
          Rezervasyon yapılacak oda seçilmedi.
        </p>
        <button onClick={() => setView("rooms")} className="btn-back mx-auto">
          ← Odaları Listele
        </button>
      </div>
    );
  }

  const timeDiff = new Date(liveCheckOut) - new Date(liveCheckIn);
  const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

  const singleAdultPrice = room.price / 2;

  const extraAdultCost = Math.max(0, liveAdults - 2) * singleAdultPrice;
  const childCost = liveChildren * (singleAdultPrice * 0.25);

  const dynamicPricePerNight = room.price + extraAdultCost + childCost;
  const grandTotal = dynamicPricePerNight * nights;
  const totalAccommodation = grandTotal;

  const onSubmit = (data) => {
    console.log("Rezervasyon ve Kart Bilgileri Başarıyla Toplandı:", data);

    setIsSuccessModalOpen(true);

    setTimeout(() => {
      setIsSuccessModalOpen(false);
      setView("home");
    }, 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in relative">
      <h1 className="booking-page-title">Rezervasyon Aşaması</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="booking-grid">
        <div className="booking-form-side">
          <h2 className="booking-form-section-title">
            1. Konaklama Planlaması
          </h2>
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Giriş Tarihi</label>
              <input
                type="date"
                min={todayStr}
                className={`search-input ${errors.checkInDate ? "input-error" : ""}`}
                {...register("checkInDate", {
                  required: "Giriş tarihi zorunludur",
                  min: {
                    value: todayStr,
                    message: "Giriş tarihi bugünden önce olamaz",
                  },
                  onChange: (e) => setLiveCheckIn(e.target.value),
                })}
              />
              {errors.checkInDate && (
                <span className="form-error">{errors.checkInDate.message}</span>
              )}
            </div>

            <div className="search-group">
              <label className="search-label">Çıkış Tarihi</label>
              <input
                type="date"
                min={liveCheckIn}
                className={`search-input ${errors.checkOutDate ? "input-error" : ""}`}
                {...register("checkOutDate", {
                  required: "Çıkış tarihi zorunludur",
                  validate: (value) =>
                    value > getValues("checkInDate") ||
                    "Çıkış tarihi, giriş tarihinden sonra olmalıdır",
                  onChange: (e) => setLiveCheckOut(e.target.value),
                })}
              />
              {errors.checkOutDate && (
                <span className="form-error">
                  {errors.checkOutDate.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Yetişkin Sayısı</label>
              <select
                className="search-input"
                {...register("adults", {
                  onChange: (e) => setLiveAdults(Number(e.target.value)),
                })}
              >
                <option value={1}>1 Yetişkin</option>
                <option value={2}>2 Yetişkin (Standart)</option>
                <option value={3}>3 Yetişkin (+%50)</option>
                <option value={4}>4 Yetişkin (+%100)</option>
              </select>
            </div>

            <div className="search-group">
              <label className="search-label">Çocuk Sayısı</label>
              <select
                className="search-input"
                {...register("children", {
                  onChange: (e) => setLiveChildren(Number(e.target.value)),
                })}
              >
                <option value={0}>Çocuk Yok</option>
                <option value={1}>1 Çocuk (+%12.5)</option>
                <option value={2}>2 Çocuk (+%25)</option>
                <option value={3}>3 Çocuk (+%37.5)</option>
              </select>
            </div>
          </div>

          <br />
          <br />

          <h2 className="booking-form-section-title">2. Misafir Bilgileri</h2>
          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Adınız</label>
              <input
                type="text"
                placeholder="Ahmet"
                className="search-input"
                {...register("firstName", { required: "Ad alanı zorunludur" })}
              />
              {errors.firstName && (
                <span className="form-error">{errors.firstName.message}</span>
              )}
            </div>
            <div className="search-group">
              <label className="search-label">Soyadınız</label>
              <input
                type="text"
                placeholder="Yılmaz"
                className="search-input"
                {...register("lastName", {
                  required: "Soyad alanı zorunludur",
                })}
              />
              {errors.lastName && (
                <span className="form-error">{errors.lastName.message}</span>
              )}
            </div>
          </div>

          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">E-Posta Adresi</label>
              <input
                type="email"
                placeholder="ahmet@example.com"
                className="search-input"
                {...register("email", {
                  required: "E-posta zorunludur",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Geçersiz e-posta adresi",
                  },
                })}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="search-group">
              <label className="search-label">Telefon Numarası</label>
              <input
                type="tel"
                placeholder="+90 555 000 00 00"
                className="search-input"
                {...register("phone", {
                  required: "Telefon numarası zorunludur",
                  minLength: {
                    value: 10,
                    message: "Telefon numarası eksik veya geçersiz",
                  },
                })}
              />
              {errors.phone && (
                <span className="form-error">{errors.phone.message}</span>
              )}
            </div>
          </div>

          <br />
          <br />

          <h2 className="booking-form-section-title">
            3. Güvenli Ödeme Noktası
          </h2>
          <div className="search-group">
            <label className="search-label">Kart Üzerindeki İsim</label>
            <input
              type="text"
              placeholder="Ahmet Yılmaz"
              className="search-input"
              {...register("cardName", {
                required: "Kart sahibi adı zorunludur",
              })}
            />
            {errors.cardName && (
              <span className="form-error">{errors.cardName.message}</span>
            )}
          </div>

          <div className="search-group">
            <label className="search-label">Kart Numarası</label>
            <input
              type="text"
              maxLength="19"
              placeholder="4355 8800 1234 5678"
              className="search-input"
              {...register("cardNumber", {
                required: "Kart numarası zorunludur",
                pattern: {
                  value: /^[0-9 ]+$/,
                  message: "Sadece rakam girişi yapılabilir",
                },
                minLength: { value: 16, message: "Kart numarası eksik" },
              })}
            />
            {errors.cardNumber && (
              <span className="form-error">{errors.cardNumber.message}</span>
            )}
          </div>

          <div className="form-grid-2">
            <div className="search-group">
              <label className="search-label">Son Kullanma (MM/YY)</label>
              <input
                type="text"
                maxLength="5"
                placeholder="12/29"
                className="search-input"
                {...register("cardExpiry", {
                  required: "Süre zorunludur",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                    message: "Format MM/YY olmalıdır",
                  },
                })}
              />
              {errors.cardExpiry && (
                <span className="form-error">{errors.cardExpiry.message}</span>
              )}
            </div>

            <div className="search-group">
              <label className="search-label">CVC / CVV</label>
              <input
                type="password"
                maxLength="3"
                placeholder="123"
                className="search-input"
                {...register("cardCvv", {
                  required: "CVC zorunludur",
                  minLength: { value: 3, message: "CVC 3 haneli olmalıdır" },
                })}
              />
              {errors.cardCvv && (
                <span className="form-error">{errors.cardCvv.message}</span>
              )}
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" className="btn-checkout">
              Güvenli Ödeme Yap (₺{grandTotal.toLocaleString("tr-TR")})
            </button>
          </div>
        </div>

        {/* SAĞ PANEL: Gerçek Zamanlı Hesaplanan Özelleştirilmiş Özet */}
        <div className="booking-summary-side">
          <h2 className="summary-title">Rezervasyon Detayları</h2>
          <img src={room.image} alt={room.title} className="summary-img" />

          <div>
            <h3 className="font-bold text-base text-[#1b1c1c]">{room.title}</h3>
            <span className="text-xs font-semibold text-gray-400">
              {room.category} Konsepti
            </span>
          </div>

          <div className="summary-info-box">
            <div className="summary-info-row">
              <span>Giriş Tarihi:</span>
              <span className="font-bold text-[#1b1c1c]">{liveCheckIn}</span>
            </div>
            <div className="summary-info-row">
              <span>Çıkış Tarihi:</span>
              <span className="font-bold text-[#1b1c1c]">{liveCheckOut}</span>
            </div>
            <div className="summary-info-row">
              <span>Konaklama Süresi:</span>
              <span className="font-bold text-[#1b1c1c]">{nights} Gece</span>
            </div>
            <div className="summary-info-row-border">
              <span>Misafir Kombinasyonu:</span>
              <span className="font-bold text-[#1b1c1c]">
                {liveAdults} Yetişkin{" "}
                {liveChildren > 0 && `, ${liveChildren} Çocuk`}
              </span>
            </div>
          </div>

          <div className="summary-price-box">
            <div className="summary-info-row text-xs text-gray-500">
              <span>Standart Gecelik (2 Kişilik):</span>
              <span>₺{room.price.toLocaleString("tr-TR")}</span>
            </div>

            <div className="summary-info-row text-xs text-amber-800 font-medium">
              <span>Kişi Başı Güncellenmiş Gecelik:</span>
              <span>₺{dynamicPricePerNight.toLocaleString("tr-TR")}</span>
            </div>

            <div className="summary-info-row border-t pt-2 mt-2">
              <span>{nights} Gecelik Konaklama Tutarı:</span>
              <span>₺{totalAccommodation.toLocaleString("tr-TR")}</span>
            </div>
            <div className="summary-info-row">
              <span>Vergiler & Servis Bedeli:</span>
              <span>Dahil (₺0)</span>
            </div>
            <div className="summary-info-row">
              <span>Havalimanı Lüks Karşılama:</span>
              <span className="text-emerald-600 font-medium">Ücretsiz VIP</span>
            </div>

            <div className="summary-total-row">
              <span>Toplam Ödenecek:</span>
              <span>₺{grandTotal.toLocaleString("tr-TR")}</span>
            </div>
          </div>
        </div>
      </form>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-2xl text-center border border-[#e5dcd3] mx-4">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
              <span className="text-emerald-600 text-4xl font-light">✓</span>
            </div>

            <h3 className="text-2xl font-bold text-[#1b1c1c] mb-2 tracking-tight">
              Ödemeniz Başarıyla Alındı
            </h3>
            <p className="text-[#554434] text-sm mb-6 leading-relaxed">
              Luxe Vista Otel rezervasyonunuz onaylanmıştır. Bilgileriniz
              e-posta adresinize iletildi.
            </p>

            <div className="w-full bg-[#f3efe9] h-1 rounded-full overflow-hidden mb-2">
              <div className="bg-emerald-600 h-full w-full origin-left animate-[progress_3s_linear_forwards]"></div>
            </div>
            <span className="text-xs text-gray-400 block">
              3 saniye içinde ana sayfaya aktarılıyorsunuz...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}