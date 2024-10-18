import { ViewCartProps } from '../types';

const Nav = ({ viewCart, setViewCart }: ViewCartProps) => {
    const button = viewCart ? (
        <button onClick={() => setViewCart(false)}>Products</button>
    ) : (
        <button onClick={() => setViewCart(true)}>View Cart</button>
    );
    const content = <nav className='nav'>{button}</nav>;
    return content;
};

export default Nav;
