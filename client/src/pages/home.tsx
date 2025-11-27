import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, CreditCard, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[250px] h-[250px] bg-accent/30 rounded-full blur-[60px] pointer-events-none" />

      {/* Header */}
      <header className="p-6 pt-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg rotate-3">
            <span className="font-heading font-black text-2xl text-white">S</span>
          </div>
          <span className="font-heading font-black text-2xl tracking-tight">SHUKUMA</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Users className="h-6 w-6" />
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 px-6 flex flex-col justify-center z-10 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-2">
             <h1 className="text-5xl font-heading font-black leading-[0.9]">
               FITNESS<br/>
               <span className="text-primary">ANYWHERE</span><br/>
               ANYTIME
             </h1>
             <p className="text-lg text-muted-foreground max-w-[280px] leading-relaxed">
               The digital deck of cards that randomizes your workout. No gym required.
             </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="/workout">
              <Button size="lg" className="h-16 px-8 rounded-2xl text-xl font-heading font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                <Play className="mr-2 h-6 w-6 fill-current" />
                START DECK
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-12"
        >
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-blue-600">
               <CreditCard className="h-5 w-5" />
             </div>
             <h3 className="font-bold mb-1">Randomized</h3>
             <p className="text-xs text-muted-foreground">Every workout is a surprise.</p>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3 text-green-600">
               <Trophy className="h-5 w-5" />
             </div>
             <h3 className="font-bold mb-1">Challenges</h3>
             <p className="text-xs text-muted-foreground">Track streaks & progress.</p>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
