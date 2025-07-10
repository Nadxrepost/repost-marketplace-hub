import { Package, Camera, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InventorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Elements */}
          <div className="relative">
            <div className="flex flex-wrap gap-6">
              {/* First card - Plant/Package */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-6 w-48 h-48 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex-1 flex items-center justify-center">
                  <Package className="w-16 h-16 text-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-brand-purple rounded"></div>
                  <div className="h-3 bg-brand-purple rounded w-3/4"></div>
                  <div className="h-3 bg-brand-purple rounded w-5/6"></div>
                </div>
              </div>

              {/* Second card - T-shirt */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-6 w-48 h-48 flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                <div className="flex-1 flex items-center justify-center">
                  <Shirt className="w-16 h-16 text-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-brand-purple rounded"></div>
                  <div className="h-3 bg-brand-purple rounded w-4/5"></div>
                  <div className="h-3 bg-brand-purple rounded w-2/3"></div>
                </div>
              </div>

              {/* Third card - Camera */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-6 w-48 h-48 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 -mt-4">
                <div className="flex-1 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-800" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-brand-purple rounded w-1/2"></div>
                  <div className="h-3 bg-brand-purple rounded"></div>
                  <div className="h-3 bg-brand-purple rounded w-4/5"></div>
                  <div className="h-3 bg-brand-purple rounded w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Decorative asterisks */}
            <div className="absolute top-4 right-12 text-2xl text-gray-800">*</div>
            <div className="absolute bottom-8 left-4 text-2xl text-gray-800">*</div>
            <div className="absolute bottom-16 right-8 text-2xl text-gray-800">*</div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Répertoriez facilement votre inventaire sur plusieurs canaux pour atteindre plus de clients
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Touchez de nouveaux clients, où qu'ils achètent, en répertoriant vos stocks, en gros, sur les marketplaces populaires et sur votre boutique en ligne, grâce à des modèles simples qui vous font gagner du temps et optimisent vos annonces. En savoir plus sur la fonctionnalité de référencement multicanal de Sellbrite.
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium"
            >
              En savoir plus sur les listes multicanaux
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;