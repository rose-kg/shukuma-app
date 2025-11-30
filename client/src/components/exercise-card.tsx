import { Exercise } from "@/lib/exercises";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ExerciseCardProps {
  exercise: Exercise;
  isActive: boolean;
  onClick?: () => void;
}

export function ExerciseCard({ exercise, isActive, onClick }: ExerciseCardProps) {
  return (
    <motion.div 
      className={cn(
        "relative w-full max-w-sm aspect-[3/4] cursor-pointer perspective-1000",
        isActive ? "z-10" : "z-0"
      )}
      onClick={onClick}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0, x: -200 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      data-testid={`card-${exercise.id}`}
    >
      <Card className="w-full h-full border-4 border-white shadow-xl overflow-hidden bg-white rounded-3xl relative">
        <CardContent className="flex flex-col items-center justify-center h-full p-6 pt-12">
          <div className="relative w-full aspect-square mb-4 flex items-center justify-center">
             {/* Yellow Background Circle - simulating the style */}
             <div className="absolute inset-0 bg-yellow-100 rounded-full opacity-50 scale-90 blur-xl"></div>
             <img 
               src={exercise.image} 
               alt={exercise.name} 
               className="relative z-10 object-contain w-full h-full drop-shadow-sm"
             />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
