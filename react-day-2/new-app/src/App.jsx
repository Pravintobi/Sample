import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './card'


function App() {
  let data = [
    {
      title : "Tobi",
      image :"https://preview.redd.it/what-was-theorized-about-tobi-before-anything-was-revealed-v0-5hk1fbmmrfub1.jpg?width=640&crop=smart&auto=webp&s=300ee617b170f5a9eb4fea04fcb62e88f07eea11",
      description:"Obito Uchiha (Japanese: うちは オビト, Hepburn: Uchiha Obito), also known by his alias Tobi  is a character in Masashi Kishimoto's manga (and anime adaptation) Naruto. He is first introduced in a Kakashi Chronicle side story, as a young ninja who sacrifices himself to save his friends (Kakashi Hatake and Rin Nohara) from a cave-in. Although he was believed to have died in the 3rd Great Ninja War, Obito is later revealed as the real leader of the organization known as the Akatsuki,"
    },
    {
      title : "Pain",
      image :"https://i.pinimg.com/736x/a8/53/2d/a8532d837fb11ecab0281183e61a8ad9.jpg",
      description:"Nagato (Japanese: 長門), known primarily under the alias of Pain (ペイン, Pein), is a fictional character in the manga and anime series Naruto created by Masashi Kishimoto. Nagato is the figurehead leader of the Akatsuki who wishes to capture the tailed beasts sealed into various people around the shinobi world. After acquiring and sealing most of the beasts within a Gedo statue, Nagato's advisor advises him to capture the Nine-Tailed Demon Fox sealed inside the series' protagonist, Naruto Uzumaki (whom he turns out to be from the same clan). Before leaving to capture Naruto, Nagato engages in a mortal battle with his former mentor, Jiraiya. His past as a war orphan, and his loss of his best friend are explored. Due to his traumatic experiences, which stemmed from human conflict, Nagato aims to create a new world, free from the chaos of war. Nagato also appears in the series' "
    },
    {
      title : "Itachi",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbkr0tGYVoY0VRteghCTtUfIpohNDQQZDTxSm0-OwiqYV-VLypG3SvQR2jSk9hrGmOvM&usqp=CAUE",
      description:"Itachi Uchiha (うちは イタチ, Uchiha Itachi) is a character in the Naruto manga and anime series created by Masashi Kishimoto. Itachi is the older brother of Sasuke Uchiha, and is responsible for killing all the elder members of their clan, sparing only Sasuke. He appears working as a terrorist from the organisation Akatsuki and serves as Sasuke's greatest enemy. "
    }
  ]
  return <>
    {/* <!-- Page Content --> */}
    <div className="container">

      {/* <!-- Page Heading --> */}
      <h1 className="my-4">Akatsuki
        
      </h1>

      <div className="row">
      {
        data.map((e,i)=>{
          return <Card data={e} key={i}/>
        })
      }
      </div>
      {/* <!-- /.row --> */}




    </div>
  </>
}

export default App
