import Header from './components/Header'
import Footer from './components/Footer'
import teclas from './teclas.json'
import Tecla from './components/Tecla'


function App() {

  return (
    <div className="App">
      <Header />
      <section className="teclado" >
        {teclas.map(tecla => (
          <Tecla
            key={tecla.id} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
