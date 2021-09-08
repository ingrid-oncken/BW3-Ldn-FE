import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import LnNavbar from "./components/Navbar/LnNavbar"
import WelcomeForm from "./components/Welcome/WelcomeForm"

function App() {
  return (
    <div className="App">
      <LnNavbar />
      <WelcomeForm />
    </div>
  )
}

export default App
