import './App.css'
import SrcImage from './assets/mahbod-akhzami-5B2hBU_x6bM-unsplash.jpg'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'
import CarDetails from './components/CarDetails'

function App() {
  const name = "Rhyan"
  const [othername] = useState("Naiana")

  return (
    <div className="App">
      <h1>Advancing in React</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      <ShowUserName name={othername} />
      {/* destructuring */}
      <CarDetails brand="VW" color="Black" km={10000} />
      {/* image inside public folder */}
      <div>
        <img src="/komarov-egor-LlvSEbgjQoA-unsplash.jpg" alt="Night City" />
      </div>
      {/* image inside src folder */}
      <div>
        <img src={SrcImage} alt="Coke" />
      </div>
    </div>
  )
}

export default App
