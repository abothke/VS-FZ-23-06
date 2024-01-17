import './productcard.css'
const ProductCard = (product) => {
    console.log;
    return ( 
        <>
        <div>
        <img src={product.picture} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.price}</p>
        <button>BUY NOW</button>
        </div>
        </>
     );
}
 
export default ProductCard;