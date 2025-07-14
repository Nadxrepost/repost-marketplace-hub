import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Votre vie privée est importante pour nous.<br />
                Chez Repost, nous nous engageons à protéger les données personnelles que vous partagez avec nous et à les traiter avec transparence, respect et sécurité.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Qui sommes-nous ?</h2>
              <p className="text-gray-700 mb-6">
                Seendra est une solution SaaS de multidiffusion d'annonces spécialisée dans la mode seconde main et l'économie circulaire. Le présent document explique comment nous collectons, utilisons et protégeons vos données personnelles dans le cadre de l'utilisation de notre site internet [www.repost.fashion] et des services associés (la "Plateforme").
              </p>
              <p className="text-gray-700 mb-6">
                Pour toute question :<br />
                📧 hello@repost.fashion
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Responsable du traitement</h2>
              <p className="text-gray-700 mb-6">
                Le responsable du traitement est : Nadine Bikounkou
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Données personnelles collectées</h2>
              <p className="text-gray-700 mb-4">Lors de l'inscription et de l'utilisation de la plateforme :</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Prénom, nom</li>
                <li>Adresse email</li>
                <li>Nom de votre entreprise (pour les utilisateurs B2B)</li>
                <li>Mot de passe (chiffré)</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Données de facturation et d'abonnement</li>
                <li>Données d'activité sur la plateforme : nombre de pièces, plateformes connectées, statistiques de diffusion</li>
              </ul>
              
              <p className="text-gray-700 mb-4">Données techniques :</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Adresse IP</li>
                <li>Type d'appareil et navigateur</li>
                <li>Logs de connexion</li>
                <li>Cookies (voir section 7)</li>
              </ul>

              <p className="text-gray-700 mb-4">Données collectées automatiquement via API :</p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Identifiants de comptes sur les marketplaces (ex. : Vinted, Le Bon Coin, Vestiaire Collective)</li>
                <li>Statistiques de ventes et d'inventaire</li>
                <li>Descriptions, photos et prix des articles</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Finalités du traitement</h2>
              <p className="text-gray-700 mb-4">Vos données sont traitées pour :</p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Fournir et améliorer les services Repost</li>
                <li>Gérer votre compte et vos abonnements</li>
                <li>Assurer la multidiffusion de vos annonces</li>
                <li>Fournir un support client</li>
                <li>Envoyer des notifications, emails d'information ou de promotion (opt-in)</li>
                <li>Produire des statistiques anonymisées à des fins d'analyse</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Bases légales du traitement</h2>
              <p className="text-gray-700 mb-4">Nous traitons vos données sur les bases suivantes :</p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Exécution du contrat (CGU/CGV acceptées à l'inscription)</li>
                <li>Consentement (pour les communications marketing)</li>
                <li>Intérêt légitime (sécurité, amélioration du service)</li>
                <li>Obligation légale (facturation, lutte contre la fraude)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Durée de conservation</h2>
              <p className="text-gray-700 mb-4">Vos données sont conservées :</p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Tant que votre compte est actif</li>
                <li>Jusqu'à 3 ans après la dernière activité pour les comptes inactifs</li>
                <li>Jusqu'à 10 ans pour les données comptables (obligation légale)</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Vous pouvez à tout moment demander la suppression de votre compte ou de certaines données (voir section 9).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
              <p className="text-gray-700 mb-4">Nous utilisons des cookies pour :</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Garantir le bon fonctionnement du site</li>
                <li>Analyser l'usage de notre plateforme</li>
                <li>Proposer des contenus personnalisés</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Vous pouvez accepter, refuser ou personnaliser l'usage des cookies via notre bandeau d'information lors de votre première visite.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Partage des données</h2>
              <p className="text-gray-700 mb-4">
                Vos données ne sont jamais revendues.<br />
                Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Nos prestataires techniques (hébergement, paiement, CRM, analytics)</li>
                <li>Les marketplaces connectées (dans le cadre de la multidiffusion)</li>
                <li>Les autorités légales en cas d'obligation légale ou judiciaire</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Tous nos sous-traitants respectent le RGPD et ne traitent vos données que pour notre compte.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Vos droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
                <li>Droit à la limitation du traitement</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Pour exercer ces droits, contactez-nous à : hello@repost.fashion
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Sécurité</h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données :
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Hébergement sécurisé (en Europe)</li>
                <li>Chiffrement des mots de passe</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegardes régulières</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Transferts hors UE</h2>
              <p className="text-gray-700 mb-6">
                Repost privilégie des prestataires européens. En cas de transfert hors de l'Union Européenne, nous nous assurons que des garanties adéquates sont mises en place (ex. : clauses contractuelles types).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Modification de la politique</h2>
              <p className="text-gray-700 mb-6">
                Nous pouvons mettre à jour cette Politique à tout moment. En cas de modification majeure, vous serez notifié par email ou via la plateforme.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;