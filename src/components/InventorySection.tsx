import { Button } from '@/components/ui/button';

const InventorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
            Répertoriez facilement votre inventaire sur plusieurs canaux pour atteindre plus de clients
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Touchez de nouveaux clients, où qu'ils achètent, en répertoriant vos stocks, en gros, sur les marketplaces populaires et sur votre boutique en ligne, grâce à des modèles simples qui vous font gagner du temps et optimisent vos annonces. En savoir plus sur la fonctionnalité de référencement multicanal de Repost.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium"
          >
            En savoir plus sur les listes multicanaux
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;