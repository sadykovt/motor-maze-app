import { useParams, useNavigate } from "react-router-dom";
import { Phone, ArrowLeft, Gauge, Calendar, Palette, Fuel, Settings, Zap, Car as CarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RequestForm } from "@/components/RequestForm";
import { cars } from "@/data/cars";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Автомобиль не найден</h1>
          <Button onClick={() => navigate("/")}>Вернуться в каталог</Button>
        </div>
      </div>
    );
  }

  const handleCall = () => {
    window.location.href = `tel:${t("phone")}`;
  };

  const specs = [
    { icon: Calendar, label: t("year"), value: car.year },
    { icon: Gauge, label: t("mileage"), value: `${car.mileage.toLocaleString()} км` },
    { icon: Settings, label: t("transmission"), value: t(car.transmission) },
    { icon: Fuel, label: t("fuel"), value: t(car.fuel) },
    { icon: Palette, label: t("color"), value: t(car.color) },
    { icon: CarIcon, label: t("bodyType"), value: t(car.bodyType) },
    { icon: Zap, label: t("engine"), value: car.engine },
    { icon: Zap, label: t("power"), value: car.power },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("catalog")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                {car.year} {t("year")}
              </Badge>
            </div>
          </div>

          {/* Main Info */}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {car.brand} {car.model}
            </h1>
            <div className="text-4xl font-bold text-primary mb-6">
              ${car.price.toLocaleString()}
            </div>

            {car.description && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{t("description")}</h2>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </div>
            )}

            <div className="flex gap-4 mb-6">
              <Button
                variant="accent"
                size="lg"
                className="flex-1"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t("call")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => {
                  const element = document.getElementById("request");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("requestCall")}
              </Button>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div className="bg-card border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">{t("characteristics")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <spec.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{spec.label}</div>
                  <div className="font-semibold">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form */}
        <div id="request" className="max-w-2xl mx-auto">
          <RequestForm carInfo={`${car.brand} ${car.model} ${car.year}`} />
        </div>
      </div>
    </div>
  );
}
