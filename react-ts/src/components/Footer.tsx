import UseCart from '../hooks/UseCart';
import { ViewCartPropType } from '../types';

const Footer = ({ viewCart }: ViewCartPropType) => {
    const { totalItems, totalPrice } = UseCart();
    const year: number = new Date().getFullYear();
    const pageContent = viewCart ? (
        <p>Shopping Cart &copy; {year}</p>
    ) : (
        <>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Shopping Cart &copy; {year}</p>
        </>
    );
    const content = <footer className='footer'>{pageContent}</footer>;
    return content;
};

export default Footer;
