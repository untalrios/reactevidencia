import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*Creacion de constantes para almacenar valores*/
function Conversor() {

  const [textoAVoz, setTextoAVoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')

//Actualiza el estado con el valor del input
  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value)
  }

  //Acceso a motor del navegador y reproduccion de texto en voz alta
  function convertirTextoAVoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAVoz)
    synth.speak(utterThis)
  }
  //Permite guardar la trascripcion de voz a texto
  function resultado(event) {
    setVozATexto(event.results[0][0].transcript)
  }

  //Crea una instancia para reconocer la voz
  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado

  }
  /*Si se cumple el inicio de sesion se muestra*/

  return (
    <>
    <h1>Bienvenido</h1>
      <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
      <button onClick={convertirTextoAVoz}>Convertir</button>

      <h3>Conversor de voz texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      {vozATexto}
    </>

  );

}

export default Conversor