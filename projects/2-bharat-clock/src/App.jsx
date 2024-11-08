import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from "./components/CurrentTime";
import './app.css';
function App() {
  return <div>
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>
    </center>
  </div>  
}

export default App
