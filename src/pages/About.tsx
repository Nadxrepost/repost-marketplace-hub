import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
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
                Tout à commencé par une idée…
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Trop de tâches chronophages empêchent les revendeurs de se concentrer sur l'essentiel : sourcer et développer son activité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Lister ses annonces, les publier, les dupliquer et les retirer manuellement de chaque plateforme après chaque vente... tout cela prend énormément de temps.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Et comment nous le savons ?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                En tant que professionnels de la seconde main, nous l'avons vécu !
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                En février 2020, nous avons lancé notre e-shop 100% vintage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Nos pépites ont rapidement attiré l'attention de certaines marketplaces comme Imparfaites, Vestiaire Collective, Asos Marketplaces… et nous sommes devenues des vendeuses partenaires.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Gérer nos annonces à la fois sur notre e-shop et sur les marketplaces est très vite devenu un casse tête.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Des solutions existent sur le marché, mais rien n'ést adapté à l'écosystème de la seconde main.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Alors comment simplifier le quotidien de milliers de vendeurs ?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                REPOST est né d'une frustration, d'un besoin…
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nous sommes les fondatrices de REPOST, le super assistant qui permet de publier des milliers d'annonces sur les plateformes de mode seconde main.
              </p>
              
              <div className="mt-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chez Repost, nous croyons que la seconde main mérite des outils professionnels. 
                  Notre mission est de simplifier et d'automatiser la gestion multi-plateformes pour 
                  que vous puissiez vous concentrer sur l'essentiel : développer votre activité.
                </p>
              </div>
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

      <div className="max-w-4xl mx-auto px-4 my-20">
        <Separator className="h-[3px] bg-foreground/40 rounded-full" />
      </div>

      <section className="py-12 px-4 bg-muted/30 mt-32">
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