const Home = ({objectId}) => {
    const mappedImages = objectId.map((image, index) => {
        return(
            <>
            <article>
                <img src={image.primaryImageSmall} alt="Image of artifact"/>
                <h3>{image.objectName}</h3>
            </article>
            </>
        )
    })

    return(
    <>
    <h2>Welcome to the Museum</h2>
    <h3>Museum Items</h3> 

    <section id="image_section">
        {mappedImages}
    </section>
    </>
    )
}

export default Home;
