import React, { useEffect, useState } from 'react'
import Master from '../layouts/Master'

function Card({card,setCard}) {
  // hook\

  // const [total,setTotal] = useState(0)
  var total = 0

  useEffect(()=>{
    card.map((d)=> {
      total += d.price * d.qty
    })
  })

  // logic code
  const renderReduce = (product) => {
    setCard(prevState => prevState.map((d) => {
      if(d.id === product.id){
        var updateQty = d.qty - 1
        return {...d,qty : updateQty}
      }else{
        return d
      }
    }))
    // setTotal(product.price *  product.qty)
  }

  const renderAdd = (product) => {
    setCard(prevState => prevState.map((d) => {
      if(d.id === product.id){
        var updateQty = d.qty + 1
        return {...d,qty : updateQty}
      }else{
        return d
      }
    }))
  }

  return (
    <Master card={card} setCard={setCard}>
        <div>
          <div className='container'>
            <h3 className='text-white'>All Card</h3>
          <table class="table table-striped bg-white">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">qty</th>
      <th scope='col'>Total</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
      card.map((d)=>{
        return (
          <tr key={d.id}>
            <th scope="row">{d.id}</th>
            <td>{d.title}</td>
            <td>{d.price}</td>
            <td>{d.qty}</td>
            <td>{d.price * d.qty}</td>
            <td>
              <button onClick={() => renderReduce(d)} className='btn btn-sm btn-danger px-3'>-</button>
              <button onClick={() => renderAdd(d)} className='btn btn-sm btn-danger px-3'>+</button>
            </td>
          </tr>
        )
      })
    }
    
  </tbody>
</table>

      <div className='card'>
        <div className='card-body float-end text-white'>
          <h4 className='text-white'>Total</h4>
        </div>
      </div>
          </div>
        </div>
    </Master>
  )
}

export default Card