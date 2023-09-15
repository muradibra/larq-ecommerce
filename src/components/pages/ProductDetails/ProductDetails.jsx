import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../../../config';
import axios from 'axios'

function ProductDetails() {
  const [state, setState] = useState([])
  const { slug } = useParams()


  useEffect(() => {
    axios.get(`${apiUrl}/products?slug=${slug}`)
      .then(resp => setState(resp.data))
  }, [])

  // console.log(state)

  return (
    <div style={{ margin: "300px 0" }}>
      {
        state.map(item => (
          <h1 key={item.id}>{item.title}</h1>
        ))
      }
    </div>
  )
}

export default ProductDetails