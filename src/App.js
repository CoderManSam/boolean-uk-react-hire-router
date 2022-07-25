import { useState } from "react"
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./styles.css"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  // useEffect(() => {
    
  //   fetch(`https://randomuser.me/api/?results=50`)
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data.results));

  // }, [hiredPeople]); 

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/dashboard" element={<Dashboard hiredPeople={hiredPeople}/>}/>
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
