import { ChangeEvent, memo, ReactElement } from 'react';
import { CartItemType, CartLineItemProps } from '../types';
import { numberFormat } from '../utils';

const CartLineItem = ({
    item,
    dispatch,
    REDUCER_ACTIONS,
}: CartLineItemProps) => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
        .href;

    const lineTotal: number = item.qty * item.price;
    const highestQuantity: number = 20 > item.qty ? 20 : item.qty;
    const optionValues: number[] = [...Array(highestQuantity).keys()].map(
        (i) => i + 1
    );
    const options: ReactElement[] = optionValues.map((val) => {
        return (
            <option key={`opt${val}`} value={val}>
                {val}
            </option>
        );
    });

    const onChangeQty = (ev: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(ev.target.value) },
        });
    };
    const onRemoveFromCart = () =>
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item,
        });

    const content = (
        <li className='cart__item'>
            <img src={img} alt={item.name} className='cart__img' />
            <div className='' aria-label='Item Name'>
                {item.name}
            </div>
            <div className='' aria-label='Price Per Item'>
                {numberFormat(item.price)}
            </div>
            <label htmlFor='itemQty' className='offscreen'>
                Item Quantity
            </label>
            <select
                name='itemQty'
                id='itemQty'
                className='cart__select'
                value={item.qty}
                aria-label='Item Quantity'
                onChange={onChangeQty}
            >
                {options}
            </select>
            <div
                className='cart__item-subtotal'
                aria-label='Line Item Subtotal'
            >
                {numberFormat(lineTotal)}
            </div>
            <button
                className='cart__button'
                aria-label='Remove Item From Cart'
                title='Remove Item From Cart'
                onClick={onRemoveFromCart}
            >
                {' '}
                ❌
            </button>
        </li>
    );

    return content;
};

function areItemsEqual(
    { item: prevItem }: CartLineItemProps,
    { item: nextItem }: CartLineItemProps
) {
    return Object.keys(prevItem).every((key) => {
        return (
            prevItem[key as keyof CartItemType] ===
            nextItem[key as keyof CartItemType]
        );
    });
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(
    CartLineItem,
    areItemsEqual
);

export default MemoizedCartLineItem;
