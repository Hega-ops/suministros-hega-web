import React, { useState } from 'react';
import { Menu, X, Printer, Droplet, Wrench, ChevronRight, CheckCircle, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, ArrowLeft, Box, ShieldCheck, Zap, FileText, Layers, Info } from 'lucide-react';

// --- CONFIGURACIÓN: LISTA DE IMPRESORAS (CATÁLOGO) ---
// AQUÍ ES DONDE PUEDES AGREGAR, EDITAR O BORRAR EQUIPOS
const catalogoEquipos = [
  {
    id: 1,
    paquete: "Paquete Básico",
    modelo: "Ecosys M2040",
    marca: "Kyocera",
    descripcion: "3,000 Impresiones B/N",
    precio: "$1,245",
    velocidad: "42 ppm",
    tamano: "Carta y Oficio",
    funciones: "Copia, imprime, escanea",
    incluye: "Tóner, consumibles y refacciones incluidos.",
    popular: true, // Poner en true para resaltar
  },
  {
    id: 2,
    paquete: "Paquete Oficina",
    modelo: "Ecosys M3145",
    marca: "Kyocera",
    descripcion: "5,000 Impresiones B/N",
    precio: "$1,550",
    velocidad: "45 ppm",
    tamano: "Carta y Oficio",
    funciones: "Full Dúplex, Red, USB",
    incluye: "Servicio correctivo en < 24hrs.",
    popular: false,
  },
  {
    id: 3,
    paquete: "Paquete Color",
    modelo: "Ecosys M5526",
    marca: "Kyocera",
    descripcion: "2,000 Impresiones Color",
    precio: "$1,890",
    velocidad: "26 ppm",
    tamano: "Carta y Oficio",
    funciones: "Color de alta calidad",
    incluye: "Consumibles CMYK incluidos.",
    popular: false,
  },
  // PARA AGREGAR OTRO EQUIPO, COPIA DESDE { HASTA }, Y PEGA AQUÍ ABAJO
];

// --- COMPONENTE: TARJETA DE IMPRESORA ---
const PrinterCard = ({ equipo }) => {
  const whatsappNumber = "524432796023";
  const mensajeCotizar = `Hola, me interesa cotizar el equipo *${equipo.modelo}* (${equipo.paquete}).`;
  const mensajeInfo = `Hola, necesito más información técnica sobre la *${equipo.modelo}*.`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col relative group">
      {/* Etiqueta de Precio (Roja estilo imagen) */}
      <div className="bg-red-600 text-white text-center py-2 absolute top-0 right-0 left-0 z-10 mx-auto w-3/4 rounded-b-xl shadow-md">
        <p className="text-xs uppercase font-bold opacity-90">Renta Mensual + IVA</p>
        <p className="text-2xl font-extrabold">{equipo.precio}</p>
      </div>

      {/* Encabezado Azul */}
      <div className="bg-cyan-500 pt-16 pb-4 px-6 text-center">
        <h3 className="text-white text-2xl font-bold">{equipo.paquete}</h3>
        <p className="text-white/90 font-medium text-sm mt-1">{equipo.descripcion}</p>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Marca y Modelo */}
        <div className="text-center mb-6">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">{equipo.marca}</p>
          <h4 className="text-slate-900 text-xl font-extrabold">{equipo.modelo}</h4>
        </div>

        {/* Imagen (Icono grande por ahora) */}
        <div className="flex justify-center mb-8 transform group-hover:scale-105 transition-transform duration-500">
           {/* Aquí iría <img src={equipo.imagen} /> si tuvieras fotos reales */}
           <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
             <Printer size={64} />
           </div>
        </div>

        {/* Especificaciones Técnicas (Grid lateral como la imagen) */}
        <div className="space-y-4 mb-6 border-t border-slate-100 pt-6">
          <div className="flex items-center">
            <div className="w-8 flex justify-center mr-3 text-cyan-500"><Zap size={20} /></div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Velocidad</p>
              <p className="text-slate-700 font-bold">{equipo.velocidad}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 flex justify-center mr-3 text-cyan-500"><FileText size={20} /></div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Tamaño</p>
              <p className="text-slate-700 font-bold">{equipo.tamano}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 flex justify-center mr-3 text-cyan-500"><Layers size={20} /></div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Funciones</p>
              <p className="text-slate-700 font-bold text-sm">{equipo.funciones}</p>
            </div>
          </div>
        </div>

        {/* Texto de inclusión (Rojo/Naranja) */}
        <div className="text-center mb-6">
          <p className="text-orange-600 font-bold text-sm leading-tight">{equipo.incluye}</p>
        </div>

        {/* Botones de Acción (Bottom) */}
        <div className="mt-auto grid grid-cols-2 gap-3">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeInfo)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center transition-colors"
          >
            <Info size={16} className="mr-1" /> + INFO
          </a>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeCotizar)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 py-3 rounded-lg font-bold text-sm flex items-center justify-center transition-colors"
          >
            COTIZAR
          </a>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: VISTA DE INICIO (LO QUE YA TENÍAS) ---
const HomeView = ({ onNavigate }) => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100">
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-wider">Expertos en Impresión</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Tu oficina nunca se detiene, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">tu impresión tampoco.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Desde la renta de equipos de alto rendimiento para corporativos hasta el tóner que necesitas en casa. Somos tu aliado técnico y logístico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('renta')}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 inline-flex items-center justify-center cursor-pointer"
              >
                Renta y venta de impresoras
              </button>
              <button 
                onClick={() => onNavigate('consumibles')}
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:border-cyan-400 hover:text-cyan-600 transition-all inline-flex items-center justify-center cursor-pointer"
              >
                Consumibles y refacciones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN SERVICES (3 PILLARS) --- */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Todo en un solo lugar</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Simplificamos la gestión de impresión con tres pilares fundamentales de servicio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => onNavigate('consumibles')} className="group bg-gray-50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-gray-100 cursor-pointer">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Droplet className="text-cyan-600" size={28} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Venta de Suministros</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Tóner, tinta y refacciones originales y genéricas de alta calidad. Nunca te quedes sin imprimir.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>HP, Epson, Brother, Canon</li>
                <li className="flex items-center text-sm text-slate-500"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>Entrega a domicilio</li>
              </ul>
            </div>
            <div onClick={() => onNavigate('renta')} className="group bg-slate-900 rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 relative overflow-hidden cursor-pointer">
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Printer className="text-white" size={28} /></div>
              <h3 className="text-xl font-bold text-white mb-3">Renta y Venta de Equipo</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">Fotocopiadoras e impresoras de alto volumen. Planes de renta deducibles para tu oficina o escuela.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>Planes a tu medida</li>
                <li className="flex items-center text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>Equipos multifuncionales</li>
              </ul>
            </div>
            <div className="group bg-gray-50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Wrench className="text-pink-600" size={28} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Servicio Técnico</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Mantenimiento preventivo y correctivo. Revivimos tus equipos y extendemos su vida útil.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>Diagnóstico preciso</li>
                <li className="flex items-center text-sm text-slate-500"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>Garantía de servicio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEGMENTATION SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div id="empresas" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-6">MERCADO CORPORATIVO</div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Para Empresas y Escuelas</h3>
              <p className="text-slate-600 mb-8">Optimiza costos operativos con nuestros planes de renta. Nos encargamos de los consumibles y el mantenimiento para que tú te enfoques en trabajar.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start"><CheckCircle className="text-cyan-500 mr-3 mt-1" size={20}/><span className="text-slate-700">Contratos de servicio integral (Suministros incluidos)</span></li>
                <li className="flex items-start"><CheckCircle className="text-cyan-500 mr-3 mt-1" size={20}/><span className="text-slate-700">Atención prioritaria a flotillas de impresión</span></li>
                <li className="flex items-start"><CheckCircle className="text-cyan-500 mr-3 mt-1" size={20}/><span className="text-slate-700">Facturación y planes deducibles</span></li>
              </ul>
              <button onClick={() => onNavigate('renta')} className="inline-flex items-center text-slate-900 font-bold hover:text-cyan-600">Solicitar propuesta empresarial <ChevronRight size={20} className="ml-1"/></button>
            </div>
            <div id="hogar" className="pl-0 md:pl-8">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold mb-6">HOGAR Y ESTUDIANTES</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Para el Hogar y Home Office</h3>
              <p className="text-slate-600 mb-6">¿Tu impresora imprime rayas o te quedaste sin tinta a mitad de un trabajo? Tenemos la solución rápida y económica.</p>
              <div className="space-y-4">
                <div onClick={() => onNavigate('consumibles')} className="flex items-center p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                  <Droplet className="text-cyan-500 mr-4" size={24}/>
                  <div><h4 className="font-bold text-slate-800">Venta de Tóner y Tinta</h4><p className="text-sm text-slate-500">Precios competitivos en originales y genéricos.</p></div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <Wrench className="text-pink-500 mr-4" size={24}/>
                  <div><h4 className="font-bold text-slate-800">Reparación Express</h4><p className="text-sm text-slate-500">Diagnóstico rápido para equipos domésticos.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// --- NUEVA VISTA: RENTA Y VENTA (CON CATÁLOGO) ---
const RentaView = ({ onBack }) => (
  <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={onBack} className="flex items-center text-slate-500 hover:text-cyan-600 font-bold mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
      </button>
      
      {/* Título de la Sección */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Renta y Venta de Impresoras</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Catálogo de equipos disponibles. Planes flexibles que se adaptan a tu volumen de impresión.
        </p>
      </div>

      {/* GRID DE EQUIPOS (Aquí se muestran las tarjetas) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {catalogoEquipos.map((equipo) => (
          <PrinterCard key={equipo.id} equipo={equipo} />
        ))}
      </div>

      {/* Información Adicional */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Printer className="text-cyan-500 mr-3" /> Beneficios de la Renta
            </h3>
            <ul className="space-y-4">
              {[
                "Cero inversión inicial en equipos.",
                "Deducible de impuestos al 100%.",
                "Mantenimiento preventivo y correctivo incluido.",
                "Suministros (tóner y refacciones) incluidos.",
                "Soporte técnico prioritario (menos de 24 hrs).",
                "Equipos multifuncionales (Copia, Imprime, Escanea)."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20}/>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">¿Prefieres Comprar?</h3>
            <p className="text-slate-600 mb-6">
              También contamos con venta de equipos nuevos y seminuevos garantizados de las mejores marcas.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Kyocera", "Ricoh", "Canon", "Brother", "HP", "Samsung"].map(brand => (
                <span key={brand} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-500">{brand}</span>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">Consulta disponibilidad de modelos específicos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- NUEVA VISTA: CONSUMIBLES (IGUAL QUE ANTES) ---
const ConsumiblesView = ({ onBack }) => (
  <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={onBack} className="flex items-center text-slate-500 hover:text-cyan-600 font-bold mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
      </button>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-xs font-bold mb-6 uppercase">Hogar y Oficina</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Consumibles y Refacciones</h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
          Mantenemos tu impresora funcionando con la mejor calidad. Encuentra tóner original, genérico de alto rendimiento y las refacciones que necesitas.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4"><Droplet className="text-cyan-600" size={24}/></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tóner y Tinta</h3>
            <p className="text-slate-600 text-sm">Cartuchos originales y compatibles premium. Ahorra hasta un 60% con nuestros genéricos garantizados.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4"><Box className="text-purple-600" size={24}/></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Refacciones</h3>
            <p className="text-slate-600 text-sm">Fusores, rodillos, engranes y piezas internas para reparar tu equipo y extender su vida útil.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4"><Zap className="text-orange-600" size={24}/></div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Chips y Tambores</h3>
            <p className="text-slate-600 text-sm">Unidades de imagen (Drum) y chips de reseteo para todas las marcas comerciales.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold mb-4">Manejamos todas las marcas principales</h3>
          <div className="flex flex-wrap gap-8 opacity-70">
             <span className="text-xl font-bold">HP</span>
             <span className="text-xl font-bold">BROTHER</span>
             <span className="text-xl font-bold">EPSON</span>
             <span className="text-xl font-bold">CANON</span>
             <span className="text-xl font-bold">SAMSUNG</span>
             <span className="text-xl font-bold">XEROX</span>
             <span className="text-xl font-bold">KYOCERA</span>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/524432796023?text=Hola,%20busco%20precio%20de%20un%20tóner%20modelo..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg inline-flex items-center"
          >
            <MessageCircle className="mr-2" /> Preguntar Precio por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL (APP) ---
const SuministrosHega = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'renta', 'consumibles'

  const navigateTo = (viewName) => {
    setCurrentView(viewName);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "524432796023";
  const whatsappLinkGenerico = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20cotizar%20un%20servicio.`;

  const [formData, setFormData] = useState({ nombre: '', telefono: '', servicio: 'Renta de equipos', mensaje: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, servicio, mensaje } = formData;
    const text = `Hola Suministros Hega, mi nombre es *${nombre}*.%0A%0AMe interesa: *${servicio}*%0A${telefono ? `Mi teléfono es: ${telefono}%0A` : ''}${mensaje ? `Mensaje: ${mensaje}` : ''}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="font-montserrat text-slate-800 bg-gray-50 antialiased selection:bg-cyan-200">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer" onClick={() => navigateTo('home')}>
              <img src="/LOGO SH.png" alt="Suministros Hega" className="h-24 w-auto object-contain" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-slate-900 leading-none tracking-wide">SUMINISTROS HEGA</h1>
                <p className="text-xs text-slate-500 font-medium tracking-widest mt-1">SOLUCIÓN EN IMPRESIÓN</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-cyan-600 font-bold' : 'hover:text-cyan-600'}`}>Inicio</button>
              <button onClick={() => navigateTo('renta')} className={`text-sm font-medium transition-colors ${currentView === 'renta' ? 'text-cyan-600 font-bold' : 'hover:text-cyan-600'}`}>Renta y Venta</button>
              <button onClick={() => navigateTo('consumibles')} className={`text-sm font-medium transition-colors ${currentView === 'consumibles' ? 'text-cyan-600 font-bold' : 'hover:text-cyan-600'}`}>Consumibles</button>
              <a 
                href={whatsappLinkGenerico}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Cotizar
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => navigateTo('home')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-cyan-50 text-slate-800 rounded-lg">Inicio</button>
              <button onClick={() => navigateTo('renta')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-cyan-50 text-slate-800 rounded-lg">Renta y Venta</button>
              <button onClick={() => navigateTo('consumibles')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-cyan-50 text-slate-800 rounded-lg">Consumibles</button>
            </div>
          </div>
        )}
      </nav>

      {/* --- CONTENIDO DINÁMICO --- */}
      {currentView === 'home' && <HomeView onNavigate={navigateTo} />}
      {currentView === 'renta' && <RentaView onBack={() => navigateTo('home')} />}
      {currentView === 'consumibles' && <ConsumiblesView onBack={() => navigateTo('home')} />}

      {/* --- FOOTER (SIEMPRE VISIBLE) --- */}
      <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
              <p className="text-slate-400 mb-8 max-w-md">Estamos listos para atenderte en nuestras sucursales o vía digital.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"><Phone size={20} className="text-cyan-400" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Morelia</p>
                    <p className="text-lg font-medium mb-2">(443) 279-6023</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Moroleón</p>
                    <p className="text-lg font-medium">(445) 458-1529 <span className="text-slate-500 mx-1">|</span> (445) 457-4955</p>
                  </div>
                </div>
                <a href={whatsappLinkGenerico} target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer hover:bg-slate-800/50 p-2 rounded-lg -ml-2 transition-colors">
                  <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors"><MessageCircle size={20} className="text-green-400 group-hover:text-white" /></div>
                  <div><p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p><span className="text-lg font-medium group-hover:text-green-400 transition-colors">(443) 279-6023</span></div>
                </a>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4"><Mail size={20} className="text-cyan-400" /></div>
                  <span className="text-lg font-medium">contacto@suministroshega.mx</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nombre</label><input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-cyan-500 outline-none font-medium" placeholder="Tu nombre" required /></div>
                  <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Teléfono</label><input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-cyan-500 outline-none font-medium" placeholder="Opcional" /></div>
                </div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Me interesa</label><select name="servicio" value={formData.servicio} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-cyan-500 outline-none font-medium cursor-pointer"><option>Renta de Equipos</option><option>Compra de Suministros</option><option>Servicio Técnico</option><option>Otro</option></select></div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mensaje</label><textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-cyan-500 outline-none h-28 font-medium resize-none" placeholder="Cuéntanos más..." required></textarea></div>
                <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"><MessageCircle size={20} /> Enviar a WhatsApp</button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© 2024 Suministros Hega. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="https://www.facebook.com/HEGAsuministros" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer text-slate-400 hover:text-white transition-colors"><Facebook size={20} /> HEGAsuministros</a>
               <a href="https://www.instagram.com/suministroshega" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer text-slate-400 hover:text-white transition-colors"><Instagram size={20} /> @suministroshega</a>
            </div>
          </div>
        </div>
      </footer>
      
      <a href={whatsappLinkGenerico} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center" aria-label="Contactar por WhatsApp">
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default SuministrosHega;