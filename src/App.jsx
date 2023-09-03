import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import History from './components/History'
import Curiosity from './components/Curiosity'
import MainCharacters from './components/MainCharacters'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import { Container } from 'react-bootstrap'
import stylesGallery from './components/Gallery/Gallery.module.css'

function App() {
  const[data, setData] = useState([])
  let counter = 0;

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => setData(data.results))
  })

  return (
    <>
      <Header />
      <div className='bg-default'>
        <History />
        <Curiosity />
        <MainCharacters />

        <h2 className= 'title titleGallery' id='galeria'>Galeria</h2>
        
        <div className={stylesGallery.gallery} >
          <Container className={stylesGallery.container}>
            
            {data.map(item => (
              <Gallery name={item.name} mass={item.mass} hair_color={item.hair_color} skin_color={item.skin_color} eye_color={item.eye_color} birth_year={item.birth_year} gender={item.gender} key={counter++}/>
            ))}
          </Container>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
