import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main>
      <ToastContainer />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
    
  );
};
export default App;
