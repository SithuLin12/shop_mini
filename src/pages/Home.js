import React, { useState } from "react";
import Master from "../layouts/Master";
import Loader from "../Components/Loader";
import { useEffect } from "react";
import axios from "axios";

function Home({card,setCard}) {
  // hook
  const [loader, setLoader] = useState(true);
  const [product,setProduct] = useState([]);

  // hokk 
  const render =(product) => {
    var findProduct = card.find((d) => {
      return d.id === product.id
    })

    if(findProduct){
      findProduct.qty += 1
    }else{
      product.qty = 1
      setCard([...card,product])
    }
    // console.log(findProduct);
    
  }

  // api call
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/').then(res => {
      setProduct(res.data);
      setLoader(false)
    })
  },[])

  return (
    <Master card={card} setCard={setCard}>
      {/* Content */}

      {loader ? (
        <Loader />
      ) : (
        <div className="container-fluid pr-5 pl-5 mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
               {
                product.map((d) => {
                  return( 
                    (
                      <div className="col-3" >
                      <div className="card">
                        <img
                        style={{height: '200px'}}
                          className="card-image-top rounded"
                          src={d.image}
                          alt=""
                        />
                        <div className="card-body bg-white">
                          <h4>{d.title}</h4>
                          <div>
                            Price:
                            <span className="badge badge-warning">{d.price}Ks</span>
                            <span onClick={() => render(d)} className="btn btn-danger float-right">
                              <i className="fas fa-shopping-cart " />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  )
                })
               }
              </div>
            </div>
          </div>
        </div>
      )}
    </Master>
  );
}

export default Home;
