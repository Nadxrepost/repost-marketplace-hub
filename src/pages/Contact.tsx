import Header from '@/components/Header';

const Contact = () => {
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

          <div className="flex justify-center">
            <div className="max-w-md mx-auto">
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