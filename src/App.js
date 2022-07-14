
import './App.css';
import {Fragment} from 'react'
import {
  BrowserRouter,  
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/Data';
import Home from './pages/Home';
import Learn from './pages/Learn';
function App() {
  return (
    <Fragment>
       <Provider store={store}>
       <BrowserRouter>
    <Routes>
    {/* <Home/> */}
    <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Learn />} />
      </Routes>
  </BrowserRouter>
    </Provider>
    </Fragment>
  )
    }

export default App;
