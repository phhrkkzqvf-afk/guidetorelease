import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Sparkles, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Step = "input" | "welcome" | "let-go-can" | "let-go-would" | "when" | "check" | "complete";

export default function Wizard() {
  const [step, setStep] = useState<Step>("input");
  const [feeling, setFeeling] = useState("");
  const [intensity, setIntensity] = useState([5]);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleStart = () => {
    if (!feeling.trim()) {
      toast({
        title: "Please enter a feeling",
        description: "Focus on what you are experiencing right now.",
        variant: "destructive",
      });
      return;
    }
    setStep("welcome");
  };

  const handleNext = () => {
    switch (step) {
      case "welcome": setStep("let-go-can"); break;
      case "let-go-can": setStep("let-go-would"); break;
      case "let-go-would": setStep("when"); break;
      case "when": setStep("check"); break;
      case "check": setStep("complete"); break;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20, scale: 0.98 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: -20, scale: 0.98 },
  };

  const pageTransition = {
    type: "tween",
    ease: "circOut",
    duration: 0.4,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="w-full max-w-lg z-10 relative">
        <div className="mb-8 flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="rounded-full w-10 h-10 p-0 text-muted-foreground hover:text-foreground"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="h-1.5 flex-1 mx-8 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ 
                width: step === "input" ? "10%" : 
                       step === "welcome" ? "25%" : 
                       step === "let-go-can" ? "40%" : 
                       step === "let-go-would" ? "60%" : 
                       step === "when" ? "80%" : 
                       "100%" 
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="w-10" />
        </div>

        <AnimatePresence mode="wait">
          {step === "input" && (
            <motion.div
              key="input"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-8 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground">
                  What are you feeling?
                </h1>
                <p className="text-muted-foreground text-lg">
                  Name the emotion to begin releasing it.
                </p>
              </div>

              <div className="space-y-6">
                <Input 
                  value={feeling}
                  onChange={(e) => setFeeling(e.target.value)}
                  placeholder="e.g., Anxiety, Anger, Sadness..."
                  className="text-center text-xl h-16 rounded-2xl border-2 border-muted focus-visible:border-primary focus-visible:ring-0 bg-white/50 backdrop-blur-sm"
                  autoFocus
                />
                
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-sm">
                  <div className="flex justify-between text-sm font-medium text-muted-foreground mb-4">
                    <span>Low Intensity</span>
                    <span>High Intensity</span>
                  </div>
                  <Slider 
                    value={intensity} 
                    onValueChange={setIntensity} 
                    min={0} 
                    max={10} 
                    step={1} 
                    className="py-4"
                  />
                  <div className="mt-2 text-3xl font-display font-bold text-primary">{intensity[0]}</div>
                </div>
              </div>

              <Button size="lg" onClick={handleStart} className="w-full text-lg">
                Begin Release
              </Button>
            </motion.div>
          )}

          {step === "welcome" && (
            <motion.div
              key="welcome"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display leading-tight text-foreground">
                Could you allow yourself to welcome this feeling?
              </h2>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={handleNext} className="w-32 text-lg">No</Button>
                <Button size="lg" onClick={handleNext} className="w-32 text-lg">Yes</Button>
              </div>
            </motion.div>
          )}

          {step === "let-go-can" && (
            <motion.div
              key="let-go-can"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display leading-tight text-foreground">
                Could you let it go?
              </h2>
              <p className="text-muted-foreground text-lg">Just for now, as best you can.</p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={handleNext} className="w-32 text-lg">No</Button>
                <Button size="lg" onClick={handleNext} className="w-32 text-lg">Yes</Button>
              </div>
            </motion.div>
          )}

          {step === "let-go-would" && (
            <motion.div
              key="let-go-would"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display leading-tight text-foreground">
                Would you let it go?
              </h2>
              <p className="text-muted-foreground text-lg">If you could, would you?</p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={handleNext} className="w-32 text-lg">No</Button>
                <Button size="lg" onClick={handleNext} className="w-32 text-lg">Yes</Button>
              </div>
            </motion.div>
          )}

          {step === "when" && (
            <motion.div
              key="when"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display leading-tight text-foreground">
                When?
              </h2>
              <p className="text-muted-foreground text-lg">Is "now" a good time?</p>
              <div className="flex justify-center">
                <Button size="lg" onClick={handleNext} className="px-12 text-lg">Now</Button>
              </div>
            </motion.div>
          )}

          {step === "check" && (
            <motion.div
              key="check"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-8 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
                Check in now.
              </h2>
              <p className="text-muted-foreground text-lg">
                What is the intensity of the feeling remaining?
              </p>

              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm max-w-sm mx-auto">
                 <Slider 
                  value={intensity} 
                  onValueChange={setIntensity} 
                  min={0} 
                  max={10} 
                  step={1} 
                  className="py-6"
                />
                <div className="mt-4 text-4xl font-display font-bold text-primary">{intensity[0]}</div>
              </div>

              <Button 
                size="lg" 
                onClick={handleNext} 
                className="w-full max-w-sm text-lg"
              >
                Finish Checking
              </Button>
            </motion.div>
          )}

          {step === "complete" && (
            <motion.div
              key="complete"
              initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
              className="space-y-8 text-center"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground">
                  Release Complete
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  You've taken a moment for yourself. The feeling has been acknowledged and allowed to flow.
                </p>
              </div>

              <div className="flex flex-col gap-4 max-w-xs mx-auto pt-8">
                {intensity[0] > 0 && (
                  <Button onClick={() => setStep("welcome")} variant="outline" className="w-full gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary">
                    <RefreshCcw className="w-4 h-4" />
                    Do another round
                  </Button>
                )}
                <Button onClick={() => setLocation("/")} className="w-full">
                  Return Home
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
