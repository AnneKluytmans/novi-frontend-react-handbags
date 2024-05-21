function Tile( { title, image, altImage, children }) {
    return (
        <section>
            <img src={image} alt={altImage}/>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;