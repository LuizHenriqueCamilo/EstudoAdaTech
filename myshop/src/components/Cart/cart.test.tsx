import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart"
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

describe("cart > unit test", () => {
    it("should render an empty cart correctly", () =>{
        render(
            <Provider store={store}>
                <Cart showCart={true} cart={[]} />
            </Provider>
        );
    });
});

//! ou
//Mock: tornar test fake "nesse caso a bibloteca react fake" usado em test unitario.
jest.mock("react-redux")


describe("cart > unit test", () => {
    it("should render an empty cart correctly", () =>{
        render(<Cart showCart={true} cart={[]} />);

        const titleElement = screen.getByRole ("heading", { level: 1});

        expect(titleElement).toHaveTextContent("Carrinho");
    });
});

//Dica Extra: Além disso, se você for testar componentes que usam useSelector, useDispatch ou Provider, o ideal é mockar o que você realmente usa no teste:

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));


