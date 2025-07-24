import React from 'react';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    title: 'Oral Dosage',
    items: ['Tablets', 'Capsules', 'Syrups', 'Powders', 'Sachets'],
  },
  {
    title: 'Topical',
    items: ['Ointments'],
  },
  {
    title: 'Other',
    items: ['Injections', 'Drops', 'Combipack', 'Others'],
  },
];

const ProductRangeDropdown = () => (
  <div className="bg-white text-gray-900 shadow-2xl rounded-xl min-w-[700px] border border-black">
    <div className="px-8 py-8 grid grid-cols-3 gap-8">
      {productCategories.map((cat) => (
        <div key={cat.title}>
          <h4 className="font-bold mb-4 border-b border-gray-200 pb-2 text-lg">{cat.title}</h4>
          <ul>
            {cat.items.map((item) => (
              <li key={item} className="mb-2">
                <Link
                  to={`/products/${item.toLowerCase()}`}
                  className="hover:text-medical-blue cursor-pointer text-base transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default ProductRangeDropdown;