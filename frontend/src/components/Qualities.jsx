import React from 'react'
import {data} from '../restApi.json'
const Qualities = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              data[0].ourQualities.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={elment.image} alt={element.title} />
                      
                     
                  </div>
                )
              })
            }
          </div>
        </section>
    </>
  )
}

export default Qualities
