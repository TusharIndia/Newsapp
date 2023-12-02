import React from "react";

const NewsItem = (props) => {
    let {title, description,imageUrl,source,newsUrl,author,time,mode} = props;
    return (
      <div>
        <div className="card mb-3">
            <span className={`position-absolute top-0 badge bg-danger`}>{source}</span>
          <img src={imageUrl?imageUrl:"https://image.cnbcfm.com/api/v1/image/107338017-17006712872023-11-22t154054z_1820884796_rc2bi4a13tzl_rtrmadp_0_usa-thanksgiving-travel.jpeg?v=1700700260&w=1920&h=1080"} className="card-img-top" alt="..." />
          <div className={`card-body  bg-${mode}`}>
            {mode==="dark"?<h5 className={`card-title text-white`}>{title}</h5>:<h5 className="card-title text-dark">{title}</h5>}
            {mode==="dark"?<p className={`card-text text-white`}>{description}..</p>:<p className="card-text text-dark">{description}..</p>}
            {mode==="dark"?<p className="card-text "><small className="text-white">by {author?author:"unknown"} on {new Date(time).toGMTString()}</small></p>:<p className="card-text"><small className="text-muted">by {author?author:"unknown"} on {new Date(time).toGMTString()}</small></p>}
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
