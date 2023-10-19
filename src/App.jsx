import './App.css'
import Offer from './components/Offer'
import Footer from './sharedComponents/Footer'
import Hero from './sharedComponents/Hero'
import Topnav from './sharedComponents/Topnav'


function App() {

  return (
    <section>
      <header>
        <Topnav />
      </header>
      <main className='min-h-[100vh]'>
          <Hero/>
          <Offer/>
      </main>
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default App
