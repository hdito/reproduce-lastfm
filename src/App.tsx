import "@fontsource/barlow";
import "@fontsource/barlow/700.css";
import { Cards } from "./components/Cards";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";

function App() {
  return (
    <div className="min-h-screen font-barlow text-lastfm-mineshaft">
      <Header />
      <Tabs />
      <Cards />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
