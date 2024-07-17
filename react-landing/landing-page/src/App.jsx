import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './assets/navBar'
import Header from './assets/Header'
import Head from './assets/Head'
import bgImage from './assets/bg-showcase-1.jpg'
import Middle from './assets/Middle'
import Testimonials from './assets/Testimonials'
import Action from './assets/Action'
import Footer from './assets/Footer'

function App() {

  const data = [
    {
      item: "Fully Responsive",
      Description: "This theme will look great on any device, no matter the size!",
      icon: "bi-window m-auto text-primary"
    },
    {
      item: "Bootstrap 5 Ready",
      Description: "Featuring the latest build of the new Bootstrap 5 framework!",
      icon: "bi-layers m-auto text-primary"
    },
    {
      item: "Easy to Use",
      Description: "Ready to use with your own content, or customize the source files!",
      icon: "bi-terminal m-auto text-primary"
    }
  ]
  return <>
    <NavBar />
    <Header />
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {
            data.map((e, i) => {
              return <Head data={e} key={i} />

            })
          }


        </div>
      </div>
    </section>
    <Middle/>
    <Testimonials/>
    <Action/>
    <Footer/>



  </>
}

export default App
