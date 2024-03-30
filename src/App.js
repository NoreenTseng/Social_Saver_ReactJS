import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx'
import MenuBar from './components/MenuBar'
function App() {
    return (
        <Router>
            <div className="App">
                <AppRoutes />
                <MenuBar />
            </div>
        </Router>
    )
}

export default App
