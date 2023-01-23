
import React from 'react'
import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';


export default function ItemList(props) {

    return (
        <div class="container">
            <div class="row">
                {
                    
                props.products.map((product) => {

                    return <ItemCard key={product.id} product={product}></ItemCard>

                })
                }
            </div>
        </div>
    )
}
    
