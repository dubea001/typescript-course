import React, { ReactElement } from 'react';
import { REDUCER_ACTION_TYPE } from '../context/CartProvider';

export type ChildrenType = {
    children?: ReactElement | ReactElement[];
};
export type ProductType = {
    sku: string;
    name: string;
    price: number;
};
export type UseProductContextType = { products: ProductType[] };

export interface CartItemType extends ProductType {
    qty: number;
}

export type CartStateType = {
    cart: CartItemType[];
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type: string;
    payload?: CartItemType;
};

export type ViewCartPropType = {
    viewCart: boolean
}
export interface ViewCartProps extends ViewCartPropType {
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

export type ProductTypesProps = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

export type CartLineItemProps = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType,
}