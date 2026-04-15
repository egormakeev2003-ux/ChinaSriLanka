import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface InfographicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

export function InfographicCard({ icon: Icon, title, description, color, delay = 0 }: InfographicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white/90 text-lg flex-1">{description}</p>
    </motion.div>
  );
}
