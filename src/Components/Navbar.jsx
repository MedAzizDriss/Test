import React from 'react'
import {ListGroup} from 'react-bootstrap'


export default function Ymapi() {
    const names =['chokri','bel3id','l3asima','sou3ad','monjiji']
    return (
        <ListGroup as="ul">
        
        {names.map(elt=>< ListGroup.Item > {elt} </ListGroup.Item>)} 

        </ListGroup>
            
    )
}

