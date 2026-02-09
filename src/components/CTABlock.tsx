import { Button } from '@/components/ui/button';

const CTABlock = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-brand-gray/20 to-white">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-4xl mx-auto transition-all duration-300 hover:border-2 hover:border-brand-purple">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Prêt à vendre partout avec Repost ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">Déjà adopté par des centaines de professionnels de la seconde main.</p>
            <div className="flex justify-center items-center">
              <Button onClick={() => {
                window.open('https://tally.so/r/mV2xGM', '_blank', 'noopener,noreferrer');
              }} size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-black px-12 py-6 rounded-full text-xl font-semibold">
                Oui, je veux vendre avec Repost !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
