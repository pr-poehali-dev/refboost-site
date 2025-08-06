import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  category: 'cards' | 'social' | 'reviews';
  difficulty: 'easy' | 'medium' | 'hard';
  timeRequired: number;
  requirements: string[];
  steps: string[];
  icon: string;
  color: string;
}

const TasksPage = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Оформить карту Тинькофф Платинум',
      description: 'Оформите бесплатную дебетовую карту Тинькофф и получите вознаграждение',
      reward: 2500,
      category: 'cards',
      difficulty: 'medium',
      timeRequired: 15,
      requirements: ['Возраст 18+', 'Паспорт РФ', 'Мобильный телефон'],
      steps: [
        'Перейдите по ссылке на сайт Тинькофф',
        'Заполните анкету для оформления карты',
        'Дождитесь SMS с подтверждением',
        'Отправьте скриншот подтверждения в наш бот'
      ],
      icon: 'CreditCard',
      color: 'yellow'
    },
    {
      id: '2',
      title: 'Подписаться на Telegram-канал "Финансы"',
      description: 'Подпишитесь на популярный канал о финансах и инвестициях',
      reward: 150,
      category: 'social',
      difficulty: 'easy',
      timeRequired: 2,
      requirements: ['Аккаунт Telegram'],
      steps: [
        'Перейдите по ссылке на канал',
        'Нажмите "Подписаться"',
        'Отправьте скриншот подписки в наш бот'
      ],
      icon: 'MessageCircle',
      color: 'blue'
    },
    {
      id: '3',
      title: 'Оставить отзыв на Яндекс.Картах',
      description: 'Оставьте честный отзыв о посещенном заведении',
      reward: 200,
      category: 'reviews',
      difficulty: 'easy',
      timeRequired: 5,
      requirements: ['Аккаунт Яндекс', 'Посещение заведения'],
      steps: [
        'Найдите заведение на Яндекс.Картах',
        'Нажмите "Оставить отзыв"',
        'Напишите подробный отзыв (минимум 100 символов)',
        'Отправьте ссылку на отзыв в наш бот'
      ],
      icon: 'Star',
      color: 'orange'
    },
    {
      id: '4',
      title: 'Оформить карту Сбербанка',
      description: 'Оформите дебетовую карту Сбербанка с кешбэком',
      reward: 3000,
      category: 'cards',
      difficulty: 'hard',
      timeRequired: 30,
      requirements: ['Возраст 18+', 'Паспорт РФ', 'Справка о доходах'],
      steps: [
        'Перейдите на сайт Сбербанка',
        'Выберите подходящую карту',
        'Заполните заявку онлайн',
        'Посетите офис для получения карты',
        'Отправьте фото карты в наш бот'
      ],
      icon: 'CreditCard',
      color: 'green'
    },
    {
      id: '5',
      title: 'Поставить лайк в Instagram',
      description: 'Поставьте лайки на последние 5 постов указанного аккаунта',
      reward: 50,
      category: 'social',
      difficulty: 'easy',
      timeRequired: 1,
      requirements: ['Аккаунт Instagram'],
      steps: [
        'Перейдите в указанный аккаунт',
        'Поставьте лайки на последние 5 постов',
        'Отправьте скриншоты в наш бот'
      ],
      icon: 'Heart',
      color: 'red'
    },
    {
      id: '6',
      title: 'Написать отзыв на Wildberries',
      description: 'Напишите отзыв о купленном товаре с фото',
      reward: 300,
      category: 'reviews',
      difficulty: 'medium',
      timeRequired: 10,
      requirements: ['Аккаунт Wildberries', 'Покупка товара'],
      steps: [
        'Найдите купленный товар в заказах',
        'Нажмите "Оставить отзыв"',
        'Напишите подробный отзыв с фото',
        'Отправьте скриншот отзыва в наш бот'
      ],
      icon: 'ShoppingBag',
      color: 'purple'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return 'Неизвестно';
    }
  };

  const getCategoryTasks = (category: string) => {
    return tasks.filter(task => task.category === category);
  };

  const handleTaskStart = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-montserrat text-3xl font-bold text-refboost-dark">
              Задания для заработка
            </h1>
            <p className="font-open-sans text-gray-600 mt-2">
              Выполняйте простые задания и получайте реальные деньги
            </p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="cards">Карты</TabsTrigger>
              <TabsTrigger value="social">Соцсети</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                  <Card key={task.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-10 h-10 bg-${task.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon name={task.icon as any} size={20} className={`text-${task.color}-600`} />
                        </div>
                        <Badge className={getDifficultyColor(task.difficulty)}>
                          {getDifficultyText(task.difficulty)}
                        </Badge>
                      </div>
                      <CardTitle className="font-montserrat text-lg">{task.title}</CardTitle>
                      <CardDescription className="font-open-sans">
                        {task.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Вознаграждение:</span>
                          <span className="font-bold text-green-600 text-lg">
                            {task.reward.toLocaleString()}₽
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Время:</span>
                          <span className="font-medium">{task.timeRequired} мин</span>
                        </div>
                        <Button 
                          onClick={() => handleTaskStart(task)}
                          className="w-full bg-refboost-primary hover:bg-refboost-primary/90 rounded-full"
                        >
                          Начать задание
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cards">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCategoryTasks('cards').map((task) => (
                  <Card key={task.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-10 h-10 bg-${task.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon name={task.icon as any} size={20} className={`text-${task.color}-600`} />
                        </div>
                        <Badge className={getDifficultyColor(task.difficulty)}>
                          {getDifficultyText(task.difficulty)}
                        </Badge>
                      </div>
                      <CardTitle className="font-montserrat text-lg">{task.title}</CardTitle>
                      <CardDescription className="font-open-sans">
                        {task.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Вознаграждение:</span>
                          <span className="font-bold text-green-600 text-lg">
                            {task.reward.toLocaleString()}₽
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Время:</span>
                          <span className="font-medium">{task.timeRequired} мин</span>
                        </div>
                        <Button 
                          onClick={() => handleTaskStart(task)}
                          className="w-full bg-refboost-primary hover:bg-refboost-primary/90 rounded-full"
                        >
                          Начать задание
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="social">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCategoryTasks('social').map((task) => (
                  <Card key={task.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-10 h-10 bg-${task.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon name={task.icon as any} size={20} className={`text-${task.color}-600`} />
                        </div>
                        <Badge className={getDifficultyColor(task.difficulty)}>
                          {getDifficultyText(task.difficulty)}
                        </Badge>
                      </div>
                      <CardTitle className="font-montserrat text-lg">{task.title}</CardTitle>
                      <CardDescription className="font-open-sans">
                        {task.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Вознаграждение:</span>
                          <span className="font-bold text-green-600 text-lg">
                            {task.reward.toLocaleString()}₽
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Время:</span>
                          <span className="font-medium">{task.timeRequired} мин</span>
                        </div>
                        <Button 
                          onClick={() => handleTaskStart(task)}
                          className="w-full bg-refboost-primary hover:bg-refboost-primary/90 rounded-full"
                        >
                          Начать задание
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCategoryTasks('reviews').map((task) => (
                  <Card key={task.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-10 h-10 bg-${task.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon name={task.icon as any} size={20} className={`text-${task.color}-600`} />
                        </div>
                        <Badge className={getDifficultyColor(task.difficulty)}>
                          {getDifficultyText(task.difficulty)}
                        </Badge>
                      </div>
                      <CardTitle className="font-montserrat text-lg">{task.title}</CardTitle>
                      <CardDescription className="font-open-sans">
                        {task.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Вознаграждение:</span>
                          <span className="font-bold text-green-600 text-lg">
                            {task.reward.toLocaleString()}₽
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-open-sans text-sm text-gray-600">Время:</span>
                          <span className="font-medium">{task.timeRequired} мин</span>
                        </div>
                        <Button 
                          onClick={() => handleTaskStart(task)}
                          className="w-full bg-refboost-primary hover:bg-refboost-primary/90 rounded-full"
                        >
                          Начать задание
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Модальное окно с деталями задания */}
          {selectedTask && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
              <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-${selectedTask.color}-100 rounded-full flex items-center justify-center`}>
                        <Icon name={selectedTask.icon as any} size={24} className={`text-${selectedTask.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="font-montserrat">{selectedTask.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getDifficultyColor(selectedTask.difficulty)}>
                            {getDifficultyText(selectedTask.difficulty)}
                          </Badge>
                          <span className="font-bold text-green-600">
                            {selectedTask.reward.toLocaleString()}₽
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setSelectedTask(null)}
                    >
                      <Icon name="X" size={20} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-montserrat font-bold mb-2">Описание</h3>
                    <p className="font-open-sans text-gray-700">{selectedTask.description}</p>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold mb-2">Требования</h3>
                    <ul className="space-y-1">
                      {selectedTask.requirements.map((req, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-green-500" />
                          <span className="font-open-sans text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold mb-2">Пошаговая инструкция</h3>
                    <ol className="space-y-2">
                      {selectedTask.steps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-refboost-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="font-open-sans text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-open-sans font-medium">Время выполнения:</span>
                      <span className="font-bold">{selectedTask.timeRequired} минут</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-open-sans font-medium">Вознаграждение:</span>
                      <span className="font-bold text-green-600 text-xl">
                        {selectedTask.reward.toLocaleString()}₽
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => setSelectedTask(null)}
                      variant="outline" 
                      className="flex-1 rounded-full"
                    >
                      Отмена
                    </Button>
                    <Button 
                      className="flex-1 bg-refboost-primary hover:bg-refboost-primary/90 rounded-full"
                      onClick={() => {
                        window.open('https://t.me/refboost_bot', '_blank');
                        setSelectedTask(null);
                      }}
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Начать в Telegram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TasksPage;