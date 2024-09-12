import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import Room from "./pages/room/Room"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room/:roomId" element={<Room />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}

export default App