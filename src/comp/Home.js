import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Table } from 'react-bootstrap'

export default function Home() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/games/all')
            .then(res =>{
                console.log(res.data.games);
                setData(res.data.games)
            })
            .catch(err => {console.log(err)})
    },[])
  return (
    <div className='text-danger container'>
        <h1 className='text-primary m-5'>All Games</h1>
        <ul className='h4'>
            {data.map(e=>(
                <>
                <li>{`Game: ${e.game_title} - Company: ${e.company} - Rating: ${e.rating}`}</li>
                </>))}
        </ul>
        <Table striped bordered hover variant='dark' className='mt-5 text-warning'>
      <thead>
        <tr>
          <th>#</th>
          <th>Game Name</th>
          <th>Rating</th>
          <th>service</th>
        </tr>
      </thead>
      <tbody>
      {data.map(e=>(
                <tr>
                <td>{`${e.id}`}</td>
                <td>{`${e.game_title}`}</td>
                <td>{`${e.rating}`}</td>
                <td><Button className='btn btn-outline-success mr-2'>Update</Button><Button className='btn btn-outline-danger '>Delete</Button></td>
                </tr>))}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Ottso</td>
          <td><Button className='btn btn-outline-success mr-2'>Update</Button><Button className='btn btn-outline-danger '>Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Button className='btn btn-outline-success mr-2'>Update</Button><Button className='btn btn-outline-danger '>Delete</Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
