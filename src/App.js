import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home/Home';
import { Teach } from './Components/Products/Teach';
import './index.css'
import { Prep } from './Components/Products/Prep';
import { Mock } from './Components/Products/Mockj';

const routes = {
  '/': <Home /> ,
  '/teach': <Teach /> ,
  '/prep':<Prep />,
  '/mock':<Mock />
}

function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <BrowserRouter>
            <Routes>
                {
                    Object.keys(routes).map((route, index) => {
                        return (<Route key={index} path={route} element={routes[route]} />);
                    })
                }
            </Routes>
        </BrowserRouter>
  );
}

export default App;
