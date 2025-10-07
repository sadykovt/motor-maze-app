import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car } from "@/types/car";
import { useLanguage } from "@/contexts/LanguageContext";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = `tel:${t("phone")}`;
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/car/${car.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent text-accent-foreground shadow-lg">
              {car.year} {t("year")}
            </Badge>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/car/${car.id}`}>
          <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
            {car.brand} {car.model}
          </h3>
        </Link>
        
        <div className="text-2xl font-bold text-primary mb-3">
          {t("from")} ${car.price.toLocaleString()}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">{t("mileage")}:</span> {car.mileage.toLocaleString()} км
          </div>
          <div>
            <span className="font-medium">{t("transmission")}:</span> {t(car.transmission)}
          </div>
          <div>
            <span className="font-medium">{t("fuel")}:</span> {t(car.fuel)}
          </div>
          <div>
            <span className="font-medium">{t("color")}:</span> {t(car.color)}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button
          variant="accent"
          className="w-full"
          onClick={handleCall}
        >
          <Phone className="mr-2 h-4 w-4" />
          {t("call")}
        </Button>
        <Button
          variant="outline"
          className="w-full"
          asChild
        >
          <Link to={`/car/${car.id}#request`}>
            <FileText className="mr-2 h-4 w-4" />
            {t("requestCall")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
