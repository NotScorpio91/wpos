import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div>
        <section className="bg-gray-900 h-screen">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 ">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-white">Something's missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to='/dashboard' ><button className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4">Back to Homepage</button></Link>
        </div>   
    </div>
</section>
    </div>
  )
}

export default Pnf