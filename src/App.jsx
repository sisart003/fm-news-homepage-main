import Navbar from './components/Navbar';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
function App() {
  return (
    <div className="grid px-4 pt-6 pb-20 sm:grid-cols-6 gap-4 lg:px-24 lg:py-8">
     <Navbar />
     <Main />
     <Sidebar />
     <Products />
    </div>
  )
}

export default App
