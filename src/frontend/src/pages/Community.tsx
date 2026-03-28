import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { BookOpen, FlaskConical, MessageCircle, Users } from "lucide-react";
import { motion } from "motion/react";
import { NavBar } from "../components/NavBar";

const rooms = [
  {
    id: "class-1",
    label: "Class 1",
    desc: "Primary level — numbers, alphabets, EVS",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    badge: "bg-pink-500/20 text-pink-300",
  },
  {
    id: "class-2",
    label: "Class 2",
    desc: "Numbers, rhymes, general knowledge",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    badge: "bg-orange-500/20 text-orange-300",
  },
  {
    id: "class-3",
    label: "Class 3",
    desc: "Maths, EVS, language basics",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30",
    badge: "bg-yellow-500/20 text-yellow-300",
  },
  {
    id: "class-4",
    label: "Class 4",
    desc: "Fractions, science, social studies",
    color: "from-lime-500/20 to-green-500/10",
    border: "border-lime-500/30",
    badge: "bg-lime-500/20 text-lime-300",
  },
  {
    id: "class-5",
    label: "Class 5",
    desc: "EVS, maths, grammar fundamentals",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/30",
    badge: "bg-green-500/20 text-green-300",
  },
  {
    id: "class-6",
    label: "Class 6",
    desc: "History, science, algebra basics",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/30",
    badge: "bg-teal-500/20 text-teal-300",
  },
  {
    id: "class-7",
    label: "Class 7",
    desc: "Geography, biology, decimals",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/20 text-cyan-300",
  },
  {
    id: "class-8",
    label: "Class 8",
    desc: "Civics, physics intro, linear equations",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    badge: "bg-sky-500/20 text-sky-300",
  },
  {
    id: "class-9",
    label: "Class 9",
    desc: "Coordinate geometry, laws of motion",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    badge: "bg-blue-500/20 text-blue-300",
  },
  {
    id: "class-10",
    label: "Class 10",
    desc: "Board exam prep — all subjects",
    color: "from-indigo-500/20 to-violet-500/10",
    border: "border-indigo-500/30",
    badge: "bg-indigo-500/20 text-indigo-300",
  },
  {
    id: "class-11",
    label: "Class 11",
    desc: "Physics, chemistry, maths deep dive",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    badge: "bg-violet-500/20 text-violet-300",
  },
  {
    id: "class-12",
    label: "Class 12",
    desc: "Board + entrance exam strategy",
    color: "from-purple-500/20 to-fuchsia-500/10",
    border: "border-purple-500/30",
    badge: "bg-purple-500/20 text-purple-300",
  },
  {
    id: "iit-jee",
    label: "IIT JEE",
    desc: "Advanced Physics, Chemistry & Maths",
    color: "from-neon-purple/20 to-neon-blue/10",
    border: "border-neon-purple/40",
    badge: "bg-neon-purple/20 text-neon-purple",
    isSpecial: true,
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Users size={15} />
            Live Community Chat
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Class Chat Rooms
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Join your class chat room, ask doubts, share notes, and connect with
            fellow students. Upload images and audio clips too!
          </p>
        </motion.div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Card
                className={`group relative overflow-hidden bg-gradient-to-br ${room.color} border ${room.border} hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full`}
                data-ocid={`community.item.${i + 1}`}
              >
                {room.isSpecial && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-neon-purple/30 text-neon-purple border-neon-purple/40 text-[10px]">
                      Special
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-2 pt-4 px-4">
                  <div className="flex items-center gap-2 mb-1">
                    {room.isSpecial ? (
                      <FlaskConical size={18} className="text-neon-purple" />
                    ) : (
                      <BookOpen size={18} className="text-foreground/60" />
                    )}
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${room.badge}`}
                    >
                      {room.label}
                    </span>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {room.label} Chat
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {room.desc}
                  </p>
                  <Link to="/community/$roomId" params={{ roomId: room.id }}>
                    <Button
                      size="sm"
                      data-ocid={`community.join_button.${i + 1}`}
                      className="w-full gap-2 bg-background/60 hover:bg-primary/20 border border-border/60 hover:border-primary/40 text-foreground hover:text-primary transition-all text-xs h-8"
                    >
                      <MessageCircle size={13} />
                      Join Chat
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 rounded-xl border border-border/40 bg-muted/20 text-center text-xs text-muted-foreground"
        >
          💡 Keep chats respectful and educational. Share notes, ask questions,
          and help each other grow!
        </motion.div>
      </main>
    </div>
  );
}
