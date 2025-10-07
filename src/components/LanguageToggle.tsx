import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "ru" ? "uz" : "ru")}
      className="font-semibold"
    >
      {language === "ru" ? "UZ" : "RU"}
    </Button>
  );
}
