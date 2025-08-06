import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // Анимация счетчика заработка
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
              <div className="font-montserrat text-2xl font-bold text-refboost-dark">
                РефБуст
              </div>
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
            <Button className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-6">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Войти через Telegram
            </Button>
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
          
          <Button 
            onClick={() => scrollToSection('earn')}
            size="lg" 
            className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-8 py-4 text-lg mb-16 animate-scale-in"
          >
            Начать зарабатывать
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>

          {/* Блок с тремя кнопками */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in" onClick={() => scrollToSection('earn')}>
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

      {/* Секция "Хочу зарабатывать" */}
      <section id="earn" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-refboost-dark text-center mb-8">
            Хочу зарабатывать
          </h2>
          <p className="font-open-sans text-xl text-gray-600 text-center mb-12">
            Выполняй простые задания и получай деньги! Оформи карту, подпишись на канал, поставь лайк — и заработай прямо сегодня
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={24} className="text-yellow-600" />
                </div>
                <CardTitle className="font-montserrat">Оформление карт банков</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Оформи банковские карты наших партнеров и получай до 3000₽ за карту
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="font-montserrat">Подписки на Telegram-каналы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Подпишись на каналы наших партнеров и получай до 200₽ за подписку
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-red-600" />
                </div>
                <CardTitle className="font-montserrat">Лайки и комментарии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Ставь лайки и оставляй комментарии в соцсетях, получай до 50₽ за действие
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h3 className="font-montserrat text-2xl font-bold text-refboost-dark mb-6">Как это работает?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-refboost-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <p className="font-open-sans text-gray-700">Нажми на задание</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-refboost-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <p className="font-open-sans text-gray-700">Выполни условия</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-refboost-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p className="font-open-sans text-gray-700">Отправь подтверждение в Telegram-бот</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-8 py-4">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Перейти к заданиям
            </Button>
          </div>
        </div>
      </section>

      {/* Секция "Рекламируй и зарабатывай" */}
      <section id="advertise" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-refboost-dark text-center mb-8">
            Рекламируй и зарабатывай
          </h2>
          <p className="font-open-sans text-xl text-gray-600 text-center mb-12">
            Делись ссылками, публикуй посты в соцсетях и зарабатывай деньги! РефБуст платит за продвижение
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Share2" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="font-montserrat">Рекламные посты</CardTitle>
                <CardDescription>Telegram, ВКонтакте</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Публикуй наши посты и сторис в своих аккаунтах, получай до 500₽ за пост
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-green-600" />
                </div>
                <CardTitle className="font-montserrat">Реферальные ссылки</CardTitle>
                <CardDescription>Приглашай друзей</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Получай процент с заработка приглашенных пользователей — до 20% навсегда
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="font-montserrat">Бонусы за активность</CardTitle>
                <CardDescription>Дополнительные награды</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600">
                  Чем активнее рекламируешь, тем больше бонусов получаешь
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="font-montserrat text-2xl font-bold text-refboost-dark mb-6">Шаблон рекламного поста</h3>
            <div className="bg-white p-6 rounded-lg border-l-4 border-refboost-primary">
              <p className="font-open-sans text-gray-700 mb-4">
                💰 Зарабатываю легко с РефБуст!<br/>
                ✅ Простые задания<br/>
                ✅ Быстрые выплаты<br/>
                ✅ Никаких вложений<br/><br/>
                Присоединяйся по моей ссылке: [ТВОЯ_ССЫЛКА]
              </p>
              <Button variant="outline" className="rounded-full">
                <Icon name="Copy" size={16} className="mr-2" />
                Скопировать текст
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-refboost-secondary hover:bg-refboost-secondary/90 text-white font-medium rounded-full px-8 py-4">
              <Icon name="Zap" size={20} className="mr-2" />
              Начать рекламировать
            </Button>
          </div>
        </div>
      </section>

      {/* Секция "Работа с бонусом" */}
      <section id="jobs" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-refboost-dark text-center mb-8">
            Работа с бонусом
          </h2>
          <p className="font-open-sans text-xl text-gray-600 text-center mb-12">
            Найди вакансию, выполни простые условия, получи зарплату и бонус от РефБуст
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Briefcase" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="font-montserrat">Менеджер по продажам</CardTitle>
                    <CardDescription>Удаленная работа • от 40 000₽</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600 mb-4">
                  Работай менеджером в партнерской компании и получи бонус 5000₽ от РефБуст при трудоустройстве
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Icon name="Gift" size={16} className="mr-1" />
                  Бонус: 5 000₽
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Code" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="font-montserrat">Junior разработчик</CardTitle>
                    <CardDescription>Гибрид • от 60 000₽</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-open-sans text-gray-600 mb-4">
                  Начни карьеру разработчика в IT-компании партнере и получи стартовый бонус от РефБуст
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Icon name="Gift" size={16} className="mr-1" />
                  Бонус: 7 000₽
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <h3 className="font-montserrat text-2xl font-bold text-refboost-dark mb-6">Условия получения бонуса</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Icon name="Check" size={20} className="text-green-500 mt-1" />
                <p className="font-open-sans text-gray-700">Успешное прохождение собеседования</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Check" size={20} className="text-green-500 mt-1" />
                <p className="font-open-sans text-gray-700">Работа не менее 3 месяцев</p>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Check" size={20} className="text-green-500 mt-1" />
                <p className="font-open-sans text-gray-700">Подтверждение трудоустройства</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-refboost-blue hover:bg-refboost-blue/90 text-white font-medium rounded-full px-8 py-4">
              <Icon name="Search" size={20} className="mr-2" />
              Выбрать вакансию
            </Button>
          </div>
        </div>
      </section>

      {/* Секция "Промокоды" */}
      <section id="promos" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-4xl font-bold text-refboost-dark text-center mb-8">
            Промокоды
          </h2>
          <p className="font-open-sans text-xl text-gray-600 text-center mb-12">
            Используй актуальные промокоды наших партнеров и экономь
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Wildberries",
                discount: "Скидка 15%",
                code: "REFBOOST15",
                icon: "ShoppingBag",
                color: "purple"
              },
              {
                title: "Яндекс.Такси",
                discount: "3 поездки -50%",
                code: "REFRIDE50",
                icon: "Car",
                color: "yellow"
              },
              {
                title: "Delivery Club",
                discount: "Скидка 300₽",
                code: "REF300",
                icon: "Utensils",
                color: "orange"
              },
              {
                title: "M.Video",
                discount: "Скидка 10%",
                code: "TECH10",
                icon: "Monitor",
                color: "blue"
              },
              {
                title: "Lamoda",
                discount: "Скидка 20%",
                code: "FASHION20",
                icon: "Shirt",
                color: "pink"
              },
              {
                title: "Ozon",
                discount: "Скидка 12%",
                code: "OZON12",
                icon: "Package",
                color: "blue"
              }
            ].map((promo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 bg-${promo.color}-100 rounded-full flex items-center justify-center`}>
                      <Icon name={promo.icon as any} size={20} className={`text-${promo.color}-600`} />
                    </div>
                    <span className={`px-3 py-1 bg-${promo.color}-100 text-${promo.color}-700 rounded-full text-sm font-medium`}>
                      {promo.discount}
                    </span>
                  </div>
                  <CardTitle className="font-montserrat">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="font-mono text-center font-bold text-lg">{promo.code}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full"
                    onClick={() => navigator.clipboard.writeText(promo.code)}
                  >
                    <Icon name="Copy" size={16} className="mr-2" />
                    Скопировать промокод
                  </Button>
                </CardContent>
              </Card>
            ))}
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
            <Button size="lg" className="bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Присоединиться
            </Button>
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

export default Index;