import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <MyNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
