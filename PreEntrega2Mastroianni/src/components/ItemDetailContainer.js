import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';



export default function ItemDetailContainer(props) {


  //Get category id from url
  const {id} = useParams();



  const [product, setProduct] = useState({});


  useEffect(() => {
    if(id){
    
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>{
        setProduct(json)
      })
    }
   
  }, [id]);


  return (
    <div>
        

        <ItemDetail product={product}></ItemDetail>

    
    </div>
  )
}
