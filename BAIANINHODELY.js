import React, { useState, useRef, useEffect } from 'react';
import { 
  Instagram, Phone, Utensils, Coffee, IceCream, Pizza, Star, 
  Beef, Fish, Soup, Flame, UtensilsCrossed, Zap, ChevronRight,
  ShoppingBag, Plus, Minus, X, Trash2, MapPin, Send, MessageSquare, 
  Truck, Clock, Copy, Crosshair, Lock, LayoutDashboard, ListOrdered, 
  DollarSign, CheckCircle2, CircleDashed, ArrowLeft
} from 'lucide-react';

// ==========================================
// CONFIGURAÇÃO DO MENU (ESPANHOL DA BOLÍVIA)
// ==========================================
const MENU_DATA = {
  hamburgueres: {
    title: 'Hamburguesas',
    icon: <Beef size={18} />,
    items: [
      { id: 'h1', name: 'X-Burguer', price: 25, desc: 'Pan, carne, queso, jamón, lechuga y tomate.' },
      { id: 'h2', name: 'X-Salada', price: 27, desc: 'Pan, carne, queso, jamón, choclo, zanahoria, lechuga, tomate y papa rallada.' },
      { id: 'h3', name: 'X-Egg Burguer', price: 29, desc: 'Pan, carne, queso, jamón, huevo, choclo, lechuga, tomate y papa rallada.' },
      { id: 'h4', name: 'X-Pollo', price: 32, desc: 'Pan, carne, queso, jamón, pollo, choclo, lechuga, tomate y papa rallada.' },
      { id: 'h5', name: 'X-Bacon', price: 35, desc: 'Pan, carne, queso, jamón, choclo, tocino, lechuga, tomate y papas fritas.' },
      { id: 'h6', name: 'X-Calabresa', price: 35, desc: 'Pan, carne, queso, jamón, calabresa, choclo, lechuga, tomate y papa rallada.' },
      { id: 'h7', name: 'X-Picanha', price: 35, desc: 'Pan, carne, queso, jamón, punta de s, choclo, lechuga, tomate y papa rallada.' },
      { id: 'h8', name: 'X-Tudo', price: 42, desc: 'Pan, carne, queso, jamón, pollo, calabresa, huevo, salchicha, choclo, lechuga, tomate y papa rallada.' },
    ],
    adicionais: [
      { name: 'Tocino', price: 8 },
      { name: 'Carne', price: 8 },
      { name: 'Huevo', price: 5 },
      { name: 'Salchicha', price: 5 },
    ]
  },
  sushi: {
    title: 'Sushi',
    icon: <Fish size={18} />,
    items: [
      { id: 's1', name: 'Uramaki Salmão', price: 70, desc: '10 unidades' },
      { id: 's2', name: 'Uramaki Filadélfia', price: 80, desc: '10 unidades' },
      { id: 's3', name: 'Joy', price: 70, desc: '6 unidades' },
      { id: 's4', name: 'Joy Flameado', price: 75, desc: '6 unidades' },
      { id: 's5', name: 'Hot Hol', price: 70, desc: '10 unidades' },
      { id: 's6', name: 'Sushi Dog', price: 60 },
      { id: 's7', name: 'Nigiri', price: 70, desc: '6 unidades' },
      { id: 's8', name: 'Niguiri Flambado', price: 75, desc: '6 unidades' },
    ]
  },
  temaki: {
    title: 'Temaki',
    icon: <Fish size={18} />,
    items: [
      { id: 't1', name: 'Temaki Salmão', price: 50 },
      { id: 't2', name: 'Temaki Salmão Grelhado', price: 60 },
      { id: 't3', name: 'Temaki Salmão Filadélfia', price: 70 },
      { id: 't4', name: 'Temaki Salmão Filadélfia Grelhado', price: 80 },
      { id: 't5', name: '2 Temaki Salmão (PROMO)', price: 90, highlight: true },
    ]
  },
  combos: {
    title: 'Combos',
    icon: <Zap size={18} />,
    items: [
      { id: 'cb1', name: 'Combo 1', price: 105, highlight: true, desc: '6 Uramaki Salmão, 6 hot hol y 1 temaki de salmão.' },
      { id: 'cb2', name: 'Combo 2', price: 145, highlight: true, desc: '6 Uramaki Salmão, 6 niguiri y 1 temaki salmão filadelfia.' },
    ]
  },
  orientais: {
    title: 'Yakisoba & Orientales',
    icon: <Soup size={18} />,
    items: [
      { id: 'o1', name: 'Yakisoba de Pollo', price: 50 },
      { id: 'o2', name: 'Yakisoba de Carne', price: 50 },
      { id: 'o3', name: 'Yakisoba Mixto', price: 55 },
      { id: 'o4', name: 'Salmão Grelhado', price: 80, desc: '150g de Salmão grelhado, arroz y ensalada.' },
    ]
  },
  carnes: {
    title: 'Pacumuto',
    icon: <Flame size={18} />,
    note: 'Simple: Guarnición Yuca | Completo: Arroz, frejol, yuca y ensalada',
    items: [
      { id: 'c1_s', name: 'Corazón de Pollo (Simple)', price: 12 },
      { id: 'c1_c', name: 'Corazón de Pollo (Completo)', price: 20 },
      { id: 'c2_s', name: 'Ala de Pollo (Simple)', price: 18 },
      { id: 'c2_c', name: 'Ala de Pollo (Completo)', price: 29 },
      { id: 'c3_s', name: 'Pollo (Simple)', price: 18 },
      { id: 'c3_c', name: 'Pollo (Completo)', price: 29 },
      { id: 'c4_s', name: 'Jiba (Simple)', price: 23 },
      { id: 'c4_c', name: 'Jiba (Completo)', price: 35 },
      { id: 'c5_s', name: 'Cuadril (Simple)', price: 23 },
      { id: 'c5_c', name: 'Cuadril (Completo)', price: 35 },
      { id: 'c6_s', name: 'Punta de S (Simple)', price: 25 },
      { id: 'c6_c', name: 'Punta de S (Completo)', price: 42 },
    ]
  },
  refeicoes: {
    title: 'Platos a la carte',
    icon: <Utensils size={18} />,
    items: [
      { id: 'r1', name: 'Bife a la Parmegiana', price: 42, desc: 'Proteína: Carne o pollo. Fideo con salsa de tomate, puré o papas fritas.' },
      { id: 'r2', name: 'Escondidinho', price: 42, desc: 'Puré de papas con carne de sol.' },
      { id: 'r3', name: 'Panqueca', price: 38, desc: 'Proteína: Carne o pollo. Guarnición: Arroz.' },
      { id: 'r4', name: 'Lasaña', price: 42, desc: 'Proteína: Carne o pollo.' },
      { id: 'r5', name: 'Bife a la Cubana', price: 42, desc: 'Proteína: Carne o pollo. Arroz, papas fritas y plátano frito.' },
      { id: 'r6', name: 'Carne de Sol', price: 50, desc: 'Arroz, farofa, yuca y queso frito.' },
      { id: 'r7', name: 'Strogonoff de Pollo', price: 38, desc: 'Arroz y papas fritas.' },
      { id: 'r8', name: 'Salpicão', price: 38, desc: 'Arroz y papas fritas.' },
      { id: 'r9', name: 'Paulista', price: 42, desc: 'Carne picada a salsa madera, arroz y puré.' },
    ],
    adicionais: [
      { name: 'Arroz', price: 5 },
      { name: 'Frejol', price: 8 },
      { name: 'Yuca', price: 3 },
    ]
  },
  empanadas: {
    title: 'Empanadas',
    icon: <UtensilsCrossed size={18} />,
    note: 'Todas acompañan queso mozzarella.',
    items: [
      { id: 'e1', name: 'Empanada de Mozzarella', price: 30 },
      { id: 'e2', name: 'Empanada de Pizza', price: 32 },
      { id: 'e3', name: 'Empanada de Carne Molida', price: 32 },
      { id: 'e4', name: 'Empanada de Pollo', price: 32 },
      { id: 'e5', name: 'Empanada de Carne de Sol', price: 35 },
      { id: 'e6', name: 'Empanada de Calabresa', price: 38 },
      { id: 'e7', name: 'Empanada de Chocolate', price: 30 },
      { id: 'e8', name: 'Harumaki de Queso', price: 40 },
      { id: 'e9', name: 'Harumaki de Pizza', price: 40 },
    ]
  },
  porcoes: {
    title: 'Porciones',
    icon: <Pizza size={18} />,
    items: [
      { id: 'p1', name: 'Porción de Papas', price: 30 },
      { id: 'p2', name: 'Porción de Calabresa con Papas', price: 50 },
    ]
  },
  bebidas: {
    title: 'Bebidas',
    icon: <Coffee size={18} />,
    items: [
      { id: 'b1', name: 'Soda Mini', price: 5 },
      { id: 'b2', name: 'Soda Peque', price: 10 },
      { id: 'b3', name: 'Agua sin gas', price: 8 },
      { id: 'b4', name: 'Agua con gas', price: 8 },
      { id: 'b5', name: 'Jugo natural', price: 10},
      { id: 'b6', name: 'Jugo con leche', price: 15 },
      { id: 'b7', name: 'Chopp paceña 340ml', price: 15 },
      { id: 'b8', name: 'Corona', price: 20 },
      
    ]
  },
  sobremesas: {
    title: 'Postres',
    icon: <IceCream size={18} />,
    items: [
      { id: 'sm1', name: 'Brigadeiro', price: 5 },
      { id: 'sm2', name: 'Trufas', price: 10 },
    ]
  }
};

// ==========================================
// ZONAS DE ENTREGA
// ==========================================
const ZONAS_ENTREGA = [
  { label: 'Recojo en el Local', fee: 0 },
  { label: 'Centro', fee: 5 },
  { label: '1º al 2º Anillo', fee: 8 },
  { label: '3º al 4º Anillo', fee: 12 },
  { label: '5º Anillo en adelante', fee: 15 }
];

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
const App = () => {
  const [currentView, setCurrentView] = useState('client');
  const [orders, setOrders] = useState([]); 

  const handleNewOrder = (order) => {
    setOrders([order, ...orders]); 
  };

  if (currentView === 'admin') {
    return <AdminPanel orders={orders} setOrders={setOrders} onBack={() => setCurrentView('client')} />;
  }

  return <ClientMenu onOrderPlaced={handleNewOrder} onOpenAdmin={() => setCurrentView('admin')} />;
};

// ==========================================
// MENU DO CLIENTE
// ==========================================
const ClientMenu = ({ onOrderPlaced, onOpenAdmin }) => {
  const [activeTab, setActiveTab] = useState('hamburgueres');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [customerData, setCustomerData] = useState({ 
    name: '', 
    address: '', 
    payment: 'Efectivo',
    zone: ZONAS_ENTREGA[0]
  });

  const [locationCoords, setLocationCoords] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');
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

  const handleGetLocation = () => {
    setIsLocating(true);
    setLocationError('');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationCoords({ lat: position.coords.latitude, lng: position.coords.longitude });
          setIsLocating(false);
        },
        (error) => {
          setLocationError('No se pudo obtener la ubicación. Llena la dirección manualmente.');
          setIsLocating(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    } else {
      setLocationError('Tu navegador no soporta geolocalización.');
      setIsLocating(false);
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const deliveryFee = customerData.zone.fee;
  const grandTotal = subtotal + deliveryFee;
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const getItemQty = (id) => cart.filter(i => i.id === id).reduce((acc, curr) => acc + curr.qty, 0);

  const finalizeOrder = () => {
    if (!customerData.name || (customerData.zone.fee > 0 && !customerData.address && !locationCoords)) {
      alert("Por favor, llena tu Nombre y Dirección (o usa el GPS) para la entrega.");
      return;
    }

    const newOrder = {
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      date: new Date(),
      customer: customerData,
      location: locationCoords,
      items: cart,
      subtotal,
      deliveryFee,
      total: grandTotal,
      status: 'Pendiente'
    };
    onOrderPlaced(newOrder);

    const itemsText = cart.map(item => {
      let text = `• ${item.qty}x ${item.name} (Bs ${item.price * item.qty})`;
      if (item.obs) text += `\n   _Nota: ${item.obs}_`;
      return text;
    }).join('\n');

    let locationText = '';
    if (locationCoords) {
      locationText = `*Ubicación GPS:* https://maps.google.com/?q=${locationCoords.lat},${locationCoords.lng}\n`;
    }

    const message = `*NUEVO PEDIDO - BAIANINHO*\n*ID:* #${newOrder.id}\n\n` +
      `*Cliente:* ${customerData.name}\n` +
      `*Zona:* ${customerData.zone.label}\n` +
      `*Dirección:* ${customerData.address || 'No especificada'}\n` +
      locationText +
      `*Forma de Pago:* ${customerData.payment}\n\n` +
      `*Artículos:*\n${itemsText}\n\n` +
      `---------------------------\n` +
      `*Subtotal:* Bs ${subtotal.toFixed(2)}\n` +
      `*Tarifa de Delivery:* Bs ${deliveryFee.toFixed(2)}\n` +
      `*TOTAL FINAL: Bs ${grandTotal.toFixed(2)}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=59162028889&text=${encodedMessage}`, '_blank');
    
    setCart([]);
    setIsCartOpen(false);
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
        
        {/* Cabeçalho */}
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
            <Clock size={12} className="text-yellow-500" /> Abierto de 18:00 a 00:00
          </div>
        </header>

        {/* Navegação de Categorias */}
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

        {/* Lista de Produtos */}
        <main className="px-5 py-8 space-y-12 pb-44">
          {Object.entries(MENU_DATA).map(([key, section]) => (
            <section id={key} key={key} className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-100 italic flex items-center gap-3 mb-6">
                <div className="h-6 w-1 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.4)]"></div>
                {section.title}
              </h3>
              
              {section.note && <p className="text-[12px] text-zinc-400 mb-4 italic leading-relaxed">{section.note}</p>}
              
              <div className="grid gap-3">
                {section.items.map((item) => {
                  const qtyInTotal = getItemQty(item.id);
                  return (
                    <div key={item.id} className={`p-4 rounded-2xl border flex justify-between items-center group transition-all ${item.highlight ? 'bg-red-950/20 border-red-500/40 shadow-lg shadow-red-900/5' : 'bg-zinc-900/40 border-zinc-800/60'}`}>
                      <div className="flex-grow pr-4">
                        <span className={`text-base font-bold block leading-tight ${item.highlight ? 'text-red-500' : 'text-zinc-100'}`}>{item.name}</span>
                        {item.desc && <span className="text-[10px] text-zinc-400 block mt-1 leading-snug">{item.desc}</span>}
                        {item.highlight && <span className="text-[9px] bg-red-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold mt-1 mb-1 inline-block">Promoción</span>}
                        <span className="text-yellow-500 font-black text-sm block mt-0.5">Bs {item.price}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-zinc-800/50">
                        {qtyInTotal > 0 && (
                          <div className="flex items-center gap-2 pr-1 border-r border-zinc-800 mr-1">
                            <span className="text-[10px] font-black text-yellow-500 px-1">{qtyInTotal}</span>
                          </div>
                        )}
                        <button onClick={() => addToCart(item)} className="bg-zinc-800 hover:bg-yellow-500 hover:text-black p-2 rounded-lg transition-all active:scale-90 shadow-lg">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Extras de cada Categoria */}
              {section.adicionais && (
                <div className="mt-4 bg-zinc-900/20 rounded-2xl p-5 border border-zinc-800/40 border-dashed">
                  <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <Zap size={12} className="text-yellow-500" /> Adicionales Extras
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
                    *Solicita los adicionales en las notas del pedido
                  </p>
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Botão Flutuante Carrinho */}
        {cartCount > 0 && (
          <div className="fixed bottom-16 left-0 right-0 px-5 pointer-events-none z-50">
            <button onClick={() => setIsCartOpen(true)} className="max-w-[400px] mx-auto bg-yellow-400 text-black p-4 rounded-2xl flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] pointer-events-auto border-b-4 border-yellow-600 active:translate-y-1 active:border-b-0 transition-all w-full">
              <div className="flex items-center gap-3">
                <div className="relative bg-black text-yellow-400 p-2.5 rounded-xl shadow-lg">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-yellow-400 animate-bounce">{cartCount}</span>
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-black uppercase opacity-60 tracking-wider">Ver Mi Pedido</span>
                  <span className="text-lg font-black italic">Bs {grandTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-black uppercase bg-black/10 px-3 py-1.5 rounded-lg">
                REVISAR <ChevronRight size={16} />
              </div>
            </button>
          </div>
        )}

        {/* Modal do Carrinho */}
        {isCartOpen && (
          <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-end justify-center">
            <div className="w-full max-w-md bg-zinc-950 rounded-t-[32px] p-6 max-h-[95vh] overflow-y-auto border-t border-zinc-800 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black italic flex items-center gap-2">
                  <ShoppingBag className="text-yellow-500" /> MI PEDIDO
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 bg-zinc-900 rounded-full text-zinc-400 active:scale-90">
                  <X size={24} />
                </button>
              </div>

              {/* Itens do Carrinho */}
              <div className="space-y-6 mb-8">
                {cart.length === 0 ? (
                  <p className="text-center text-zinc-500 py-10 font-bold italic">Ningún artículo añadido al carrito.</p>
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
                          placeholder="Adicionales, término de la carne u observaciones..."
                          value={item.obs || ''}
                          onChange={(e) => updateObs(item.cartId, e.target.value)}
                          className="flex-grow bg-transparent border-b border-zinc-900 py-1 text-[11px] focus:border-yellow-500/50 outline-none text-zinc-300 placeholder:text-zinc-800"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Informação de Entrega e Cliente */}
              {cart.length > 0 && (
                <div className="bg-zinc-900/20 p-5 rounded-2xl border border-zinc-900/50 space-y-4 mb-6">
                  <input type="text" placeholder="Tu Nombre" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-yellow-500 outline-none" onChange={(e) => setCustomerData({...customerData, name: e.target.value})} />
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest px-1 flex items-center gap-2"><Truck size={12} /> Zona de Entrega</label>
                    <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-yellow-500 outline-none" onChange={(e) => { const zone = ZONAS_ENTREGA.find(z => z.label === e.target.value); setCustomerData({...customerData, zone}); }}>
                      {ZONAS_ENTREGA.map(zone => <option key={zone.label} value={zone.label}>{zone.label} - Bs {zone.fee}</option>)}
                    </select>
                  </div>
                  {customerData.zone.fee > 0 && (
                    <div className="flex flex-col gap-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 text-zinc-500" size={16} />
                        <input type="text" placeholder="Dirección (Calle, Número...)" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-yellow-500 outline-none" onChange={(e) => setCustomerData({...customerData, address: e.target.value})} />
                      </div>
                      <button onClick={handleGetLocation} disabled={isLocating} className={`flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all border ${locationCoords ? 'bg-green-600/20 border-green-500/50 text-green-500' : 'bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800 text-zinc-300'}`}>
                        {isLocating ? <span className="animate-pulse">Buscando señal GPS...</span> : locationCoords ? <>✓ ¡Ubicación GPS capturada!</> : <><Crosshair size={14}/> Enviar mi ubicación por GPS</>}
                      </button>
                      {locationError && <p className="text-[9px] text-red-500 text-center">{locationError}</p>}
                    </div>
                  )}
                  <div className="pt-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest px-1 flex items-center gap-2 mb-2">Forma de Pago</label>
                    <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-yellow-500 outline-none" onChange={(e) => setCustomerData({...customerData, payment: e.target.value})}>
                      <option>Efectivo</option>
                      <option>Tarjeta / QR</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Total do Pedido */}
              {cart.length > 0 && (
                <div className="space-y-4">
                  <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 space-y-1">
                    <div className="flex justify-between text-xs text-zinc-500 font-bold uppercase"><span>Subtotal:</span><span>Bs {subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between text-xs text-zinc-500 font-bold uppercase"><span>Tarifa de Delivery:</span><span>Bs {deliveryFee.toFixed(2)}</span></div>
                    <div className="flex justify-between items-center pt-2 border-t border-zinc-800 mt-2"><span className="font-black text-zinc-100 italic">TOTAL:</span><span className="text-2xl font-black text-yellow-500 tracking-tighter">Bs {grandTotal.toFixed(2)}</span></div>
                  </div>
                  <button onClick={finalizeOrder} className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95 active:shadow-none">
                    <Send size={18} /> ENVIAR PEDIDO AL WHATSAPP
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Rodapé */}
        <footer className="bg-zinc-950 text-white px-6 py-5 flex items-center justify-between fixed bottom-0 w-full max-w-md border-t border-zinc-900 z-40">
          <div className="flex items-center gap-2">
            <Instagram size={18} className="text-yellow-500" />
            <span className="text-[10px] font-black uppercase tracking-tight opacity-70">@baianinholanches.scz</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">Santa Cruz • Bolivia</div>
            <button onClick={onOpenAdmin} className="p-1.5 bg-zinc-900 rounded text-zinc-700 hover:text-yellow-500 transition-colors" title="Acceso Restringido">
              <Lock size={12} />
            </button>
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

// ==========================================
// PAINEL DE ADMINISTRAÇÃO
// ==========================================
const AdminPanel = ({ orders, setOrders, onBack }) => {
  const totalRevenue = orders.filter(o => o.status !== 'Cancelado').reduce((acc, o) => acc + o.total, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Pendiente').length;

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pendiente': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Preparando': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Completado': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Cancelado': return 'bg-zinc-800 text-zinc-500 border-zinc-700';
      default: return 'bg-zinc-800 text-zinc-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <div className="max-w-md mx-auto min-h-screen flex flex-col bg-[#0a0a0a] shadow-2xl relative border-x border-zinc-900">
        
        <header className="pt-8 pb-6 px-6 bg-zinc-950 border-b border-zinc-900 sticky top-0 z-10 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs font-bold uppercase">
              <ArrowLeft size={16} /> Volver
            </button>
            <div className="flex items-center gap-2 text-yellow-500">
              <Lock size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Panel de Gestión</span>
            </div>
          </div>
          <h1 className="text-2xl font-black italic flex items-center gap-3">
            <LayoutDashboard className="text-yellow-500" /> Resumen de Ventas
          </h1>
        </header>

        <div className="p-5 grid grid-cols-2 gap-4">
          <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 flex flex-col">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <DollarSign size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Ingresos</span>
            </div>
            <span className="text-2xl font-black text-yellow-500">Bs {totalRevenue.toFixed(2)}</span>
          </div>
          <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50 flex flex-col">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <ListOrdered size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Cant. Pedidos</span>
            </div>
            <span className="text-2xl font-black text-white">{totalOrders}</span>
          </div>
        </div>

        <div className="flex-grow px-5 pb-10 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <CircleDashed size={14} /> Historial de Pedidos
            </h2>
            {pendingOrders > 0 && (
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {pendingOrders} pendientes
              </span>
            )}
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-12 bg-zinc-900/20 rounded-2xl border border-zinc-900 border-dashed">
              <p className="text-zinc-500 text-sm font-bold">Ningún pedido registrado aún.</p>
              <p className="text-zinc-600 text-xs mt-2">Los pedidos aparecerán aquí cuando se finalicen.</p>
            </div>
          ) : (
            orders.map(order => (
              <div key={order.id} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-4 space-y-3">
                
                <div className="flex justify-between items-start border-b border-zinc-800/50 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-yellow-500">#{order.id}</span>
                      <span className="text-[10px] text-zinc-500">{order.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                    <h3 className="font-bold text-white leading-tight">{order.customer.name}</h3>
                    <p className="text-xs text-zinc-400">{order.customer.zone.label}</p>
                  </div>
                  
                  <select 
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-1.5 rounded-lg border outline-none appearance-none text-center ${getStatusColor(order.status)}`}
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Preparando">Preparando</option>
                    <option value="Completado">Completado</option>
                    <option value="Cancelado">Cancelado</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="text-xs flex justify-between">
                      <span className="text-zinc-300"><span className="text-yellow-500 font-bold">{item.qty}x</span> {item.name}</span>
                      <span className="text-zinc-500">Bs {item.price * item.qty}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-zinc-800/50 flex justify-between items-end">
                  <div className="text-[10px] text-zinc-500 font-bold uppercase">
                    Pago: <span className="text-zinc-300">{order.customer.payment}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">Total</span>
                    <span className="text-lg font-black text-yellow-500 leading-none">Bs {order.total.toFixed(2)}</span>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
