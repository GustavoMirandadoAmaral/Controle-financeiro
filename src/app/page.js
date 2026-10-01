import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500/30 overflow-hidden relative">
      {/* Background gradients for premium look */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header/Nav */}
      <header className="relative z-10 flex items-center justify-around px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-slate-900">
            $
          </div>
          <span className="text-xl font-semibold tracking-tight">Finanças</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">
            Entrar
          </Link>
          <Link href="/login" className="px-4 py-2 text-sm font-medium bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer">
            Criar conta grátis
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-brand-400 text-xs font-medium mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Versão 1.0 já disponível
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Domine suas finanças <br className="hidden md:block" />
          com total elegância.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          Um controle financeiro projetado para ser simples, rápido e visualmente deslumbrante. Acompanhe suas despesas, receitas e investimentos em um único lugar.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/login" className="px-8 py-3 rounded-full bg-brand-500 text-slate-950 font-semibold hover:bg-brand-400 transition-all shadow-[0_0_30px_rgba(255,155,81,0.3)] hover:shadow-[0_0_40px_rgba(255,155,81,0.5)] cursor-pointer text-center inline-block">
            Começar Agora
          </Link>
          <button className="px-8 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer">
            Ver demonstração
          </button>
        </div>
      </section>

      {/* Mockup Preview */}
      <section className="relative z-10 px-4 pb-32 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-2 md:p-4 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative flex items-center justify-center">
            {/* Pseudo-Dashboard Mockup */}
            <div className="absolute inset-0 flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-slate-800 p-4 hidden md:block">
                <div className="h-6 w-32 bg-slate-800 rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-slate-800 rounded"></div>
                  <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                  <div className="h-4 w-5/6 bg-slate-800 rounded"></div>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-8">
                <div className="h-8 w-48 bg-slate-800 rounded mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="h-32 bg-slate-800 rounded-xl"></div>
                  <div className="h-32 bg-slate-800 rounded-xl"></div>
                  <div className="h-32 bg-slate-800 rounded-xl"></div>
                </div>
                <div className="h-64 bg-slate-800 rounded-xl w-full"></div>
              </div>
            </div>

            <p className="z-20 text-slate-500 font-medium">Dashboard será exibido aqui</p>
          </div>
        </div>
      </section>
    </main>
  );
}
