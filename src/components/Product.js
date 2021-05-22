import React from "react";
import "../App.css";
import HamburguerImage from '../assets/images/hamburguer.jpg'
import sevenupImage from '../assets/images/7up.jpg'

const Product = (props) => {
  return (
    <div className="flex justify-evenly mx-24">
      {/* <div className=" border border-gray-500 w-48 flex">
        <div className="w-48 relative">
          <img src={HamburguerImage} alt="Image of our Hamburguer" className="flex-auto absolute inset-0 w-full h-full object-cover"/>
        </div>
        <form className="flex justify-end p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              American Burguer
            </h1>
            <div className="flex-auto text-xl font-semibold text-gray-500">
              29.95 PLN
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              Beef burguer on bun with onion, tomato, sla, cheese, mayonaise and ketchup. Large fries included.
            </div>
          </div>
        </form>
      </div> */}
      <div>
        <div className=" border border-gray-500 flex">
          <div className="flex-none w-48 relative">
            <img src={sevenupImage} alt="Image of our Hamburguer" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold">
                {props.name}
              </h1>
              <div className="text-xl font-semibold text-gray-500">
                4.99 PLN
              </div>
              <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                Beef burguer on bun with onion, tomato, sla, cheese, mayonaise and ketchup. Large fries included.
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className=" border border-gray-500 flex">
        <div className="flex-none w-48 relative">
          <img src={HamburguerImage} alt="Image of our Hamburguer" className="absolute inset-0 w-full h-full object-cover"/>
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              American Burguer
            </h1>
            <div className="text-xl font-semibold text-gray-500">
              29.95 PLN
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              Beef burguer on bun with onion, tomato, sla, cheese, mayonaise and ketchup. Large fries included.
            </div>
          </div>
        </form>
      </div>

      
      <div className=" border border-gray-500 flex">
        <div className="flex-none w-48 relative">
          <img src={HamburguerImage} alt="Image of our Hamburguer" className="absolute inset-0 w-full h-full object-cover"/>
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold">
              American Burguer
            </h1>
            <div className="text-xl font-semibold text-gray-500">
              29.95 PLN
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              Beef burguer on bun with onion, tomato, sla, cheese, mayonaise and ketchup. Large fries included.
            </div>
          </div>
        </form>
      </div>

        {/* <div className="bg-gray-500 h-64 flex justify-between mt-5">
          <div className="bg-yellow-500 p-4 m-2">1</div>
          <div className="bg-yellow-500 p-4 m-2">2</div>
          <div className="bg-yellow-500 p-4 m-2">3</div>
        </div> */}

    </div>
  )
}

export default Product


/*
<div class="box-border h-64 w-2/3 py-4 px-4 border-4 rounded mx-auto">
      <div class="flex flex-row">
        <div>
          <h1>
            <strong>Hamburguer</strong>
            <br></br><br></br>
            <p>
              Beef burguer on bun with onion, tomato, sla, cheese, mayonaise and ketchup. Large fries included.
            </p>
            <br></br>
            <h2><strong>10 PLN</strong></h2>
          </h1>
        </div>
        <div>
          <img src={HamburguerImage} alt="Image of our Hamburguer" className="object-none object-right w-2/3 h-24"></img>
        </div>
      </div>
    </div>
*/

/*export default function Product({ fixed }) {
  return (
    <div>
      
    </div>
  );
}*/

/*class MiComponent extends React.Component
{
  render()
  {
    return
    (
      <h1>Hola, soy el componente llamado: MiComponente</h1>
    )
  }
}


<h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price}</h3>

export default MiComponent;*/