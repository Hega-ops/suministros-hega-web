import React, { useState, useEffect } from 'react';
import { Menu, X, Printer, Droplet, Wrench, ChevronRight, CheckCircle, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, ArrowLeft, Box, ShieldCheck, Zap, FileText, Layers, Info, Lock, Edit, Trash, Plus, Save, Copy } from 'lucide-react';

// --- DATOS INICIALES (TU CATÁLOGO ACTUAL) ---
const DATA_INICIAL = [
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
    popular: true,
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
];

// --- COMPONENTE: TARJETA DE IMPRESORA ---
const PrinterCard = ({ equipo }) => {
  const whatsappNumber = "524432796023";
  const mensajeCotizar = `Hola, me interesa cotizar el equipo *${equipo.modelo}* (${equipo.paquete}).`;
  const mensajeInfo = `Hola, necesito más información técnica sobre la *${equipo.modelo}*.`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col relative group">
      {/* Etiqueta de Precio */}
      <div className="bg-red-600 text-white text-center py-2 absolute top-0 right-0 left-0 z-10 mx-auto w-3/4 rounded-b-xl shadow-md">
        <p className="text-xs uppercase font-bold opacity-90">Renta Mensual + IVA</p>
        <p className="text-2xl font-extrabold">{equipo.precio}</p>
      </div>

      {/* Encabezado Azul */}
      <div className="bg-cyan-500 pt-16 pb-4 px-6 text-center">
        <h3 className="text-white text-2xl font-bold">{equipo.paquete}</h3>
        <p className="text-white/90 font-medium text-sm mt-1">{equipo.descripcion}</p>
      </div>

      {/* Cuerpo */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">{equipo.marca}</p>
          <h4 className="text-slate-900 text-xl font-extrabold">{equipo.modelo}</h4>
        </div>

        <div className="flex justify-center mb-8 transform group-hover:scale-105 transition-transform duration-500">
           <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
             <Printer size={64} />
           </div>
        </div>

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

        <div className="text-center mb-6">
          <p className="text-orange-600 font-bold text-sm leading-tight">{equipo.incluye}</p>
        </div>

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

// --- COMPONENTE: PANEL DE ADMINISTRACIÓN ---
const AdminPanel = ({ catalogo, setCatalogo, onExit }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editando, setEditando] = useState(null);
  const [generatedCode, setGeneratedCode] = useState('');

  // Formulario temporal
  const [form, setForm] = useState({
    paquete: '', modelo: '', marca: '', descripcion: '', precio: '', velocidad: '', tamano: '', funciones: '', incluye: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'hega2024') { // CONTRASEÑA SENCILLA
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleEdit = (item) => {
    setEditando(item.id);
    setForm(item);
  };

  const handleDelete = (id) => {
    if(window.confirm('¿Seguro que quieres borrar este equipo?')) {
      const nuevoCatalogo = catalogo.filter(item => item.id !== id);
      setCatalogo(nuevoCatalogo);
    }
  };

  const handleSave = () => {
    let nuevoCatalogo;
    if (editando) {
      // Editar existente
      nuevoCatalogo = catalogo.map(item => item.id === editando ? { ...form, id: editando } : item);
    } else {
      // Crear nuevo
      nuevoCatalogo = [...catalogo, { ...form, id: Date.now() }];
    }
    setCatalogo(nuevoCatalogo);
    setEditando(null);
    setForm({ paquete: '', modelo: '', marca: '', descripcion: '', precio: '', velocidad: '', tamano: '', funciones: '', incluye: '' });
  };

  const generateCodeBlock = () => {
    const code = `const DATA_INICIAL = ${JSON.stringify(catalogo, null, 2)};`;
    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Código copiado al portapapeles. Ahora pégalo en VS Code.');
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-slate-900 z-[60] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center">
          <Lock className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Acceso Administrativo</h2>
          <p className="text-slate-500 mb-6">Solo personal autorizado de Suministros Hega.</p>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-center text-lg"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex gap-2">
              <button type="button" onClick={onExit} className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold">Salir</button>
              <button type="submit" className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-bold">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-50 z-[60] overflow-y-auto">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Panel de Equipos</h2>
          <button onClick={onExit} className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600">Cerrar Panel</button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {editando ? <Edit size={20} /> : <Plus size={20} />} 
              {editando ? 'Editar Equipo' : 'Agregar Nuevo Equipo'}
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Marca (ej. Kyocera)" className="border p-2 rounded" value={form.marca} onChange={e => setForm({...form, marca: e.target.value})} />
                <input type="text" placeholder="Modelo (ej. Ecosys M2040)" className="border p-2 rounded" value={form.modelo} onChange={e => setForm({...form, modelo: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre Paquete" className="border p-2 rounded" value={form.paquete} onChange={e => setForm({...form, paquete: e.target.value})} />
                <input type="text" placeholder="Precio (ej. $1,245)" className="border p-2 rounded font-bold text-green-600" value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} />
              </div>
              <input type="text" placeholder="Descripción breve" className="w-full border p-2 rounded" value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} />
              
              <h4 className="font-bold text-sm text-slate-400 mt-4">Detalles Técnicos</h4>
              <div className="grid grid-cols-3 gap-2">
                <input type="text" placeholder="Velocidad" className="border p-2 rounded" value={form.velocidad} onChange={e => setForm({...form, velocidad: e.target.value})} />
                <input type="text" placeholder="Tamaño Papel" className="border p-2 rounded" value={form.tamano} onChange={e => setForm({...form, tamano: e.target.value})} />
                <input type="text" placeholder="Funciones" className="border p-2 rounded" value={form.funciones} onChange={e => setForm({...form, funciones: e.target.value})} />
              </div>
              <input type="text" placeholder="¿Qué incluye?" className="w-full border p-2 rounded" value={form.incluye} onChange={e => setForm({...form, incluye: e.target.value})} />

              <div className="flex gap-2 mt-4">
                {editando && <button onClick={() => {setEditando(null); setForm({ paquete: '', modelo: '', marca: '', descripcion: '', precio: '', velocidad: '', tamano: '', funciones: '', incluye: '' });}} className="px-4 py-2 bg-gray-200 rounded font-bold">Cancelar</button>}
                <button onClick={handleSave} className="flex-1 bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition-colors">
                  {editando ? 'Actualizar Equipo' : 'Guardar Nuevo Equipo'}
                </button>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: LISTA PREVIA */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Equipos Actuales ({catalogo.length})</h3>
            <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2">
              {catalogo.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center shadow-sm">
                  <div>
                    <p className="font-bold text-slate-800">{item.modelo}</p>
                    <p className="text-xs text-slate-500">{item.paquete} - <span className="text-green-600 font-bold">{item.precio}</span></p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(item)} className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"><Edit size={18}/></button>
                    <button onClick={() => handleDelete(item.id)} className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"><Trash size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ZONA DE EXPORTACIÓN */}
        <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2"><Save size={20}/> Guardar Cambios en la Web</h3>
              <p className="text-slate-400 text-sm">Como no usamos base de datos, debes copiar este código y pegarlo en VS Code.</p>
            </div>
            <button onClick={generateCodeBlock} className="bg-cyan-600 px-6 py-2 rounded-lg font-bold hover:bg-cyan-500">Generar Código</button>
          </div>

          {generatedCode && (
            <div className="relative">
              <textarea 
                className="w-full h-40 bg-slate-800 p-4 rounded-lg font-mono text-xs text-green-400 border border-slate-700 focus:outline-none"
                readOnly
                value={generatedCode}
              />
              <button 
                onClick={copyToClipboard}
                className="absolute top-4 right-4 bg-white text-slate-900 px-4 py-2 rounded font-bold text-xs flex items-center gap-2 hover:bg-gray-200"
              >
                <Copy size={14}/> Copiar
              </button>
              <div className="mt-4 bg-yellow-900/30 border border-yellow-600/50 p-4 rounded text-sm text-yellow-200">
                <strong>Instrucciones:</strong>
                <ol className="list-decimal ml-5 mt-2 space-y-1">
                  <li>Dale clic a "Copiar".</li>
                  <li>Ve a tu archivo <code>src/App.jsx</code> en VS Code.</li>
                  <li>Borra la sección <code>const DATA_INICIAL = [...];</code> (al principio del archivo).</li>
                  <li>Pega el nuevo código que acabas de copiar.</li>
                  <li>Guarda y haz <code>git push</code>.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL (APP) ---
const SuministrosHega = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); 
  const [showAdmin, setShowAdmin] = useState(false);
  const [catalogo, setCatalogo] = useState(DATA_INICIAL);

  const navigateTo = (viewName) => {
    setCurrentView(viewName);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "524432796023";
  const whatsappLinkGenerico = `https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20cotizar%20un%20servicio.`;

  return (
    <div className="font-montserrat text-slate-800 bg-gray-50 antialiased selection:bg-cyan-200">
      
      {/* MODO ADMINISTRADOR */}
      {showAdmin && (
        <AdminPanel 
          catalogo={catalogo} 
          setCatalogo={setCatalogo} 
          onExit={() => setShowAdmin(false)} 
        />
      )}

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
              <a href={whatsappLinkGenerico} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
                <MessageCircle size={16} /> Cotizar
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* MENÚ MÓVIL */}
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

      {/* --- VISTAS --- */}
      {currentView === 'home' && <HomeView onNavigate={navigateTo} />}
      
      {currentView === 'renta' && (
        <RentaView 
          catalogo={catalogo} // PASAMOS EL CATÁLOGO DINÁMICO
          onBack={() => navigateTo('home')} 
        />
      )}
      
      {currentView === 'consumibles' && <ConsumiblesView onBack={() => navigateTo('home')} />}

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10">
        {/* ... (Contenido del footer igual) ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
             {/* ... Datos de contacto ... */}
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
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4"><Mail size={20} className="text-cyan-400" /></div>
                  <span className="text-lg font-medium">contacto@suministroshega.mx</span>
                </div>
              </div>
            </div>
             
             {/* ... Formulario ... */}
             <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl shadow-black/20">
               {/* (Formulario simplificado para no repetir todo el código anterior aquí, pero asegúrate de mantenerlo) */}
               <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
               <p className="text-slate-500">Formulario conectado a WhatsApp.</p>
               <a href={whatsappLinkGenerico} target="_blank" rel="noopener noreferrer" className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"><MessageCircle size={20} /> Abrir Chat</a>
             </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© 2024 Suministros Hega. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
               <button onClick={() => setShowAdmin(true)} className="text-slate-700 text-xs hover:text-slate-500 transition-colors flex items-center gap-1">
                 <Lock size={10} /> Staff
               </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- COMPONENTE: VISTA HOME (Simplificado para el ejemplo) ---
const HomeView = ({ onNavigate }) => (
  <section className="pt-40 pb-20 bg-white text-center">
    <h1 className="text-4xl font-bold mb-8">Soluciones en Impresión</h1>
    <button onClick={() => onNavigate('renta')} className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold">Ver Catálogo de Renta</button>
  </section>
);

// --- COMPONENTE: VISTA CONSUMIBLES (Simplificado) ---
const ConsumiblesView = ({ onBack }) => (
  <section className="pt-40 pb-20 bg-slate-50 text-center">
    <button onClick={onBack} className="mb-8 font-bold">Volver</button>
    <h1 className="text-4xl font-bold mb-8">Consumibles y Refacciones</h1>
    <p>Catálogo de tóner y piezas.</p>
  </section>
);

// --- VISTA RENTA Y VENTA (MODIFICADA PARA RECIBIR DATOS) ---
const RentaView = ({ onBack, catalogo }) => {
  // Nota: Si 'catalogo' viene vacío o undefined, usa un array vacío para evitar errores
  const listaEquipos = catalogo || [];

  return (
    <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="flex items-center text-slate-500 hover:text-cyan-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
        </button>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Renta y Venta de Impresoras</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Catálogo de equipos disponibles.</p>
        </div>

        {/* AQUÍ SE MUESTRAN LOS EQUIPOS DINÁMICOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {listaEquipos.map((equipo) => (
            <PrinterCard key={equipo.id} equipo={equipo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuministrosHega;