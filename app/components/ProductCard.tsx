import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

styles.card

const ProductCard = () => {
  return (
    <div className={`styles.card p-3 my-5 bg-sky-400 text-white text-2xl font-bold hover:bg-sky-500`}>
        <AddToCart/>
    </div>
  )
}

export default ProductCard