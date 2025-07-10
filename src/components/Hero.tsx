import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="hero" className="pt-24 pb-20 bg-gradient-to-br from-white via-brand-gray/30 to-brand-purple/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-dark rounded-full text-sm font-medium mb-4">
                🚀 Nouvelle solution pour la seconde main
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <div className="text-brand-dark">Centralisez</div>
              <div className="text-brand-purple">Gérez</div>
              <div className="text-brand-yellow">Diffusez</div>
              <div className="text-brand-dark">Mesurez</div>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">La solution complète pour les professionnels de la seconde main. Automatisez la publications de vos annonces sur les plateformes de revente et boostez vos ventes.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 text-lg group">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-8 py-6 text-lg group">
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

          {/* Right Content - Dashboard Screenshot with Floating Logos */}
          <div className="flex-1 animate-slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                <img src="/lovable-uploads/12995e8e-9cae-412a-ab17-2edfef7f6cb5.png" alt="Dashboard Repost - Vue d'ensemble de votre activité" className="w-full h-auto rounded-lg" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow rounded-full p-3 animate-float">
                <span className="text-brand-dark font-bold">+50%</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-brand-purple rounded-full p-3 animate-float" style={{
              animationDelay: '1s'
            }}>
                <span className="text-white font-bold">📈</span>
              </div>

              {/* Floating Marketplace Logos */}
              {/* Vinted - Top Left */}
              <div className="absolute -top-8 -left-8 bg-white rounded-xl shadow-lg p-3 animate-float border border-opacity-30" style={{
              animationDelay: '0.5s',
              borderColor: '#007882'
            }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/lovable-uploads/7256daf7-fe58-4797-982b-1cac616712a6.png" alt="Vinted" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-[#007882] font-semibold text-sm">Vinted</span>
                </div>
              </div>

              {/* eBay - Top Right */}
              <div className="absolute -top-6 right-12 bg-white rounded-xl shadow-lg p-3 animate-float border border-opacity-30" style={{
              animationDelay: '1.5s',
              borderColor: '#0064D2'
            }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/lovable-uploads/d0c80e13-68bf-4639-aa50-15199f9a3175.png" alt="eBay" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-blue-500 font-semibold text-sm">eBay</span>
                </div>
              </div>

              {/* Shopify - Bottom Left */}
              <div className="absolute -bottom-8 left-12 bg-white rounded-xl shadow-lg p-3 animate-float border border-opacity-30" style={{
              animationDelay: '2s',
              borderColor: '#4e8f30'
            }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/lovable-uploads/9a98d202-2118-4095-a100-d5e8bc76f4d9.png" alt="Shopify" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="font-semibold text-sm" style={{
                  color: '#4e8f30'
                }}>Shopify</span>
                </div>
              </div>

              {/* Depop - Left Side */}
              <div className="absolute top-1/4 -left-12 bg-white rounded-xl shadow-lg p-3 animate-float border border-opacity-30" style={{
              animationDelay: '2.5s',
              borderColor: '#ef4444'
            }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/lovable-uploads/4eb57a7b-74a8-4807-8ccf-ef6ef44ed921.png" alt="Depop" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-red-500 font-semibold text-sm">Depop</span>
                </div>
              </div>

              {/* Etsy - Right Side */}
              <div className="absolute top-3/4 -right-12 bg-white rounded-xl shadow-lg p-3 animate-float border border-opacity-30" style={{
              animationDelay: '3s',
              borderColor: '#f97316'
            }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/lovable-uploads/ca0e1309-7535-4454-bbda-e72072179c8c.png" alt="Etsy" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-orange-500 font-semibold text-sm">Etsy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;