import { memo, ReactElement } from 'react';
import { ProductType, ProductTypesProps } from '../types';
import { numberFormat } from '../utils';

const Product = ({
    product,
    dispatch,
    REDUCER_ACTIONS,
    inCart,
}: ProductTypesProps): ReactElement => {
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
        .href;

    const onAddToCart = () =>
        dispatch({
            type: REDUCER_ACTIONS.ADD,
            payload: {
                ...Product,
                qty: 1,
                name: product.name,
                sku: product.sku,
                price: product.price,
            },
        });

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null;

    const content = (
        <article className='product'>
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className='product__img' />
            <p>
                {numberFormat(product.price)} {itemInCart}
            </p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>
    );

    return content;
};

function areProductsEqual(
    { product: prevProduct, inCart: prevInCart }: ProductTypesProps,
    { product: nextProduct, inCart: nextInCart }: ProductTypesProps
) {
    return (
        Object.keys(prevProduct).every((key) => {
            return (
                prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
            );
        }) && prevInCart === nextInCart
    );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
