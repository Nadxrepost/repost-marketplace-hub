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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Eyebrow */}
        <div className="inline-block px-3 py-1 rounded-full bg-gray-100 mb-4">
          <span className="text-xs font-semibold tracking-widest text-brand-dark">
            CALCULATEUR
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2 leading-tight md:whitespace-nowrap">
          Quel revenu votre stock peut-il réellement générer ?
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Estimez le potentiel de votre canal de revente en quelques secondes.
        </p>

        {/* Card */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-200">
          <h3 className="text-base font-semibold text-brand-dark mb-5">
            Votre programme aujourd'hui
          </h3>

          {/* Sliders */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-6">
              <label className="text-sm text-gray-700">Articles mis en vente / mois</label>
              <Slider
                value={[items]}
                onValueChange={(v) => setItems(v[0])}
                min={50}
                max={5000}
                step={50}
                className="[&_[data-orientation=horizontal]]:bg-brand-purple/20 [&_.bg-primary]:bg-brand-purple [&_[role=slider]]:bg-white"
              />
              <span className="text-sm font-semibold text-brand-dark w-20 text-right">
                {items.toLocaleString('fr-FR')}
              </span>
            </div>

            <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-6">
              <label className="text-sm text-gray-700">Prix moyen par article (€)</label>
              <Slider
                value={[avgPrice]}
                onValueChange={(v) => setAvgPrice(v[0])}
                min={10}
                max={1000}
                step={5}
                className="[&_[data-orientation=horizontal]]:bg-brand-purple/20 [&_.bg-primary]:bg-brand-purple [&_[role=slider]]:bg-white"
              />
              <span className="text-sm font-semibold text-brand-dark w-20 text-right">
                {avgPrice} €
              </span>
            </div>

            <div className="grid grid-cols-[1fr_2fr_auto] items-center gap-6">
              <label className="text-sm text-gray-700">Sell-through actuel</label>
              <Slider
                value={[sellThrough]}
                onValueChange={(v) => setSellThrough(v[0])}
                min={5}
                max={80}
                step={1}
                className="[&_[data-orientation=horizontal]]:bg-brand-purple/20 [&_.bg-primary]:bg-brand-purple [&_[role=slider]]:bg-white"
              />
              <span className="text-sm font-semibold text-brand-dark w-20 text-right">
                {sellThrough}%
              </span>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white rounded-xl p-4 flex items-center justify-between mb-3 border border-gray-200">
            <div>
              <p className="text-sm font-semibold text-brand-dark">
                Revenu annuel additionnel estimé avec Repost
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Basé sur +40% de sell-through moyen constaté chez nos clients
              </p>
            </div>
            <p className="text-xl md:text-2xl font-bold text-orange-600 whitespace-nowrap ml-4">
              +{formatEuro(additionalRevenue)}
            </p>
          </div>

          {/* CTA */}
          <Button
            variant="outline"
            onClick={() => navigate('/contact')}
            className="w-full bg-white border-gray-300 text-brand-dark hover:bg-gray-50 py-4 text-sm font-medium"
          >
            Contactez-nous
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;