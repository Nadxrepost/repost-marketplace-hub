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
  const {
    toast
  } = useToast();
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

    // Validation des champs obligatoires
    if (!formData.prenom || !formData.nom || !formData.email || !formData.telephone || !formData.message || !formData.connaissance) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires (*)",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('contact_submissions').insert([{
        prenom: formData.prenom,
        nom: formData.nom,
        entreprise: formData.entreprise || null,
        email: formData.email,
        telephone: formData.telephone || null,
        connaissance: formData.connaissance || null,
        objectif: null,
        appel_equipe: null,
        message: formData.message
      }]);
      if (error) throw error;
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais."
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
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-20 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Contactez-nous !</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Que vous souhaitiez en savoir plus sur nos solutions, discuter d'un partenariat ou poser une question, notre équipe est à votre disposition.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire Tally */}
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
              <iframe 
                src="https://tally.so/r/mV2xGM" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Formulaire de contact Repost"
                className="w-full"
              />
            </div>

            {/* Image */}
            <div className="lg:order-1 max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/lovable-uploads/eda65dab-96a0-458b-805a-743b25dfa30a.png" alt="Chat stylé avec des lunettes de soleil" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;