import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  act, fireEvent, render, screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Register from '../../../src/pages/Register';

describe('#Register', () => {
  it('should render without error', () => {
    // renderizar componente react
    const {
      debug, getByText, getByRole, queryByText,
    } = render(<Register />, { wrapper: BrowserRouter })

    // console.log(titleText)
    // screen.logTestingPlaygroundURL();
    // debug();

    // validate informations
    let titleText = getByText(/criar conta/i);
    titleText = screen.getByText(/criar conta/i);
    expect(titleText).toBeInTheDocument();

    const buttonSubmit = getByRole('button', { name: 'Cadastrar' });
    expect(buttonSubmit).toBeInTheDocument();

    // get query
    expect(queryByText(/batatinha/i)).not.toBeInTheDocument();
  });

  it('should be possible register one user', async () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {})

    const {
      debug, getByRole, getByPlaceholderText
    } = render(<Register />, { wrapper: BrowserRouter });

    const inputName = getByPlaceholderText('Nome completo');
    // Simula um evento de um usuário
    await userEvent.type(inputName, 'Fulano da Silva');
    expect(inputName.value).toEqual('Fulano da Silva');

    const inputEmail = getByPlaceholderText(/email/i);
    // Muda radicalmente o valor de um elemento
    fireEvent.input(inputEmail, { target: { value: 'fulano@email.com' } });
    expect(inputEmail.value).toEqual('fulano@email.com');

    const inputPhone = getByPlaceholderText(/telefone/i);
    fireEvent.input(inputPhone, { target: { value: '05599999999' } });
    expect(inputPhone.value).toEqual('05599999999');

    const inputGender = getByPlaceholderText(/gênero/i);
    fireEvent.input(inputGender, { target: { value: 'Masculino' } });
    expect(inputGender.value).toEqual('Masculino');

    const inputCity = getByPlaceholderText(/cidade/i);
    fireEvent.input(inputCity, { target: { value: 'Porto Alegre' } });
    expect(inputCity.value).toEqual('Porto Alegre');

    const inputZipCode = getByPlaceholderText('CEP (Opicional)');
    fireEvent.input(inputZipCode, { target: { value: '90000000000' } });
    expect(inputZipCode.value).toEqual('90000000000');

    const inputState = getByPlaceholderText(/estado/i);
    fireEvent.input(inputState, { target: { value: 'RS' } });
    expect(inputState.value).toEqual('RS');

    const inputPassword = getByPlaceholderText(/^senha$/i);
    fireEvent.input(inputPassword, { target: { value: 'nG76uy33WMV6C3x/' } });
    expect(inputPassword.value).toEqual('nG76uy33WMV6C3x/');

    const inputPasswordConfirm = getByPlaceholderText(/confirmar senha/i);
    fireEvent.input(inputPasswordConfirm, { target: { value: 'nG76uy33WMV6C3x/' } });
    expect(inputPasswordConfirm.value).toEqual('nG76uy33WMV6C3x/');

    const buttonSubmit = getByRole('button', { name: 'Cadastrar' });

    await act(() => {
      fireEvent(buttonSubmit, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    })

    const submitData = {
      'cep': '90000000000',
      'city': 'Porto Alegre',
      'email': 'fulano@email.com',
      'gender': 'Masculino',
      'name': 'Fulano da Silva',
      'password': 'nG76uy33WMV6C3x/',
      'phone': '05599999999',
      'retypedPassword': 'nG76uy33WMV6C3x/',
      'state': 'RS',
    }

    expect(log).toBeCalled();
    expect(log).toBeCalledTimes(1);
    expect(log).toBeCalledWith(submitData);
  });

  it("shouldn't be possible register one user with wrong repeat password", async () => {
    const {
      debug, getByText, getByRole, getByPlaceholderText, findByText
    } = render(<Register />, { wrapper: BrowserRouter });

    const inputPassword = getByPlaceholderText(/^senha$/i);
    fireEvent.input(inputPassword, { target: { value: 'nG76uy33WMV6C3x/' } });
    expect(inputPassword.value).toEqual('nG76uy33WMV6C3x/');

    const inputPasswordConfirm = getByPlaceholderText(/confirmar senha/i);
    fireEvent.input(inputPasswordConfirm, { target: { value: 'BatatanG76uy33WMV6C3x/' } });
    expect(inputPasswordConfirm.value).toEqual('BatatanG76uy33WMV6C3x/');

    const buttonSubmit = getByRole('button', { name: 'Cadastrar' });
    act(() => {
      fireEvent(buttonSubmit, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    })

    const validatePasswordMessage = await findByText('Senha digitada é diferente');
    expect(validatePasswordMessage).toBeInTheDocument();
  });

  it('should be possible upload avatar image', async () => {
    const {
      debug, getByTestId, getByAltText
    } = render(<Register />, { wrapper: BrowserRouter });

    const inputImg = getByTestId('input-upload-image');
    await act(() => userEvent.upload(inputImg, new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })));

    expect(inputImg.files[0].name).toBe('chucknorris.png');
    expect(getByAltText('User_Image')).toBeInTheDocument();
  });

  it.todo('should be possible redirect to login page');
});
