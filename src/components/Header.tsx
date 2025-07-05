
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/254b0023-f77e-4b19-88d7-097a1d29a292.png" 
              alt="Repost Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-brand-dark">Repost</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-purple transition-colors">
              Fonctionnalités
            </a>
            <a href="#platforms" className="text-gray-600 hover:text-brand-purple transition-colors">
              Plateformes
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-purple transition-colors">
              Tarifs
            </a>
            <a href="#contact" className="text-gray-600 hover:text-brand-purple transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-brand-purple">
              Connexion
            </Button>
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-6">
              Essai gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-gray-600 hover:text-brand-purple transition-colors">
                Fonctionnalités
              </a>
              <a href="#platforms" className="text-gray-600 hover:text-brand-purple transition-colors">
                Plateformes
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-brand-purple transition-colors">
                Tarifs
              </a>
              <a href="#contact" className="text-gray-600 hover:text-brand-purple transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-brand-purple">
                  Connexion
                </Button>
                <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white">
                  Essai gratuit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
