export const NumberedList = ({
    items,
    resourceType,
    itemComponent: ItemComponent
}) => {

    return (<>
        {items.map((item, i) => {
            const itemComponentProps = {
                [resourceType]: item
            };
            return <>{i + 1} <ItemComponent key={i} {...itemComponentProps} /></>
        })}
    </>);
}