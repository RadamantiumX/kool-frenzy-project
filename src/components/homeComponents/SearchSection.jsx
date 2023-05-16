import React from "react";
import Design from '../../assets/icons/design.png';
import Quality from '../../assets/icons/quality.png';
import SafePay from '../../assets/icons/safe-pay.png';


export default function SearchSection() {
    return(
        <>
        <div className="search-section">
            <div className="title-box">
                
                    <h2>
                        ¿Que diseño tenes en mente?
                    </h2>
                
            </div>
            <div className="search-box">
            <form className="search-form">
                <input className="input-search" type="text" />
                <button className="button-gen btn btn-success w-60 br-25"><i class="fa-solid fa-magnifying-glass"></i> Buscar</button>
            </form>
            </div>

            <div className="under-box bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          
            <div  className="box-inner mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia neque dolore ut ipsum quasi!</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <img className="img-icon" src={Quality} alt="quality t-shirts"/>
              </dd>
            </div>

            <div  className="box-inner mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, dolores alias pariatur animi doloremque eos?</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <img className="img-icon" src={Design} alt="Design t-shirts"/>
              </dd>
            </div>

            <div  className="box-inner mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum ad ex quae delectus maxime.</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <img className="img-icon" src={SafePay} alt="Safe pay t-shirts"/>
              </dd>
            </div>
        
        </dl>
      </div>
    </div>

        </div>
        </>
    )
}