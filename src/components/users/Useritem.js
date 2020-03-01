import React from 'react';
import PropTypes from 'prop-types';

const Useritem = (props) => {    
    const { login, avatar_url, id, html_url } = props.user;

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="github profile picture" className="round-img" style={{width: '60px'}}/>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">Page URL</a>
            </div>
        </div>
    )
}

Useritem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default Useritem
