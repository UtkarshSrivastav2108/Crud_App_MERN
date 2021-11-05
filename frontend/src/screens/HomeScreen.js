import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
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
      <h1>Information We have with us</h1>

      <Row>
        {infos.map((info) => (
          <Col key={info._id} sm={12} md={6} lg={4} xl={3}>
            <Product info={info} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
