import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Politique de Confidentialité</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <p>
              Votre vie privée est importante pour nous.<br />
              Chez Repost, nous nous engageons à protéger les données personnelles que vous 
              partagez avec nous et à les traiter avec transparence, respect et sécurité.
            </p>

            <section>
              <h3 className="font-semibold text-base mb-2">1. Qui sommes-nous ?</h3>
              <p className="mb-2">
                Seendra est une solution SaaS de multidiffusion d'annonces spécialisée dans la mode 
                seconde main et l'économie circulaire. Le présent document explique comment nous 
                collectons, utilisons et protégeons vos données personnelles dans le cadre de 
                l'utilisation de notre site internet [www.repost.fashion] et des services associés (la "Plateforme").
              </p>
              <p>
                Pour toute question :<br />
                📧 hello@repost.fashion
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. Responsable du traitement</h3>
              <p>
                Le responsable du traitement est :<br />
                <strong>Repost</strong><br />
                SAS au capital de [à compléter] €<br />
                Siège social : STATION F - 5 parvis Alan Turing,<br />
                75013 PARIS<br />
                Email : hello@repost.fashion
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. Données personnelles collectées</h3>
              <p className="mb-2">Lors de l'inscription et de l'utilisation de la plateforme :</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Prénom, nom</li>
                <li>Adresse email</li>
                <li>Nom de votre entreprise (pour les utilisateurs B2B)</li>
                <li>Mot de passe (chiffré)</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Données de facturation et d'abonnement</li>
                <li>Données d'activité sur la plateforme : nombre de pièces, plateformes connectées, statistiques de diffusion</li>
              </ul>
              <p className="mb-2">Données techniques :</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Adresse IP</li>
                <li>Type d'appareil et navigateur</li>
                <li>Logs de connexion</li>
                <li>Cookies (voir section 7)</li>
              </ul>
              <p className="mb-2">Données collectées automatiquement via API :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identifiants de comptes sur les marketplaces (ex. : Vinted, Le Bon Coin, Vestiaire Collective)</li>
                <li>Statistiques de ventes et d'inventaire</li>
                <li>Descriptions, photos et prix des articles</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. Finalités du traitement</h3>
              <p className="mb-2">Vos données sont traitées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fournir et améliorer les services Repost</li>
                <li>Gérer votre compte et vos abonnements</li>
                <li>Assurer la multidiffusion de vos annonces</li>
                <li>Fournir un support client</li>
                <li>Envoyer des notifications, emails d'information ou de promotion (opt-in)</li>
                <li>Produire des statistiques anonymisées à des fins d'analyse</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. Bases légales du traitement</h3>
              <p className="mb-2">Nous traitons vos données sur les bases suivantes :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Exécution du contrat (CGU/CGV acceptées à l'inscription)</li>
                <li>Consentement (pour les communications marketing)</li>
                <li>Intérêt légitime (sécurité, amélioration du service)</li>
                <li>Obligation légale (facturation, lutte contre la fraude)</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. Durée de conservation</h3>
              <p className="mb-2">Vos données sont conservées :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tant que votre compte est actif</li>
                <li>Jusqu'à 3 ans après la dernière activité pour les comptes inactifs</li>
                <li>Jusqu'à 10 ans pour les données comptables (obligation légale)</li>
              </ul>
              <p className="mt-2">
                Vous pouvez à tout moment demander la suppression de votre compte ou de certaines données (voir section 9).
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. Cookies</h3>
              <p className="mb-2">Nous utilisons des cookies pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Garantir le bon fonctionnement du site</li>
                <li>Analyser l'usage de notre plateforme</li>
                <li>Proposer des contenus personnalisés</li>
              </ul>
              <p className="mt-2">
                Vous pouvez accepter, refuser ou personnaliser l'usage des cookies via notre bandeau 
                d'information lors de votre première visite.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. Partage des données</h3>
              <p className="mb-2">
                Vos données ne sont jamais revendues.<br />
                Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nos prestataires techniques (hébergement, paiement, CRM, analytics)</li>
                <li>Les marketplaces connectées (dans le cadre de la multidiffusion)</li>
                <li>Les autorités légales en cas d'obligation légale ou judiciaire</li>
              </ul>
              <p className="mt-2">
                Tous nos sous-traitants respectent le RGPD et ne traitent vos données que pour notre compte.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">9. Vos droits</h3>
              <p className="mb-2">
                Conformément au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
                <li>Droit à la limitation du traitement</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à : hello@repost.fashion
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">10. Sécurité</h3>
              <p className="mb-2">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                nécessaires pour protéger vos données :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Hébergement sécurisé (en Europe)</li>
                <li>Chiffrement des mots de passe</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegardes régulières</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">11. Transferts hors UE</h3>
              <p>
                Repost privilégie des prestataires européens. En cas de transfert hors de l'Union Européenne, 
                nous nous assurons que des garanties adéquates sont mises en place (ex. : clauses contractuelles types).
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">12. Modification de la politique</h3>
              <p>
                Nous pouvons mettre à jour cette Politique à tout moment. En cas de modification majeure, 
                vous serez notifié par email ou via la plateforme.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;