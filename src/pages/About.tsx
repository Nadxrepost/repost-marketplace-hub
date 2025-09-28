import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const About = () => {
  return <div className="min-h-screen">
      <Header />
      
      <section className="py-20 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
            <p className="text-xl text-muted-foreground">
              La solution SaaS qui révolutionne la vente en seconde main pour les professionnels et particuliers
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez Repost, nous croyons que la seconde main mérite des outils professionnels. 
                Notre mission est de simplifier et d'automatiser la gestion multi-plateformes pour 
                que vous puissiez vous concentrer sur l'essentiel : développer votre activité.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Pourquoi Repost ?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🚀 Innovation</h3>
                  <p className="text-muted-foreground">
                    Première plateforme française dédiée exclusivement à la gestion multi-plateformes 
                    de la seconde main avec des fonctionnalités pensées par et pour les vendeurs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">⚡ Efficacité</h3>
                  <p className="text-muted-foreground">
                    Automatisation complète de vos publications, synchronisation en temps réel 
                    de votre stock et analytics détaillées pour optimiser vos performances.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">🎯 Expertise</h3>
                  <p className="text-muted-foreground">
                    Une équipe passionnée par la seconde main qui comprend vos défis quotidiens 
                    et développe des solutions adaptées à vos besoins réels.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">🤝 Support</h3>
                  <p className="text-muted-foreground">
                    Un accompagnement personnalisé et un support technique réactif pour vous 
                    aider à tirer le meilleur parti de notre plateforme.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Repost est né de la frustration de vendeurs expérimentés face à la complexité 
                de gérer plusieurs plateformes de seconde main. Après avoir testé toutes les 
                solutions existantes sans trouver celle qui répondait vraiment aux besoins 
                spécifiques de ce marché, nous avons décidé de créer la nôtre.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aujourd'hui, Repost accompagne des milliers de vendeurs, des particuliers 
                occasionnels aux professionnels gérant des milliers de références, dans 
                leur développement sur les plateformes de seconde main.
              </p>
              
            <div className="mt-8 mb-8">
                <img src="/lovable-uploads/e411c12f-b01a-4c9e-9451-d723007a4d45.png" alt="Équipe Repost - Deux femmes souriantes représentant l'esprit collaboratif de notre entreprise" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Notre Équipe</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Nadine Bikounkou</h3>
                  <p className="text-muted-foreground mb-2">CEO et cofondatrice</p>
                  <a href="https://linkedin.com/in/nadine-bikounkou" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Me contacter sur LinkedIn</a>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Nadège Bikounkou</h3>
                  <p className="text-muted-foreground mb-2">Head of sales et cofondatrice</p>
                  <a href="https://linkedin.com/in/nadège-bikounkou" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Me  contacter sur LinkedIn</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;