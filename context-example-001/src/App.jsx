import './App.css'
import Section from './components/Section'
import Heading from './components/Heading'

function App() {
  return (
    <Section color={"orange"}>
      <Heading>Title A</Heading>
      <Section color={"yellow"}>
        <Heading>Heading B</Heading>
        <Heading>Heading C</Heading>
        <Heading>Heading D</Heading>
        <Section color={"red"}>
          <Heading>Heading E</Heading>
          <Heading>Heading F</Heading>
          <Heading>Heading G</Heading>
          <Section color={"blue"}>
            <Heading>Heading H</Heading>
            <Heading>Heading I</Heading>
            <Heading>Heading J</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}

export default App
