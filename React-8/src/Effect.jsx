import { useEffect , useState } from "react"

const Effect = () => {
  const [data,setData]=useState([]);
  const [error,setError]=useState(false);

    useEffect(()=>{
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())
      // .then(json =>setData(json))
      // console.log("render");

      const fetchData=async () => {
        try {
          const res=await fetch('https://jsonplaceholder.typicode.com/todos');
          const req=await res.json();
          setData(req)
        } catch (error) {
          setError(error)
        }
      }
      fetchData()
    },[])
  return (
    <div>
      {
        !data.length && !error && <h1>Loading...</h1> 
      }
      <ul>
        {
          data.map(post=><li key={post.id}>{post.title}</li>)
        }
        {
          error && <h1>something went wrong</h1>
        }
      </ul>
    </div>
  )
}

export default Effect