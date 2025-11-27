import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Check } from "lucide-react";
import { useState } from "react";
import { Category, Level } from "@/lib/exercises";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface WorkoutFiltersProps {
  onApply: (filters: { category: Category[]; level: Level[] }) => void;
}

export function WorkoutFilters({ onApply }: WorkoutFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<Level[]>([]);
  const [open, setOpen] = useState(false);

  const categories: Category[] = ["cardio", "strength", "flexibility", "core"];
  const levels: Level[] = ["beginner", "intermediate", "advanced"];

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleLevel = (lvl: Level) => {
    setSelectedLevels(prev => 
      prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]
    );
  };

  const handleApply = () => {
    onApply({ category: selectedCategories, level: selectedLevels });
    setOpen(false);
  };

  const activeCount = selectedCategories.length + selectedLevels.length;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 relative">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full font-bold shadow-sm">
              {activeCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-3xl h-[70vh]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-heading uppercase text-center">Customize Deck</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-8">
          
          {/* Category Section */}
          <div className="space-y-4">
            <Label className="text-base font-bold uppercase text-muted-foreground">Focus Area</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <div 
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={cn(
                    "cursor-pointer px-4 py-2 rounded-full border-2 transition-all capitalize font-bold select-none",
                    selectedCategories.includes(cat) 
                      ? "bg-primary/10 border-primary text-primary-foreground" 
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                  )}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Level Section */}
          <div className="space-y-4">
            <Label className="text-base font-bold uppercase text-muted-foreground">Difficulty</Label>
             <div className="flex flex-wrap gap-2">
              {levels.map(lvl => (
                <div 
                  key={lvl}
                  onClick={() => toggleLevel(lvl)}
                  className={cn(
                    "cursor-pointer px-4 py-2 rounded-full border-2 transition-all capitalize font-bold select-none",
                    selectedLevels.includes(lvl) 
                      ? "bg-black/5 border-black text-black" 
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                  )}
                >
                  {lvl}
                </div>
              ))}
            </div>
          </div>

        </div>

        <SheetFooter className="absolute bottom-6 left-6 right-6">
          <Button size="lg" className="w-full text-lg font-bold shadow-lg" onClick={handleApply}>
            Apply Filters
          </Button>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}
