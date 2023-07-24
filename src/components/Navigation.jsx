import { Container, Navbar, Nav } from 'react-bootstrap';
import location from '../assets/img/location.png'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const Navigation = () => {
    const setActiveClass =  ({ isActive }) => {
        const aux = 'text-decoration-none me-3'
        return isActive ? `text-white ${aux}` : `text-secondary ${aux}`
    }

    const {} = useContext(PokemonContext)


    return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand>
        <NavLink to='/'>
            <img src={location} alt="Logo" width="50" height="50" />
        </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <NavLink to='/' className={ setActiveClass }>Home</NavLink>
            <NavLink to='/Pokemones' className={ setActiveClass }>Pokemones</NavLink>
        </Nav>
    </Navbar.Collapse>  
    </Container>
    </Navbar>
    );
}
