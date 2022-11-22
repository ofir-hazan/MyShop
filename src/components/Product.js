import './Product.css'

function Product(props) { // title, price, image
    return (
        <div className='allCard'>
            <div className='texts'>
                <p className='title'>{props.title}</p>
                <p className='price'> price: {props.price}</p>
            </div>
            <img src={props.image} className='img'></img>
        </div>
    );
}

export default Product;