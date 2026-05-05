import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import stationFLogo from '@/assets/station-f-logo.png';
import fightersProgramLogo from '@/assets/fighters-program-logo.png';
const About = () => {
  return <div className="min-h-screen">
      <Header />
      
      <section className="py-20 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
          </div>

          <div className="prose prose-lg max-w-none">


            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Faire de la seconde main le premier choix.<br />
                C'est le point de départ.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Repost Fashion est né de cette volonté : réduire la production de déchets textiles en devenant le partenaire stratégique seconde main des marques et des professionnels du secteur.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Avant cela, Nadine et Nadège Bikounkou opèrent directement sur le terrain, à la fois pour leur propre e-commerce vintage et pour le compte de marques et de particuliers.<br />
                Elles gèrent la mise en vente de chaque pièce, manuellement, sur plusieurs plateformes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Très vite, une limite apparaît.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Faute d'outils adaptés et automatisés, chaque action devient chronophage.<br />
                Publier, dupliquer, gérer… tout repose sur des tâches répétitives qui ralentissent l'activité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Face à ce constat, elles prennent une décision simple : construire leur propre système.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Une plateforme pensée pour répondre à une réalité concrète.<br />
                Une solution qui deviendra Repost Fashion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Fortes de leur expérience dans la mode durable, une conviction s'impose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                La mode ne pourra pas réduire son impact sans outils plus intelligents.<br />
                La technologie est une condition nécessaire à l'émergence d'un nouveau modèle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Repost Fashion s'inscrit dans cette logique.
              </p>
              
            <div className="mt-8 mb-8">
                <img src="/lovable-uploads/e411c12f-b01a-4c9e-9451-d723007a4d45.png" alt="Équipe Repost - Deux femmes souriantes représentant l'esprit collaboratif de notre entreprise" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
              </div>
            </div>

            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Nadine Bikounkou</h3>
                  <p className="text-muted-foreground mb-2">CEO et cofondatrice</p>
                  <a href="https://www.linkedin.com/in/nadinebikounkourepostfashion/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Me contacter sur LinkedIn</a>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Nadège Bikounkou</h3>
                  <p className="text-muted-foreground mb-2">Head of sales et cofondatrice</p>
                  <a href="https://www.linkedin.com/in/nad%C3%A8ge-bikounkou-ba5b48222/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Me  contacter sur LinkedIn</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-lg text-muted-foreground">Repost est soutenu par :</span>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <img src={stationFLogo} alt="Station F" className="h-10" />
            <img src={fightersProgramLogo} alt="Fighters Program" className="h-10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;