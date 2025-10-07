import { useState, useMemo } from "react";
import { CarCard } from "@/components/CarCard";
import { Filters, FilterValues } from "@/components/Filters";
import { cars } from "@/data/cars";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Catalog() {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<FilterValues>({
    brand: "all",
    priceRange: "all",
    yearRange: "all",
    bodyType: "all",
  });

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Brand filter
      if (filters.brand !== "all" && car.brand !== filters.brand) {
        return false;
      }

      // Price filter
      if (filters.priceRange !== "all") {
        const [min, max] = filters.priceRange.split("-").map(v => v.replace("+", ""));
        const minPrice = parseInt(min);
        const maxPrice = max ? parseInt(max) : Infinity;
        if (car.price < minPrice || car.price > maxPrice) {
          return false;
        }
      }

      // Year filter
      if (filters.yearRange !== "all" && car.year.toString() !== filters.yearRange) {
        return false;
      }

      // Body type filter
      if (filters.bodyType !== "all" && car.bodyType !== filters.bodyType) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("catalogTitle")}
        </h1>

        <Filters onFilterChange={setFilters} />

        <div className="mb-4 text-muted-foreground">
          {t("allCars")}: {filteredCars.length}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Автомобили не найдены. Попробуйте изменить фильтры.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
