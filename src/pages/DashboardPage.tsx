import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

interface User {
  id: string;
  username: string;
  firstName: string;
  balance: number;
  level: number;
  completedTasks: number;
  referrals: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning';
  timestamp: Date;
  read: boolean;
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/auth');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    // Симуляция данных
    setNotifications([
      {
        id: '1',
        title: 'Добро пожаловать!',
        message: 'Вы успешно зарегистрировались в РефБуст',
        type: 'success',
        timestamp: new Date(),
        read: false
      },
      {
        id: '2',
        title: 'Новые задания',
        message: 'Доступно 5 новых заданий для выполнения',
        type: 'info',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        read: false
      }
    ]);

    setAchievements([
      {
        id: '1',
        title: 'Первые шаги',
        description: 'Выполните первое задание',
        icon: 'Target',
        unlocked: false,
        progress: 0,
        maxProgress: 1
      },
      {
        id: '2',
        title: 'Активный пользователь',
        description: 'Выполните 10 заданий',
        icon: 'Award',
        unlocked: false,
        progress: 0,
        maxProgress: 10
      },
      {
        id: '3',
        title: 'Рекламщик',
        description: 'Пригласите 5 друзей',
        icon: 'Users',
        unlocked: false,
        progress: 0,
        maxProgress: 5
      },
      {
        id: '4',
        title: 'Богач',
        description: 'Заработайте 10 000₽',
        icon: 'DollarSign',
        unlocked: false,
        progress: 0,
        maxProgress: 10000
      }
    ]);
  }, [navigate]);

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const getNextLevelExp = (level: number) => {
    return level * 100;
  };

  const getLevelProgress = (completedTasks: number, level: number) => {
    const currentLevelExp = (level - 1) * 100;
    const nextLevelExp = level * 100;
    const progress = completedTasks - currentLevelExp;
    return Math.min((progress / (nextLevelExp - currentLevelExp)) * 100, 100);
  };

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-refboost-primary"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="font-montserrat text-3xl font-bold text-refboost-dark">
              Добро пожаловать, {user.firstName}!
            </h1>
            <p className="font-open-sans text-gray-600 mt-2">
              Ваш личный кабинет РефБуст
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Баланс</CardTitle>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" size={16} className="text-green-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {user.balance.toLocaleString()}₽
                </div>
                <p className="text-xs text-muted-foreground">
                  Доступно для вывода
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Уровень</CardTitle>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Trophy" size={16} className="text-blue-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {user.level}
                </div>
                <div className="space-y-2">
                  <Progress value={getLevelProgress(user.completedTasks, user.level)} />
                  <p className="text-xs text-muted-foreground">
                    До уровня {user.level + 1}: {getNextLevelExp(user.level) - user.completedTasks} заданий
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Выполнено заданий</CardTitle>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="CheckSquare" size={16} className="text-purple-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {user.completedTasks}
                </div>
                <p className="text-xs text-muted-foreground">
                  Всего заданий
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Рефералы</CardTitle>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={16} className="text-orange-600" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {user.referrals}
                </div>
                <p className="text-xs text-muted-foreground">
                  Приглашено друзей
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Уведомления */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center">
                  <Icon name="Bell" size={20} className="mr-2" />
                  Уведомления
                </CardTitle>
                <CardDescription>
                  Последние новости и обновления
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        notification.read 
                          ? 'bg-gray-50 border-gray-200' 
                          : 'bg-white border-refboost-primary/20 shadow-sm'
                      }`}
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{notification.title}</h4>
                            {!notification.read && (
                              <Badge variant="secondary" className="bg-refboost-primary text-white">
                                Новое
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            {notification.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Достижения */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat flex items-center">
                  <Icon name="Award" size={20} className="mr-2" />
                  Достижения
                </CardTitle>
                <CardDescription>
                  Ваш прогресс и награды
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border transition-all ${
                        achievement.unlocked 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.unlocked 
                            ? 'bg-green-100' 
                            : 'bg-gray-200'
                        }`}>
                          <Icon 
                            name={achievement.icon as any} 
                            size={20} 
                            className={achievement.unlocked ? 'text-green-600' : 'text-gray-400'} 
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                          <div className="mt-2">
                            <Progress 
                              value={(achievement.progress / achievement.maxProgress) * 100} 
                              className="h-2"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              {achievement.progress} / {achievement.maxProgress}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Быстрые действия */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-montserrat">Быстрые действия</CardTitle>
              <CardDescription>
                Начните зарабатывать прямо сейчас
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => navigate('/tasks')}
                  className="bg-refboost-primary hover:bg-refboost-primary/90 rounded-full h-12"
                >
                  <Icon name="Target" size={16} className="mr-2" />
                  Выполнить задание
                </Button>
                <Button 
                  onClick={() => navigate('/advertise')}
                  variant="outline" 
                  className="rounded-full h-12"
                >
                  <Icon name="Share2" size={16} className="mr-2" />
                  Пригласить друга
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full h-12"
                  onClick={() => {
                    const referralLink = `https://refboost.ru/ref/${user.id}`;
                    navigator.clipboard.writeText(referralLink);
                    setNotifications(prev => [...prev, {
                      id: Date.now().toString(),
                      title: 'Ссылка скопирована',
                      message: 'Реферальная ссылка скопирована в буфер обмена',
                      type: 'success',
                      timestamp: new Date(),
                      read: false
                    }]);
                  }}
                >
                  <Icon name="Copy" size={16} className="mr-2" />
                  Копировать реф. ссылку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;