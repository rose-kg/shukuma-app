import { useAuth } from "@/context/auth-context";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, LogOut, TrendingUp, Calendar, Flame, Activity } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

// Mock Data for Charts
const weeklyData = [
  { name: "Mon", cards: 12 },
  { name: "Tue", cards: 24 },
  { name: "Wed", cards: 0 },
  { name: "Thu", cards: 36 },
  { name: "Fri", cards: 18 },
  { name: "Sat", cards: 52 },
  { name: "Sun", cards: 45 },
];

export default function ProfilePage() {
  const { user, logout, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  if (!user && !isLoading) {
    setLocation("/auth");
    return null;
  }
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto pb-20">
      {/* Header */}
      <header className="p-6 flex items-center justify-between bg-white shadow-sm sticky top-0 z-10">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="font-heading font-bold text-lg">Profile</h1>
        <Button variant="ghost" size="icon" onClick={logout} className="text-destructive">
          <LogOut className="h-5 w-5" />
        </Button>
      </header>

      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
                <div className="w-full flex justify-end mb-4">
                  <Link href="/workout">
                    <Button variant="secondary">Go to Workouts</Button>
                  </Link>
                </div>
        
        {/* User Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-heading font-bold">{user.name}</h2>
            <p className="text-muted-foreground text-sm">Member since {user.joinDate}</p>
            <div className="flex gap-2 mt-2">
               <span className="bg-primary/10 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">Pro Member</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center pt-6">
              <Flame className="h-8 w-8 text-orange-500 mb-2" />
              <span className="text-3xl font-heading font-black">{user.streak}</span>
              <span className="text-xs text-muted-foreground uppercase font-bold">Day Streak</span>
            </CardContent>
          </Card>
          <Card>
             <CardContent className="p-4 flex flex-col items-center justify-center text-center pt-6">
              <Activity className="h-8 w-8 text-blue-500 mb-2" />
              <span className="text-3xl font-heading font-black">{user.workoutsCompleted}</span>
              <span className="text-xs text-muted-foreground uppercase font-bold">Workouts</span>
            </CardContent>
          </Card>
        </div>

        {/* Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Weekly Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar 
                    dataKey="cards" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent History */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Workouts
          </h3>
          
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 rounded-xl border shadow-sm flex justify-between items-center">
                <div>
                  <h4 className="font-bold">Full Deck Challenge</h4>
                  <p className="text-xs text-muted-foreground">Yesterday • 14:20 mins</p>
                </div>
                <div className="text-right">
                  <span className="block font-heading font-black text-green-600">+52</span>
                  <span className="text-xs text-muted-foreground">Cards</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
