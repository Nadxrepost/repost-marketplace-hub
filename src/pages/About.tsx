import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de Repost
            </h1>
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
            </div>

            <div className="text-center bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Rejoignez-nous dans l'aventure</h2>
              <p className="text-muted-foreground mb-6">
                Découvrez comment Repost peut transformer votre activité de seconde main
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                  Essai gratuit 7 jours
                </button>
                <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;