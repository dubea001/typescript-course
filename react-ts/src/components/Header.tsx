import UseCart from '../hooks/UseCart';
import { ViewCartProps } from '../types';
import Nav from './Nav';

const Header = ({ viewCart, setViewCart }: ViewCartProps) => {
    const { totalItems, totalPrice } = UseCart();
    const content = (
        <header className='header'>
            <div className='header__title-bar'>
                <h1>Acme Co</h1>
                <div className='header__price-box'>
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    );
    return content;
};

export default Header;
