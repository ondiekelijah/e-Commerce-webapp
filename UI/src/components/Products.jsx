import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "../components/Product"

const Container = styled.div`
padding: 20px;
/* Display the items along X axis */
display: flex;
/* move the 8 products into uniform columns */
flex-wrap: wrap;
/* Add spacing between the items */
justify-content: space-between;
`

const Products = () => {
  return (
    <Container>

        {popularProducts.map(item=>(
            <Product item ={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products