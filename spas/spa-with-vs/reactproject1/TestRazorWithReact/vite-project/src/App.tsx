import './App.css'

function App() {
    const list = ["Dune", "Dune 2"]
    const items = list.map(item => <tr><td>{ item }</td></tr>)

  return (
    <>
          <h1>Ma ludotèque</h1>

          <table>
              { items }
          </table>
    </>
  )
}

export default App
