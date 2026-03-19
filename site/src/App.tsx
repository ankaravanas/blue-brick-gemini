import Hero from './components/sections/Hero';
import Concept from './components/sections/Concept';
import MenuPreview from './components/sections/MenuPreview';
import Gallery from './components/sections/Gallery';
import Footer from './components/sections/Footer';

function App() {
  return (
    <main className="w-full bg-charcoal text-cream selection:bg-primary/30 selection:text-white">
      <Hero />
      <Concept />
      <MenuPreview />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
