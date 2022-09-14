import { Routes , Route } from "react-router-dom";
import Home from "./Routes/home/home.components.jsx";
import Navigation from "./Routes/navigation/navigation.component.jsx";
import Authentication from "./Routes/authentication/authentication.components.jsx";

function App() {

  const Shop =()=>{
    return(
      <h1>Hello im the shop page</h1>
    )
  }

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
