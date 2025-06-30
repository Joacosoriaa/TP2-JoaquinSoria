import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
// import Tutoriales from './pages/Tutoriales';
import MenuTienda from './pages/MenuTienda';
// import TrabajaConNosotros from './pages/TrabajaConNosotros';
// import Franquicias from './pages/Franquicias';
// import Contacto from './pages/Contacto';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'tienda':
        return <Tienda />;
      // case 'tutoriales':
      //   return <Tutoriales />;
      case 'menu-tienda':
        return <MenuTienda />;
      // case 'trabaja-con-nosotros':
      //   return <TrabajaConNosotros />;
      // case 'franquicias':
      //   return <Franquicias />;
      // case 'contacto':
      //   return <Contacto />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;