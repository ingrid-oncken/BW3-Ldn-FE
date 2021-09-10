import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import LnNavbar from "./components/Navbar/LnNavbar"
import WelcomeForm from "./components/Welcome/WelcomeForm"
import LnFooter from "./components/Footer/LnFooter"
import LnJoinNow from "./components/LnJoinNow"
import LnSignIn from "./components/LnSignIn"

function App() {
  return (
    <div className="App">
      {/* <LnNavbar />
      <WelcomeForm />
      <LnFooter /> */}
      {/* <LnJoinNow /> */}
      <LnSignIn />
    </div>
  )
}
export default App
