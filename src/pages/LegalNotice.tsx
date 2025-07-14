import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Éditeur du site</h2>
              <p className="text-gray-700 mb-6">
                Repost<br />
                SAS en cours d'immatriculation<br />
                Siège social : STATION F - 5 parvis Alan Turing, 75013 PARIS<br />
                Email : <a href="mailto:hello@repost.fashion" className="text-blue-600 hover:text-blue-800">hello@repost.fashion</a>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Responsable de la publication</h2>
              <p className="text-gray-700 mb-6">
                Nadine Bikounkou
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hébergeur</h2>
              <p className="text-gray-700 mb-6">
                Le site www.repost.fashion est hébergé par :<br />
                Lovable<br />
                Adresse : 1111B South Governors Avenue, Dover, DE 19904, USA<br />
                Site : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://lovable.dev</a>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-6">
                L'ensemble du contenu présent sur ce site (textes, images, logos, graphismes, vidéos, icônes, etc.) est la propriété exclusive de Repost, sauf indication contraire.<br />
                Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable, est strictement interdite.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Données personnelles</h2>
              <p className="text-gray-700 mb-6">
                Repost s'engage à ce que la collecte et le traitement de vos données personnelles, effectués à partir du site www.seendra.app, soient conformes au Règlement Général sur la Protection des Données (RGPD).<br />
                Pour en savoir plus, consultez notre <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800">Politique de confidentialité</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalNotice;