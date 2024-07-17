import React from 'react'

function Price(props) {
  return (
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.category}</h5>
            <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.isUser?"":"text-muted"}><span className="fa-li"><i className={props.data.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
              <li className={props.data.isStorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.isPublic?"":"text-muted"}><span className="fa-li"><i className={props.data.isPublic?"fas fa-check":"fas fa-times"}></i></span>{props.data.public}</li>
              <li className={props.data.isCommunity?"":"text-muted"}><span className="fa-li"><i className={props.data.isCommunity?"fas fa-check":"fas fa-times"}></i></span>{props.data.comunity}</li>
              <li className={props.data.isPrivate?"":"text-muted"}><span className="fa-li"><i className={props.data.isPrivate?"fas fa-check":"fas fa-times"}></i></span>{props.data.Private}</li>
              <li className={props.data.isSupport?"":"text-muted"}><span className="fa-li"><i className={props.data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{props.data.support}</li>
              <li className={props.data.isDomain?"":"text-muted"}><span className="fa-li"><i className={props.data.isDomain?"fas fa-check":"fas fa-times"}></i></span>{props.data.domain}</li>
              <li className={props.data.isReport?"":"text-muted"}><span className="fa-li"><i className={props.data.isReport?"fas fa-check":"fas fa-times"}></i></span>{props.data.report}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Price