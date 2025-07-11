
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/254b0023-f77e-4b19-88d7-097a1d29a292.png" 
                alt="Repost Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">Repost</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La solution SaaS complète pour les professionnels de la seconde main. 
              Centralisez, gérez, diffusez et mesurez vos performances sur toutes les plateformes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-14 h-14 flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/lovable-uploads/7eb31316-f7c7-44d1-b31f-3c5f2e4f0390.png" alt="Facebook" className="w-12 h-12" />
              </a>
              <a href="#" className="w-14 h-14 flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/lovable-uploads/21f8988a-e9ad-44ee-ace3-522d50c2ad50.png" alt="Twitter" className="w-12 h-12" />
              </a>
              <a href="#" className="w-14 h-14 flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/lovable-uploads/47bd37b5-d3a6-458a-b0b1-c2a4a6370eee.png" alt="Instagram" className="w-12 h-12" />
              </a>
              <a href="#" className="w-14 h-14 flex items-center justify-center hover:opacity-80 transition-opacity">
                <img src="/lovable-uploads/198414f6-0945-4f54-93ea-3418f3290548.png" alt="LinkedIn" className="w-12 h-12" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Produit</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#platforms" className="text-gray-300 hover:text-white transition-colors">Plateformes</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-purple" />
                <span className="text-gray-300">contact@repost.fr</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-purple" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-purple mt-1" />
                <span className="text-gray-300">
                  123 Rue de l'Innovation<br/>
                  75001 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Repost. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
