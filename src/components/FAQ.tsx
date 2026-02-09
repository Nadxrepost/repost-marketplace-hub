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
      question: "Avec quelles plateformes est-il compatible ?",
      answer: "Repost est compatible avec les principales plateformes de revente : Vinted, eBay, Etsy, Depop, Shopify, Leboncoin et bien d'autres. Nous ajoutons régulièrement de nouvelles intégrations."
    },
    {
      question: "Comment cela m'empêche-t-il de survendre ?",
      answer: "Dès qu'un article est vendu sur une plateforme, Repost met automatiquement à jour votre stock sur toutes les autres plateformes connectées. Ainsi, vous ne risquez jamais de vendre un article déjà vendu ailleurs."
    },
    {
      question: "Est-il sûr de connecter mes magasins ?",
      answer: "Oui, la sécurité est notre priorité. Nous utilisons des connexions chiffrées et des protocoles OAuth sécurisés pour connecter vos boutiques. Vos données sont protégées et nous ne stockons jamais vos mots de passe."
    },
    {
      question: "Est-ce que ça fonctionne dans mon pays ?",
      answer: "Repost fonctionne dans tous les pays où les plateformes partenaires sont disponibles. Notre solution est particulièrement adaptée aux marchés français et européens."
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
                <AccordionContent className="text-gray-600 pb-6">
                  {item.answer}
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
