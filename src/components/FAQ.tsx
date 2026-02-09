import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  
  const faqItems = [
    {
      question: "Qu'est-ce que Repost ?",
      answer: "Repost est une solution qui vous permet de centraliser et automatiser la vente de vos produits de seconde main sur plusieurs plateformes. Gérez votre inventaire depuis un seul endroit et synchronisez automatiquement vos stocks.\n\nRepost vous permet de vendre de la 2nde main sur plusieurs plateformes en toute simplicité."
    },
    {
      question: "Pour qui est fait Repost ?",
      answer: "Repost s'adresse aux professionnels de la 2nde main. Les <strong>e-commerçants</strong>, <strong>retailers</strong> et <strong>marques</strong> qui veulent gagner du temps, réduire les erreurs opérationnels et structurer leur activité sur les plateformes de revente."
    },
    {
      question: "Avec quelles plateformes est-il compatible ?",
      answer: "Dans sa version bêta, Repost permet de diffuser vos produits sur <strong>eBay</strong> et <strong>Etsy</strong>, ainsi que faire de <strong><u>l'import en masse avec un fichier CSV</u></strong>. Ces modes de diffusion couvrent déjà une grande partie des besoins des vendeurs professionnels.\n\nDe nouvelles plateformes sont ajoutées progressivement, en fonction des usages, des priorités produit et des intégrations API disponibles.\n\nSi vous avez besoin d'une plateforme spécifique, nous vous invitons à nous le signaler : les retours des retailers orientent directement notre feuille de route."
    },
    {
      question: "Est-ce que Repost est connecté avec Vinted ?",
      answer: "Oui, Repost peut être connecté à <strong>Vinted</strong> via l'<strong>API Vinted Pro</strong>, sous certaines conditions.\nCette intégration est réservée aux vendeurs professionnels disposant d'un accès officiel à l'API Vinted Pro.\n\n<strong>Conditions d'éligibilité à l'API Vinted Pro</strong>\n\nPour pouvoir bénéficier de cette intégration, vous devez :\n\n• Être inscrit en tant que vendeur Pro sur Vinted\n• Disposer d'au moins 200 articles en stock, principalement des articles de créateurs ou de luxe\n• Vendre exclusivement des vêtements de seconde main (l'API Vinted Pro n'est pas disponible pour les catégories Maison, Animaux, etc.)\n• Répondre aux exigences techniques de Vinted pour l'utilisation de leur API\n\nCes critères sont définis par Vinted et conditionnent l'accès à leur API.\n\n<strong>Comment fonctionne l'intégration avec Repost ?</strong>\n\nUne fois l'accès à l'API Vinted Pro validé, Repost se charge de l'implémentation technique.\nVous pouvez alors synchroniser automatiquement vos stocks entre Vinted et les autres plateformes connectées.\n\n⚠️ L'intégration API Vinted Pro nécessite des <strong>frais d'installation</strong>, liés à la configuration technique spécifique.\n\n<strong>Vous souhaitez savoir si vous êtes éligible ?</strong>\n\nVous pouvez faire une demande directement auprès de Vinted via leur programme Vinted Pro – Intégrations."
    },
    {
      question: "Comment Repost empêche-t-il les risques opérationnels ?",
      answer: "Lorsqu'un article est vendu sur une plateforme connectée, Repost met automatiquement à jour ou supprime l'annonce sur toutes les autres plateformes. Cette synchronisation se fait sans action de votre part.\n\nRésultat : plus de doubles ventes, plus d'annulations de commandes liées à des erreurs de stock. Vous ne vendez que ce qui est réellement disponible."
    },
    {
      question: "Quelles sont les prochaines améliorations de Repost ?",
      answer: "Repost évolue en continu pour répondre aux besoins des professionnels de la seconde main. Les prochaines améliorations en cours portent notamment sur :\n\nL'intégration de <strong>Shopify et WooCommerce</strong>, afin de connecter votre e-shop à Repost et centraliser davantage vos ventes.\n\nL'intégration de la plateforme <strong>Depop</strong>, actuellement en cours de développement.\n\nD'autres améliorations sont également à l'étude, en fonction des retours et des priorités exprimées par les retailers."
    },
    {
      question: "Existe-t-il une version d'essai gratuite de Repost ?",
      answer: "Oui ! Nous proposons un essai gratuit de 7 jours sans engagement. Vous pouvez tester toutes les fonctionnalités de Repost et décider ensuite si la solution vous convient."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-brand-dark text-center mb-12">
          Foire aux questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-200 bg-transparent"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-brand-dark hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 whitespace-pre-line">
                  <span dangerouslySetInnerHTML={{ __html: item.answer.replace(/\n/g, '<br/>') }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-brand-dark mb-4">
            Vous avez encore des questions ?
          </h3>
          <Button 
            onClick={() => navigate('/contact')}
            className="bg-brand-dark hover:bg-brand-dark/90 text-white px-8 py-3 text-lg"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
