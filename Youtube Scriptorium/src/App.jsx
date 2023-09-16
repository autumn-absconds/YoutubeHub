import { Route, Routes } from 'react-router-dom'
import './App.css'
import VideoDownloader from './components/VideoDownloader'

function App() {


  return (
    <>
      <Routes>

        <Route path="/" exact element={<VideoDownloader />} />

      </Routes>





    </>
  )
}

export default App
