import { Button } from '@/components/ui/button';
import stationFLogo from '@/assets/station-f-logo.png';
import diversidaysLogo from '@/assets/diversidays-logo.png';
import impactFranceLogo from '@/assets/impact-france-logo.png';
import frenchTechTremplinLogo from '@/assets/french-tech-tremplin-logo.png';
import singaLogo from '@/assets/singa-logo.png';

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-12 pb-0 bg-gradient-to-br from-brand-gray/20 to-white">
      <div className="container mx-auto px-6">
        {/* CTA Block */}
        <div className="gradient-purple-yellow rounded-2xl shadow-lg p-12 max-w-4xl mx-auto mt-12 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Activez votre canal de revente</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">Déjà adopté par des centaines de professionnels de la seconde main.</p>
            <div className="flex justify-center items-center">
              <Button onClick={() => {
                window.open('https://tally.so/r/mV2xGM', '_blank', 'noopener,noreferrer');
              }} size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-black px-12 py-6 rounded-full text-xl font-semibold">
                Réserver une démo
              </Button>
            </div>
          </div>
        </div>

        {/* Repost est soutenu par */}
        <div className="text-center mt-24 -mx-6 px-6 py-12 bg-gray-50">
          <p className="text-lg text-gray-600 font-bold mb-6">Repost est soutenu par :</p>
          <div className="flex items-center gap-4 justify-center">
            <img src={stationFLogo} alt="Station F" className="h-10" />
            <img src={diversidaysLogo} alt="Diversidays" className="h-16" />
            <img src={impactFranceLogo} alt="Impact France" className="h-20" />
            <img src={frenchTechTremplinLogo} alt="La French Tech Tremplin" className="h-24" />
            <img src={singaLogo} alt="Singa" className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
