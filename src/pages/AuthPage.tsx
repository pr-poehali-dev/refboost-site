import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [telegramUsername, setTelegramUsername] = useState('');
  const navigate = useNavigate();

  const handleTelegramAuth = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        id: '123',
        username: telegramUsername || 'user123',
        firstName: 'Пользователь',
        balance: 0,
        level: 1,
        completedTasks: 0,
        referrals: 0
      }));
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-refboost-primary/5 to-refboost-secondary/5 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="font-montserrat text-4xl font-bold text-refboost-dark mb-4">
              Добро пожаловать!
            </h1>
            <p className="font-open-sans text-gray-600">
              Войди в РефБуст и начни зарабатывать уже сегодня
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-refboost-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-refboost-primary" />
              </div>
              <CardTitle className="font-montserrat text-2xl">Вход через Telegram</CardTitle>
              <CardDescription className="font-open-sans">
                Безопасный и быстрый способ входа в систему
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="telegram" className="font-open-sans">
                  Telegram Username (опционально)
                </Label>
                <Input
                  id="telegram"
                  placeholder="@username"
                  value={telegramUsername}
                  onChange={(e) => setTelegramUsername(e.target.value)}
                  className="rounded-lg"
                />
              </div>

              <Button 
                onClick={handleTelegramAuth}
                disabled={isLoading}
                className="w-full bg-refboost-primary hover:bg-refboost-primary/90 text-white font-medium rounded-full py-6 text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Подключение к Telegram...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Icon name="MessageCircle" size={20} className="mr-3" />
                    Войти через Telegram
                  </div>
                )}
              </Button>

              <div className="text-center">
                <p className="font-open-sans text-sm text-gray-600">
                  Нажимая "Войти", вы соглашаетесь с нашими условиями использования
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-montserrat font-bold text-lg mb-4 text-center">
              Преимущества регистрации
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-green-600" />
                </div>
                <p className="font-open-sans text-sm">Доступ ко всем заданиям</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-green-600" />
                </div>
                <p className="font-open-sans text-sm">Отслеживание заработка</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-green-600" />
                </div>
                <p className="font-open-sans text-sm">Реферальная программа</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-green-600" />
                </div>
                <p className="font-open-sans text-sm">Быстрые выплаты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;