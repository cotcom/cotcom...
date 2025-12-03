import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Chrome } from 'lucide-react';

const Login = () => {
  const handleGoogleLogin = () => {
    // This will be implemented with backend integration
    const redirectUrl = encodeURIComponent(window.location.origin + '/dashboard');
    window.location.href = `https://auth.emergentagent.com/?redirect=${redirectUrl}`;
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/95 to-[#2d2d2d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#FF6600]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-gray-700 animate-in fade-in slide-in-from-bottom duration-700 bg-white">
            <CardHeader className="text-center space-y-4">
              {/* Logo */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-[#FF6600] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-3xl">PC</span>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-[#1a1a1a]">
                Bienvenido
              </CardTitle>
              <CardDescription className="text-base">
                Inicia sesión para acceder a tu cuenta y continuar comprando
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Google Login Button */}
              <Button
                onClick={handleGoogleLogin}
                className="w-full bg-white hover:bg-gray-50 text-[#1a1a1a] border-2 border-gray-300 hover:border-[#FF6600] transition-all duration-300 transform hover:scale-105 py-6 text-lg font-medium"
              >
                <Chrome className="w-6 h-6 mr-3" />
                Continuar con Google
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Inicio de sesión seguro</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6600] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Acceso rápido y seguro con tu cuenta de Google
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6600] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Guarda tus productos favoritos y rastrea tus pedidos
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF6600] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ofertas exclusivas y descuentos especiales para miembros
                  </p>
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center pt-4">
                Al iniciar sesión, aceptas nuestros{' '}
                <a href="#" className="text-[#FF6600] hover:underline">
                  Términos de Servicio
                </a>{' '}
                y{' '}
                <a href="#" className="text-[#FF6600] hover:underline">
                  Política de Privacidad
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="text-white hover:text-[#FF6600] transition-colors duration-300 text-sm font-medium"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
