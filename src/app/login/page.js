import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl mx-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-bold text-slate-900 text-xl mb-4">
            $
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Bem-vindo de volta</h1>
          <p className="text-sm text-slate-400 mt-2">Entre com seus dados para acessar o painel</p>
        </div>

        <form className="space-y-4 flex flex-col">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-300">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-50 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-300">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-50 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
            />
          </div>
          
          <div className="flex items-center justify-between text-sm py-2">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white transition-colors">
              <input type="checkbox" className="rounded bg-slate-950 border-slate-800 text-brand-500 focus:ring-brand-500" />
              Lembrar-me
            </label>
            <a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">Esqueceu a senha?</a>
          </div>

          <button type="button" className="w-full py-3 mt-2 rounded-lg bg-brand-500 text-slate-950 font-semibold hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(255,155,81,0.2)] hover:shadow-[0_0_30px_rgba(255,155,81,0.4)] cursor-pointer">
            Entrar
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px bg-slate-800 flex-1"></div>
          <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Ou continue com</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button type="button" className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors border border-slate-700 cursor-pointer">
            {/* Google Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          
          <button type="button" className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors border border-slate-700 cursor-pointer">
            {/* Apple Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.84 2.1-1.92 3.61-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Apple
          </button>
          
          <button type="button" className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors border border-slate-700 cursor-pointer">
            {/* Facebook Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              <path d="M16.671 16.523l.532-3.469h-3.328V10.8c0-.949.465-1.874 1.956-1.874h1.54v-2.953s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.25H7.078v3.469h3.074v8.385c.594.092 1.205.141 1.83.141.644 0 1.272-.05 1.882-.146v-8.38h2.807z" fill="#fff"/>
            </svg>
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-slate-400 mt-6">
          Não tem uma conta? <a href="#" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">Criar agora</a>
        </p>
        
        {/* Voltar para Home */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
