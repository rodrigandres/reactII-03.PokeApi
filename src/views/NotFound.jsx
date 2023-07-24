import { Container } from 'react-bootstrap';
import Error404 from '../assets/img/404.png';

export const  NotFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center ">
        <img src={Error404} height={500} alt="Error404" />
    </Container>
  );
}
