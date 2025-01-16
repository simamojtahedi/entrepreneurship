import './App.css';
import Routes from './Routes/Routes';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'animate.css';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="bottom-right" rtl={true} />
    </>
  );
}

export default App;
