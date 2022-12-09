import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import imagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
// Custom components
const Contenedor = styled.div`
  width: 95%;
  max-width: 90rem;
  margin: 0 auto 5rem;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns:repeat(2, 1fr);
  }

  `
  const Imagen = styled.img`
    width: 80%;
    max-width: 400px;
    margin: 10rem auto 0 auto;
    display:block;
  `



const Titulo = styled.h1`
  font-family: 'Lato', sans-serif;
  color: white;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 8rem;
  margin-bottom: 5rem;
  font-size: 3.4rem;
  &::after{
    content: "";
    width: 10rem;
    height: .6rem;
    background-color: #66a2fe;
    border-radius: 2rem;
    display: block;
    margin: 1rem  auto 0;
  }
  span{
      color: #9497ff;
      font-weight: 900;
  }
`
// Component
function App() {
  const [activeSpinner, setActiveSpinner] = useState(false);
  const [monedas, setMonedas ] = useState({});
  const [cotizacion, setCotizacion] = useState({});

  useEffect(()=>{

    if(Object.keys(monedas).length){
      setActiveSpinner(true);
      setCotizacion({});
      const { moneda, cripto} = monedas;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      async function consultarAPI(){
        const response = await fetch(url);
        const data = await response.json();
        setCotizacion(data.DISPLAY[cripto][moneda]);
        setActiveSpinner(false);
      }

      consultarAPI();
    }
  },[monedas]);


  return (
    <Contenedor>
      <Imagen 
        src={imagenCripto}
        alt="Imagen criptomonedas"
      />
      <div>
        <Titulo>Cotiza <span>Criptomonedas</span> al instante </Titulo>
        <Formulario 
          setMonedas={setMonedas}
        />
        {
          activeSpinner && <Spinner/>
        }
        {
          // evalua si el state cotizacion contiene propiedades o no
          Object.keys(cotizacion).length > 0 && ( 
            <Resultado cotizacion={cotizacion}/>
          ) 

        }

      </div>

    </Contenedor>
  )
}

export default App
