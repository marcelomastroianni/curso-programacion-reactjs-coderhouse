
import React from 'react'
import ItemCard from './ItemCard';


export default function ItemList(props) {

    return (
        <div className="container">
            <div className="row">
                {
                    
                props.products.map((product) => {

                    return <ItemCard key={product.id} product={product}></ItemCard>

                })
                }
            </div>
        </div>
    )
}
    
