import React from 'react'

const ClientsImage = (props) => {
    return (
        <img src={ process.env.PUBLIC_URL + `/assets/img/clients/${props.image_name}`} alt={props.client_name}/>
    );
}

export default ClientsImage;