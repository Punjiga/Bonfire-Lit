//AQUI SOLAMENTE ES PARA LLAMAR A LOS COMPONENTES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CardsSection } from './components/cardsSection/cardsSection.js';
function App() {
  return (
    <div className='container-fluid d-flex vh-100 vw-100 flex-column align-items-center text-center'>
      <CardsSection />
    </div>
  );
}
export default App;