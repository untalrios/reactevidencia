import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'

/*Creacion de constantes para almacenar valores*/
function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  //Actualiza el estado con el valor del campo de usuario
  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  //Actualiza el estado con el valor del campo de contraseña
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  //Se verifica que las credenciales sean "admin" / "admin"
  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login/?usuario=' + usuario + '&clave'+ clave)
    if(peticion.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o clave incorrectos')
    if (usuario == 'admin' && clave == 'admin') {
      alert('Ingresaste')
      setLogueado(true)
    } else {
      alert('Usuario o clave incorrectos')
    }
}
  }

//Si se cumple el inicio de sesion se muestra el componente conversor
  if (logueado){
    return <Conversor/>

  }

  return (
    //Nos muestra los campos para usuario y contraseña
    <>
    <h1>Inicio de sesion</h1>
        <input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
        <input placeholder='Clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
        <button onClick={ingresar}>Ingresar</button>
    </>

  )

  }

export default App