import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, MessageCircle, ChevronDown, ArrowRight, Sparkles, Clock, Layers, Star, Copy, Check } from 'lucide-react';

// --- Components ---

const OrganicDividerTop = ({ color = "fill-earth-100" }) => (
  <div className="w-full overflow-hidden leading-none rotate-180 absolute top-0 left-0 z-0">
    <svg className={`relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px] ${color}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const OrganicDividerBottom = ({ color = "fill-earth-100" }) => (
  <div className="w-full overflow-hidden leading-none">
    <svg className={`relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px] ${color}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Valores', href: '#valores' },
    { name: 'Pagamento', href: '#pagamento' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-earth-100/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <a href="#home" className="font-display text-xl md:text-2xl font-semibold text-earth-900 tracking-wide hover:text-moss-dark transition-colors z-50">
          A Suma Sacerdotisa
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-sans text-earth-800 hover:text-moss-dark transition-colors text-sm uppercase tracking-widest font-medium relative group whitespace-nowrap">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-moss transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-earth-900 focus:outline-none hover:text-moss transition-colors z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-earth-100 shadow-xl border-t border-earth-200 flex flex-col items-center py-8 space-y-6 animate-fade-in z-40">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans text-earth-800 text-lg hover:text-moss transition-colors w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center pt-28 pb-20 md:pt-20 md:pb-20 overflow-hidden bg-earth-100">
      {/* Abstract Background Elements - Adjusted for mobile visibility */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-moss/20 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 animate-pulse duration-[10000ms]"></div>
      <div className="absolute bottom-0 left-0 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-terracotta/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-muted-purple/20 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-moss mx-auto mb-2 opacity-80" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-earth-900 mb-6 leading-tight">
          A Suma Sacerdotisa
        </h1>
        <h2 className="font-serif text-xl md:text-2xl text-earth-700 italic mb-8 max-w-2xl mx-auto">
          Tarot Terapêutico para autoconhecimento, cura e direcionamento.
        </h2>
        <p className="font-sans text-earth-600 mb-10 max-w-lg mx-auto leading-relaxed text-base md:text-lg">
          Consultas online com foto e áudio, para você revisitar a leitura sempre que precisar e reconectar-se com sua essência.
        </p>
        
        <div className="flex flex-col justify-center items-center gap-2">
           <div className="animate-bounce">
             <ChevronDown size={32} className="text-earth-800" />
           </div>
           <a 
            href="https://wa.me/5535998997754" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-earth-800 text-earth-50 rounded-full font-sans font-bold shadow-lg hover:bg-moss-dark hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Agendar Consulta
            <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="relative pt-32 md:pt-44 pb-40 md:pb-56 bg-white">
      {/* Divider de cima */}
      <div className="absolute top-0 w-full rotate-180 z-0">
        <OrganicDividerBottom color="fill-earth-100" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative max-w-sm md:max-w-none mx-auto">
            {/* Shape orgânico apenas como enfeite, sem imagem */}
            <div className="relative z-10 organic-shape overflow-hidden shadow-xl aspect-[4/5] bg-earth-200 border-2 border-transparent hover:border-moss/30 transition-all duration-500">
              {/* vazio de propósito – só o shape mesmo */}
            </div>

            {/* Blob decorativo atrás */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-moss/20 organic-shape -z-10 transform rotate-6"></div>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <h3 className="font-display text-3xl md:text-4xl text-earth-900 mb-6 relative inline-block">
              Sobre a Suma Sacerdotisa
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-moss rounded-full"></span>
            </h3>

            <div
              className="font-sans text-earth-700 space-y-4 leading-relaxed text-lg text-justify hyphens-auto"
              style={{ textJustify: 'inter-word' }}
            >
              <p>
                Desde 2016, trilho o caminho do Tarot com seriedade, sensibilidade e estudo contínuo. Ao longo desses anos, já realizei milhares de tiragens e acompanhei pessoas de diferentes países em seus processos de autoconhecimento, cura e transformação.
              </p>
              <p>
                Minha abordagem se baseia no tarot terapêutico, um trabalho que vai além de previsões. Aqui, cada carta é um espelho simbólico capaz de revelar padrões, desbloquear emoções e iluminar caminhos internos. A leitura se torna uma conversa profunda entre você, sua história e o que o Tarot deseja trazer à consciência.
              </p>
              <p>
                Meu propósito é oferecer orientação com responsabilidade e acolhimento, criando um espaço seguro onde você possa se encontrar, se ouvir e se transformar.
              </p>
              <p className="font-serif italic text-earth-900 pt-2 border-l-4 border-moss pl-4">
                Seja bem-vindo(a) ao templo da Suma Sacerdotisa, onde o Tarot é ferramenta, ponte e cura.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider de baixo */}
      <div className="absolute bottom-0 w-full z-0 pointer-events-none">
        <OrganicDividerBottom color="fill-earth-100" />
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-earth-100 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h3 className="font-display text-3xl text-earth-900 mb-12">Como funcionam as consultas</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth-200 hover:shadow-md hover:border-moss/50 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-moss group-hover:w-full group-hover:opacity-10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="bg-moss/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-moss-dark" size={20} />
              </div>
              <h4 className="font-serif text-xl text-earth-800 mb-3">Agendamento</h4>
              <p className="font-sans text-earth-600">
                As consultas com o tarot são agendadas somente mediante pagamento e envio do comprovante.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth-200 hover:shadow-md hover:border-moss/50 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-terracotta group-hover:w-full group-hover:opacity-10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="bg-terracotta/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Layers className="text-terracotta-dark" size={20} />
              </div>
              <h4 className="font-serif text-xl text-earth-800 mb-3">Formato</h4>
              <p className="font-sans text-earth-600">
                Todas as consultas são realizadas com <strong>foto e áudio</strong>, para que o consulente possa acessar o conteúdo da leitura quantas vezes quiser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="valores" className="pt-32 md:pt-44 pb-32 bg-earth-50 relative">
      <div className="absolute top-0 w-full overflow-hidden leading-none rotate-180 z-0">
         <OrganicDividerBottom color="fill-earth-100" />
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="font-display text-4xl text-earth-900 mb-4">Valores e Serviços</h3>
          <p className="font-sans text-earth-600 max-w-xl mx-auto">Escolha a modalidade que melhor ressoa com o seu momento atual.</p>
        </div>

        {/* Section 1: Perguntas Avulsas */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="h-px w-12 bg-moss"></span>
            <h4 className="font-serif text-2xl text-earth-800 italic">Perguntas Avulsas</h4>
            <span className="h-px w-12 bg-moss"></span>
          </div>
          
          {/* Grid responsive update: 2 cols (mobile) -> 5 cols (desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { qtd: 1, price: 20 },
              { qtd: 2, price: 25 },
              { qtd: 3, price: 30 },
              { qtd: 4, price: 40 },
              { qtd: 5, price: 50 },
            ].map((item, idx) => (
              <div key={idx} className={`${idx === 4 ? 'col-span-2 md:col-span-1' : ''} bg-white p-6 rounded-xl shadow-sm border border-earth-200 text-center hover:-translate-y-1 hover:border-moss transition-all duration-300`}>
                <span className="block font-display text-3xl text-moss-dark mb-2">{item.qtd}</span>
                <span className="block text-xs uppercase tracking-widest text-earth-500 mb-2">{item.qtd === 1 ? 'Pergunta' : 'Perguntas'}</span>
                <span className="block font-serif text-lg font-bold text-earth-800">R$ {item.price},00</span>
              </div>
            ))}
          </div>
          <div className="bg-white/50 p-6 rounded-lg text-center max-w-3xl mx-auto border-l-4 border-moss">
             <p className="font-sans text-earth-700 text-sm md:text-base">
               Ideal para tirar "aquela pulguinha" de trás da orelha. Perguntas objetivas e claras para te direcionar. <br/>
               <span className="text-xs text-earth-500 mt-2 block font-bold">* Não realizo mais que 5 perguntas para um cliente em um mesmo jogo.</span>
             </p>
          </div>
        </div>

        {/* Section 2: Por Tempo */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="h-px w-12 bg-moss"></span>
            <h4 className="font-serif text-2xl text-earth-800 italic">Leitura por Hora</h4>
            <span className="h-px w-12 bg-moss"></span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
             <div className="bg-moss text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-moss-light/30 rounded-full blur-3xl group-hover:bg-earth-800/20 transition-colors"></div>
                <div className="relative z-10 flex justify-between items-center mb-4">
                  <h5 className="font-display text-xl">30 Minutos</h5>
                  <Clock size={24} className="text-earth-100"/>
                </div>
                <p className="text-3xl font-serif font-bold mb-4">R$ 49,90</p>
                <p className="text-sm text-earth-100 opacity-90">Perguntas livres dentro de 30 minutos.</p>
             </div>

             <div className="bg-moss text-white p-8 rounded-2xl shadow-md border border-moss-dark/10 relative overflow-hidden hover:border-white/50 transition-colors">
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-moss-light/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex justify-between items-center mb-4">
                  <h5 className="font-display text-xl text-white">1 Hora</h5>
                  <Clock size={24} className="text-earth-100"/>
                </div>
                <p className="text-3xl font-serif font-bold text-white mb-4">R$ 92,90</p>
                <p className="text-sm text-earth-50">Perguntas livres dentro de 60 minutos.</p>
             </div>
          </div>
          <p className="text-center mt-6 font-sans text-earth-600 text-sm max-w-2xl mx-auto">
            Ideal para quem tem muitas dúvidas e não sabe por onde começar. <br/>
            <span className="italic">1 hora é o tempo máximo que faço para um cliente em um jogo.</span>
          </p>
        </div>

        {/* Section 3: Tiragens Especiais */}
        <div>
           <div className="flex items-center gap-4 mb-10 justify-center">
            <span className="h-px w-12 bg-moss"></span>
            <h4 className="font-serif text-2xl text-earth-800 italic">Tiragens Especiais</h4>
            <span className="h-px w-12 bg-moss"></span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <SpecialCard 
              title="Mesa Real" 
              price="R$ 148,00" 
              desc="Tiragem adaptada do baralho cigano com 36 cartas. Analisa espiritualidade, afetivo, mental, financeiro, saúde e trabalho (passado, presente, futuro)."
              note="Agendamento antecipado necessário. Prazo maior."
            />
            <SpecialCard 
              title="Daqui 6 meses + 1 pergunta" 
              price="R$ 52,90" 
              desc="Previsões para trabalho, estudo, financeiro, família e amor. Ideal para novos ciclos ou inícios de ano."
            />
            <SpecialCard 
              title="Combo do Amor" 
              price="R$ 92,00" 
              desc="Para solteiros, enrolados ou comprometidos. Tudo sobre a vida amorosa e propensões do momento. A mais completa para o coração."
            />
            <SpecialCard 
              title="Mandala Astrológica + 1 pergunta" 
              price="R$ 100,00" 
              desc="Entenda todos os campos da vida através das 12 casas do zodíaco. Abrangente e conselheira."
              note="Agendamento antecipado necessário. Prazo maior."
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const SpecialCard = ({ title, price, desc, note, color = "border-earth-200" }: { title: string, price: string, desc: string, note?: string, color?: string }) => (
  <div className={`bg-white p-8 rounded-xl shadow-sm border-t-4 ${color} hover:shadow-lg hover:border-moss transition-all duration-300`}>
    <div className="flex justify-between items-start mb-4">
      <h5 className="font-display text-lg font-bold text-earth-900 w-2/3">{title}</h5>
      <span className="font-serif text-xl font-bold text-earth-700 whitespace-nowrap">{price}</span>
    </div>
    <p className="font-sans text-earth-600 text-sm leading-relaxed mb-4">{desc}</p>
    {note && (
      <p className="text-xs text-earth-400 italic flex items-center gap-1">
        <Clock size={12} /> {note}
      </p>
    )}
  </div>
);

const Payment = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "sacerdotisasuma@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pagamento" className="pt-20 md:pt-28 pb-24 bg-white relative">
       {/* Separator from previous section */}
       <div className="absolute top-0 w-full overflow-hidden leading-none z-0">
         <div className="w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px] fill-earth-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
         </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h3 className="font-display text-3xl text-earth-900 mb-8">Pagamento</h3>
        
        <p className="font-sans text-earth-600 mb-8 text-lg">
          O pagamento das consultas é realizado exclusivamente via PIX, utilizando a chave:
        </p>

        <div className="inline-flex items-center gap-4 bg-earth-50 border border-earth-200 py-4 px-6 md:px-8 rounded-xl mb-10 shadow-sm max-w-full overflow-hidden hover:border-moss transition-colors group cursor-pointer" onClick={handleCopy}>
          <div className="bg-moss/20 p-2 rounded-lg">
            <span className="font-bold text-xs text-moss-dark uppercase tracking-widest">PIX</span>
          </div>
          <span className="font-serif text-earth-800 text-lg md:text-xl font-bold truncate selection:bg-moss selection:text-white">
            {pixKey}
          </span>
          <button 
            className="ml-2 text-earth-500 hover:text-moss transition-colors focus:outline-none"
            title="Copiar chave PIX"
          >
            {copied ? <Check size={20} className="text-moss" /> : <Copy size={20} />}
          </button>
        </div>
        
        <div className="flex justify-center">
           <div className="bg-earth-100/50 rounded-lg p-6 max-w-2xl border-l-4 border-terracotta">
             <p className="font-sans text-earth-700">
               Após o pagamento, o cliente deve enviar o comprovante via WhatsApp para confirmar o agendamento.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer id="contato" className="bg-earth-900 text-earth-100 py-16 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h3 className="font-display text-3xl mb-8">Fale Comigo</h3>
        <p className="font-sans text-earth-200 mb-10 text-lg">
          Ficou com dúvidas ou quer agendar sua leitura?<br/>
          Me chame pelo WhatsApp ou direct do Instagram.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-12 max-w-lg md:max-w-none mx-auto">
          <a href="https://wa.me/5535998997754" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-moss hover:bg-moss-light text-earth-900 rounded-full transition-colors font-bold w-full md:w-auto justify-center shadow-lg hover:shadow-moss/30">
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a href="https://instagram.com/a.sumasacerdotisa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-terracotta hover:bg-terracotta-dark text-white rounded-full transition-colors font-bold w-full md:w-auto justify-center shadow-lg hover:shadow-terracotta/30">
            <Instagram size={20} />
            @a.sumasacerdotisa
          </a>
          <a href="mailto:sacerdotisasuma@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-moss hover:bg-moss-light text-earth-900 rounded-full transition-colors font-bold w-full md:w-auto justify-center shadow-lg hover:shadow-moss/30">
            <Mail size={20} />
            Email
          </a>
        </div>

        <div className="border-t border-earth-800 pt-8">
           <p className="font-serif text-sm text-earth-500 italic">
             "O Tarot é uma chave, mas a porta é você."
           </p>
           <p className="text-xs text-earth-700 mt-4">
             © {new Date().getFullYear()} A Suma Sacerdotisa. Todos os direitos reservados.
           </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-earth-50 min-h-screen text-earth-900 selection:bg-moss selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Pricing />
      <Payment />
      <Contact />
    </div>
  );
};

export default App;