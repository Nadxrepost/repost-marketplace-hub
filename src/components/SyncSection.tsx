import { RefreshCw, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SyncSection = () => {
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">Synchronisez automatiquement l'inventaire pour éviter les doubles ventes</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Repost ajuste automatiquement votre stock lorsque des articles sont commandés et met à jour les canaux pour une synchronisation optimale. Cela permet d'éviter la survente d'articles que vous n'avez pas en stock.
            </p>
            <Button variant="outline" className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium">
              En savoir plus sur la synchronisation des stocks
            </Button>
          </div>

          {/* Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {/* Create 9 dashed boxes */}
              {Array.from({
              length: 9
            }, (_, index) => <div key={index} className={`
                    w-24 h-24 border-2 border-dashed border-gray-400 rounded-lg
                    ${index === 4 ? 'relative' : ''}
                  `}>
                  {/* Center box (index 4) contains the camera */}
                  {index === 4 && <>
                      {/* Camera icon */}
                      <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <Camera className="w-10 h-10 text-white" />
                      </div>
                      {/* Sync badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
                        <RefreshCw className="w-4 h-4 text-white" />
                      </div>
                    </>}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SyncSection;