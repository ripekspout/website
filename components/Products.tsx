import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

export function Products() {
    const navigate = useNavigate();
    console.log(products[3].images[0]);


    return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#faf8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-6 sm:mb-8">
            Customer favorites
          </p>
          <button 
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          onClick={() => navigate('products')}
          >
            Explore all products
          </button>
        </div>

        {/* Masonry/Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Product 1 - Large Left */}
              {products[0].images[0] == undefined || products[0].images[0].length == 0 ? 
              (
                <div className="lg:col-span-5 lg:row-span-2">
                  <div className="coming-soon-placeholder">
                  <span className="coming-soon-icon">📦</span>
                  <h3>Coming Soon</h3>
                  <p>{products[0].name}</p>
                </div>
                </div>

              ) : (
                <div className="lg:col-span-5 lg:row-span-2 group cursor-pointer" onClick={() => navigate(`/products/${products[0].id}`)}>
                  <div className="relative h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={products[0].images[0]}
                    alt={products[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-medium opacity-80">{products[0].category}</span>
                      <h3 className="text-2xl font-bold mt-1 mb-2">{products[0].name}</h3>
                      <p className="text-sm opacity-90 mb-3">{products[0].description}</p>
                  </div>
                </div>
                </div>
              )}

          {/* Product 2 - Top Right */}
          {products[1].images[0] == undefined || products[1].images[0].length == 0 ?
          ( 
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="coming-soon-placeholder">
                <span className="coming-soon-icon">📦</span>
                <h3>Coming Soon</h3>              
              </div>
            </div>
          ) : (
          <div className="lg:col-span-7 group cursor-pointer" onClick={() => navigate(`/products/${products[1].id}`)}>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[250px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <img
                src={products[1].images[0]}
                alt={products[1].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium opacity-80">{products[1].category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{products[1].name}</h3>
                <p className="text-sm opacity-90 mb-2">{products[1].description}</p>
                {/* <span className="text-lg font-bold">{products[1].price}</span> */}
              </div>
            </div>
          </div>
          )}

          {/* Product 3 - Bottom Left of Right Section */}
          {products[2].images[0] == undefined ||  products[2].images[0].length == 0 ? 
          (
            <div className="lg:col-span-4 group cursor-pointer">
              <div className="coming-soon-placeholder">
                <span className="coming-soon-icon">📦</span>
                <h3>Coming Soon</h3>
              </div>
            </div>
          ) : (
          <div className="lg:col-span-4 group cursor-pointer" onClick={() => navigate(`/products/${products[2].id}`)}>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              
              <img
                src={products[2].images[0]}
                alt={products[2].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium opacity-80">{products[2].category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{products[2].name}</h3>
                <p className="text-sm opacity-90 mb-2">{products[2].description}</p>
                {/* <span className="text-lg font-bold">{products[2].price}</span> */}
              </div>
            </div>
          </div>
          )}

          {/* Product 4 - Bottom Right */}
              {products[3].images[0] == undefined || products[3].images[0].length == 0 ? 
              (      
              <div className="lg:col-span-3 group cursor-pointer">
                <div className="coming-soon-placeholder">
                  <span className="coming-soon-icon">📦</span>
                    <h3>Coming Soon</h3>
                </div>
              </div>
              ) : (

              <div className="lg:col-span-3 group cursor-pointer" onClick={() => navigate(`/products/${products[3].id}`)}>
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img
                      src={products[3].images[0]}
                      alt={products[3].name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-medium opacity-80">{products[3].category}</span>
                      <h3 className="text-lg font-bold mt-1 mb-2">{products[3].name}</h3>
                      <p className="text-xs opacity-90 mb-2">{products[3].description}</p>
                      {/* <span className="text-lg font-bold">{products[3].price}</span> */}
                    </div>
                  </div>
              </div>
              )}
          </div>
        </div>
    </section>
    );
}