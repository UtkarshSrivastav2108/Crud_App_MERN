import Sidenav from '../components/Sidenav'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import DataShow from '../components/DataShow'


function AllData() {
    const [infos, setInfos] = useState([])

    useEffect(() => {
        const fetchInfos = async () => {
            const { data } = await axios.get('/api/info')

            setInfos(data)
        }

        fetchInfos()
    }, [])

    return (
        <>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
                        <Sidenav />
                    </div>
                    <div class="col-10">
                        <Row>
                            {infos.map((info) => (
                                <Col key={info._id} sm={12} md={4} lg={4} xl={4}>
                                    <DataShow info={info} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AllData
