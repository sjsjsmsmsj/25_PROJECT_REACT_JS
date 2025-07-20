import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/random-color/index.jsx';
import StarRating from './components/star-rating/index.jsx';
import ImageSlider from './components/image-slider/index.jsx';
import TreeView from './components/tree-view/index.jsx';
import menus from './components/tree-view/data.js'; 
import QRCodeGenerator from './components/qr-code-generator/index.jsx';
import LightDarkMode from './components/light-dark-mode/index.jsx';



function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      
      {/* <RandomColor/> */}

      {/* <StarRating
        numberOfStars={5}
        color="red"
        size={48}
      /> */}

      {/* {
        <ImageSlider
          url={'https://unsplash.com/photos/yC-Yzbqy7PY'}
          limit={"10"}
          page={'1'}
        />
      } */}

      {/* {
        <TreeView
          menus={menus}
        />
      } */}

      {/* {
        <QRCodeGenerator/>
      } */}

      {/* {
        <LightDarkMode/>
      } */}

      {
        <LightDarkMode/>
      }
    </div>
  );
}

export default App;
