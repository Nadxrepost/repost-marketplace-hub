import stationFLogo from '@/assets/station-f-logo.png';
import fightersProgramLogo from '@/assets/fighters-program-logo.png';
import frenchTechTremplinLogo from '@/assets/french-tech-tremplin-logo.png';

const SupportedBy = () => {
  const supporters = [
    { 
      name: "Station F", 
      logo: stationFLogo,
      width: "w-48"
    },
    { 
      name: "Fighters Program", 
      logo: fightersProgramLogo,
      width: "w-56"
    },
    { 
      name: "La French Tech Tremplin", 
      logo: frenchTechTremplinLogo,
      width: "w-48"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-12">
          Repost est soutenu par :
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {supporters.map((supporter, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src={supporter.logo}
                alt={`Logo ${supporter.name}`}
                className={`${supporter.width} h-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
