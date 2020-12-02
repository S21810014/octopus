import React from 'react'
import { useParams } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const UserDetail = ({apiData}) => {
    const {id} = useParams()
    const detail = apiData.results[id];

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "100%", height: window.innerHeight-55}}>
                <div style={{width: "100%", backgroundColor: "red", flex: "1 0 1px"}}>testing</div>
                <div style={{width: "100%", backgroundColor: "blue", flex: "4 0 1px", margin: '3rem'}}>
                    <div style={{display: 'flex', flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{flex: '0.125 0 1rem', backgroundColor: "yellow", display: "flex"}}>
                            <Button style={{margin: '0.37rem'}}variant="primary" on>Back to Home</Button>
                        </div>
                        <div style={{flex: '1 0 1rem', backgroundColor: "orange"}}>testing</div>
                    </div>
                </div>
                <div style={{width: "100%", backgroundColor: "green", flex: "1 0 1px"}}>testing</div>
            </div> 
        </div>
    )
}

export default UserDetail