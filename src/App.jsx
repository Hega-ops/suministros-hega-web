import React, { useState } from 'react';
import { Menu, X, Printer, Droplet, Wrench, ChevronRight, CheckCircle, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';

const SuministrosHega = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enlace directo a WhatsApp (Actualizado a terminación 6023 -> 279-6023)
  const whatsappLink = "https://wa.me/524432796023?text=Hola,%20me%20interesa%20cotizar%20un%20servicio.";

  return (
    <div className="font-montserrat text-slate-800 bg-gray-50 antialiased selection:bg-cyan-200">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer">
              <img src="/LOGO SH.png" alt="Suministros Hega" className="h-24 w-auto object-contain" />
              
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-slate-900 leading-none tracking-wide">SUMINISTROS HEGA</h1>
                <p className="text-xs text-slate-500 font-medium tracking-widest mt-1">SOLUCIÓN EN IMPRESIÓN</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-medium hover:text-cyan-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-sm font-medium hover:text-cyan-600 transition-colors">Servicios</a>
              <a href="#empresas" className="text-sm font-medium hover:text-cyan-600 transition-colors">Empresas</a>
              <a href="#hogar" className="text-sm font-medium hover:text-cyan-600 transition-colors">Hogar</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Cotizar por WhatsApp
              </a>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" className="block px-3 py-3 text-base font-medium hover:bg-cyan-50 text-slate-800 rounded-lg">Inicio</a>
              <a href="#servicios" className="block px-3 py-3 text-base font-medium hover:bg-cyan-50 text-slate-800 rounded-lg">Servicios</a>
              <a href="#empresas" className="block px-3 py-3 text-base font-medium hover:bg-cyan-50 text-slate-800 rounded-lg">Para Empresas</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-full font-bold flex justify-center items-center gap-2">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

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
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                Ver Soluciones para Empresas
              </button>
              <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:border-cyan-400 hover:text-cyan-600 transition-all">
                Busco Suministros / Servicio
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
            {/* Card 1: Suministros */}
            <div className="group bg-gray-50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Droplet className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Venta de Suministros</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Tóner, tinta y refacciones originales y genéricas de alta calidad. Nunca te quedes sin imprimir.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-500"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>HP, Epson, Brother, Canon</li>
                <li className="flex items-center text-sm text-slate-500"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>Entrega a domicilio</li>
              </ul>
            </div>

            {/* Card 2: Renta y Venta */}
            <div className="group bg-slate-900 rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 relative overflow-hidden">
               {/* Decorative gradient inside card */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Printer className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Renta y Venta de Equipo</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Fotocopiadoras e impresoras de alto volumen. Planes de renta deducibles para tu oficina o escuela.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>Planes a tu medida</li>
                <li className="flex items-center text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>Equipos multifuncionales</li>
              </ul>
            </div>

            {/* Card 3: Servicio Tecnico */}
            <div className="group bg-gray-50 rounded-2xl p-8 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="text-pink-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Servicio Técnico</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Mantenimiento preventivo y correctivo. Revivimos tus equipos y extendemos su vida útil.
              </p>
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
            
            {/* Left: Empresas (Primary Market) */}
            <div id="empresas" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-6">MERCADO CORPORATIVO</div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Para Empresas y Escuelas</h3>
              <p className="text-slate-600 mb-8">
                Optimiza costos operativos con nuestros planes de renta. Nos encargamos de los consumibles y el mantenimiento para que tú te enfoques en trabajar.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-500 mr-3 mt-1" size={20}/>
                  <span className="text-slate-700">Contratos de servicio integral (Suministros incluidos)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-500 mr-3 mt-1" size={20}/>
                  <span className="text-slate-700">Atención prioritaria a flotillas de impresión</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-500 mr-3 mt-1" size={20}/>
                  <span className="text-slate-700">Facturación y planes deducibles</span>
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-slate-900 font-bold hover:text-cyan-600">
                Solicitar propuesta empresarial <ChevronRight size={20} className="ml-1"/>
              </a>
            </div>

            {/* Right: Hogar (Secondary Market) */}
            <div id="hogar" className="pl-0 md:pl-8">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold mb-6">HOGAR Y ESTUDIANTES</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Para el Hogar y Home Office</h3>
              <p className="text-slate-600 mb-6">
                ¿Tu impresora imprime rayas o te quedaste sin tinta a mitad de un trabajo? Tenemos la solución rápida y económica.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <Droplet className="text-cyan-500 mr-4" size={24}/>
                  <div>
                    <h4 className="font-bold text-slate-800">Venta de Tóner y Tinta</h4>
                    <p className="text-sm text-slate-500">Precios competitivos en originales y genéricos.</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                  <Wrench className="text-pink-500 mr-4" size={24}/>
                  <div>
                    <h4 className="font-bold text-slate-800">Reparación Express</h4>
                    <p className="text-sm text-slate-500">Diagnóstico rápido para equipos domésticos.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hablemos de tus necesidades de impresión</h2>
              <p className="text-slate-400 mb-8 max-w-md">
                Estamos listos para atenderte en nuestras sucursales o vía digital.
              </p>
              
              <div className="space-y-6">
                {/* Teléfonos */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Morelia</p>
                    <p className="text-lg font-medium mb-2">(443) 249-6023</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Moroleón</p>
                    <p className="text-lg font-medium">(445) 458-1529 <span className="text-slate-500 mx-1">|</span> (445) 457-4955</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer hover:bg-slate-800/50 p-2 rounded-lg -ml-2 transition-colors">
                  <div className="w-10 h-10 bg-green-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors">
                    <MessageCircle size={20} className="text-green-400 group-hover:text-white" />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p>
                     {/* UPDATE: Número actualizado a 279-6023 */}
                     <span className="text-lg font-medium group-hover:text-green-400 transition-colors">(443) 279-6023</span>
                  </div>
                </a>

                {/* Email (Se mantiene genérico o puedes actualizarlo si tienes uno específico) */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  {/* UPDATE: Corrección a .mx */}
                  <span className="text-lg font-medium">contacto@suministroshega.mx</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all" placeholder="Tu nombre o empresa" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Servicio de interés</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 outline-none bg-white">
                    <option>Renta de equipos (Empresas)</option>
                    <option>Compra de suministros</option>
                    <option>Servicio Técnico</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all h-32" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-cyan-500/30">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© 2024 Suministros Hega. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               {/* Facebook */}
               <a href="https://www.facebook.com/HEGAsuministros" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                 <div className="w-8 h-8 bg-slate-800 rounded-full group-hover:bg-[#1877F2] group-hover:text-white transition-all flex items-center justify-center">
                   <Facebook size={16} className="text-slate-400 group-hover:text-white" />
                 </div>
                 <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">HEGAsuministros</span>
               </a>
               
               {/* Instagram */}
               <a href="https://www.instagram.com/suministroshega" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                 <div className="w-8 h-8 bg-slate-800 rounded-full group-hover:bg-[#E4405F] group-hover:text-white transition-all flex items-center justify-center">
                   <Instagram size={16} className="text-slate-400 group-hover:text-white" />
                 </div>
                 <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">@suministroshega</span>
               </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SuministrosHega;