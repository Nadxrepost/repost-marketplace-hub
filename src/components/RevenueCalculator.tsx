import { useState, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RevenueCalculator = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(2000);
  const [avgPrice, setAvgPrice] = useState(215);
  const [sellThrough, setSellThrough] = useState(20);

  // Uplift de +40% sur le sell-through constaté chez les clients Repost
  const additionalRevenue = useMemo(() => {
    const currentAnnual = items * 12 * avgPrice * (sellThrough / 100);
    const newSellThrough = Math.min(100, sellThrough * 1.4);
    const newAnnual = items * 12 * avgPrice * (newSellThrough / 100);
    return Math.round(newAnnual - currentAnnual);
  }, [items, avgPrice, sellThrough]);

  const formatEuro = (value: number) =>
    new Intl.NumberFormat('fr-FR').format(value) + ' €';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Eyebrow */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 mb-6">
          <span className="text-xs font-semibold tracking-widest text-brand-dark">
            CALCULATEUR
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-3 leading-tight">
          Combien laissez-vous sur la table ?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Estimez le revenu annuel que votre programme 2<sup>nde</sup> main devrait générer.
        </p>

        {/* Card */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200">
          <h3 className="text-xl font-semibold text-brand-dark mb-8">
            Votre programme aujourd'hui
          </h3>

          {/* Sliders */}
          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-6">
              <label className="text-gray-700">Articles mis en vente / mois</label>
              <Slider
                value={[items]}
                onValueChange={(v) => setItems(v[0])}
                min={50}
                max={5000}
                step={50}
              />
              <span className="font-semibold text-brand-dark w-20 text-right">
                {items.toLocaleString('fr-FR')}
              </span>
            </div>

            <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-6">
              <label className="text-gray-700">Prix moyen par article (€)</label>
              <Slider
                value={[avgPrice]}
                onValueChange={(v) => setAvgPrice(v[0])}
                min={10}
                max={1000}
                step={5}
              />
              <span className="font-semibold text-brand-dark w-20 text-right">
                {avgPrice} €
              </span>
            </div>

            <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-6">
              <label className="text-gray-700">Sell-through actuel</label>
              <Slider
                value={[sellThrough]}
                onValueChange={(v) => setSellThrough(v[0])}
                min={5}
                max={80}
                step={1}
              />
              <span className="font-semibold text-brand-dark w-20 text-right">
                {sellThrough}%
              </span>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white rounded-2xl p-6 flex items-center justify-between mb-4 border border-gray-200">
            <div>
              <p className="font-semibold text-brand-dark">
                Revenu annuel additionnel estimé avec Repost
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Basé sur +40% de sell-through moyen constaté chez nos clients
              </p>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-orange-600 whitespace-nowrap ml-4">
              +{formatEuro(additionalRevenue)}
            </p>
          </div>

          {/* CTA */}
          <Button
            variant="outline"
            onClick={() => navigate('/contact')}
            className="w-full bg-white border-gray-300 text-brand-dark hover:bg-gray-50 py-6 text-base font-medium"
          >
            Obtenir mon estimation personnalisée
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;