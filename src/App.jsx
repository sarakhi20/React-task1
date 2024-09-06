import React from "react";
import Box from "./Box";
import "bootstrap/dist/css/bootstrap.css"

const App = () => {
  const data = [
    {
      title: "FREE",
      price: 0,
      features: [
        { name: "Single User", enable: true },
        { name: "50GB Stroage", enable: true },
        { name: "Unlimited Public Projects", enable: true },
        { name: "Community Accesss", enable: true },
        { name: "Unlimited Private Projects", enable: false },
        { name: "Dedicated Phone Support",enable: false },
        { name: "Free Subdomain",enable: false },
        { name: "Monthly Status Reports",enable: false },
      ],
    },
    {
      title: "PLUS",
      price: 9,
      features: [
        { name: "5 Users", enable: true },
        { name: "50GB Stroage", enable: true },
        { name: "Unlimited Public Projects", enable: true },
        { name: "Community Accesss", enable: true },
        { name: "Unlimited Private Projects", enable: true },
        { name: "Dedicated Phone Support", enable: true },
        { name: "Free Subdomain", enable: true },
        { name: "Monthly Status Reports", enable: false },
      ],
    },
    {
      title: "PRO",
      price: 49,
      features: [
        { name: "Unlimited Users",enable: true },
        { name: "50GB Stroage",enable: true },
        { name: "Unlimited Public Projects", enable: true },
        { name: "Community Accesss", enable: true },
        { name: "Unlimited Private Projects", enable: true },
        { name: "Dedicated Phone Support", enable: true },
        { name: "Free Subdomain", enable: true },
        { name: "Monthly Status Reports", enable: true },
      ],
    },
  ];

  return (
    <div className="container"  style={{backgroundColor: "blue"}} >
      <div className="row">
        
        {data.map((element, index) => {
          return <Box element={element} key={index} />;
        })}
        
      </div>
    </div>
    
  );
};

export default App;