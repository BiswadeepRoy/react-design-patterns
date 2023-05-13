export const RegularList = ({
    items,
    resourceType,
    itemComponent: ItemComponent
}) => {

    return (<>
        {items.map((item, i) => {
            const itemComponentProps = {
                [resourceType]: item
            };
            return <ItemComponent key={i} {...itemComponentProps} />
        })}
    </>);
}