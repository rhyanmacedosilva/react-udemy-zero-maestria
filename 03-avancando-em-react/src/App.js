import './App.css'
import SrcImage from './assets/mahbod-akhzami-5B2hBU_x6bM-unsplash.jpg'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import { useState } from 'react'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const name = "Rhyan"
  const [othername] = useState("Naiana")
  const cars = [
    { id: 0, brand: 'Ferrari', color: 'Yellow', newCar: true, km: 0 },
    { id: 1, brand: 'Audi', color: 'Blue', newCar: true, km: 0 },
    { id: 2, brand: 'Renault', color: 'Grey', newCar: false, km: 770 }
  ]
  const showMessage = () => {
    console.log('Hello!')
  }
  const [message, setMessage] = useState('')
  const handleMessage = (message) => {
    setMessage(message)
  }

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
      <CarDetails brand="VW" color="Black" km={10000} newCar={false} />
      <CarDetails brand="Ford" color="White" km={20000} newCar={false} />
      <CarDetails brand="Fiat" color="Red" km={0} newCar={true} />
      {/* using map to render a list of objects */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment text={'This is a random text'} />
      {/* children */}
      <Container name="Rhyan">
        <p>This is the Container Content</p>
      </Container>
      {/* sending a function through a prop  */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message message={message} />
      <ChangeMessageState handleMessage={handleMessage} />
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
