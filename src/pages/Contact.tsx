import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    connaissance: '',
    objectif: '',
    appelEquipe: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        prenom: '',
        nom: '',
        entreprise: '',
        email: '',
        telephone: '',
        connaissance: '',
        objectif: '',
        appelEquipe: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-20 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Que vous souhaitiez en savoir plus sur nos solutions, discuter d'un partenariat ou poser une question, notre équipe est à votre disposition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire de contact */}
            <div className="bg-card rounded-3xl shadow-2xl p-8 lg:p-12 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Prénom et Nom */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="prenom"
                      type="text"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Prénom"
                      className="w-full border-gray-200 rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <Input
                      name="nom"
                      type="text"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Nom"
                      className="w-full border-gray-200 rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                {/* Nom de l'entreprise */}
                <div>
                  <Input
                    name="entreprise"
                    type="text"
                    value={formData.entreprise}
                    onChange={handleInputChange}
                    placeholder="Nom de l'entreprise"
                    className="w-full border-gray-200 rounded-xl px-4 py-3"
                  />
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-mail"
                      className="w-full border-gray-200 rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <Input
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="Téléphone"
                      className="w-full border-gray-200 rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                {/* Comment avez-vous connu Repost */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comment avez-vous connu Repost ?
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('connaissance', value)}>
                    <SelectTrigger className="w-full border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                      <SelectValue placeholder="Moteurs de recherche (Google, Yahoo, Ecosia...)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moteurs">Moteurs de recherche (Google, Yahoo, Ecosia...)</SelectItem>
                      <SelectItem value="reseaux-sociaux">Réseaux sociaux</SelectItem>
                      <SelectItem value="bouche-oreille">Bouche à oreille</SelectItem>
                      <SelectItem value="publicite">Publicité</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Que souhaitez-vous faire */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Que souhaitez-vous faire grâce à Repost ?
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('objectif', value)}>
                    <SelectTrigger className="w-full border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                      <SelectValue placeholder="Vendre mon stock de seconde main" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vendre-stock">Vendre mon stock de seconde main</SelectItem>
                      <SelectItem value="automatiser-annonces">Automatiser mes annonces</SelectItem>
                      <SelectItem value="gerer-inventaire">Gérer mon inventaire</SelectItem>
                      <SelectItem value="analyser-performance">Analyser mes performances</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Appel avec l'équipe */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Je souhaite réserver un appel avec l'équipe
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('appelEquipe', value)}>
                    <SelectTrigger className="w-full border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                      <SelectValue placeholder="Oui" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oui">Oui</SelectItem>
                      <SelectItem value="non">Non</SelectItem>
                      <SelectItem value="peut-etre">Peut-être plus tard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dites-nous en plus sur vos besoins
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full border-gray-200 rounded-xl px-4 py-3"
                  />
                </div>

                {/* Bouton d'envoi */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white py-4 rounded-xl text-lg font-medium"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>

                {/* Mention légale */}
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  En soumettant ce formulaire, j'accepte que mes informations soient 
                  utilisées par Repost à des fins strictement internes : envoi de 
                  contenus utiles, actualités et communications commerciales 
                  occasionnelles. Promis, zéro spam.
                </p>
              </form>
            </div>

            {/* Image */}
            <div className="lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/69891ded-f648-4402-a9a4-7eb789801157.png" 
                  alt="Femme souriante avec un laptop" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;