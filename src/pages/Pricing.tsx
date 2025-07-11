import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const particularPlans = [
    {
      name: "Dashboard",
      price: "9,99€",
      description: "Dashboard et analytics sans diffusion",
      features: [
        "Nombre de pièces illimité",
        "Analytics avancées",
        "Support par email"
      ]
    },
    {
      name: "Starter",
      price: "19,99€",
      description: "Pour les particuliers débutants",
      features: [
        "100 pièces/mois",
        "2 plateformes",
        "Analytics de base",
        "Support email"
      ]
    },
    {
      name: "Premium", 
      price: "39,99€",
      description: "Pour les particuliers actifs",
      features: [
        "500 pièces/mois",
        "3 plateformes", 
        "Analytics avancées",
        "Support prioritaire"
      ],
      popular: true
    }
  ];

  const professionalPlans = [
    {
      name: "Pro Starter",
      price: "39,99€",
      description: "Pour les professionnels débutants",
      features: [
        "500 pièces/mois",
        "3 plateformes",
        "Analytics pro",
        "Support prioritaire"
      ]
    },
    {
      name: "Pro Growth",
      price: "99,99€", 
      description: "Pour les professionnels en croissance",
      features: [
        "2000 pièces/mois",
        "5 plateformes",
        "Analytics pro",
        "API access"
      ],
      popular: true
    },
    {
      name: "Pro Scale",
      price: "299,99€",
      description: "Pour les gros volumes", 
      features: [
        "10000 pièces/mois",
        "Toutes plateformes",
        "Analytics pro",
        "Manager dédié"
      ]
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Pour plus de 10 000 pièces/mois",
      features: [
        "Volume illimité",
        "Toutes plateformes", 
        "Support 24/7",
        "Intégrations custom"
      ]
    }
  ];

  const PricingCard = ({ plan, isPopular = false }: { plan: any, isPopular?: boolean }) => (
    <Card className={`relative ${isPopular ? 'border-primary shadow-lg scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Populaire
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-primary">{plan.price}</span>
          {plan.price !== "Sur mesure" && <span className="text-muted-foreground">/mois</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          {plan.price === "Sur mesure" ? "Nous contacter" : "Commencer"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choisir son abonnement
            </h1>
            <p className="text-xl text-muted-foreground">
              Essai gratuit de 7 jours pour toutes les offres
            </p>
          </div>

          <Tabs defaultValue="professionals" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="particuliers">Particuliers</TabsTrigger>
              <TabsTrigger value="professionals">Professionnels</TabsTrigger>
            </TabsList>
            
            <TabsContent value="particuliers">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Particuliers - Small Business</h2>
                <p className="text-muted-foreground">Solutions adaptées aux particuliers</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {particularPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} isPopular={plan.popular} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professionals">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Professionnels</h2>
                <p className="text-muted-foreground">Solutions avancées pour les entreprises et gros volumes</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {professionalPlans.map((plan, index) => (
                  <PricingCard key={index} plan={plan} isPopular={plan.popular} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;