export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (<>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Description</p>
        <p>{description}</p>
        <p>Average Rating: </p>
        <p>{rating}</p>
    </>)
}