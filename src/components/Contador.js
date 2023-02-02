import { useState } from 'react';
import Button from 'react-bootstrap/Button' 


function Contador(){

    const [contador, setContador] = useState(0); 

    const sumar = () =>{
        let contador1 = contador;
        contador1 ++;
        
        setContador(contador1);
    }
    return(
        <>
            <p>Contador: {contador} </p>
            <p>
                <Button variant="primary" >-</Button>{' '}
                <Button variant="danger" onClick = {sumar}>+</Button>{' '}
            </p>
            
            

            

        </>
    );
}

export default Contador;