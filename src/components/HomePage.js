import React, { useState } from 'react'
import Card from './Card.js'
import * as b from 'react-bootstrap'

const HomePage = ({apiData}) => {
    const [keyword, setKeyword] = useState('');

    return (
        <div>
            <b.Container>
                <b.Row>
                    <b.Col>
                            <div style={{
                                display: "flex", 
                                flexDirection: "row",
                                height: '4rem',
                                width: '100%',
                            }}>
                                <div style={{width: "100%", flex: "3 0 1rem", margin: '0.25rem'}}>
                                    <b.Form.Control style={{width: '100%', height: '100%'}} type="text" placeholder="Normal text" onChange={(e) => {
                                        setKeyword(e.target.value)
                                        
                                    }} value={keyword} />
                                </div>
                                <div style={{width: "100%", flex: "1 0 1rem", margin: '0.25rem'}}>
                                    <b.Button style={{width: '100%', height: '100%'}} variant="primary">Search</b.Button>
                                </div>
                            </div>
                    </b.Col>
                </b.Row>
                <b.CardColumns>
                    {
                        apiData.results.map((el, idx) => {
                                if(keyword.length > 0) {
                                    return <b.Row key={idx}>
                                        {el.display_title.toLowerCase().includes(keyword.toLowerCase()) ? <b.Col><Card title={el.display_title} subtitle={el.byline} text={el.headline} link="More Detail" img={el.multimedia.src} idx={idx}/></b.Col> : null}
                                    </b.Row>
                                } else {
                                    return <b.Row key={idx}>
                                        <b.Col><Card title={el.display_title} subtitle={el.byline} text={el.headline} link="More Detail" img={el.multimedia.src} idx={idx}/></b.Col>
                                    </b.Row>
                                }
                            }
                        )
                    }
                </b.CardColumns>
            </b.Container>
        </div>
    )
}

export default HomePage