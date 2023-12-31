import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import BomboneContainer from './components/BomboneContainer';

function App() {

  return (
    <Provider store={store}>
    <div className='App'>
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <BomboneContainer/>
    </div>
    </Provider>
  )
}

export default App
