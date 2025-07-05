
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl">
      <form className="space-y-6">
        {/* Prénom et Nom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="prenom">Prénom</Label>
            <Input id="prenom" placeholder="Prénom" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nom">Nom</Label>
            <Input id="nom" placeholder="Nom" />
          </div>
        </div>

        {/* Nom de l'entreprise */}
        <div className="space-y-2">
          <Label htmlFor="entreprise">Nom de l'entreprise</Label>
          <Input id="entreprise" placeholder="Nom de l'entreprise" />
        </div>

        {/* Email et Téléphone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="E-mail" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telephone">Téléphone</Label>
            <Input id="telephone" placeholder="Téléphone" />
          </div>
        </div>

        {/* Comment avez-vous connu Repost ? */}
        <div className="space-y-2">
          <Label>Comment avez-vous connu Repost ?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Moteurs de recherche (Google, Yahoo, Ecosia...)" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              <SelectItem value="moteurs">Moteurs de recherche (Google, Yahoo, Ecosia...)</SelectItem>
              <SelectItem value="reseaux-sociaux">Réseaux sociaux</SelectItem>
              <SelectItem value="bouche-a-oreille">Bouche à oreille</SelectItem>
              <SelectItem value="publicite">Publicité</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Que souhaitez-vous faire grâce à Repost ? */}
        <div className="space-y-2">
          <Label>Que souhaitez-vous faire grâce à Repost ?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Vendre mon stock de seconde main" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              <SelectItem value="vendre-stock">Vendre mon stock de seconde main</SelectItem>
              <SelectItem value="gerer-annonces">Gérer mes annonces</SelectItem>
              <SelectItem value="analyser-performance">Analyser mes performances</SelectItem>
              <SelectItem value="automatiser-ventes">Automatiser mes ventes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Je souhaite réserver un appel avec l'équipe */}
        <div className="space-y-2">
          <Label>Je souhaite réserver un appel avec l'équipe</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Oui" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              <SelectItem value="oui">Oui</SelectItem>
              <SelectItem value="non">Non</SelectItem>
              <SelectItem value="peut-etre">Peut-être plus tard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Dites-nous en plus sur vos besoins</Label>
          <Textarea 
            id="message" 
            placeholder="Message" 
            className="min-h-[100px]"
          />
        </div>

        {/* Bouton d'envoi */}
        <Button 
          type="submit" 
          className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white py-3 rounded-full text-lg font-medium"
        >
          Envoyer
        </Button>

        {/* Texte de confidentialité */}
        <p className="text-sm text-gray-500 italic">
          En soumettant ce formulaire, j'accepte que mes informations soient 
          utilisées par Repost à des fins strictement internes : envoi de 
          contenus utiles, actualités et communications commerciales 
          occasionnelles. Promis, zéro spam.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
