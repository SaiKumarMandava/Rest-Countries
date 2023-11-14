import logo from './logo.svg';
import './App.css';
import Countries from './components/countries'
import Nav from './components/nav'

function App() {
  return (
    <div className=" bg-gray-200 ">
      <Nav/>
      {/* <Currency/> */}
    <Countries/>
    </div>
  );
}

export default App;
