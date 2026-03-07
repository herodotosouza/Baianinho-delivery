import React, { useState, useRef, useEffect } from 'react';
import { 
  Instagram, Phone, Utensils, Coffee, IceCream, Pizza, Star, 
  Beef, Fish, Soup, Flame, UtensilsCrossed, Zap, ChevronRight,
  ShoppingBag, Plus, Minus, X, Trash2, MapPin, Send, MessageSquare, Truck, Clock, Copy
} from 'lucide-react';

// ==========================================
// CONFIGURAÇÃO DO CARDÁPIO COMPLETO
// ==========================================
const MENU_DATA = {
  hamburgueres: {
    title: 'Hambúrgueres',
    icon: <Beef size={18} />,
    items: [
      { id: 'h1', name: 'X-Burguer', price: 25 },
      { id: 'h2', name: 'X-Salada', price: 27 },
      { id: 'h3', name: 'X-Eg Burguer', price: 29 },
      { id: 'h4', name: 'X-Pollo', price: 32 },
      { id: 'h5', name: 'X-Bacon', price: 35 },
      { id: 'h6', name: 'X-Calabresa', price: 35 },
      { id: 'h7', name: 'X-Picanha', price: 35 },
      { id: 'h8', name: 'X-Tudo', price: 42 },
    ],
    adicionais: [
      { name: 'Bacon', price: 8 },
      { name: 'Carne', price: 8 },
      { name: 'Ovo', price: 5 },
      { name: 'Salsicha', price: 5 },
    ]
  },
  sushi: {
    title: 'Sushi & Temaki',
    icon: <Fish size={18} />,
    items: [
      { id: 's1', name: 'Joy (6 unid.)', price: 70 },
      { id: 's2', name: 'Joy Flambado / Flameado (6 unid.)', price: 75 },
      { id: 's3', name: 'Hot Hol (10 unid.)', price: 70 },
      { id: 's4', name: 'Uramaki Salmão', price: 70 },
      { id: 's5', name: 'Uramaki Filadelfia (10 unid.)', price: 80 },
      { id: 's6', name: 'Uramaki Camarão', price: 80 },
      { id: 's7', name: '2 Temaki Salmão (Promo)', price: 90, highlight: true },
      { id: 's8', name: 'Nigiri (6 unid.)', price: 70 },
      { id: 's9', name: 'Nigiri Flambado (6 unid.)', price: 75 },
      { id: 's10', name: 'Sushi Dog (10 unid.)', price: 60 },
      { id: 's11', name: 'Sushi Burguer', price: 50 },
      { id: 's12', name: 'Ceviche', price: 60 },
      { id: 's13', name: 'Temaki Salmão', price: 50 },
      { id: 's14', name: 'Temaki Salmão Grelhado', price: 60 },
      { id: 's15', name: 'Temaki Salmão Filadelfia', price: 70 },
      { id: 's16', name: 'Temaki Salmão Filadelfia Grelhado', price: 80 },
      { id: 's17', name: 'Temaki Hot', price: 70 },
    ]
  },
  orientais: {
    title: 'Pratos Orientais',
    icon: <Soup size={18} />,
    items: [
      { id: 'o1', name: 'Yakisoba Frango', price: 50 },
      { id: 'o2', name: 'Yakisoba de Carne', price: 50 },
      { id: 'o3', name: 'Yakisoba Mixto', price: 55 },
      { id: 'o4', name: 'Yakisoba de Camarão', price: 70 },
      { id: 'o5', name: 'Frango Tonkatsu', price: 45 },
      { id: 'o6', name: 'Frango Xadrez', price: 50 },
      { id: 'o7', name: 'Salmão Grelhado', price: 80 },
    ]
  },
  carnes: {
    title: 'Carnes e Espetos',
    icon: <Flame size={18} />,
    items: [
      { id: 'c1_s', name: 'Corazon de Pollo (Simples)', price: 15 },
      { id: 'c1_c', name: 'Corazon de Pollo (Completo)', price: 20 },
      { id: 'c2_s', name: 'Ala de Pollo (Simples)', price: 18 },
      { id: 'c2_c', name: 'Ala de Pollo (Completo)', price: 29 },
      { id: 'c3_s', name: 'Pechuga de Pollo / Pollo (Simples)', price: 18 },
      { id: 'c3_c', name: 'Pechuga de Pollo / Pollo (Completo)', price: 29 },
      { id: 'c4_s', name: 'Jiba (Simples)', price: 23 },
      { id: 'c4_c', name: 'Jiba (Completo)', price: 35 },
      { id: 'c5_s', name: 'Cuadril (Simples)', price: 23 },
      { id: 'c5_c', name: 'Cuadril (Completo)', price: 35 },
      { id: 'c6_s', name: 'Punta de S (Simples)', price: 25 },
      { id: 'c6_c', name: 'Punta de S (Completo)', price: 42 },
    ]
  },
  refeicoes: {
    title: 'Pratos e Refeições',
    icon: <Utensils size={18} />,
    items: [
      { id: 'r1', name: 'Bife a Parmegiana', price: 42 },
      { id: 'r2', name: 'Bife a Cubana', price: 42 },
      { id: 'r3', name: 'Carne de Sol', price: 50 },
      { id: 'r4', name: 'Escondidinho', price: 42 },
      { id: 'r5', name: 'Panqueca', price: 38 },
      { id: 'r6', name: 'Lasanha', price: 42 },
      { id: 'r7', name: 'Strognoff de Frango', price: 38 },
      { id: 'r8', name: 'Salpicão', price: 38 },
      { id: 'r9', name: 'Paulista', price: 42 },
    ],
    adicionais: [
      { name: 'Arroz', price: 5 },
      { name: 'Feijão', price: 8 },
      { name: 'Yuka', price: 3 },
    ]
  },
  empanadas: {
    title: 'Empanadas e Entradas',
    icon: <UtensilsCrossed size={18} />,
    items: [
      { id: 'e1', name: 'Empanada de Mozzarela', price: 30 },
      { id: 'e2', name: 'Empanada de Pizza', price: 32 },
      { id: 'e3', name: 'Empanada de Carne Molida', price: 32 },
      { id: 'e4', name: 'Empanada de Pollo', price: 32 },
      { id: 'e5', name: 'Empanada de Carne de Sol', price: 35 },
      { id: 'e6', name: 'Empanada de Calabresa', price: 38 },
      { id: 'e7', name: 'Empanada de Chocolate', price: 30 },
      { id: 'e8', name: 'Harumaki de Queijo', price: 40 },
      { id: 'e9', name: 'Harumaki de Pizza', price: 40 },
    ]
  },
  porcoes: {
    title: 'Porções',
    icon: <Pizza size={18} />,
    items: [
      { id: 'p1', name: 'Porcion de papas', price: 30 },
      { id: 'p2', name: 'Porcion de calabresa com papas', price: 50 },
    ]
  },
  bebidas: {
    title: 'Bebidas',
    icon: <Coffee size={18} />,
    items: [
      { id: 'b1', name: 'Refrigerante 2 Litros', price: 18 },
      { id: 'b2', name: 'Refrigerante Personal', price: 10 },
      { id: 'b3', name: 'Suco Natural', price: 10 },
      { id: 'b4', name: 'Suco com Leite', price: 15 },
      { id: 'b5', name: 'Água', price: 8 },
      { id: 'b6', name: 'Água com Gás', price: 8 },
      { id: 'b7', name: 'Chopp Pacena', price: 15 },
      { id: 'b8', name: 'Corona', price: 20 },
    ]
  },
  combos: {
    title: 'Combos e Promoções',
    icon: <Zap size={18} />,
    items: [
      { id: 'cb1', name: 'Combo 1: 6 Uramaki, 6 Hot Hol y 1 Temaki', price: 110, highlight: true },
      { id: 'cb2', name: 'Combo 2: 6 Uramaki, 6 Niguiri y 1 Temaki Fila', price: 145, highlight: true },
      { id: 'cb3', name: 'PROMO - TEMAKI (Todos los dias)', price: 90, highlight: true },
    ]
  },
  sobremesas: {
    title: 'Sobremesas',
    icon: <IceCream size={18} />,
    items: [
      { id: 'sm1', name: 'Brigadeiro', price: 5 },
      { id: 'sm2', name: 'Trufas', price: 10 },
    ]
  }
};

// ==========================================
// ZONAS DE ENTREGA (SANTA CRUZ)
// ==========================================
const ZONAS_ENTREGA = [
  { label: 'Retirada no Local', fee: 0 },
  { label: 'Centro', fee: 5 },
  { label: '1º ao 2º Anel', fee: 8 },
  { label: '3º ao 4º Anel', fee: 12 },
  { label: '5º Anel em diante', fee: 15 }
];

const App = () => {
  const [activeTab, setActiveTab] = useState('hamburgueres');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerData, setCustomerData] = useState({ 
    name: '', 
    address: '', 
    payment: 'Dinheiro',
    zone: ZONAS_ENTREGA[0]
  });
  const scrollNavRef = useRef(null);

  const addToCart = (product) => {
    setCart(prev => [...prev, { 
      ...product, 
      qty: 1, 
      obs: '', 
      cartId: Math.random().toString(36).substr(2, 9) 
    }]);
  };

  const updateQty = (cartId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const updateObs = (cartId, text) => {
    setCart(prev => prev.map(item => item.cartId === cartId ? { ...item, obs: text } : item));
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const deliveryFee = customerData.zone.fee;
  const grandTotal = subtotal + deliveryFee;
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const getItemQty = (id) => {
    return cart.filter(i => i.id === id).reduce((acc, curr) => acc + curr.qty, 0);
  };

  const finalizeOrder = () => {
    if (!customerData.name || (customerData.zone.fee > 0 && !customerData.address)) {
      alert("Por favor, preencha seu Nome e Endereço para entrega.");
      return;
    }

    const itemsText = cart.map(item => {
      let text = `• ${item.qty}x ${item.name} (Bs ${item.price * item.qty})`;
      if (item.obs) text += `\n   _Nota: ${item.obs}_`;
      return text;
    }).join('\n');

    const message = `*NOVO PEDIDO - BAIANINHO*\n\n` +
      `*Cliente:* ${customerData.name}\n` +
      `*Zona:* ${customerData.zone.label}\n` +
      `*Endereço:* ${customerData.address || 'Retirada no Local'}\n` +
      `*Pagamento:* ${customerData.payment}\n\n` +
      `*Itens:*\n${itemsText}\n\n` +
      `---------------------------\n` +
      `*Subtotal:* Bs ${subtotal.toFixed(2)}\n` +
      `*Taxa de Entrega:* Bs ${deliveryFee.toFixed(2)}\n` +
      `*TOTAL FINAL: Bs ${grandTotal.toFixed(2)}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=59162028889&text=${encodedMessage}`, '_blank');
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scrollNavRef.current) {
      const activeButton = scrollNavRef.current.querySelector(`[data-id="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500 selection:text-black">
      <div className="max-w-md mx-auto min-h-screen flex flex-col bg-[#0a0a0a] shadow-2xl relative border-x border-zinc-900">
        
        {/* Header Logo */}
        <header className="pt-8 pb-4 px-6 flex flex-col items-center bg-[#0a0a0a]">
          <div className="relative w-24 h-24 flex items-center justify-center mb-2">
            <div className="absolute inset-0 border-[3px] border-white rounded-full"></div>
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="absolute w-1 h-4/5 bg-red-600 rotate-45 rounded-full"></div>
              <div className="absolute w-1 h-4/5 bg-red-600 -rotate-45 rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-3xl mb-0.5 filter saturate-150 drop-shadow-lg">🍔</div>
              <h1 className="text-lg font-black italic tracking-tighter text-yellow-400 leading-none uppercase">Baianinho</h1>
              <div className="text-[6px] font-bold tracking-[0.2em] text-white uppercase">BURGER Y SUSHI</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800 mt-2">
            <Clock size={12} className="text-yellow-500" /> Aberto das 18:00 às 00:00
          </div>
        </header>

        {/* Navegação */}
        <div className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-y border-zinc-900 overflow-hidden">
          <nav ref={scrollNavRef} className="flex overflow-x-auto gap-3 px-6 py-4 scroll-smooth no-scrollbar items-center">
            {Object.entries(MENU_DATA).map(([key, section]) => (
              <button
                key={key}
                data-id={key}
                onClick={() => scrollToSection(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 ${
                  activeTab === key ? 'bg-yellow-500 border-yellow-400 text-black shadow-lg shadow-yellow-500/20' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                }`}
              >
                {section.icon} {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Menu Items */}
        <main className="px-5 py-8 space-y-12 pb-44">
          {Object.entries(MENU_DATA).map(([key, section]) => (
            <section id={key} key={key} className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-100 italic flex items-center gap-3 mb-6">
                <div className="h-6 w-1 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.4)]"></div>
                {section.title}
              </h3>

              <div className="grid gap-3">
                {section.items.map((item) => {
                  const qtyInTotal = getItemQty(item.id);
                  return (
                    <div key={item.id} className={`p-4 rounded-2xl border flex justify-between items-center group transition-all ${item.highlight ? 'bg-red-950/20 border-red-500/40 shadow-lg shadow-red-900/5' : 'bg-zinc-900/40 border-zinc-800/60'}`}>
                      <div className="flex-grow pr-4">
                        <span className={`text-base font-bold block leading-tight ${item.highlight ? 'text-red-500' : 'text-zinc-100'}`}>
                          {item.name}
                        </span>
                        {item.highlight && <span className="text-[9px] bg-red-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold mt-1 mb-1 inline-block">Promoção</span>}
                        <span className="text-yellow-500 font-black text-sm block mt-0.5">Bs {item.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-zinc-800/50">
                        {qtyInTotal > 0 && (
                          <div className="flex items-center gap-2 pr-1 border-r border-zinc-800 mr-1">
                            <span className="text-[10px] font-black text-yellow-500 px-1">{qtyInTotal}</span>
                          </div>
                        )}
                        <button 
                          onClick={() => addToCart(item)}
                          className="bg-zinc-800 hover:bg-yellow-500 hover:text-black p-2 rounded-lg transition-all active:scale-90 shadow-lg"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Extras Section Display (Visual apenas) */}
              {section.adicionais && (
                <div className="mt-4 bg-zinc-900/20 rounded-2xl p-5 border border-zinc-800/40 border-dashed">
                  <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <Zap size={12} className="text-yellow-500" /> Adicionais Extras
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {section.adicionais.map((add, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px] font-bold text-zinc-400 bg-zinc-950/50 px-3 py-2 rounded-xl border border-zinc-800/30">
                        <span>{add.name}</span>
                        <span className="text-yellow-600 font-black">+ Bs {add.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-zinc-600 uppercase text-center mt-3 font-bold tracking-widest">
                    *Solicite os adicionais na observação do item no carrinho
                  </p>
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Botão Flutuante do Carrinho */}
        {cartCount > 0 && (
          <div className="fixed bottom-16 left-0 right-0 px-5 pointer-events-none z-50">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="max-w-[400px] mx-auto bg-yellow-400 text-black p-4 rounded-2xl flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] pointer-events-auto border-b-4 border-yellow-600 active:translate-y-1 active:border-b-0 transition-all w-full"
            >
              <div className="flex items-center gap-3">
                <div className="relative bg-black text-yellow-400 p-2.5 rounded-xl shadow-lg">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-yellow-400 animate-bounce">
                    {cartCount}
                  </span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-black uppercase opacity-60 tracking-wider">Ver Comanda</span>
                  <span className="text-lg font-black italic">Bs {grandTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-black uppercase bg-black/10 px-3 py-1.5 rounded-lg">
                REVISAR <ChevronRight size={16} />
              </div>
            </button>
          </div>
        )}

        {/* Carrinho Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-end justify-center">
            <div className="w-full max-w-md bg-zinc-950 rounded-t-[32px] p-6 max-h-[95vh] overflow-y-auto border-t border-zinc-800 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black italic flex items-center gap-2">
                  <ShoppingBag className="text-yellow-500" /> MINHA COMANDA
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 bg-zinc-900 rounded-full text-zinc-400 active:scale-90">
                  <X size={24} />
                </button>
              </div>

              {/* Itens do Carrinho */}
              <div className="space-y-6 mb-8">
                {cart.length === 0 ? (
                  <p className="text-center text-zinc-500 py-10 font-bold italic">Nenhum item adicionado.</p>
                ) : (
                  cart.map(item => (
                    <div key={item.cartId} className="group animate-in slide-in-from-bottom-2 duration-300">
                      <div className="flex justify-between items-center bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                        <div className="flex-grow">
                          <p className="font-bold text-sm text-zinc-100">{item.name}</p>
                          <p className="text-yellow-500 font-black text-xs mt-0.5">Bs {(item.price * item.qty).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-3 bg-black/40 rounded-xl p-1 px-2 border border-zinc-800/30">
                            <button onClick={() => updateQty(item.cartId, -1)} className="p-1 text-zinc-500 hover:text-white"><Minus size={14} /></button>
                            <span className="text-sm font-black w-4 text-center">{item.qty}</span>
                            <button onClick={() => updateQty(item.cartId, 1)} className="p-1 text-yellow-500 hover:text-white"><Plus size={14} /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.cartId)} className="p-2 bg-red-950/10 rounded-lg text-zinc-600 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-2 px-2">
                        <MessageSquare size={12} className="text-yellow-500/50" />
                        <input 
                          type="text" 
                          placeholder="Adicionais, ponto da carne ou observações..."
                          value={item.obs || ''}
                          onChange={(e) => updateObs(item.cartId, e.target.value)}
                          className="flex-grow bg-transparent border-b border-zinc-900 py-1 text-[11px] focus:border-yellow-500/50 outline-none text-zinc-300 placeholder:text-zinc-800"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Dados do Cliente e Taxa de Entrega */}
              {cart.length > 0 && (
                <div className="bg-zinc-900/20 p-5 rounded-2xl border border-zinc-900/50 space-y-4 mb-6">
                  <input 
                    type="text" 
                    placeholder="Seu Nome"
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-yellow-500 outline-none"
                    onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                  />
                  
                  {/* Seleção de Zona de Entrega */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest px-1 flex items-center gap-2">
                      <Truck size={12} /> Zona de Entrega
                    </label>
                    <select 
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-yellow-500 outline-none"
                      onChange={(e) => {
                        const zone = ZONAS_ENTREGA.find(z => z.label === e.target.value);
                        setCustomerData({...customerData, zone});
                      }}
                    >
                      {ZONAS_ENTREGA.map(zone => (
                        <option key={zone.label} value={zone.label}>{zone.label} - Bs {zone.fee}</option>
                      ))}
                    </select>
                  </div>

                  {customerData.zone.fee > 0 && (
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 text-zinc-500" size={16} />
                      <input 
                        type="text" 
                        placeholder="Endereço Completo"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-yellow-500 outline-none"
                        onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                      />
                    </div>
                  )}

                  <select 
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-yellow-500 outline-none"
                    onChange={(e) => setCustomerData({...customerData, payment: e.target.value})}
                  >
                    <option>Dinheiro</option>
                    <option>Cartão / QR Code</option>
                  </select>
                </div>
              )}

              {/* Detalhamento do Preço e Finalização */}
              {cart.length > 0 && (
                <div className="space-y-4">
                  <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 space-y-1">
                    <div className="flex justify-between text-xs text-zinc-500 font-bold uppercase">
                      <span>Subtotal:</span>
                      <span>Bs {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500 font-bold uppercase">
                      <span>Taxa de Entrega:</span>
                      <span>Bs {deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-zinc-800 mt-2">
                      <span className="font-black text-zinc-100 italic">TOTAL:</span>
                      <span className="text-2xl font-black text-yellow-500 tracking-tighter">Bs {grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={finalizeOrder}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95 active:shadow-none"
                  >
                    <Send size={18} /> ENVIAR PEDIDO AO WHATSAPP
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <footer className="bg-zinc-950 text-white px-6 py-5 flex items-center justify-between fixed bottom-0 w-full max-w-md border-t border-zinc-900 z-40">
          <div className="flex items-center gap-2">
            <Instagram size={18} className="text-yellow-500" />
            <span className="text-[10px] font-black uppercase tracking-tight opacity-70">@baianinholanches.scz</span>
          </div>
          <div className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">
            Santa Cruz • Bolívia
          </div>
        </footer>

      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
