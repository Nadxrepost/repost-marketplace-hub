import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          prenom: formData.prenom,
          nom: formData.nom,
          entreprise: formData.entreprise || null,
          email: formData.email,
          telephone: formData.telephone || null,
          connaissance: formData.connaissance || null,
          objectif: null,
          appel_equipe: null,
          message: formData.message,
        }]);

      if (error) throw error;

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
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="lg:order-1 max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/eda65dab-96a0-458b-805a-743b25dfa30a.png" 
                  alt="Chat stylé avec des lunettes de soleil" 
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