import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Code2, Trophy, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const CodingProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lcStats, setLcStats] = useState(null);

  useEffect(() => {
    // Attempt to fetch LeetCode stats (public API) via proxy to avoid CORS
    fetch("https://corsproxy.io/?https://leetcode-stats-api.herokuapp.com/Yagnatejeswar_Reddy")
      .then(res => res.json())
      .then(data => {
        if (data && data.status === "success") {
          setLcStats(data);
        }
      })
      .catch((err) => {
        // Silently fallback to offline static stats to avoid console pollution
      });
  }, []);

  const profiles = [
    {
      name: "LeetCode",
      username: "Yagnatejeswar_Reddy",
      link: "https://leetcode.com/u/Yagnatejeswar_Reddy/",
      icon: Code2,
      color: "orange",
      stats: lcStats ? {
        total: lcStats.totalSolved,
        breakdown: [
          { label: "Easy", value: lcStats.easySolved, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Med", value: lcStats.mediumSolved, color: "text-orange-500", bg: "bg-orange-500/10" },
          { label: "Hard", value: lcStats.hardSolved, color: "text-red-500", bg: "bg-red-500/10" }
        ]
      } : {
        total: "151",
        breakdown: [
          { label: "Easy", value: "99", color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Med", value: "50", color: "text-orange-500", bg: "bg-orange-500/10" },
          { label: "Hard", value: "2", color: "text-red-500", bg: "bg-red-500/10" }
        ]
      }
    },
    {
      name: "GeeksforGeeks",
      username: "kampal9us5",
      link: "https://www.geeksforgeeks.org/profile/kampal9us5?tab=activity",
      icon: Trophy,
      color: "green",
      stats: {
        total: "66",
        breakdown: [
          { label: "Basic", value: "30", color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Easy", value: "25", color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Med", value: "11", color: "text-yellow-500", bg: "bg-yellow-500/10" }
        ]
      }
    }
  ];

  return (
    <section id="coding" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4"
          >
            Competitive Programming
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight"
          >
            Problem <span className="gradient-text">Solving Stats</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card rounded-[2.5rem] p-8 md:p-10 group gradient-border-glow relative overflow-hidden flex flex-col h-full shadow-2xl"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 rounded-2xl bg-${profile.color === 'orange' ? 'primary' : 'green-500'}/10 flex items-center justify-center border border-${profile.color === 'orange' ? 'primary' : 'green-500'}/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner`}>
                    <profile.icon size={32} className={profile.color === 'orange' ? 'text-primary' : 'text-green-500'} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                      <Zap size={10} className="text-primary" /> @{profile.username}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                    Total Solved
                  </div>
                  <div className="text-4xl font-black gradient-text">
                    {profile.stats.total}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {profile.stats.breakdown.map((stat) => (
                  <div key={stat.label} className={`${stat.bg} rounded-2xl p-4 border border-white/5 group-hover:border-white/10 transition-all text-center`}>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${stat.color} mb-1 opacity-70`}>
                      {stat.label}
                    </div>
                    <div className="text-xl font-black text-foreground">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-6 border-t border-white/5">
                <Button 
                  variant="outline" 
                  className="w-full rounded-2xl py-7 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 group/btn relative overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all active:scale-95"
                  asChild
                >
                  <a href={profile.link} target="_blank" rel="noopener noreferrer">
                    <Activity size={18} className="text-primary group-hover/btn:animate-pulse" />
                    View Professional Profile 
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform opacity-60" />
                  </a>
                </Button>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
