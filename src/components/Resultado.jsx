import React from 'react'
import styled from '@emotion/styled'

const ResultadoContenedor = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 992px){
        flex-direction: row;
        align-items: center;
    }
    
    border-radius: 1rem;
    padding: 2rem 1rem;
    background: hsla(233, 100%, 90%, 1);
    background: linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#CAD0FF", endColorstr="#E3E3E3", GradientType=1 );

    box-shadow: 0px 11px 36px -20px rgba(0,0,0,0.42);
    -webkit-box-shadow: 0px 11px 36px -20px rgba(0,0,0,0.42);
    -moz-box-shadow: 0px 11px 36px -20px rgba(0,0,0,0.42);

`
const Texto = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: capitalize;
    color:#121a1f;
    @media (min-width: 992px){
        text-align: unset;
    }
    span{
        font-weight: normal;
    }
`
const Precio = styled.p`
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    color: #121a1f;
    margin: 0;
    @media (min-width: 992px){
        text-align: unset;
    }
    span{
        
    }
`

const Imagen = styled.img`
    width: 10rem;
    height: 100%;
    display: block;
    margin: 0 auto;
`


function Resultado({cotizacion}) {
    const {PRICE, HIGHDAY,LOWDAY, CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE} = cotizacion;

  return (
    <ResultadoContenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen del cripto" 
        />
        <div>
            <Precio>Precio: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>variacion de precio durante las ultimas 24 horas:  <span>{CHANGEPCT24HOUR} %</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>


    </ResultadoContenedor>
  )
}

export default Resultado