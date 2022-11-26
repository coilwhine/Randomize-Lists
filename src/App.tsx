import { useDispatch } from 'react-redux';
import './App.scss';
import { setAllLists } from './app/listsSlice';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {

  const dispatch = useDispatch();

  const corentLists: any = window.localStorage.getItem('lists')
  dispatch(setAllLists(JSON.parse(corentLists)))

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
