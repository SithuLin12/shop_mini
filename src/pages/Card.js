import React from 'react'
import Master from '../layouts/Master'

function Card({card,setCard}) {
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
    </Master>
  )
}

export default Card