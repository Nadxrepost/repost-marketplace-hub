import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CGU = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités d'accès et d'utilisation de la plateforme Repost, accessible à l'adresse <a href="https://www.repost.fashion/" className="text-brand-purple hover:underline">https://www.repost.fashion/</a>
              </p>
              <p>En utilisant Repost, vous acceptez sans réserve les présentes CGU.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Présentation de Repost</h2>
              <p>
                Repost est une solution SaaS permettant aux vendeurs de mode seconde main (particuliers et professionnels) de publier automatiquement leurs articles sur plusieurs marketplaces (Vinted, Le Bon Coin, Vestiaire Collective, etc.), de gérer leur inventaire et de suivre leurs performances.
              </p>
              <p>Repost est éditée par :</p>
              <ul>
                <li>Repost, SAS en cours d'immatriculation</li>
                <li>Siège social : STATION F - 5 parvis Alan Turing, 75013 PARIS</li>
                <li>Email : hello@repost.fashion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accès au service</h2>
              <p>L'accès à Repost nécessite :</p>
              <ul>
                <li>La création d'un compte utilisateur</li>
                <li>La souscription à une offre gratuite ou payante</li>
                <li>Une connexion Internet et un navigateur à jour</li>
              </ul>
              <p>Certaines fonctionnalités sont réservées aux utilisateurs abonnés à une offre payante.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Création de compte</h2>
              <p>
                L'utilisateur s'engage à fournir des informations exactes, complètes et à jour lors de la création de son compte.
              </p>
              <p>Chaque compte est personnel, non transférable et protégé par un mot de passe confidentiel.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Description des services</h2>
              <p>Repost propose notamment les services suivants :</p>
              <ul>
                <li>Connexion à plusieurs plateformes de vente</li>
                <li>Publication, mise à jour et suppression automatisée d'annonces</li>
                <li>Suivi des ventes, des vues et des performances</li>
                <li>Analyse de l'inventaire et des prix</li>
                <li>Support client</li>
              </ul>
              <p>La disponibilité des services peut varier selon l'abonnement choisi (voir CGV).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Engagements de l'utilisateur</h2>
              <p>L'utilisateur s'engage à :</p>
              <ul>
                <li>Utiliser Repost de manière conforme à la loi et aux présentes CGU</li>
                <li>Ne pas publier de contenu illicite, contrefait ou trompeur</li>
                <li>Respecter les conditions d'utilisation des marketplaces partenaires</li>
                <li>Ne pas tenter d'accéder de manière non autorisée à d'autres comptes ou à l'infrastructure de Repost</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur Repost (logos, textes, interfaces, codes, etc.) sont la propriété exclusive de Repost et sont protégés par le droit de la propriété intellectuelle.
              </p>
              <p>Toute reproduction, diffusion ou modification sans autorisation est strictement interdite.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disponibilité du service</h2>
              <p>
                Repost met tout en œuvre pour assurer l'accès continu à la plateforme, mais ne peut garantir l'absence totale d'interruptions ou d'anomalies techniques.
              </p>
              <p>Des opérations de maintenance peuvent entraîner une interruption temporaire du service.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation de responsabilité</h2>
              <p>Repost ne peut être tenu responsable :</p>
              <ul>
                <li>Des erreurs ou interruptions causées par les marketplaces tierces</li>
                <li>De l'utilisation non conforme de la plateforme</li>
                <li>Des pertes de données causées par l'utilisateur</li>
                <li>D'un manque à gagner résultant de la non-utilisation ou de l'indisponibilité temporaire du service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Données personnelles</h2>
              <p>
                L'utilisation de Repost implique la collecte et le traitement de données personnelles. Pour plus d'informations, veuillez consulter notre <Link to="/privacy-policy" className="text-brand-purple hover:underline">Politique de Confidentialité</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Résiliation</h2>
              <p>Chaque utilisateur peut résilier son compte à tout moment.</p>
              <p>Repost se réserve le droit de suspendre ou supprimer un compte en cas de non-respect des CGU ou d'usage frauduleux.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modifications des CGU</h2>
              <p>
                Repost se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications par email ou via la plateforme.
              </p>
              <p>L'utilisation continue de Repost après modification vaut acceptation des nouvelles conditions.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CGU;