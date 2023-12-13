import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={15}/>
      <Habit completed={2}/>
      <Habit completed={45}/>
    </div>
  )
}

export default App
