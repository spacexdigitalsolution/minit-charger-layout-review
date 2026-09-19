import Var1FullBleed from "./_components/Var1_FullBleed";
import Var2SplitScreen from "./_components/Var2_SplitScreen";
import Var3Diagram from "./_components/Var3_Diagram";
import Var4Oversized from "./_components/Var4_Oversized";
import Var5StatLed from "./_components/Var5_StatLed";
import Var6Moody from "./_components/Var6_Moody";
import Var7Persona from "./_components/Var7_Persona";

export const metadata = {
  title: "Hero Variations | Internal Playground",
  robots: { index: false, follow: false },
};

export default function HeroVariationsPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase  flex items-center justify-center flex-wrap gap-4 py-3 px-4 shadow-sm text-zinc-600 dark:text-zinc-400">
        <a href="#var-1" className="hover:text-green-600 transition-colors">Var 1: Full-Bleed</a>
        <a href="#var-2" className="hover:text-green-600 transition-colors">Var 2: Split Screen</a>
        <a href="#var-3" className="hover:text-green-600 transition-colors">Var 3: Diagram</a>
        <a href="#var-4" className="hover:text-green-600 transition-colors">Var 4: Oversized</a>
        <a href="#var-5" className="hover:text-green-600 transition-colors">Var 5: Stat-Led</a>
        <a href="#var-6" className="hover:text-green-600 transition-colors">Var 6: Moody</a>
        <a href="#var-7" className="hover:text-green-600 transition-colors">Var 7: Persona</a>
      </div>

      <div className="pt-[44px]"> {/* Offset for fixed nav */}
        <section id="var-1" className="min-h-screen relative border-b-8 border-red-500"><Var1FullBleed /></section>
        <section id="var-2" className="min-h-screen relative border-b-8 border-red-500"><Var2SplitScreen /></section>
        <section id="var-3" className="min-h-screen relative border-b-8 border-red-500"><Var3Diagram /></section>
        <section id="var-4" className="min-h-screen relative border-b-8 border-red-500"><Var4Oversized /></section>
        <section id="var-5" className="min-h-screen relative border-b-8 border-red-500"><Var5StatLed /></section>
        <section id="var-6" className="min-h-screen relative border-b-8 border-red-500"><Var6Moody /></section>
        <section id="var-7" className="min-h-screen relative border-b-8 border-red-500"><Var7Persona /></section>
      </div>
    </main>
  );
}
