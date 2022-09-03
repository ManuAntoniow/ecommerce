import Item from "../Item/Item"

function ItemList({itemList}) {
    return (
        <>
            {itemList.map((product) => {
                return(
                    <Item
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        theme={product.theme}
                        price={product.price}
                        image={product.image}
                        stock={product.stock}
                    />
                )
            })}
        </>
    )
    }

export default ItemList