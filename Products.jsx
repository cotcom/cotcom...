import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/mockData';
import * as LucideIcons from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia selección de componentes de PC de las mejores marcas
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 text-lg border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
          />
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="Todos" className="w-full">
          <div className="overflow-x-auto mb-12">
            <TabsList className="inline-flex w-max bg-[#1a1a1a]/5 p-1 rounded-lg mb-4">
              <TabsTrigger
                value="Todos"
                onClick={() => setSelectedCategory('Todos')}
                className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white transition-all duration-300"
              >
                Todos ({products.length})
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className="data-[state=active]:bg-[#FF6600] data-[state=active]:text-white transition-all duration-300"
                >
                  <span className="mr-2">{getIcon(category.icon)}</span>
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Products Grid */}
          <TabsContent value={selectedCategory === 'Todos' ? 'Todos' : selectedCategory} className="mt-0">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-in fade-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">No se encontraron productos</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-[#FF6600]">{filteredProducts.length}</span> de{' '}
            <span className="font-semibold text-[#1a1a1a]">{products.length}</span> productos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
