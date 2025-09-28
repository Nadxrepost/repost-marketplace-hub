import { Button } from '@/components/ui/button';
const InventorySection = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 max-w-lg">
              {/* First row */}
              {/* First card - Sac Chanel */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-4 w-48 h-48 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex-1 flex items-center justify-center p-1">
                  <img src="/lovable-uploads/3d5cfa5e-5e93-433e-afda-b4c617161d0e.png" alt="Sac Chanel bleu" className="w-full h-24 object-contain" />
                </div>
                <div className="space-y-1.5 px-2">
                  <div className="h-2 bg-brand-purple rounded w-4/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-3/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-3/4"></div>
                </div>
              </div>

              {/* Second card - Veste en jean */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-4 w-48 h-48 flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex-1 flex items-center justify-center p-1">
                  <img src="/lovable-uploads/c582f20c-4685-4a92-87cd-c1c9d81edd7e.png" alt="Veste en jean Levi's" className="w-full h-24 object-contain" />
                </div>
                <div className="space-y-1.5 px-2">
                  <div className="h-2 bg-brand-purple rounded w-full"></div>
                  <div className="h-2 bg-brand-purple rounded w-4/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-2/3"></div>
                </div>
              </div>

              {/* Second row */}
              {/* Third card - Sac Fendi */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-4 w-48 h-48 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex-1 flex items-center justify-center p-1">
                  <img src="/lovable-uploads/16f9ec18-937f-4b4d-801d-7e6602b2d6c3.png" alt="Sac Fendi" className="w-full h-24 object-contain" />
                </div>
                <div className="space-y-1.5 px-2">
                  <div className="h-2 bg-brand-purple rounded w-1/2"></div>
                  <div className="h-2 bg-brand-purple rounded w-4/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-3/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-3/4"></div>
                </div>
              </div>

              {/* Fourth card - Baskets Adidas */}
              <div className="bg-white border-2 border-gray-800 rounded-lg p-4 w-48 h-48 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex-1 flex items-center justify-center p-1">
                  <img src="/lovable-uploads/01bfdc6c-ddd2-4380-b55c-e89014a5712c.png" alt="Baskets Adidas Samba" className="w-full h-24 object-contain" />
                </div>
                <div className="space-y-1.5 px-2">
                  <div className="h-2 bg-brand-purple rounded w-3/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-4/5"></div>
                  <div className="h-2 bg-brand-purple rounded w-full"></div>
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
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">Listez facilement votre inventaire sur plusieurs canaux et atteignez plus de clients</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Touchez de nouveaux clients, où qu'ils achètent, en répertoriant vos stocks sur les plateformes les plus populaires et sur votre boutique en ligne. Notre assistant IA vous fera gagner du temps et optimisant vos annonces. </p>
            <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium" onClick={() => {
            const platformsSection = document.querySelector('section[data-section="platforms"]');
            if (platformsSection) {
              platformsSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              En savoir plus sur les listes multicanaux
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default InventorySection;