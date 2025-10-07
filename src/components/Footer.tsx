import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">AutoMarket</h3>
            <p className="text-muted-foreground mb-4">
              {t("language") === "ru" 
                ? "Продажа качественных автомобилей с гарантией. Большой выбор, низкие цены."
                : "Sifatli avtomobillar sotish. Katta tanlov, past narxlar."}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("language") === "ru" ? "Контакты" : "Aloqa"}
            </h3>
            <div className="space-y-3">
              <a 
                href={`tel:${t("phone")}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t("phone")}
              </a>
              <a 
                href="mailto:info@automarket.uz"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@automarket.uz
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {t("language") === "ru" ? "Ташкент, Узбекистан" : "Toshkent, O'zbekiston"}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {t("language") === "ru" ? "Мы в соцсетях" : "Ijtimoiy tarmoqlar"}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} AutoMarket. {t("language") === "ru" ? "Все права защищены." : "Barcha huquqlar himoyalangan."}</p>
        </div>
      </div>
    </footer>
  );
}
