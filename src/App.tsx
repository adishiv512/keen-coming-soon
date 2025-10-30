
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        {/* Animated dark blue pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-950 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 border border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-white/10 animate-bounce-subtle"></div>
          <div className="absolute top-1/3 right-10 w-20 h-1 bg-white/20 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-20 w-1 h-16 bg-white/10 animate-pulse"></div>
        </div>
        
        <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <div className="font-mono text-sm text-white/60 tracking-widest animate-fade-in">
              [ INITIALIZING ]
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                <div className="animate-fade-in animation-delay-500">INNOVATIVE</div>
                <div className="animate-fade-in animation-delay-1000 text-white/80">ENRICHING</div>
                <div className="animate-fade-in animation-delay-1500 text-white/60">EXCITING</div>
              </div>
            </div>
            
            <div className="font-mono text-lg tracking-widest text-white/80 animate-fade-in animation-delay-2000">
              COMING SOON
            </div>
            
            <div className="flex justify-center items-center space-x-2 animate-fade-in animation-delay-2500">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse animation-delay-400"></div>
            </div>
            
            <div className="mt-8 animate-fade-in animation-delay-3000">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdoCt_iCOtX63XGFc1FhM8RnNUCrExpfPq4zctbNPQXHprO6g/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-gradient-to-r from-yellow-500 to-amber-600 text-black rounded-md hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
              >
                Express Your Interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
