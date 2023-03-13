import { render, fireEvent } from "@testing-library/react";
import Home from "../../client/pages/index";
import Counter from "../components/Counter/counter";

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(<Counter />);

  const increaseQuantity = getByText("+");

  setTimeout(async () => {
    const currentQuantity = getByTitle("Current quantity");
    expect(currentQuantity).toHaveTextContent("1");

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent("2");
    const decreaseQuantity = getByText("-");

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent("1");
  }, 4000);
});

test("should be able to add items to the basket", async () => {
  setTimeout(async () => {
    const { getByText, getByTitle } = render(<Home />);

    const increaseQuantity = getByText("+");
    const currentQuantity = getByTitle("Current quantity");

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    const addToBasketElement = getByText("Add to cart");
    fireEvent.click(addToBasketElement);

    const basketItems = getByTitle("Basket items");
    expect(basketItems).toHaveTextContent("4");
  }, 4000);
});
