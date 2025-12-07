import './App.css'
import CardPanel from './components/CardPanel'
import { Home } from 'lucide-react'

function App() {
  return (

    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex flex-col items-center justify-center'>
      <div className="w-full gap-10 flex items-center justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg p-3 rounded-2xl border border-white/20">
            <Home className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Somsri's Stupid Home</h1>
            <p className="text-purple-200">Dashboard</p>
          </div>
          <div></div>
      </div>
      <CardPanel />
    </div>
  )
}

export default App
