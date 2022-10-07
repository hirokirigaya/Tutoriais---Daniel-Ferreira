import useLocalStorage from "use-local-storage"
import './App.css'
function App() {
  const defaultTheme = window.matchMedia('(prefers-colors-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="container" data-theme={theme}>
      <h1>Hello World!</h1>
      <button onClick={switchTheme}>Click Me</button>
    </div>
  )
}

export default App
