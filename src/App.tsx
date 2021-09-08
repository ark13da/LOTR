import { Search } from "./features/search/Search"
import { Deck } from "./features/deck/Deck"
import "./App.css"

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
