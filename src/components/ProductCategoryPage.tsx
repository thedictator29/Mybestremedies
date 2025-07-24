import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layout/Layout";

// Example data for demonstration. Add an 'image' property if you have real images.
const productsData: Record<string, { name: string; Description: string; image?: string }[]> = {
  tablets: [
    { name: "Paracetamol", Description: "₹50", image: "https://via.placeholder.com/100" },
    { name: "Ibuprofen", Description: "₹60", image: "https://via.placeholder.com/100" },
  ],
  capsules: [
    { name: "Amoxicillin", Description: "₹80", image: "https://via.placeholder.com/100" },
    { name: "Doxycycline", Description: "₹90", image: "https://via.placeholder.com/100" },
  ],
  syrups: [
    { name: "Cough Syrup", Description: "₹40", image: "https://via.placeholder.com/100" },
  ],
  injections: [
    { name: "Vitamin B12 Injection", Description: "₹120", image: "https://via.placeholder.com/100" },
  ],
  powders: [
    { name: "ORS Powder", Description: "₹20", image: "https://via.placeholder.com/100" },
  ],
  sachets: [
    { name: "Protein Sachet", Description: "₹30", image: "https://via.placeholder.com/100" },
  ],
  ointments: [
    { name: "Antibiotic Ointment", Description: "₹70", image: "https://via.placeholder.com/100" },
  ],
  drops: [
    { name: "Eye Drops", Description: "₹35", image: "https://via.placeholder.com/100" },
  ],
  combipack: [
    { name: "Combo Pack 1", Description: "₹150", image: "https://via.placeholder.com/100" },
  ],
  others: [
    { name: "Herbal Tonic", Description: "₹100", image: "https://via.placeholder.com/100" },
  ],
};

const ProductCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = productsData[category?.toLowerCase() || ""] || [];

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {category} Catalogue
        </h1>
        {products.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
              <div
                key={prod.name}
                className="bg-white rounded-xl shadow flex flex-col items-center justify-center p-4 aspect-square"
              >
                <img
                  src={prod.image || "https://via.placeholder.com/100"}
                  alt={prod.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <div className="text-lg font-mono mb-2">{prod.name}</div>
                <div className="text-blue-600 font-semibold">{prod.Description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductCategoryPage;