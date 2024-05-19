function Product({label, image, altImage, name, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={altImage}/>
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;