import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Price from './price'


function App() {
  let data = [
    {
      category: "FREE",
      price : "$0",
      user: "Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      public:"Unlimited Public Projects",
      isPublic:true,
      comunity:"Community Access",
      isCommunity:true,
      Private:"Unlimited Private Projects",
      isPrivate:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      domain:"Free Subdomain",
      isDomain:false,
      report:"Monthly Status Reports",
      isReport:false
    },
    {
      category: "SILVER",
      price : "$9",
      user: "5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      public:"Unlimited Public Projects",
      isPublic:true,
      comunity:"Community Access",
      isCommunity:true,
      Private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      domain:"Free Subdomain",
      isDomain:true,
      report:"Monthly Status Reports",
      isReport:false
    },
    {
      category: "GOLD",
      price : "$49",
      user: "Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      public:"Unlimited Public Projects",
      isPublic:true,
      comunity:"Community Access",
      isCommunity:true,
      Private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      domain:"Unlimited Free Subdomains",
      isDomain:true,
      report:"Monthly Status Reports",
      isReport:true
    }

  ]
  return<>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      {data.map((e,i)=>{
        return <Price data = {e} key={i}/>
      })}
      
     
    </div>
  </div>
</section>
  </>
}

export default App
