import LeftMain from './LeftMain';
import RightMain from './RightMain';
import "tailwindcss/tailwind.css"

function App() {
    return (
    <div className="w-screen darkbackcolor">
        <div className="mx-auto md:flex md:justify-between px-auto">     
            <LeftMain/>
            <RightMain/>
        </div>
    </div>
    );
  }
  
  export default App;