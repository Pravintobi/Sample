import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Toolbar from './components/Toolbar'
import Card from './components/Card'
import lipstic from '../src/assets/lip-stick.avif'
import gown from './assets/gowwn.webp'
import carrot from './assets/carrort.jpg'
import gun from './assets/gun.jpg'
import bay from './assets/bay-blade.jpg'
import mstone from './assets/stone.jpg'
import sward from './assets/sward.png'
import pend from './assets/pendent.webp'


function App() {
    let data = [
        {
            tittle: "LipStick",
            price:"$40.00 - $80.00",
            image: lipstic
        },
        {
            tittle: "Fancy Gown",
            price:"$20.00 $18.00",
            image:gown
        },
        {
            tittle: "Carrot",
            price:"$50.00 $25.00",
            image:carrot
        },
        {
            tittle: "Gun",
            price:"$40.00",
            image:gun
        },
        {
            tittle: "Bay-Blade",
            price:"$50.00 $25.00",
            image:bay
        },
        {
            tittle: "Mistery Stone",
            price:"$120.00 - $280.00",
            image:mstone
        },
        {
            tittle: "Super Sward",
            price:"$20.00 $18.00",
            image:sward
        },
        {
            tittle: "Pendend",
            price:"$40.00",
            image:pend
        }
    ]
    return <>
        <Toolbar />
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {data.map((e, i) => (
                        <Card data={e} key={i} />

                     ))}
                </div>
            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
        
        
  </>
}

export default App
