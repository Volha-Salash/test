import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";
import Footer from "./components/footer/footer";
import MainTemplate from "./components/mainTemplate/mainTemplate";
import { db, Data } from "./db/db";

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(db);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data) return <></>;

  return (
    <div className="App">
      <Header />
      <NavigationMenu navItems={data.navItems} />
      <MainTemplate {...data} />
      <Footer />
    </div>
  );
}

export default App;
