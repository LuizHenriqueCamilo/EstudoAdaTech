import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../data/products";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const products = useSelector((state: RootState) => state.cartReducer.products);
  const dispatch = useDispatch();

  const isProductOnCart = products.some((item) => item.id === product.id);

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>R$ {product.price.toFixed(2)}</S.Price>
      </S.ReviewPriceContainer>
      <S.AssCartButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho <FiShoppingCart />
          </S.AddCartButton>
        )}
      </S.AssCartButtonWrapper>
    </S.Card>
  );
};