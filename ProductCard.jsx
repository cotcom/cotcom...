import React, { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-700 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="bg-white text-[#1a1a1a] hover:bg-[#FF6600] hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-[#1a1a1a]">{product.name}</DialogTitle>
                  <DialogDescription>{product.category}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <p className="text-gray-700">{product.description}</p>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-[#1a1a1a]">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Stock disponible: {product.stock} unidades
                      </p>
                    </div>
                    <Button className="w-full bg-[#FF6600] hover:bg-[#e55a00] text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar al Carrito
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {product.stock < 10 && (
          <Badge className="absolute top-3 right-3 bg-[#FF6600] text-white">
            ¡Últimas unidades!
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <Badge className="mb-2 bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]">{product.category}</Badge>
        <h3 className="font-semibold text-lg text-[#1a1a1a] mb-2 line-clamp-1 group-hover:text-[#FF6600] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#FF6600]">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{product.stock} en stock</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-[#1a1a1a] hover:bg-[#FF6600] text-white transition-all duration-300 transform hover:scale-105"
          onClick={() => console.log('Agregar al carrito:', product.id)}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
