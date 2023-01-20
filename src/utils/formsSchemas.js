import * as yup from 'yup';

export const registerFormSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('E-mail inválido.'),
  phone: yup
    .string()
    .min(11, 'Número inválido.')
    .matches(/^.?[1-9]{2}.?.?9.?[0-9]{4}.?[0-9]{4}.?$/, 'Número inválido')
    .required('Telefone obrigatório.'),
  gender: yup.string().required('Genero obrigatório'),
  city: yup.string().required('Cidade obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatoria')
    .min(4, 'A senha deve ter no minímo 4 caracteres'),
  retypedPassword: yup
    .string()
    .required('Senha de confirmação obrigatória')
    .min(4, 'A senha deve ter no minímo 4 caracteres')
    .oneOf([yup.ref('retypedPassword')], 'Senha digitada é diferente'),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter 8 caracteres.')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido.'),
  state: yup.string(),
});
