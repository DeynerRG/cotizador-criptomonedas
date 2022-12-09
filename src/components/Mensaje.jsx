import React from 'react'
import styled from '@emotion/styled'

const Alerta = styled.div`
    padding: 1rem;
    margin-bottom: 2rem;
    color: #fff;
    background-color:  #ff1e35;
    text-align: center;
    border-radius: .5rem;
    font-weight: 700;
    font-size: 1.6rem;
    text-transform: capitalize;
`



function Mensaje({mensaje}) {
  return (
    <Alerta>{mensaje}</Alerta>
  )
}

export default Mensaje