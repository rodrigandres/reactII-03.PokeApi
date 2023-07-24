import { Container } from 'react-bootstrap';
import home from '../assets/img/home.png'

export const Home = () => {
    return ( 
    <Container className='text-center my-5'>
        <h1>Bienvenido maestro pokemón</h1>
        <img src={home} alt="PickachuHome" width="400" height="400" />
    </Container>
    )
}
