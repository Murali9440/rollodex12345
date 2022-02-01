import Card from '../Card/Card.component'
import './Card-List.styles.css'
import { Col } from 'react-bootstrap'

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <div className='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        // < Col xs = {12} sm = {12} md={6} lg = {3} xlg = {2}> 
                          <Card key={index} monster={monster} />
                        // </Col>
                    )
                )
            }
       </div>
   )
}

export default CardList