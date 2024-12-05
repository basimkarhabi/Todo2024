import React from 'react'
import styles from './footer.css'


export default function Footer({completedcounter,totalTodos}) {
  return (
      <div className = "footerDiv">
          <span className = "itemfooter"> Completde Todos :  {completedcounter}</span>
            <span  className = "itemfooter"> Total Todos :  { totalTodos}</span>

          
      </div>
  )
}
