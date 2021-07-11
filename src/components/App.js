import "tailwindcss/tailwind.css"
import FirstLogin from './FirstLogin'
import ScondLogin from './SecondLogin'
function App() {
  return (
    <div className="darkbackcolor bg-auto bg-h-screen">
    <FirstLogin/>
    <ScondLogin/>
    </div>
  );
}

export default App;