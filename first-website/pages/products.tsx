import { useNavigate } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { Navigation } from "../components/Navigation";

export function ProductsPage() {
    // const [Products, setProducts] = useState<Product[]>([])
    // const [loading, setLoading] = useState<boolean>(true)
    // const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate();
    
    const topProducts = products.slice(0, 4); // Show top 4 products


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#faf8f3]">
      {/* Header Banner */}
      <div className="relative bg-slate-900 text-white pt-30 py-16 max-h-8xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-slate-300 text-lg">
            Browse our complete collection of premium technology products
          </p>
        </div>
      </div>

      <div className="items-center justify-center max-w-7xl mx-auto px-4 pt-10">
                <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <button
                onClick={() => navigate("/")}
                className="bg-[#d4b996] hover:bg-[#c0a580] text-white font-bold py-2 px-4 rounded"
            >
                Home
            </button>
        </nav>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topProducts.map((item) => (
            <ProductCard 
                key={item.id}
                {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;