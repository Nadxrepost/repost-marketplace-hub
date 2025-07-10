
const BusinessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100/50 to-blue-100/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Tout ce dont vous avez besoin pour gérer et développer votre entreprise de commerce électronique multicanal
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous savons qu'il est difficile de développer votre activité, et encore plus de gérer vos stocks et vos commandes, face à la multiplication des canaux de vente. Sellbrite vous aide à atteindre de nouveaux clients, où qu'ils achètent : créez et gérez vos annonces, contrôlez vos stocks et traitez vos commandes depuis une interface unique et intuitive que vous adorerez utiliser. Soyez opérationnel sur Sellbrite dès aujourd'hui !
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4">
              <img 
                src="/lovable-uploads/d17c062a-67ca-498c-a5ef-9039d1f1c7c0.png" 
                alt="Dashboard de gestion multicanal" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-300/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
