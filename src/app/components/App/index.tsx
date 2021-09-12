import Search from "app/components/Search"
import Deck from "app/components/Deck"
import "app/components/App/App.css"

function App() {
  return (
    <div className="App">
      <h1 className="appTitle">Lord of the rings' card decks</h1>
      <Search />
      <Deck />
    </div>
  )
}

export default App
