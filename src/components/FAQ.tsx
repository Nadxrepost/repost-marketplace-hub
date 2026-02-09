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
      answer: "Repost aide les e-commerçants, retailers et marques à gagner du temps, réduire les erreurs et structurer leur activité sur les plateformes de revente seconde main."
    },
    {
      question: "Avec quelles plateformes est-il compatible ?",
      answer: "Dans sa version bêta, Repost permet de diffuser vos produits sur <strong>eBay</strong> et <strong>Etsy</strong>, ainsi que faire de <strong><u>l'import en masse avec un fichier CSV</u></strong>. Ces modes de diffusion couvrent déjà une grande partie des besoins des vendeurs professionnels.\n\nDe nouvelles plateformes sont ajoutées progressivement, en fonction des usages, des priorités produit et des intégrations API disponibles.\n\nSi vous avez besoin d'une plateforme spécifique, nous vous invitons à nous le signaler : les retours des retailers orientent directement notre feuille de route."
    },
    {
      question: "Comment Repost empêche-t-il la survente ?",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
