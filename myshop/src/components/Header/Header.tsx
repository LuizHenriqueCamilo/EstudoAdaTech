import { useState } from "react";
import { Cart } from "../Cart/Cart";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { login, logout } from "../../redux/UserReducer/user-slicer";

export const Header: React.FC = () => {
 const user = useSelector((state: RootState) => state.userReducer.user);
  const products = useSelector((state: RootState) => state.cartReducer.products);
  const isLogged = user !== null;
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  function handleUserAuth() {
    if (!isLogged) {
      dispatch(
        login({
          name: "Luiz Henrique",
          email: "LuizHenrique@hotmail.com",
        })
      );
    } else {
      dispatch(logout(null));
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop</S.HeaderTitle>
        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart((prev) => !prev)}>
            Carrinho <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={products} />
    </S.StyledHeader>
  );
};
