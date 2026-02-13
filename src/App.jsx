import React, { useState, useEffect } from 'react';
import { Menu, X, Printer, Droplet, Wrench, ChevronRight, CheckCircle, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, ArrowLeft, Box, ShieldCheck, Zap, FileText, Layers, Info, Lock, Edit, Trash, Plus, Save, Copy, Image as ImageIcon, Tag, Percent, Cpu, Search, ArrowRight, ScrollText } from 'lucide-react';

// --- CONFIGURACIÓN INICIAL DEL CATÁLOGO ---
const DATA_INICIAL = [
  // --- RENTA B/N ---
  {
    id: 1,
    categoria: "renta",
    subcategoria: "bn",
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
    imagen: ""
  },
  {
    id: 2,
    categoria: "renta",
    subcategoria: "bn",
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
    imagen: ""
  },
  // --- CONSUMIBLES (EJEMPLOS) ---
  {
    id: 10,
    categoria: "consumible",
    subcategoria: "toner",
    paquete: "Genérico Premium",
    modelo: "TN-1060",
    marca: "Brother",
    descripcion: "Cartucho de Tóner",
    precio: "$180",
    velocidad: "1,000 págs", 
    tamano: "HL-1110, 1210W", 
    funciones: "Negro", 
    incluye: "Garantía total",
    popular: true,
    imagen: ""
  },
  {
    id: 11,
    categoria: "consumible",
    subcategoria: "refaccion",
    paquete: "Original",
    modelo: "Kit MK-3160",
    marca: "Kyocera",
    descripcion: "Kit completo",
    precio: "$4,200",
    velocidad: "300k págs",
    tamano: "M3645idn",
    funciones: "Original",
    incluye: "Unidades revelado/tambor",
    popular: false,
    imagen: ""
  }
];

// --- COMPONENTE: TARJETA GRANDE (PARA IMPRESORAS) ---
const PrinterCard = ({ equipo }) => {
  const whatsappNumber = "524432796023";
  const isVenta = equipo.categoria === 'venta';
  const isRemate = equipo.subcategoria === 'remate';
  
  const mensajeCotizar = isVenta 
    ? `Hola, me interesa el equipo de venta *${equipo.modelo}* (${equipo.paquete}).`
    : `Hola, me interesa cotizar la renta del equipo *${equipo.modelo}* (${equipo.paquete}).`;
    
  const mensajeInfo = `Hola, necesito más información técnica sobre la *${equipo.modelo}*.`;

  let etiquetaColor = "bg-red-600";
  let etiquetaTexto = "Renta Mensual + IVA";
  let headerColor = "bg-cyan-500";

  if (isVenta) {
    if (isRemate) {
      etiquetaColor = "bg-purple-600";
      etiquetaTexto = "¡Precio de Remate!";
      headerColor = "bg-purple-800";
    } else {
      etiquetaColor = "bg-green-600";
      etiquetaTexto = "Precio de Venta + IVA";
      headerColor = "bg-slate-800";
    }
  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col relative group h-full">
      <div className={`${etiquetaColor} text-white text-center py-2 absolute top-0 right-0 left-0 z-10 mx-auto w-3/4 rounded-b-xl shadow-md`}>
        <p className="text-xs uppercase font-bold opacity-90">{etiquetaTexto}</p>
        <p className="text-2xl font-extrabold">{equipo.precio}</p>
      </div>

      <div className={`${headerColor} pt-16 pb-4 px-6 text-center transition-colors`}>
        <h3 className="text-white text-2xl font-bold">{equipo.paquete}</h3>
        <p className="text-white/90 font-medium text-sm mt-1">{equipo.descripcion}</p>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">{equipo.marca}</p>
          <h4 className="text-slate-900 text-xl font-extrabold">{equipo.modelo}</h4>
        </div>

        <div className="flex justify-center mb-8 h-48 items-center transform group-hover:scale-105 transition-transform duration-500">
           {equipo.imagen ? (
             <img src={equipo.imagen} alt={equipo.modelo} className="h-full w-auto object-contain max-w-full drop-shadow-lg" onError={(e) => {e.target.onerror = null; e.target.src=""}} />
           ) : (
             <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center text-slate-300"><Printer size={64} /></div>
           )}
        </div>

        <div className="space-y-4 mb-6 border-t border-slate-100 pt-6">
          <div className="flex items-center">
            <div className="w-8 flex justify-center mr-3 text-cyan-500"><Zap size={20} /></div>
            <div><p className="text-xs text-slate-400 font-bold uppercase">Velocidad</p><p className="text-slate-700 font-bold">{equipo.velocidad}</p></div>
          </div>
          <div className="flex items-center">
            <div className="w-8 flex justify-center mr-3 text-cyan-500"><FileText size={20} /></div>
            <div><p className="text-xs text-slate-400 font-bold uppercase">Tamaño</p><p className="text-slate-700 font-bold">{equipo.tamano}</p></div>
          </div>
          <div className="flex items-center">
            <div className="w-8 flex justify-center mr-3 text-cyan-500"><Layers size={20} /></div>
            <div><p className="text-xs text-slate-400 font-bold uppercase">Funciones</p><p className="text-slate-700 font-bold text-sm">{equipo.funciones}</p></div>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-orange-600 font-bold text-sm leading-tight">{equipo.incluye}</p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeInfo)}`} target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-lg font-bold text-sm flex items-center justify-center transition-colors border border-slate-200">
            <Info size={16} className="mr-1" /> + INFO
          </a>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeCotizar)}`} target="_blank" rel="noopener noreferrer" className={`${isVenta ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-yellow-400 hover:bg-yellow-500 text-slate-900'} py-3 rounded-lg font-bold text-sm flex items-center justify-center transition-colors shadow-md`}>
            {isVenta ? 'COMPRAR' : 'RENTAR'}
          </a>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: TARJETA COMPACTA (PARA CONSUMIBLES Y REFACCIONES) ---
const CompactProductCard = ({ item }) => {
  const whatsappNumber = "524432796023";
  const mensajeCompra = `Hola, me interesa el consumible *${item.modelo}* (${item.marca}).`;

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full relative overflow-hidden group">
      {/* Etiqueta pequeña de tipo */}
      <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">
        {item.subcategoria}
      </div>

      <div className="flex items-start gap-4 mb-3">
        {/* Imagen Pequeña */}
        <div className="w-20 h-20 bg-slate-50 rounded-lg flex-shrink-0 flex items-center justify-center p-2 border border-slate-100">
          {item.imagen ? (
             <img src={item.imagen} alt={item.modelo} className="w-full h-full object-contain" onError={(e) => {e.target.onerror = null; e.target.src=""}} />
           ) : (
             item.subcategoria === 'toner' ? <Droplet size={32} className="text-slate-300" /> : <Box size={32} className="text-slate-300" />
           )}
        </div>
        
        {/* Info Principal */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-400 font-bold uppercase truncate">{item.marca}</p>
          <h4 className="text-slate-900 font-bold text-lg truncate leading-tight mb-1">{item.modelo}</h4>
          <p className="text-xs text-slate-500 line-clamp-2 leading-tight mb-2">{item.descripcion}</p>
          <p className="text-blue-700 font-extrabold text-xl">{item.precio} <span className="text-[10px] text-slate-400 font-normal">+IVA</span></p>
        </div>
      </div>

      {/* Info Extra Compacta */}
      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 bg-slate-50 p-2 rounded-lg mb-3">
        <div>
          <span className="font-bold block text-slate-700">Para:</span> {item.tamano}
        </div>
        <div>
          <span className="font-bold block text-slate-700">Rend:</span> {item.velocidad}
        </div>
      </div>

      {/* Botón Compacto */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeCompra)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition-colors"
      >
        <MessageCircle size={14} /> PEDIR
      </a>
    </div>
  );
};

// --- COMPONENTE: PANEL DE ADMINISTRACIÓN ---
const AdminPanel = ({ catalogo, setCatalogo, onExit }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editando, setEditando] = useState(null);
  const [generatedCode, setGeneratedCode] = useState('');

  const [form, setForm] = useState({
    categoria: 'renta', 
    subcategoria: 'bn', 
    paquete: '', modelo: '', marca: '', descripcion: '', precio: '', velocidad: '', tamano: '', funciones: '', incluye: '', imagen: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'hega2024') { 
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleEdit = (item) => {
    setEditando(item.id);
    const itemConSub = {
      ...item,
      subcategoria: item.subcategoria || (item.categoria === 'renta' ? 'bn' : 'nuevo')
    };
    setForm(itemConSub);
  };

  const handleDelete = (id) => {
    if(window.confirm('¿Seguro que quieres borrar este item?')) {
      const nuevoCatalogo = catalogo.filter(item => item.id !== id);
      setCatalogo(nuevoCatalogo);
    }
  };

  const handleSave = () => {
    let nuevoCatalogo;
    if (editando) {
      nuevoCatalogo = catalogo.map(item => item.id === editando ? { ...form, id: editando } : item);
    } else {
      nuevoCatalogo = [...catalogo, { ...form, id: Date.now() }];
    }
    setCatalogo(nuevoCatalogo);
    setEditando(null);
    setForm({ categoria: 'renta', subcategoria: 'bn', paquete: '', modelo: '', marca: '', descripcion: '', precio: '', velocidad: '', tamano: '', funciones: '', incluye: '', imagen: '' });
  };

  const generateCodeBlock = () => {
    const code = `const DATA_INICIAL = ${JSON.stringify(catalogo, null, 2)};`;
    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Código copiado. Pégalo en VS Code.');
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-slate-900 z-[60] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center">
          <Lock className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Acceso Administrativo</h2>
          <form onSubmit={handleLogin}>
            <input type="password" className="w-full border border-gray-300 p-3 rounded-lg mb-4 text-center text-lg" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
          <h2 className="text-3xl font-bold text-slate-900">Panel de Administración</h2>
          <button onClick={onExit} className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-600">Cerrar</button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {editando ? <Edit size={20} /> : <Plus size={20} />} 
              {editando ? 'Editar Item' : 'Agregar Nuevo Item'}
            </h3>
            <div className="space-y-4">
              
              {/* SELECTOR DE CATEGORÍA PRINCIPAL */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Categoría</label>
                <div className="flex gap-2 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer p-2 border rounded-lg hover:bg-slate-50 flex-1">
                    <input type="radio" name="categoria" value="renta" checked={form.categoria === 'renta'} onChange={e => setForm({...form, categoria: e.target.value, subcategoria: 'bn'})} />
                    <span className="font-bold text-cyan-600 text-sm">Renta</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 border rounded-lg hover:bg-slate-50 flex-1">
                    <input type="radio" name="categoria" value="venta" checked={form.categoria === 'venta'} onChange={e => setForm({...form, categoria: e.target.value, subcategoria: 'nuevo'})} />
                    <span className="font-bold text-green-600 text-sm">Venta</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-2 border rounded-lg hover:bg-slate-50 flex-1">
                    <input type="radio" name="categoria" value="consumible" checked={form.categoria === 'consumible'} onChange={e => setForm({...form, categoria: e.target.value, subcategoria: 'toner'})} />
                    <span className="font-bold text-blue-600 text-sm">Consumible</span>
                  </label>
                </div>

                {/* SUBCATEGORÍA DINÁMICA */}
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tipo / Subcategoría</label>
                <div className="flex gap-2 flex-wrap">
                  {form.categoria === 'renta' && (
                    <>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-slate-100 rounded text-sm"><input type="radio" name="subcategoria" value="bn" checked={form.subcategoria === 'bn'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> B/N</label>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-slate-100 rounded text-sm"><input type="radio" name="subcategoria" value="color" checked={form.subcategoria === 'color'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Color</label>
                    </>
                  )}
                  {form.categoria === 'venta' && (
                    <>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-green-50 rounded text-sm"><input type="radio" name="subcategoria" value="nuevo" checked={form.subcategoria === 'nuevo'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Nuevo</label>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-green-50 rounded text-sm"><input type="radio" name="subcategoria" value="usado" checked={form.subcategoria === 'usado'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Usado</label>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-purple-50 rounded text-sm text-purple-700 font-bold"><input type="radio" name="subcategoria" value="remate" checked={form.subcategoria === 'remate'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Remate</label>
                    </>
                  )}
                  {form.categoria === 'consumible' && (
                    <>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-blue-50 rounded text-sm"><input type="radio" name="subcategoria" value="toner" checked={form.subcategoria === 'toner'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Tóner/Tinta</label>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-blue-50 rounded text-sm"><input type="radio" name="subcategoria" value="refaccion" checked={form.subcategoria === 'refaccion'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Refacción</label>
                      <label className="flex items-center gap-1 cursor-pointer px-3 py-1 bg-blue-50 rounded text-sm"><input type="radio" name="subcategoria" value="chip" checked={form.subcategoria === 'chip'} onChange={e => setForm({...form, subcategoria: e.target.value})} /> Chip/Tambor</label>
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Imagen (Nombre archivo)</label>
                <div className="flex gap-2">
                  <div className="bg-slate-100 p-2 rounded text-slate-500"><ImageIcon size={20}/></div>
                  <input type="text" placeholder="Ej. /toner-1060.png" className="flex-1 border p-2 rounded text-sm" value={form.imagen} onChange={e => setForm({...form, imagen: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Marca (Brother/Kyocera)" className="border p-2 rounded" value={form.marca} onChange={e => setForm({...form, marca: e.target.value})} />
                <input type="text" placeholder="Modelo (TN-1060)" className="border p-2 rounded" value={form.modelo} onChange={e => setForm({...form, modelo: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Título/Paquete" className="border p-2 rounded" value={form.paquete} onChange={e => setForm({...form, paquete: e.target.value})} />
                <input type="text" placeholder="Precio ($180)" className="border p-2 rounded font-bold text-green-600" value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} />
              </div>
              <input type="text" placeholder="Descripción breve" className="w-full border p-2 rounded" value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} />
              
              <h4 className="font-bold text-sm text-slate-400 mt-4">
                {form.categoria === 'consumible' ? 'Detalles Consumible' : 'Detalles Técnicos'}
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <input type="text" placeholder={form.categoria === 'consumible' ? "Rendimiento" : "Velocidad"} className="border p-2 rounded" value={form.velocidad} onChange={e => setForm({...form, velocidad: e.target.value})} />
                <input type="text" placeholder={form.categoria === 'consumible' ? "Compatibilidad" : "Tamaño Papel"} className="border p-2 rounded" value={form.tamano} onChange={e => setForm({...form, tamano: e.target.value})} />
                <input type="text" placeholder={form.categoria === 'consumible' ? "Color/Tipo" : "Funciones"} className="border p-2 rounded" value={form.funciones} onChange={e => setForm({...form, funciones: e.target.value})} />
              </div>
              <input type="text" placeholder="Garantía / Incluye" className="w-full border p-2 rounded" value={form.incluye} onChange={e => setForm({...form, incluye: e.target.value})} />
              <div className="flex gap-2 mt-4">
                {editando && <button onClick={() => {setEditando(null); setForm({ categoria: 'renta', subcategoria: 'bn', paquete: '', modelo: '', marca: '', descripcion: '', precio: '', velocidad: '', tamano: '', funciones: '', incluye: '', imagen: '' });}} className="px-4 py-2 bg-gray-200 rounded font-bold">Cancelar</button>}
                <button onClick={handleSave} className="flex-1 bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition-colors">{editando ? 'Actualizar' : 'Guardar Nuevo'}</button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Items Actuales ({catalogo.length})</h3>
            <div className="max-h-[500px] overflow-y-auto space-y-3 pr-2">
              {catalogo.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center shadow-sm relative overflow-hidden">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.categoria === 'venta' ? 'bg-green-500' : item.categoria === 'consumible' ? 'bg-blue-500' : 'bg-cyan-500'}`}></div>
                  <div className="flex items-center gap-3 pl-2">
                    <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center overflow-hidden">
                      {item.imagen ? <img src={item.imagen} alt="" className="w-full h-full object-cover"/> : <Printer size={16} className="text-slate-400"/>}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-slate-800">{item.modelo}</p>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white ${item.categoria === 'venta' ? 'bg-green-500' : item.categoria === 'consumible' ? 'bg-blue-500' : 'bg-cyan-500'}`}>
                          {item.subcategoria ? item.subcategoria : item.categoria}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{item.paquete} - <span className="text-slate-900 font-bold">{item.precio}</span></p>
                    </div>
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

        <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2"><Save size={20}/> Guardar Cambios</h3>
              <p className="text-slate-400 text-sm">Copia el código generado y pégalo en VS Code.</p>
            </div>
            <button onClick={generateCodeBlock} className="bg-cyan-600 px-6 py-2 rounded-lg font-bold hover:bg-cyan-500">Generar Código</button>
          </div>
          {generatedCode && (
            <div className="relative">
              <textarea className="w-full h-40 bg-slate-800 p-4 rounded-lg font-mono text-xs text-green-400 border border-slate-700 focus:outline-none" readOnly value={generatedCode} />
              <button onClick={copyToClipboard} className="absolute top-4 right-4 bg-white text-slate-900 px-4 py-2 rounded font-bold text-xs flex items-center gap-2 hover:bg-gray-200"><Copy size={14}/> Copiar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- VISTA CONSUMIBLES (OPTIMIZADA PARA 1000 ITEMS) ---
const ConsumiblesView = ({ onBack, catalogo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filtrar solo consumibles
  const consumiblesTodos = (catalogo || []).filter(e => e.categoria === 'consumible');

  // Filtrar por búsqueda
  const filteredItems = consumiblesTodos.filter(item => 
    item.modelo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.tamano && item.tamano.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Lógica de Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Reiniciar página al buscar
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header y Navegación */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-cyan-600 font-bold transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
          </button>
          
          {/* BUSCADOR POTENTE */}
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Buscar modelo, marca o código..." 
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 text-slate-400" size={20} />
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Consumibles y Refacciones</h1>
          <p className="text-slate-600">Catálogo completo de suministros.</p>
        </div>

        {/* GRID DE PRODUCTOS COMPACTOS */}
        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {currentItems.map(item => (
                <CompactProductCard key={item.id} item={item} />
              ))}
            </div>

            {/* CONTROLES DE PAGINACIÓN */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-bold flex items-center ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'}`}
                >
                  <ArrowLeft size={16} className="mr-2" /> Anterior
                </button>
                <span className="text-slate-600 font-medium">
                  Página {currentPage} de {totalPages}
                </span>
                <button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-bold flex items-center ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'}`}
                >
                  Siguiente <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-lg">No encontramos productos que coincidan con "{searchTerm}"</p>
            <button onClick={() => setSearchTerm('')} className="mt-4 text-cyan-600 font-bold hover:underline">Ver todos los productos</button>
          </div>
        )}

      </div>
    </section>
  );
};

// --- VISTA RENTA Y VENTA (DIVIDIDA POR SUBCATEGORÍAS) ---
const RentaView = ({ onBack, catalogo }) => {
  const listaCompleta = catalogo || [];
  
  // FILTROS AVANZADOS
  const rentaBN = listaCompleta.filter(e => e.categoria === 'renta' && e.subcategoria === 'bn');
  const rentaColor = listaCompleta.filter(e => e.categoria === 'renta' && e.subcategoria === 'color');
  
  const ventaNuevos = listaCompleta.filter(e => e.categoria === 'venta' && e.subcategoria === 'nuevo');
  const ventaUsados = listaCompleta.filter(e => e.categoria === 'venta' && e.subcategoria === 'usado');
  const ventaRemates = listaCompleta.filter(e => e.categoria === 'venta' && e.subcategoria === 'remate');

  return (
    <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="flex items-center text-slate-500 hover:text-cyan-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Renta y Venta de Impresoras</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones flexibles para cada necesidad. Renta sin inversión inicial o compra equipos garantizados.
          </p>
        </div>

        {/* --- SECCIÓN RENTA --- */}
        {(rentaBN.length > 0 || rentaColor.length > 0) && (
          <div className="mb-16">
            <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
              <div className="bg-cyan-500 p-2 rounded-lg mr-4 text-white"><Printer size={28} /></div>
              <h2 className="text-3xl font-bold text-slate-800">Planes de Renta Mensual</h2>
            </div>

            {/* Subsección B/N */}
            {rentaBN.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-600 mb-6 flex items-center"><Box className="mr-2" size={20}/> Monocromáticos (B/N)</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rentaBN.map(equipo => <PrinterCard key={equipo.id} equipo={equipo} />)}
                </div>
              </div>
            )}

            {/* Subsección Color */}
            {rentaColor.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-600 mb-6 flex items-center"><Zap className="mr-2 text-yellow-500" size={20}/> Equipos a Color</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rentaColor.map(equipo => <PrinterCard key={equipo.id} equipo={equipo} />)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- SECCIÓN VENTA --- */}
        {(ventaNuevos.length > 0 || ventaUsados.length > 0 || ventaRemates.length > 0) && (
          <div className="mb-16 pt-8">
            <div className="flex items-center mb-8 pb-4 border-b border-slate-200">
              <div className="bg-green-600 p-2 rounded-lg mr-4 text-white"><Tag size={28} /></div>
              <h2 className="text-3xl font-bold text-slate-800">Equipos Disponibles para Venta</h2>
            </div>

            {/* Venta Nuevos */}
            {ventaNuevos.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center"><ShieldCheck className="mr-2" size={20}/> Equipos Nuevos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ventaNuevos.map(equipo => <PrinterCard key={equipo.id} equipo={equipo} />)}
                </div>
              </div>
            )}

            {/* Venta Usados */}
            {ventaUsados.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-600 mb-6 flex items-center"><Layers className="mr-2" size={20}/> Seminuevos Garantizados</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ventaUsados.map(equipo => <PrinterCard key={equipo.id} equipo={equipo} />)}
                </div>
              </div>
            )}

            {/* Venta Remates */}
            {ventaRemates.length > 0 && (
              <div className="mb-10 p-6 bg-purple-50 rounded-3xl border border-purple-100">
                <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center"><Percent className="mr-2" size={20}/> Zona de Remates (Oportunidades)</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ventaRemates.map(equipo => <PrinterCard key={equipo.id} equipo={equipo} />)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Información Adicional */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <ShieldCheck className="text-cyan-500 mr-3" /> ¿Por qué rentar?
              </h3>
              <ul className="space-y-4">
                {["Cero inversión inicial.", "100% Deducible de impuestos.", "Mantenimiento y tóner incluidos.", "Soporte técnico prioritario."].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20}/>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">¿Buscas algo específico?</h3>
              <p className="text-slate-600 mb-6">
                Si no encuentras el modelo que buscas, contáctanos. Tenemos acceso a un amplio inventario de marcas líderes.
              </p>
              <a href="https://wa.me/524432796023" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-bold hover:underline flex items-center">
                Preguntar por otro modelo <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE: BANNER PROMOCIONAL ROLLOS ---
const PromoRollosBanner = () => {
  const mensajeRollos = "Hola, me interesa cotizar rollos para miniprinter.";
  
  return (
    <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-900 text-white py-12 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center md:items-start gap-6">
            {/* IMAGEN REAL MEJORADA */}
            <div className="hidden md:block w-40 h-40 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 transform hover:scale-105 transition-transform duration-500 shrink-0">
               <img 
                 src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400" 
                 alt="Miniprinter y Rollos" 
                 className="w-full h-full object-cover"
                 onError={(e) => {e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1622675363311-ac97f3a9e335?auto=format&fit=crop&q=80&w=400"}} 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-extrabold rounded-full mb-3 shadow-md uppercase tracking-wide">
                ¡Nuevo en Hega!
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                Rollos para Miniprinter
              </h2>
              <p className="text-cyan-100 text-lg max-w-xl">
                Térmicos y Bond. Todas las medidas disponibles para tu punto de venta (57mm, 80mm y más).
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <a 
              href={`https://wa.me/524432796023?text=${encodeURIComponent(mensajeRollos)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white text-slate-900 hover:bg-cyan-50 px-8 py-4 rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-3 w-full md:w-auto"
            >
              <span className="flex flex-col items-start text-left leading-tight">
                <span className="text-xs text-slate-500 uppercase">Solicitar cotización</span>
                <span className="text-lg">Pedir Rollos</span>
              </span>
              <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-white transition-colors">
                 <ArrowRight size={20} className="text-cyan-600" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: VISTA HOME (COMPLETO) ---
const HomeView = ({ onNavigate }) => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
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
              <button onClick={() => onNavigate('renta')} className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 inline-flex items-center justify-center cursor-pointer">
                Renta y venta de impresoras
              </button>
              <button onClick={() => onNavigate('consumibles')} className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:border-cyan-400 hover:text-cyan-600 transition-all inline-flex items-center justify-center cursor-pointer">
                Consumibles y refacciones
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES */}
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

      {/* BANNER PROMOCIONAL - ROLLOS */}
      <PromoRollosBanner />

      {/* SEGMENTATION SECTION */}
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
          catalogo={catalogo} 
          onBack={() => navigateTo('home')} 
        />
      )}
      
      {currentView === 'consumibles' && (
        <ConsumiblesView 
          catalogo={catalogo} // PASAMOS EL CATÁLOGO
          onBack={() => navigateTo('home')} 
        />
      )}

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10">
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
             
             {/* ... Formulario ... */}
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
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
               <a href="https://www.facebook.com/HEGAsuministros" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer text-slate-400 hover:text-white transition-colors"><Facebook size={20} /> HEGAsuministros</a>
               <a href="https://www.instagram.com/suministroshega" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer text-slate-400 hover:text-white transition-colors"><Instagram size={20} /> @suministroshega</a>
               {/* BOTÓN STAFF VISIBLE */}
               <button onClick={() => setShowAdmin(true)} className="ml-4 text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer" title="Acceso Administrativo">
                 <Lock size={14} /> Staff
               </button>
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