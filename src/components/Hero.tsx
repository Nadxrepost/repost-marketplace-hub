
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-20 bg-gradient-to-br from-white via-brand-gray/30 to-brand-purple/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-dark rounded-full text-sm font-medium mb-4">
                🚀 Nouvelle solution pour la seconde main
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight">
              <span className="gradient-text">Centralisez</span> – 
              <span className="gradient-text"> Gérez</span> – 
              <span className="gradient-text"> Diffusez</span> – 
              <span className="gradient-text"> Mesurez</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              La solution SaaS complète pour les professionnels de la seconde main. 
              Automatisez vos publications sur toutes les plateformes et boostez vos ventes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 text-lg group"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-8 py-6 text-lg group"
              >
                <Play className="mr-2 w-5 h-5" />
                Voir la démo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Essai gratuit 14 jours
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Sans engagement
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Support français
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="flex-1 animate-slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-purple-yellow h-64 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/254b0023-f77e-4b19-88d7-097a1d29a292.png" 
                        alt="Repost Dashboard" 
                        className="w-10 h-10"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">Dashboard Repost</h3>
                    <p className="text-sm opacity-90">Gérez tout depuis un seul endroit</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded flex-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow rounded-full p-3 animate-float">
                <span className="text-brand-dark font-bold">+50%</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-brand-purple rounded-full p-3 animate-float" style={{animationDelay: '1s'}}>
                <span className="text-white font-bold">📈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
