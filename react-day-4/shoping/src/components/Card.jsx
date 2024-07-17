import React from 'react'

function Card(props) {
    console.log(props.data.tittle)
    return <>

        <div className="col mb-5">
            <div className="card h-100">

                <img className="card-img-top" src={props.data.image} alt="..." />

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{props.data.tittle}</h5>

                        {props.data.priced}
                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
            </div>
        </div>

    </>
}

export default Card