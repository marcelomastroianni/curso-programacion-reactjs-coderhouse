import React, { useState } from 'react';

const ItemCount = ({stock ,initial_count, onAdd , onRemove}) => {


    const [count, setCount] = useState(0);

    React.useEffect(() => {
        setCount(initial_count)
    }, [initial_count])



    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleReset = () => {
        setCount(0);
        onRemove();
    }


    return (
        <div className="itemCount">
            
            <button style={{float:"left", margin:"5px"}} onClick={handleReset}>Resetear</button>    
            <button style={{float:"left", margin:"5px"}} onClick={handleSubstract}>-</button>
            <p style={{float:"left", margin:"5px"}}>{count}</p>
            <button style={{float:"left", margin:"5px"}} onClick={handleAdd}>+</button>
            <button style={{float:"left", margin:"5px"}} onClick={() => onAdd(count)}>Agregar al carrito</button>    
        </div>
    );
}

export default ItemCount;