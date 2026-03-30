import VersionTabs from "@/components/VersionTabs";
import NeonNightlife from "@/components/NeonNightlife";
import PremiumElegance from "@/components/PremiumElegance";
import VibrantParty from "@/components/VibrantParty";

export default function Home() {
  const labels = [
    "V1: Neon Nightlife",
    "V2: Premium Elegance",
    "V3: Vibrant Party",
  ];

  const descriptions = [
    "Dark + neon green/orange — matches existing brand energy. Bold, party-forward.",
    "Dark charcoal + gold — sophisticated luxury positioning for weddings & corporate.",
    "Navy + emerald/purple/rose — multi-color energy, youthful, broad market appeal.",
  ];

  return (
    <VersionTabs labels={labels} descriptions={descriptions}>
      <NeonNightlife />
      <PremiumElegance />
      <VibrantParty />
    </VersionTabs>
  );
}
