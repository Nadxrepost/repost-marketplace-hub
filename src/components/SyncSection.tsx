import { RefreshCw, Camera, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SyncSection = () => {
  const checklistItems = [
    "Synchronisation automatique des stocks",
    "Dès qu'un article est vendu, la mise à jour du stock se fait automatiquement.",
    "Vendez uniquement ce qui est réellement disponible.",
    "Fini les doubles ventes et les annulations.",
    "Gardez la maîtrise de votre inventaire, même en multi-plateformes."
  ];

  return <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">Réduisez les erreurs de stock et les réclamations clients.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Repost sécurise votre inventaire et vous permet de vendre en toute confiance.</p>
            
            <ul className="space-y-3 mb-8">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium" onClick={() => {
            const howItWorksSection = document.getElementById('how-it-works');
            if (howItWorksSection) {
              howItWorksSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              En savoir plus sur la synchronisation des stocks
            </Button>
          </div>

          {/* Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }, (_, index) => {
              return <div key={index} className={`
                    w-24 h-24 border-2 border-dashed border-gray-400 rounded-lg overflow-hidden
                    ${index === 4 ? 'relative' : ''}
                  `}>
                    {index === 4 ? <div className="w-full h-full rounded-lg flex items-center justify-center p-2" style={{
                  backgroundColor: '#B6B0DD'
                }}>
                        <img src="/lovable-uploads/11822667-3476-49e8-b464-794e30285ea7.png" alt="Sync" className="w-full h-full object-contain animate-spin" style={{
                    animationDuration: '15s'
                  }} />
                      </div> : <div className="w-full h-full bg-white rounded-lg" />}
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SyncSection;