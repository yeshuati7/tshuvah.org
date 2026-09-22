import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceTimes } from './components/ServiceTimes';
import { About } from './components/About';
import { Ministries } from './components/Ministries';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceTimes />
        <About />
        <Ministries />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}