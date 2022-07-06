import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Dashbord from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter> 
      {/* <Route path='/' element=""></Route>
      <Route path='/todo'></Route>
      <Route path='/user'></Route> */}
      <Dashbord></Dashbord>
    </BrowserRouter>
  );
}

export default App;
