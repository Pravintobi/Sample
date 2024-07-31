import { Outlet, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap"
const Layout = () => {
    return (
        <>
            

                <Container className="nav-bar">
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <Link to="/" className="nav-link">All</Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/Full-Stack" className="nav-link">Full Stack Dvelopment</Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/Data-Stcience" className="nav-link">Data Science</Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/cyber" className="nav-link">Cybersecurity</Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/blogs" className="nav-link">Career</Link>
                        </Col>
                    </Row>
                </Container>
            

            <Outlet />
        </>


    )
};

export default Layout;