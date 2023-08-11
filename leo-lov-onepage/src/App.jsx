import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'
import { Footer } from './Components/Footer/Footer'

import aboutImageMoney from './images/money.jpg'
import aboutImageBuilding from './images/building.jpg'

const aboutInfoOne = {
  image: aboutImageMoney,
  header: 'INTET PROBLEM',
  textOne: 'Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.',
  textTwo:'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!'
}
const aboutInfoTwo = {
  image: aboutImageBuilding,
  header: 'HER BOR VI',
  textOne: 'Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.',
  textTwo:'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!'
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About image={aboutInfoOne.image} header={aboutInfoOne.header} textOne={aboutInfoOne.textOne} textTwo={aboutInfoOne.textTwo} reverse={false}/>
      <About image={aboutInfoTwo.image} header={aboutInfoTwo.header} textOne={aboutInfoTwo.textOne} textTwo={aboutInfoTwo.textTwo} reverse={true}/>
      <Footer />
    </>
  )
}

export default App
