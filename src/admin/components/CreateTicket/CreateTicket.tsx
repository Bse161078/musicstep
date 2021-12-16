import React from 'react'
import { CreateTicketStyle } from './CreateTicket.style'
import { AddCreditIcon } from '../../../assets'

 const CreateTicket = () => {
    return(
        <CreateTicketStyle className="create-ticket-wrapper">
            <p className="add-icon">+</p>
            <p className='create-ticket'>Create Ticket</p>
        </CreateTicketStyle>
    )

}

export default CreateTicket

