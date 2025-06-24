import {  useDispatch } from "react-redux";
import * as S from "./styles";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";


interface CartProps {
  showCart: boolean;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

function handleAddProductToCart(product: any) {
  dispatch(addProduct(product));
}

function handleRemoveProductFromCart(product: any) {
  dispatch(removeProduct(product));
}

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <span>{product.title || `Produto #${product.id}`}</span>
            <button onClick={() => handleRemoveProductFromCart(product)}>
              Remover
            </button>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartTotal>Total: R$ {total.toFixed(2)}</S.CartTotal>
    </S.Container>
  );
};