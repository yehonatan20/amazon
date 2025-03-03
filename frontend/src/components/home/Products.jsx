import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'


const Product = ({products}) => {
  return (
    <>
        <Row>
            {products.map( product => (
                <Col key={product.token} sm={6} md={4} lg={3} className='mb=3'>
                    <Product></Product>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Product

Product.propTypes = {
    products: PropTypes.array
}