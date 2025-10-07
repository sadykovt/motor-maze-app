import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlidersHorizontal, X } from "lucide-react";

interface FiltersProps {
  onFilterChange: (filters: FilterValues) => void;
}

export interface FilterValues {
  brand: string;
  priceRange: string;
  yearRange: string;
  bodyType: string;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<FilterValues>({
    brand: "all",
    priceRange: "all",
    yearRange: "all",
    bodyType: "all",
  });

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetValues: FilterValues = {
      brand: "all",
      priceRange: "all",
      yearRange: "all",
      bodyType: "all",
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== "all");

  return (
    <div className="bg-card border rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">{t("filterByBrand")}</h2>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            <X className="h-4 w-4 mr-1" />
            {t("resetFilters")}
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand">{t("filterByBrand")}</Label>
          <Select value={filters.brand} onValueChange={(v) => handleFilterChange("brand", v)}>
            <SelectTrigger id="brand">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allCars")}</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Hyundai">Hyundai</SelectItem>
              <SelectItem value="Kia">Kia</SelectItem>
              <SelectItem value="Chevrolet">Chevrolet</SelectItem>
              <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
              <SelectItem value="Mazda">Mazda</SelectItem>
              <SelectItem value="Nissan">Nissan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">{t("filterByPrice")}</Label>
          <Select value={filters.priceRange} onValueChange={(v) => handleFilterChange("priceRange", v)}>
            <SelectTrigger id="price">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allCars")}</SelectItem>
              <SelectItem value="0-25000">$0 - $25,000</SelectItem>
              <SelectItem value="25000-35000">$25,000 - $35,000</SelectItem>
              <SelectItem value="35000-50000">$35,000 - $50,000</SelectItem>
              <SelectItem value="50000+">$50,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">{t("filterByYear")}</Label>
          <Select value={filters.yearRange} onValueChange={(v) => handleFilterChange("yearRange", v)}>
            <SelectTrigger id="year">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allCars")}</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bodyType">{t("bodyType")}</Label>
          <Select value={filters.bodyType} onValueChange={(v) => handleFilterChange("bodyType", v)}>
            <SelectTrigger id="bodyType">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allCars")}</SelectItem>
              <SelectItem value="sedan">{t("sedan")}</SelectItem>
              <SelectItem value="suv">{t("suv")}</SelectItem>
              <SelectItem value="crossover">{t("crossover")}</SelectItem>
              <SelectItem value="hatchback">{t("hatchback")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
