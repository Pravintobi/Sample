import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
function Page3({data}) {
    return <>
        <Container>
            <Row>
                {data.map((e, i) => (
                    <Col key={i}>
                        <div className="card h-100">

                            <img className="card-img-top" src={e.image} alt="..." />

                            <div className="card-body p-4">
                                <div>

                                    <h6 className="fw-bolder">{e.tittle}</h6>
                                    <p>{e.price}</p>

                                </div>

                            </div>


                        </div>
                    </Col>))}


            </Row>

        </Container>
    </>
}

export default Page3