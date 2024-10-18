import { createContext, ReactElement, useState } from 'react';
import { ChildrenType, ProductType, UseProductContextType } from '../types';

// const initialState: ProductType[] = [];

const initialState: ProductType[] = [
    {
        sku: 'item001',
        name: 'Widget',
        price: 9.99,
    },
    {
        sku: 'item002',
        name: 'Premium Widget',
        price: 19.99,
    },
    {
        sku: 'item003',
        name: 'Deluxe Widget',
        price: 29.99,
    },
];

const initialContextState: UseProductContextType = { products: [] };
const ProductContext =
    createContext<UseProductContextType>(initialContextState);

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initialState);

    // useEffect(() => {
    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products')
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .catch((e) => {
    //                 if (e instanceof Error) console.log(e.message);
    //             });
    //         return data;
    //     };
    //     fetchProducts().then((products) => setProducts(products));
    // }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
