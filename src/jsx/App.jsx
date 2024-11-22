import ShopItems from './ShopItems'
import Calendar from './Calendar'
import '../css/App.css'

function App() {
  const now = new Date();
  return (
    <>
    <ShopItems />
    <div className='rootCalc'>
      <Calendar date={now}/>
      </div>
    </>
  )
}

export default App
