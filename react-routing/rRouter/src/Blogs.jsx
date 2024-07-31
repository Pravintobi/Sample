import { Row, Col, Container } from "react-bootstrap"

const Blogs = ({fdata}) => {
    return <>

        <Container>
            <Row>
                {fdata.map((e, i) => (
                    <Col key={i}>
                        <div className="card h-100">

                            <img className="card-img-top" src={e.image} alt="..." />

                            <div className="card-body p-4">
                                <div>

                                    <h5 className="fw-bolder">{e.tittle}</h5>
                                    <p>{e.price}</p>

                                </div>
                            </div>

                          
                        </div>
                    </Col>))}


            </Row>

        </Container>
    </>;
};

export default Blogs;