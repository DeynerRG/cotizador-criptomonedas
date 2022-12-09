import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import  { monedas }  from '../data/moneda'
import Mensaje from './Mensaje'
const InputSubmit = styled.input`
    margin-bottom: 2rem;
    background-color: #9497ff; 
    border: none;
    color: #fff;
    width: 100%;
    padding: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2rem;
    border-radius: 1rem;
    transition: transform .3s ease-in;
    cursor: pointer;
    &:hover{
        background-color: #7277fd;
    }
    &:active{
        transform: scale(.9);
    }
`

function Formulario({setMonedas}) {
  // Utilizando Hooks de la libreria de react
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  // Utilizando hooks personalizado
  const [ moneda, SelectMoneda ] = useSelectMonedas("Elige tu moneda", monedas);
  const [ cripto, SelectCriptomoneda ] = useSelectMonedas("Elige la Criptomoneda", criptos);



  useEffect( ()=>{
   
    async function consultarAPI(){
        const urlAPI = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
        const response = await fetch(urlAPI);
        const data = await response.json();
        const arrayCriptos = data.Data.map((cripto)=>{
            const infoCripto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return infoCripto;
        });
        setCriptos(arrayCriptos)
        
    }
    consultarAPI();
  },[]);




  function handleSubmit(e){
    e.preventDefault();
    // valida los datos de entrada de la app
    if(moneda === "" || cripto === ""){
        setError(true);
        setTimeout(()=>{
            setError(false);
        },3000);
        return ;
    }

    // en caso de que no exista error de validacion
    setMonedas({moneda, cripto});
    
  }


  return (
    <form 
        action="#"
        onSubmit={handleSubmit}
    >
        <SelectMoneda />
        <SelectCriptomoneda/>
        <InputSubmit 
            type="submit" 
            value="Cotizar" 
        />
        {
            error &&  ( <Mensaje mensaje={"todos los campos son obligatorios"}/>) 
        }
    </form>
  )
}

export default Formulario