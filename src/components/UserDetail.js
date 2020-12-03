import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Badge, Button, Card} from 'react-bootstrap'

const UserDetail = ({apiData}) => {
    const {id} = useParams()
    const detail = apiData.results[id];

    let details = [];

    details.push(["Publication Date", detail.publication_date])
    details.push(["Opening Date", detail.opening_date])
    details.push(["Date Updated", detail.date_updated])

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "100%", height: window.innerHeight-55}}>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
                <div style={{width: "100%", flex: "4 0 1px", margin: '3rem'}}>
                    <div style={{display: 'flex', flexDirection: "column", width: "100%", height: "100%"}}>
                        <div style={{flex: '0.125 0 1rem', display: "flex"}}>
                            <Button style={{margin: '0.37rem 0.5rem 0.37rem 0.5rem',}}variant="primary" as={Link} to={`/`}>Back to Home</Button>
                        </div>
                        <div style={{flex: '1 0 1rem', padding: '0.37rem'}}>
                            <Card style={{height: '100%'}}>
                                <Card.Header>{detail.display_title}</Card.Header>
                                <Card.Body style={{padding: "0"}}>
                                    <div style={{display: "flex", width: "100%", height: "100%"}}>
                                        <div style={{width: "100%", flex: "1 0 1rem", textAlign: "center", overflow: "hidden"}}>
                                            <img src={detail.multimedia.src} style={{height: "100%"}}/>
                                        </div>
                                        <div style={{width: "100%", flex: "1 0 1rem", padding: "1rem", display: "flex", flexDirection: "column"}}>
                                            <div style={{height: "auto", marginBottom: "3rem"}}>
                                                <h5>{detail.summary_short}</h5>
                                            </div>
                                            {
                                                details.map((el, idx) => 
                                                    el[1] !== null ?
                                                    <div style={{display: "flex", marginBottom: "2rem"}}>
                                                        <div style={{width: "100%", textAlign: "center"}}>
                                                            <Badge pill variant="primary">
                                                                {el[0]}
                                                            </Badge>
                                                        </div>
                                                        <div style={{width: "100%", textAlign: "center", margin: "auto"}}>
                                                            <p>{el[1]}</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                                )
                                            }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
            </div> 
        </div>
    )
}

export default UserDetail
