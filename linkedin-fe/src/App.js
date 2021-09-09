import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import LnNavbar from "./components/Navbar/LnNavbar"
import WelcomeForm from "./components/Welcome/WelcomeForm"
import LnFooter from "./components/Footer/LnFooter"

function App() {
  return (
    <div className="App">
      <LnNavbar />
      <WelcomeForm />
      <LnFooter />
    </div>
  )
}

export default App
