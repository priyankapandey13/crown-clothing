import { Routes , Route } from "react-router-dom";
import Home from "./Routes/home/home.components.jsx";
import Navigation from "./Routes/navigation/navigation.component.jsx";
import Authentication from "./Routes/authentication/authentication.components.jsx";
import Shop from "./Routes/shop/shop.component.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation/>} >
      <Route index element={<Home/>} ></Route>
      <Route path="/shop" element={<Shop/>} />
      <Route path="/authentication" element={<Authentication/>} />
      </Route>
    </Routes>
  );
}

export default App;
