import React, {useEffect, useState, useRef} from "react";
import Button from "@mui/material/Button";
import {useQuery} from "@apollo/client";
import {GET_CURRENT_USER} from "../../graphql/User";

// let renderCount: number = 0
export default function Dashboard() {

  const {data} = useQuery(GET_CURRENT_USER);
  const [user, setUser] = useState([])
  // const [renderCount, setRenderCount] = useState(1)
  const [type, setType] = useState('users')
  const [jsonData, setJsonData] = useState([])
  const [pos, setPos] = useState({})
  const renderCount = useRef(1)
  // const currentUser = data?.currentUser || {}
  console.log('render')

  useEffect(() => {
    setUser(data?.currentUser || {})
  }, [data])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => (setJsonData(json.slice(0, 3))))

    return () => {
      console.log('clen type')
    }
  }, [type])

  const mouseMoveHandler = (ev: any) => {
    setPos({
      x: ev.clientX,
      y: ev.clientY,
    })
  }
  useEffect(() => {
    console.log('ComponentDidMount')
    // window.addEventListener('mousemove', mouseMoveHandler)
    //
    // return () => {
    //   window.removeEventListener('mousemove', mouseMoveHandler)
    // }
  }, [])

  useEffect(() => {
    renderCount.current ++
  })
  return (
    <div style={{height: 860, width: '100%'}}>
      <h1 style={{marginTop: 70}}> render count: {renderCount.current} </h1>
      <h2 style={{marginTop: 70}}> DashboardPage </h2>
      <pre>pos - {JSON.stringify(pos, null, 2)}</pre>
      <pre>user - {JSON.stringify(user, null, 2)}</pre>
      <Button onClick={() => setType('users')} color="primary">Users</Button>
      <Button onClick={() => setType('todos')} color="secondary">Todos</Button>
      <Button onClick={() => setType('posts')} color="info">Posts</Button>
      <pre>{type} - {JSON.stringify(jsonData, null, 2)}</pre>

    </div>
  );
}