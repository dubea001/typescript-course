import { useContext } from 'react';
import ProductContext from '../context/ProductProvider';
import { UseProductContextType } from '../types';

const UseProducts = (): UseProductContextType => {
    return useContext(ProductContext);
};

export default UseProducts;
