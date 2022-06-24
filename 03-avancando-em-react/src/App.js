import './App.css'
import SrcImage from './assets/mahbod-akhzami-5B2hBU_x6bM-unsplash.jpg'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {
  return (
    <div className="App">
      <h1>Advancing in React</h1>
      <ManageData />
      <ListRender />
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
