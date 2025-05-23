import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;