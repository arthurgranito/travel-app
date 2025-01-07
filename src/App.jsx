import NavBar from "./components/Nav";
import MyTravels from "./components/MyTravels";
import Inicio from "./components/Inicio";
import { Routes, Route } from "react-router";

function App() {
  return(
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/mytravels" element={<MyTravels />}/>
      </Routes>
    </>
  )
}

export default App;