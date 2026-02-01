import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Plus, Wind } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-border/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Wind className="w-4 h-4" />
              <span>Sedona Method Guided Release</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-6">
              Let go of what<br />holds you back.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              A simple, guided space to process emotions, release resistance, and find your natural state of peace.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => window.location.href = "/wizard"}
              className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
            >
              <Plus className="w-5 h-5 mr-2" />
              Start a New Release
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-muted-foreground italic">
          "The Sedona Method is a simple, powerful, and easy-to-learn technique that shows you how to uncover your natural ability to let go of any uncomfortable or unwanted feeling in the moment."
        </p>
      </div>
    </div>
  );
}
