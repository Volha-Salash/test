import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/header/Header'
import NavigationMenu from './components/navigationMenu/NavigationMenu';
import Footer from './components/footer/footer';
import MainTemplate from './components/mainTemplate/mainTemplate';


function App() {
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Загружаем элементы меню
      setMenuItems(['Menu Item 1', 'Menu Item 2', 'Menu Item 3']);
      setLoading(false); // Загрузка завершена
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <NavigationMenu menuItems={menuItems} />
      <MainTemplate />
      <Footer />
    </div>
  );
}

export default App;
