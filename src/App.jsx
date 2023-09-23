import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Box from './components/Box';

function App() {
  return (
    <div className="site-container">
     <Header />
     <main>
      <Box />
     </main>
     <Footer />

    </div>
  );
}

export default App;
