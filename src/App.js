import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from 'react-router-dom'
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav className="mx-16">
          <Logo to={'/'}>growNews</Logo>
        </Nav>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1rem;
padding: .5rem 1rem;
font-weight: bold;
background: skyblue;
`


const Nav = styled.div`
  padding: 1rem 0rem;
  align-items: center;
`

export default App;
