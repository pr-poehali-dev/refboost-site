import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const LandingPage = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const targetEarnings = 26781;
    const duration = 3000;
    const steps = 60;
    const increment = targetEarnings / steps;
    
    const timer = setInterval(() => {
      setEarnings(prev => {
        const next = prev + increment;
        if (next >= targetEarnings) {
          clearInterval(timer);
          return targetEarnings;
        }
        return next;
      });
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="font-montserrat text-2xl font-bold text-refboost-dark hover:text-refboost-primary transition-colors">
                РефБуст
              </Link>
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={() => scrollToSection('earn')}
                  className="text-gray-700 hover:text-refboost-primary transition-colors font-open-sans"
                >
                  Хочу зарабатывать
                </button>
                <button 
                  onClick={() => scrollToSection('advertise')}
                  className="text-gray-700 hover:text-refboost-primary transition-colors font-open-sans"
                >
                  Рекламируй и зарабатывай
                </button>
                <button 
                  onClick={() => scrollToSection('jobs')}
                  className="text-gray-700 hover:text-refboost-primary transition-colors font-open-sans"
                >
                  Работа с бонусом
                </button>
                <button 
                  onClick={() => scrollToSection('promos')}
                  className="text-gray-700 hover:text-refboost-primary transition-colors font-open-sans"
                >
                  Промокоды
                </button>
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

      {/* Главная секция */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-refboost-dark mb-6 animate-fade-in">
            Зарабатывай легко с РефБуст!
          </h1>
          <p className="font-open-sans text-xl text-gray-600 mb-8 animate-fade-in">
            Твой старт к деньгам
          </p>
          
          <Link to="/tasks">
            <Button 
              size="lg" 
              className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-8 py-4 text-lg mb-16 animate-scale-in"
            >
              Начать зарабатывать
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>

          {/* Блок с тремя кнопками */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Link to="/tasks">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-refboost-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckSquare" size={32} className="text-refboost-primary" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">Выполняй задания</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-600">
                    Простые задания на оформление карт, подписки и лайки
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in" onClick={() => scrollToSection('advertise')}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-refboost-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Share2" size={32} className="text-refboost-secondary" />
                </div>
                <CardTitle className="font-montserrat text-xl">Рекламируй и зарабатывай</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Делись ссылками и публикуй посты в соцсетях
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in" onClick={() => scrollToSection('jobs')}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-refboost-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" size={32} className="text-refboost-blue" />
                </div>
                <CardTitle className="font-montserrat text-xl">Работа с бонусом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Найди вакансию и получи бонус от РефБуст
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Счетчик заработка */}
          <div className="bg-gradient-to-r from-refboost-primary to-refboost-secondary rounded-2xl p-8 text-white mb-16 animate-slide-up">
            <h3 className="font-montserrat text-2xl font-bold mb-4">С нами уже заработали</h3>
            <div className="font-montserrat text-4xl md:text-5xl font-bold">
              {Math.floor(earnings).toLocaleString()} ₽
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-refboost-dark mb-8">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="text-left font-open-sans">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-refboost-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      Е
                    </div>
                    <span>Екатерина: Могу ли я зарабатывать с телефона?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-refboost-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      Р
                    </div>
                    <p className="font-open-sans text-gray-700">
                      <strong>РефБуст:</strong> Конечно! Вы можете зарабатывать с любого устройства!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="text-left font-open-sans">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-refboost-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      А
                    </div>
                    <span>Антон: Сколько нужно вложить?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-refboost-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      Р
                    </div>
                    <p className="font-open-sans text-gray-700">
                      <strong>РефБуст:</strong> Нисколько! Все задания бесплатны, а заработок реальный.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="text-left font-open-sans">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-refboost-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      М
                    </div>
                    <span>Мария: Когда я получу деньги?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-refboost-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      Р
                    </div>
                    <p className="font-open-sans text-gray-700">
                      <strong>РефБуст:</strong> После проверки задания мы сразу перечислим на карту или кошелек.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-refboost-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-montserrat text-3xl font-bold mb-4">
              Готов начать зарабатывать?
            </h2>
            <p className="font-open-sans text-gray-300 mb-6">
              Присоединяйся к тысячам пользователей, которые уже зарабатывают с РефБуст
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Присоединиться
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 rounded-full">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram
            </Button>
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 rounded-full">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              WhatsApp
            </Button>
          </div>
          
          <div className="text-center">
            <div className="font-montserrat text-2xl font-bold mb-4">РефБуст</div>
            <p className="font-open-sans text-gray-400">
              © 2024 РефБуст. Твой старт к деньгам.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;