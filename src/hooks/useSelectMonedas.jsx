import React from 'react'
import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 2.4rem;
    font-weight: 700;
    margin: 1.5rem 0;
`
const Select = styled.select`
    width: 100%;
    border-radius: 1rem;
    padding: 1.4rem;
    border: none;
    font-size: 1.8rem;
    background-color: #fff;
    margin-bottom: 2rem;
    outline: none;
    &:focus{
        outline: .3rem solid #7277fd;
    }
`


function useSelectMonedas(textoLabel, opciones) {
    
    const [state, setState] = useState("");

    const SelectMonedas = ()=>(
        <>
            <Label htmlFor="">{textoLabel}</Label>
            <Select 
                value={state} 
                name="#" 
                id="#"
                onChange={(e)=> setState(e.target.value)}
            >
                <option value="" disabled>Seleccionar</option>
                {
                    opciones.map( opcion => (
                        <option 
                            key={opcion.id}
                            value={opcion.id}
                        >{opcion.nombre}</option>
                    ))

                }
            </Select>
        </>
    )

    return [state, SelectMonedas];
}

export default useSelectMonedas