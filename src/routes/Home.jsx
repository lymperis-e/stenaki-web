import React from 'react'
import RouteBase from './RouteBase'
import { Link, animateScroll as scroll } from 'react-scroll';
import OpeningCountdown from '../components/OpeningCountdown';

function Home() {
  return (

    <RouteBase>
      <div className="min-h-screen h-100 bg-opacity-20">

        

        <main>
          <section className="py-12 prose h-screen">
            <div className="container min-m-40 mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Το Στενάκι</h2>

                  <p style={{ fontWeight: '300 !important' }} className="text-2xl mb-8">Τοπικά και βιώσιμα</p>


                  <Link className='btn btn-accent'
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >ΚΑΤΑΛΟΓΟΣ</Link>
                
                </div>

              </div>
            </div>
          </section>

          <section className="py-12 prose h-screen" id="menu">
            <div className="container min-m-40 mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Κατάλογος</h2>

                  <h3>Για πρωινό</h3>
                  <p className="text-2xl mb-8">
                    Σπιτικές πίτες φτιαγμένες στο τηγάνι
                    Ομελέτα με κολοκυθολούλουδα, φέτα και μάραθο
                    Πρωινό με μαρμελάδα τριαντάφυλλο και ντόπιο βούτυρο
                  </p>


                  <h3>Και το μεσημεράκι…</h3>
                    <ul>
                      <li>Παστουρμαδόπιτα στο τηγάνι</li>
                      <li>Λιαστές ντομάτες</li>
                      <li>Μπουγιουρντί</li>
                      <li>Στραπατσάδα</li>
                      <li>και διάφορα σαγανάκια</li>
                    </ul>



                  <h4>Μακαρονάδες- Κρέπες- Ομελέτες</h4>
                  
                    <ul>
                      <li>Σπαγγέτι με πάστα ελιάς σκόρδο και θυμάρι</li>
                      <li>Σπαγγέτι με τυρί, λιαστές ντομάτες και σάλτσα μελιτζάνας</li>
                      <li>Σπαγγέτι καρμπονάρα</li>
                      <li>Σπαγγέτι με τυρί και σάλτσα ντομάτας</li>
                      <li>Σπαγγέτι με βασιλικό και σκόρδο</li>
                      <li>Σπαγγέτι με κιμά</li>
                    </ul>

                    <ul>
                      <li>Κρέπα με καπνιστή γαλοπούλα, κασέρι και ντομάτα</li>
                      <li>Κρέπα με φέτα, ντομάτα, πιπεριά και ελιές</li>
                      <li>Κρέπα με καβουρμά, φέτα, ντομάτα και πιπεριά</li>
                      <li>Κρέπα με κοτόπουλο, τυριά και σάλτσα ροκφόρ</li>
                      <li>Κρέπα με κοτόπουλο, μπέικον και σάλτσα βασιλικού</li>
                    </ul>


                    <ul>
                      <li>Ομελέτα με τυρί και μπέικον</li>
                      <li>Ομελέτα με τυρί και χωριάτικο λουκάνικο</li>
                      <li>Αυγά με μπέικον και τηγανιτό κεφαλοτύρι</li>
                      <li>Ομελέτα με μάραθο, φέτα και κολοκυθολούλουδα</li>
                      <li>Ομελέτα με φέτα, ντομάτα πιπεριά και κρεμμύδι</li>
                      <li>Ομελέτα με καλαμποκάλευρο, φρέσκο κρεμμυδάκι, κεφαλοτύρι και ελιές</li>
                    </ul>

                

                  <a href="#menu" className='btn-accent'>ΚΑΤΑΛΟΓΟΣ</a>
                </div>

              </div>
            </div>
          </section>

        </main>


        <footer className="absolute bottom-0">
          <div className="container mx-auto py-4 px-6 mb-20 md:mb-0">
            <h1 className="text-2xl font-bold"></h1>
            <OpeningCountdown></OpeningCountdown>
          </div>
        </footer>

      </div>




    </RouteBase>

  )
}

export default Home