import stationFLogo from '@/assets/station-f-logo.png';
import diversidaysLogo from '@/assets/diversidays-logo.png';
import impactFranceLogo from '@/assets/impact-france-logo.png';
import frenchTechTremplinLogo from '@/assets/french-tech-tremplin-logo.png';
import singaLogo from '@/assets/singa-logo.png';

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-12 pb-0 bg-gradient-to-br from-brand-gray/20 to-white">
      <div className="container mx-auto px-6">
        {/* Repost est soutenu par */}
        <div className="text-center -mx-6 px-6 py-12 bg-gray-50">
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
