import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNav = true }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  if (!showNav) {
    return <div className="min-h-screen bg-white">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="font-montserrat text-2xl font-bold text-refboost-dark hover:text-refboost-primary transition-colors">
                РефБуст
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link 
                  to="/tasks"
                  className={`font-open-sans transition-colors ${
                    isActive('/tasks') ? 'text-refboost-primary' : 'text-gray-700 hover:text-refboost-primary'
                  }`}
                >
                  Хочу зарабатывать
                </Link>
                <Link 
                  to="/advertise"
                  className={`font-open-sans transition-colors ${
                    isActive('/advertise') ? 'text-refboost-primary' : 'text-gray-700 hover:text-refboost-primary'
                  }`}
                >
                  Рекламируй и зарабатывай
                </Link>
                <Link 
                  to="/jobs"
                  className={`font-open-sans transition-colors ${
                    isActive('/jobs') ? 'text-refboost-primary' : 'text-gray-700 hover:text-refboost-primary'
                  }`}
                >
                  Работа с бонусом
                </Link>
                <Link 
                  to="/promos"
                  className={`font-open-sans transition-colors ${
                    isActive('/promos') ? 'text-refboost-primary' : 'text-gray-700 hover:text-refboost-primary'
                  }`}
                >
                  Промокоды
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" className="rounded-full">
                  <Icon name="User" size={16} className="mr-2" />
                  Кабинет
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-6">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Войти через Telegram
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;