import React from 'react'
import OfferCard from './OfferCard'

export default function Offer() {
  return (
    <section className='container mx-auto my-8'>
        <h1 className='text-4xl font-bold text-center my-4 text-violet-500'>Your Offers</h1>
        <div>
            <OfferCard/>
        </div>
    </section>
  )
}
