import React from "react";
import '../../styles/homeStyles/homeStyles.css';
import { Link } from "react-router-dom";


const products = [
    {
      id: 1,
      name: 'Basic Tee1',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      link:'/product'
    },
    {
        id: 2,
        name: 'Basic Tee2',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        link:'/product'
      },
      {
        id: 3,
        name: 'Basic Tee3',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        link:'/product'
      },
      {
        id: 4,
        name: 'Basic Tee4',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        link:'/product'
      },
    // More products...
  ]

export default function MidSection() {
    return(
    <>
    <div className="bg-dark">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white-900">Ultimos diseños</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
           <Link to={product.link}> <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-white-900">{product.price}</p>
              </div>
            </div></Link>
          ))}
        </div>
        <Link to="/products"><button className="btn btn-danger w-15"><i class="fa-solid fa-plus"></i> Ver mas</button></Link>
      </div>
      
    </div>
    </>
    )
}