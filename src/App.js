import './App.css';
import { Persons } from './components/Persons';
import { useState } from 'react';


function App() {

  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Oscar Javier",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 2,
      name: "Nicolas Bolaños",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 3,
      name: "Sergio Mendez",
      role: "UI/UX Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 4,
      name: "Vivina Vega",
      role: "data base",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
  ]);

  return (
<div className='App'>
    <div className='container'>
      <Persons  persons={persons} setPersons={setPersons}/>
    </div>
</div>
  );
}

export default App;
