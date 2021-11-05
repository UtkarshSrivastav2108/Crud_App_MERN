import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Sidenav from '../components/Sidenav'
import { Link } from 'react-router-dom'

function ParticularData({ match }) {

    const [info, setInfo] = useState({})

    useEffect(() => {
        const fetchInfo = async () => {
            const { data } = await axios.get(`/api/info/${match.params.id}`)

            setInfo(data)
        }

        fetchInfo()
    }, [match])

    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
                        <Sidenav />
                    </div>
                    <div class="col-10">
                        <div className="container-fluid">
                            <div className="row">
                                <div>
                                    <Link to="/data"><button>Back</button></Link>
                                    <h1>{info.end_year}</h1>
                                    <h1>{info.intensity}</h1>
                                    <h1>{info.sector}</h1>
                                    <h1>{info.topic}</h1>
                                    <h1>{info.insight}</h1>
                                    <h1>{info.url}</h1>
                                    <h1>{info.region}</h1>
                                    <h1>{info.start_year}</h1>
                                    <h1>{info.impact}</h1>
                                    <h1>{info.added}</h1>
                                    <h1>{info.published}</h1>
                                    <h1>{info.country}</h1>
                                    <h1>{info.relevance}</h1>
                                    <h1>{info.pestle}</h1>
                                    <h1>{info.source}</h1>
                                    <h1>{info.title}</h1>
                                    <h1>{info.likelihood}</h1>


                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ParticularData
