import React from 'react';
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item ui grid">
            <div className="two wide column">
                <img className="ui avatar image" src={user} alt="user" />
            </div>
            <div className="content ten wide column"> 
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div className="two wide column" style={{textAlign: 'right'}}>
                <i className="trash alternate outline icon" 
                    style={{color: "red", marginTop: "8px"}}
                    onClick={() => props.clickHandler(id)}>
                </i>
            </div>
        </div>
    );
};

export default ContactCard;