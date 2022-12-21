import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Landingpage from './components/Landingpage';
import Loginregistration from './components/login/Loginregistration';

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Landingpage/>
      <Loginregistration/>
    </div>
  );
}

export default App;
