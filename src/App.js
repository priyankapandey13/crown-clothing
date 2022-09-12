import { Routes , Route, Outlet } from "react-router-dom";
import Home from "./Routes/home/home.components.jsx";
import Navigation from "./Routes/navigation/navigation.component.jsx";
import Authentication from "./Routes/authentication/authentication.components.jsx";

function App() {
  const Category = [
    {
      id:1,
      title: 'Hats',
      imageurl: 'https://i.pinimg.com/474x/75/49/24/754924dc2ca826889efafd9a84c1cded.jpg',
    },
    {
      id:2,
      title: 'Jackets',
      imageurl:'https://i.pinimg.com/736x/ce/70/68/ce70681e59056bd6dcb81c5d64c5d726.jpg',
    },
    {
      id:3,
      title: 'Sneakers',
      imageurl:'https://5.imimg.com/data5/SELLER/Default/2020/8/AJ/LC/DM/64760880/skechers-goga-max-grey-casual-shoes-500x500.jpg',
    },
    {
      id:4,
      title: 'Womens',
      imageurl:'https://www.toptrendsguide.com/wp-content/uploads/2020/02/Online-Shopping-Websites.jpg',
    },
    {
      id:5,
      title: 'Mens',
      imageurl:'https://imgmedia.lbb.in/media/2020/05/5eb24d8c97526b6f37acdda8_1588743564516.jpg',
    }
  ]

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
