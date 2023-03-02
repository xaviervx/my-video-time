import * as yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(yup)
export const registerFormSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  phone: yup.string().min(11, 'Número inválido').required('Telefone obrigatório'),
  gender: yup.string().required('Genero obrigatório'),
  city: yup.string().required('Cidade obrigatória'),
  password: yup.string().password()
    .required('Senha obrigatória')
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .minLowercase(1, 'A senha deve conter uma letra')
    .minUppercase(1, 'A senha deve conter pelo menos uma letra maiuscula')
    .minNumbers(1, 'A senha deve conter pelo menos um número')
    .minSymbols(1, 'A senha deve conter pelo menos um símbolo'),
  cep: yup.string().required('CEP obrigatório').min(8, 'Cep inválido').matches(/^([\d]{2})([\d]{3})([\d]{3})/, 'cep inválido'),
  state: yup.string().required('Estado obrigatório'),
  retypedPassword: yup.mixed().oneOf([yup.ref('password')], 'Senha digitada é diferente').required('Confirmação da senha obrigatória')
})
