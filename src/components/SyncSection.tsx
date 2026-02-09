import { RefreshCw, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SyncSection = () => {
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">Réduisez les erreurs de stock et les réclamations clients.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Vos stocks sont synchronisés automatiquement en temps réel. Repost veille sur votre inventaire pour que chaque commande soit une bonne surprise, jamais une déception.   </p>
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
              {/* Create 9 boxes with images */}
              {Array.from({
              length: 9
            }, (_, index) => {
              const images = ['/lovable-uploads/c5af3827-0fbf-4874-8d6f-2230e2b0479b.png',
              // sac noir
              '/lovable-uploads/415e2b73-c6b8-421d-b7bd-c6b058d330cf.png',
              // lampe verte
              '/lovable-uploads/55add11b-8104-4969-8858-93eacdf08f19.png',
              // sac dior
              '/lovable-uploads/839bddaf-4c20-4f04-bca8-67584161ba75.png',
              // collier doré
              null,
              // center box with camera
              '/lovable-uploads/23cdd733-e7b7-4a07-b2d5-e0a9dce5b609.png',
              // bottes cowboy
              '/lovable-uploads/de631b36-dbfc-4af7-a993-a6c96fcc28bd.png',
              // jeans
              '/lovable-uploads/1fbf7e02-d88b-477e-872d-1958c7ceee3e.png',
              // chaise
              '/lovable-uploads/82452a6e-c503-45e7-8e36-6ed128aaf9c8.png' // trench coat
              ];
              return <div key={index} className={`
                    w-24 h-24 border-2 border-dashed border-gray-400 rounded-lg overflow-hidden
                    ${index === 4 ? 'relative' : ''}
                  `}>
                    {/* Center box (index 4) contains the sync icon */}
                    {index === 4 ? <div className="w-full h-full rounded-lg flex items-center justify-center p-2" style={{
                  backgroundColor: '#B6B0DD'
                }}>
                        <img src="/lovable-uploads/11822667-3476-49e8-b464-794e30285ea7.png" alt="Sync" className="w-full h-full object-contain animate-spin" style={{
                    animationDuration: '15s'
                  }} />
                      </div> : (/* Other boxes contain product images */
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-2">
                        <img src={images[index]} alt="Product" className="w-full h-full object-contain" />
                      </div>)}
                  </div>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SyncSection;