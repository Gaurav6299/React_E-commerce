// import './App.css';
import LandingPage from './components/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './components/ProductList';
import PageNotFound from './components/PageNotFound';
import Cart from './components/MyCart'
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';

function App() {

  const theme={
    Colors:{
      primary: '#FF0000',
    secondary: '#00FF00',
    white:"#fff"
    },
    background:{
      danger:"red"
    },
    media:{
      mobile:"768px",
      tab:"998px"
    }
    
  }
  return (
    // <LandingPage />

    // Routing
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />

        {/* Navbar */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
