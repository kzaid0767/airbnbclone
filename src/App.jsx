
import './App.css'
import Nav from './Nav'
import Hero from './Hero'
import data from './data'
import Card from './Card'


function App() {
  
  const cards = data.map(item => < Card item={item} key={item.id}/>)

  return (
    <>
      <Nav />
      <Hero />
      <div className="cards-list">{cards}</div>
    </>
  )
}

export default App
