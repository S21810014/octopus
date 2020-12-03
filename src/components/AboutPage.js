import React from 'react'
import {Card, Button} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem"}}>
            <Card className="text-center">
                <Card.Header>Words from the developer</Card.Header>
                <Card.Body>
                    <Card.Title>MovieReview</Card.Title>
                    <Card.Text>
                        Made with pain and agony using React, by Timothy Tiwow
                        <br/>
                        <br/>
                        API Endpoint yang saya gunakan adalah data movie review dari New York Times
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">~dev</Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage