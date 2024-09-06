import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import middleContent from './componets/middleContent';
import Footer from './componets/common/Footer';
import Icons from './componets/common/Icons';
function App() {
  return (
    <>
    <Navbar/>
    <middleContent/>
    <Icons/>
    <Footer/>
    </>
  );
}
export default App;
