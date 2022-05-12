import './App.css';
import PageHome from './Pages/PageHome';
import PageServicos from './Pages/PageServicos';
import PageAbout from './Pages/PageAbout';
import PageContato from './Pages/PageContato';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className='App'>
          <Link className='links' to='/'>Home</Link>
          <Link className='links' to='/about'>Sobre</Link>
          <Link className='links' to='/servicos'>Servicos</Link>
          <Link className='links' to='/contato'>Contato</Link>
        </div>

      <Switch>
      <Route path='/' exact component={PageHome} />
      <Route path='/about' component={PageAbout} />
      <Route path='/servicos' component={PageServicos} />
      <Route path='/contato' component={PageContato} />
      </Switch>
      
    </Router>
    
  );
}

export default App;

/*
PARA SITE ONEPAGE
<div className="App">
      <PageHome/>
      <PageAbout/>
      <PageServicos/>
      <PageContato/>
    </div>
*/