import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const {count,setCount} =useState(0);
  
  return <Component {...pageProps} />
}

export default MyApp
