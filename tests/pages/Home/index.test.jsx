import { BrowserRouter } from 'react-router-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { UserContextProvider } from '../../../src/contexts/UserContext';
import useCoursesData from '../../../src/hook/useCoursesData';
import Home from '../../../src/pages/Home';

// const mockNavigate = jest.fn()
// jest.mock("react-router", () => ({
//   ...jest.requireActual("react-router"),
//   useNavigate: () => mockNavigate
// }))

jest.mock('../../../src/hook/useCoursesData')

describe('Home Page', () => {
  beforeEach(() => {
    useCoursesData.mockReturnValue({
      isLoading: false,
      courses: [
        {
          'id': 1,
          'title': 'Fundamentos de Banco de dados',
          'author': 'Rafael',
          'price': 30.00,
          'avaliations': 100,
          'stars': 5,
          'imageUrl': 'https://blog.unipar.br/wp-content/uploads/2021/11/post_thumbnail-801c53f03508c73882d8a372d4df2e17.jpeg',
          'description': 'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Atirei o pau no gatis, per gatis num morreus.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.Casamentiss faiz malandris se pirulitá.Paisis, filhis, espiritis santis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.'
        },
        {
          'id': 2,
          'title': 'Gestão Financeira',
          'author': 'Xavier',
          'price': 24.50,
          'avaliations': 250,
          'stars': 4,
          'imageUrl': 'https://www.gov.br/infraestrutura/pt-br/assuntos/portal-da-estrategia/cursos-e-eventos-estrategia/gestao-do-orcamento-publico/oramento-jpg/@@images/ef1a921e-fe50-417e-8982-ae8c1d0b0f4a.jpeg',
          'description': 'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Atirei o pau no gatis, per gatis num morreus.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.Casamentiss faiz malandris se pirulitá.Paisis, filhis, espiritis santis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.'
        }
      ]
    })
  })

  it('Should render the home page correctly', () => {
    render(<Home />, { wrapper: BrowserRouter });

    const headerText = screen.getByText(/seja onde você estiver/i)

    expect(headerText).toBeInTheDocument()
    expect(screen.getByText(/Nossos Serviços/i)).toBeInTheDocument()
    expect(screen.getByText(/Em destaque/i)).toBeInTheDocument()
    expect(screen.getByText(/My Vídeo Time 2020/i)).toBeInTheDocument()
  })

  it('Should render the dropdown menu', () => {
    render(<Home />, { wrapper: BrowserRouter });

    const buttonHamburger = screen.getByTestId(/button-hamburger/i)

    expect(buttonHamburger).toBeInTheDocument()

    fireEvent.click(buttonHamburger)

    expect(screen.getByText(/Meu perfil/i)).toBeInTheDocument()
    expect(screen.getByText(/Sair/i)).toBeInTheDocument()
  })

  it('Should hide the dropdown menu', () => {
    render(<Home />, { wrapper: BrowserRouter });

    const buttonHamburger = screen.getByTestId(/button-hamburger/i)

    fireEvent.click(buttonHamburger)

    expect(screen.getByText(/Meu perfil/i)).toBeInTheDocument()

    fireEvent.click(buttonHamburger)

    expect(screen.getByTestId('nav-container')).toHaveClass('hidden')
  })

  it('Should be able to redirect to login screen', () => {
    render(<UserContextProvider><Home /></UserContextProvider>, { wrapper: BrowserRouter });

    const buttonHamburger = screen.getByTestId(/button-hamburger/i)

    fireEvent.click(buttonHamburger)

    const logoutMenuItem = screen.getByText(/Sair/i);

    fireEvent.click(logoutMenuItem)

    // expect(mockNavigate).toHaveBeenCalledWith('/login')
    expect(window.location.pathname).toEqual('/login')
  })

  it('Should render the featured items', () => {
    render(<UserContextProvider><Home /></UserContextProvider>, { wrapper: BrowserRouter });

    expect(screen.getByText(/Em destaque/i)).toBeInTheDocument()

    expect(screen.getByText(/Fundamentos de Banco de dados/i)).toBeInTheDocument()
  })

  it('Should see the detail of a highlight', () => {
    render(<UserContextProvider><Home /></UserContextProvider>, { wrapper: BrowserRouter });

    expect(screen.getByText(/Em destaque/i))

    const financialManagement = screen.getByRole('img', {
      name: /gestão financeira/i
    })

    fireEvent.click(financialManagement)

    expect(window.location.pathname).toEqual('/course/2')
  })
})
