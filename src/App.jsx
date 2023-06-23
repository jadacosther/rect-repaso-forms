import { useState } from 'react'
import ListaPerson from './components/ListaPerson/ListaPerson';
import './App.css'

function App() {

  const[persona, setPersona] = useState([])
  

  function handleFormSubmit(event){
    event.preventDefault()
    const form = event.currentTarget;
    const person = {name:form.name.value, 
                    lastname:form.lastname.value, 
                    phone:form.phone.value}
   
    setPersona([...persona, person]) 
    form.reset()
  }

  return (

    <>
      <h3>Demo de creación de un fromulario</h3>
     <form onSubmit={handleFormSubmit}>
      <p>
        <label>
          <span>Nombre</span>
          <input type="text" name='name' ></input>
        </label> 
      </p>
      <p>
      <label>
        <span>Apellido</span>
        <input type="text" name='lastname' ></input>
      </label> 
      </p>
      <label>
        <span>Telefono</span>
        <input type="text" name='phone' ></input>
      </label> 
      <p>
      <button type='submit'>Guardar</button>
      </p>
     </form>
     <ListaPerson data={persona}></ListaPerson>
    </>
  )
}

export default App  
