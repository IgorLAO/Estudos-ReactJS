  import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <h1>
          Home
        </h1>
        <p>Projetos react</p>

        <Link to='Compras'> <a>Lista de Compras </a> </Link>
        <br/>|
        <Link to='/alunos'>alunos</Link>

      </main>
    </div>
  );
}

export default App;
