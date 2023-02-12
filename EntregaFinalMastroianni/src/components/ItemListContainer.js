import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



export default function ItemListContainer(props) {


  //Get category id from url
  const {categoryId} = useParams();



  const [products, setProducts] = useState([]);


  useEffect(() => {
    if(categoryId){
    
      fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
      .then(res=>res.json())
      .then(json=>{
        setProducts(json)
      })


    }else{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>{
        setProducts(json)
      })
    }
   
  }, [categoryId]);






  return (
    <div>
        <h1>{props.greeting}</h1>
        <ItemList products={products}></ItemList>

    
    </div>
  )
}
