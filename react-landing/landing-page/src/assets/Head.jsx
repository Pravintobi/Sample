import React from 'react'

function Head(props) {
return <>
    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={props.data.icon}></i></div>
                            <h3>{props.data.item}</h3>
                            <p className="lead mb-0">{props.data.desription}</p>
                        </div>
                    </div>
</>
}

export default Head