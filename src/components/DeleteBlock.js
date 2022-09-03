import React from 'react';
import {ImCross} from 'react-icons/im'
import axios from 'axios'

const DeleteBlock = ({documentId}) => {

    const deleteTicket = async () => {
       const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
        const success = response.status === 200
        if (success) window.location.reload()
    }

    return (
        <div className='delete-block'>
            <div onClick={deleteTicket} className='delete-icon'>
                <ImCross/>
            </div>
        </div>
    );
};

export default DeleteBlock;