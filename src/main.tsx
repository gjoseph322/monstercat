import './style.css'
import ReactDOM  from 'react-dom/client'
import App from './App.js'
import './index.css'

const container = document.getElementById('root');
if (!container) throw new Error("No se encontró el elemento 'root"); // se hace para verificar por typescript
ReactDOM.createRoot(container).render(

  <App />

)
