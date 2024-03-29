import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./products.css"
const Products = ({carddata, setcarddata}) => {
   const [prodata, setprodata] = useState([])
    useEffect(() => {
     dataopen()
    }, [])
    
    const dataopen =  async()=>{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setprodata(data)
    } 
     
    const addfunc=(id)=>{
        const realdata = prodata.find((elem,index)=>{
            return id === index
          })
      setcarddata([...carddata,realdata])
    }

  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:"center"}}>Products</h1>
    <div className='productcontainer'>
        {prodata.map((ele,id)=>{
       return <div className='cards'>
                <img src={ele.image}></img>
                <h3>{ele.category}</h3>
                <h2>Price:{ele.price}</h2>
                <div className='buttondiv'>
                    <button onClick={()=>addfunc(id)}>Add To Cart</button>
                </div>
            </div>
        })}
    </div>
    </>
  )
}

export default Products