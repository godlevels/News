import { FaCar } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Category = () => {
    return (
        <List>
            <SLink to={'/applenews/Tesla'}>
                <FaCar />
                <h4>Tesla</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 1.5rem;
    }

    svg{
        color: white;
        font-size: 1.8rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }

        h4{
            color: white;
        }
    }
`;
export default Category
