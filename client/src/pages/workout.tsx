import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause, RotateCw, Trophy, Info } from "lucide-react";
import { EXERCISES, shuffleDeck, Exercise, filterDeck, Category, Level } from "@/lib/exercises";
import { useAuth } from "@/context/auth-context";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firestore";
import { ExerciseCard } from "@/components/exercise-card";
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WorkoutFilters } from "@/components/workout-filter";

export default function Workout() {
  const [selectedReview, setSelectedReview] = useState<string>("");
  const [reviewSent, setReviewSent] = useState(false);
  const { user } = useAuth();
  const [deck, setDeck] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Filter state
  const [filters, setFilters] = useState<{ category: Category[]; level: Level[] }>({ category: [], level: [] });

  // Initialize deck with filters
  useEffect(() => {
    const filtered = filterDeck(EXERCISES, filters);
    setDeck(shuffleDeck(filtered));
    setCurrentIndex(0);
    setIsFinished(false);
    setIsPlaying(false);
    setTime(0);
  }, [filters]);

  const handleFiltersApply = (newFilters: { category: Category[]; level: Level[] }) => {
    setFilters(newFilters);
  };

  // Timer logic
  useEffect(() => {
    if (isPlaying && !isFinished) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10); // Add 10ms
      }, 10);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isFinished]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${centiseconds.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNextCard = async () => {
    if (!isPlaying) return;
    
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setIsPlaying(false);
      // Update streak and workoutsCompleted in Firestore
      if (user) {
        try {
          const userRef = doc(db, "users", user.id);
          await updateDoc(userRef, {
            streak: (user.streak || 0) + 1,
            workoutsCompleted: (user.workoutsCompleted || 0) + 1,
          });
        } catch (err) {
          // Optionally handle error (e.g., toast)
        }
      }
    }
  };

  const handleRestart = () => {
    const filtered = filterDeck(EXERCISES, filters);
    setDeck(shuffleDeck(filtered));
    setCurrentIndex(0);
    setIsFinished(false);
    setIsPlaying(false);
    setTime(0);
  };

  const currentExercise = deck[currentIndex];
  const progress = deck.length > 0 ? ((currentIndex) / deck.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative">
      <div className="w-full flex justify-end p-4">
        <Link href="/profile">
          <Button variant="secondary">Go to Dashboard</Button>
        </Link>
      </div>
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-primary text-primary-foreground shadow-sm z-20 relative">
        <Link href="/">
          <Button variant="ghost" size="icon" className="hover:bg-white/20 text-primary-foreground" data-testid="button-back">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="font-heading font-bold text-lg">SHUKUMA</h1>
        <div className="flex gap-2">
           {!isPlaying && <WorkoutFilters onApply={handleFiltersApply} />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 relative overflow-hidden">
        
        {/* Status Bar */}
        <div className="mb-6 space-y-2">
           {!isPlaying && !isFinished && currentIndex === 0 ? (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border shadow-sm text-center">
                  <p className="text-sm text-muted-foreground uppercase font-bold mb-1">Cards in Deck</p>
                  <p className="text-4xl font-black font-heading">{deck.length}</p>
                  {deck.length === 0 && <p className="text-red-500 text-xs font-bold mt-2">Try adjusting filters!</p>}
                </div>

                <Button 
                  onClick={handleStart} 
                  className="w-full py-6 text-xl font-black uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-transform bg-primary text-primary-foreground"
                  data-testid="button-start-workout"
                  disabled={deck.length === 0}
                >
                  Start Workout
                </Button>
              </div>
           ) : (
             <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant={isPlaying ? "secondary" : "default"}
                  onClick={isPlaying ? handlePause : handleStart}
                  disabled={isFinished}
                  className="w-full font-bold uppercase"
                  data-testid="button-pause-resume"
                >
                  {isPlaying ? "Pause" : "Resume"}
                </Button>
                 <Sheet>
                  <SheetTrigger asChild>
                     <Button variant="outline" className="w-full font-bold uppercase" disabled={!currentExercise}>
                        Tutorial
                     </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl">
                    <SheetHeader>
                      <SheetTitle className="text-2xl font-heading uppercase">{currentExercise?.name}</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      <div className="aspect-video bg-black rounded-xl flex items-center justify-center text-white">
                         {/* Placeholder for video */}
                         <Play className="h-12 w-12 opacity-50" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Instructions:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          {currentExercise?.instructions.map((inst, i) => (
                            <li key={i}>{inst}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <Button 
                  variant="destructive" 
                  onClick={handleRestart}
                  className="w-full font-bold uppercase"
                  data-testid="button-restart"
                >
                  Restart
                </Button>
             </div>
           )}

           <div className="bg-white p-4 rounded-xl shadow-sm border mt-4">
             <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Time</p>
                  <p className="font-mono text-2xl font-bold" data-testid="text-timer">{formatTime(time)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Completed</p>
                  <p className="font-mono text-2xl font-bold" data-testid="text-progress">{currentIndex}/{deck.length}</p>
                </div>
             </div>
             <div className="h-2 bg-secondary rounded-full overflow-hidden">
               <div 
                 className="h-full bg-primary transition-all duration-500 ease-out"
                 style={{ width: `${progress}%` }}
               />
             </div>
           </div>
        </div>

        {/* Card Area */}
        <div className="flex-1 flex items-center justify-center relative perspective-1000">
          <AnimatePresence mode="wait">
            {isFinished ? (
              <motion.div 
                key="finished"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-6 p-8 bg-white rounded-3xl shadow-xl border-4 border-primary"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground">
                  <Trophy className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-black text-primary uppercase">End of Workout</h2>
                  <p className="text-muted-foreground mt-2">Well done {user?.name ? user.name : user?.email ? user.email : "!"}!</p>
                </div>
                <div className="py-4 border-y border-dashed space-y-2">
                  <p className="text-lg font-bold text-primary">{Math.round(progress)}%</p>
                  <p className="text-sm uppercase text-muted-foreground font-bold">Cards Completed: {deck.length}</p>
                  <p className="text-sm uppercase text-muted-foreground font-bold">Time: {formatTime(time)}</p>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-lg">Thank you for trying out Shukuma</p>
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-xl mb-2">Review</h3>
                  <p className="mb-4">How was your experience?</p>
                  <div className="flex justify-center gap-2 mb-4">
                    {['😃','😊','😐','😞'].map((emoji) => (
                      <Button
                        key={emoji}
                        variant={selectedReview === emoji ? "default" : "outline"}
                        onClick={() => setSelectedReview(emoji)}
                        style={selectedReview === emoji ? { backgroundColor: '#FF9800', color: '#fff' } : {}}
                      >
                        {emoji}
                      </Button>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="w-full font-bold text-md"
                    disabled={!selectedReview || reviewSent}
                    onClick={() => {
                      // Here you would send the review to your backend or Firestore
                      setReviewSent(true);
                      setTimeout(() => {
                        setSelectedReview("");
                        setReviewSent(false);
                      }, 1500);
                    }}
                    style={{ backgroundColor: selectedReview ? '#FF9800' : undefined, color: selectedReview ? '#fff' : undefined }}
                  >
                    {reviewSent ? "Review Sent!" : "Send Review"}
                  </Button>
                </div>
                <a href="https://www.y-notofficial.co.za/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="w-full font-bold text-lg mt-8 mb-4" 
                    style={{ backgroundColor: '#FF9800', color: '#fff' }}
                  >
                    Purchase the Deck
                  </Button>
                </a>
                <Button size="lg" className="w-full font-bold text-lg" onClick={handleRestart}>
                  Start New Workout
                </Button>
              </motion.div>
            ) : (
              currentExercise && (
                <div className="relative w-full flex justify-center">
                   {/* Stack effect */}
                   <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90%] h-full bg-white border rounded-3xl shadow-sm -z-10 rotate-3"></div>
                   <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[85%] h-full bg-white border rounded-3xl shadow-sm -z-20 -rotate-2"></div>
                   
                   <ExerciseCard 
                     exercise={currentExercise} 
                     isActive={isPlaying} 
                     onClick={handleNextCard}
                   />
                   
                   {isPlaying && (
                     <div className="absolute -bottom-12 left-0 right-0 text-center animate-bounce">
                       <span className="text-sm font-bold text-muted-foreground bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                         Tap card to complete
                       </span>
                     </div>
                   )}
                </div>
              )
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
