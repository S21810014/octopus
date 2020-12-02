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
                {
                    apiData.results.reduce((res, val, idx, arr) => {
                        if(idx % 2 === 0)
                            res.push(arr.slice(idx, idx + 2))
                        return res
                    }, []).map((el, idx) => {
                            if(keyword.length > 0) {
                                return <b.Row key={idx}>
                                    {el[0].display_title.toLowerCase().includes(keyword.toLowerCase()) ? <b.Col><Card title={el[0].display_title} subtitle={el[0].byline} text={el[0].headline} link="More Detail" img={el[0].multimedia.src} idx={idx}/></b.Col> : null}
                                    {el[1].display_title.toLowerCase().includes(keyword.toLowerCase()) ? <b.Col><Card title={el[1].display_title} subtitle={el[1].byline} text={el[1].headline} link="More Detail" img={el[1].multimedia.src} idx={idx + 1}/></b.Col> : null}
                                </b.Row>
                            } else {
                                return <b.Row key={idx}>
                                    <b.Col><Card title={el[0].display_title} subtitle={el[0].byline} text={el[0].headline} link="More Detail" img={el[0].multimedia.src} idx={idx}/></b.Col>
                                    <b.Col><Card title={el[1].display_title} subtitle={el[1].byline} text={el[1].headline} link="More Detail" img={el[1].multimedia.src} idx={idx + 1}/></b.Col>
                                </b.Row>
                            }
                        }
                    )
                }
            </b.Container>
        </div>
    )
}

export default HomePage