
const ProductCard=({products})=>{
return(
<div>
    <header>
        <h4>
        {products.ProductName}
        </h4>
    </header>
    <p>The Price of this product is {products.price}</p>
    <p>{products.description}</p>
</div>
)
}

export default ProductCard