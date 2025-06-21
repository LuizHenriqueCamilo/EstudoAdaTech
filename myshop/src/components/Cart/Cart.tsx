import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import { RootState } from "../../redux/store/store"; 
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";


interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cartReducer.products);
  const total = products.reduce((acc, product) => acc + product.price, 0);

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
        {products.map((product) => (
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