import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"

import Home from './routes/Home'

function App() {

  return (

    <>
      <BrowserRouter basename="/stenaki-web/">
        <Routes>
          <Route path="/" element={<NavbarComponent />}>

            <Route index element={<Home />} />
            {/*<Route  path="/contact" element={<Contact />} />*/}

          </Route>
        </Routes>
      </BrowserRouter>
      {/*<FooterComponent/>*/}
    </>

  )
}

export default App
