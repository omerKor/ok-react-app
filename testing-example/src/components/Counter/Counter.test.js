import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

it('increase btn', () => {//it should be a valid email address gibi bir mesaj yazmamıza olanak sağlar.
    render(<Counter />);

    const count = screen.getByText("0");
    const increaseBtn = screen.getByText('Increase');

    userEvent.click(increaseBtn);

    expect(count).toHaveTextContent("1"); //bu testimizde increase butonuna tıkladığımızda counter alanı sıfırdan bir oluyor mu onu test ediyoruz
});

it('decrease btn', () => {
    render(<Counter />);

    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText('Decrease');

    userEvent.click(decreaseBtn);

    expect(count).toHaveTextContent("-1"); //bu testimizde Decrease butonuna tıkladığımızda counter alanı sıfırdan eksi bir oluyor mu onu test ediyoruz
});