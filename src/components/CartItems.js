import { useSelector } from 'react-redux';
import Product from './Product';

const CartItems = () => {
    const cart = useSelector(state => state);
    console.log(cart);

    // map through store.items for all items in cart
    const items = cart.items.map(function (item) {
        return (
            <Product
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.stars}
                price={item.price}
                img={item.image}
            />
        )
    });

    return (
        <div className='checkout__items'>
            {items}
        </div>
    )
};

export default CartItems;