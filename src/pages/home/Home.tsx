import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [value, set_value] = useState("")

  const navigate = useNavigate()

  const handle_join_room = useCallback((e: any) => {
    e?.preventDefault()
    navigate(`/room/${value}`)
  },[navigate, value])

  return (
    <>
      <form onSubmit={handle_join_room}>
        <input type="text" placeholder="enter room code" value={value} onChange={(e: any) => set_value(e?.target?.value)} />
        <button type="submit">Join</button>
      </form>
    </>
  )
}

export default Home