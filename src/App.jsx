import Content from "./components/ContentComponent/content";
import Footer from "./components/FooterComponent/Footer";
import Header from "./components/HeaderComponent/Header";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
