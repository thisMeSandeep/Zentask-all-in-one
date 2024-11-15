
import { createRoot } from 'react-dom/client'
import './index.css'
import MyProvider from './routes/Route.jsx'
import NotesProvider from './contexts/notes/NotesContext.jsx'
import SidebarProvider from './contexts/sidebar/SidebarContext.jsx'
import WeatherProvider from './contexts/weather/WeatherContext.jsx'
import ThemeProvider from './contexts/theme/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <WeatherProvider>
      <SidebarProvider>
        <NotesProvider>
          <MyProvider />
        </NotesProvider>
      </SidebarProvider>
    </WeatherProvider>
  </ThemeProvider>
)
