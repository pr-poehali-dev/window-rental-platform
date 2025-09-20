import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const windowsData = [
  {
    id: 1,
    title: 'Панорамное окно в центре',
    description: 'Роскошное панорамное окно с видом на центр города',
    price: 15000,
    location: 'Центр города',
    size: '4x3 м',
    type: 'Жилое',
    image: '/img/381157d2-526d-4591-afde-fc339a0a785b.jpg',
    rating: 4.8,
    available: true
  },
  {
    id: 2,
    title: 'Офисное окно с видом',
    description: 'Современное офисное окно в бизнес-центре',
    price: 25000,
    location: 'Деловой район',
    size: '3x2.5 м',
    type: 'Коммерческое',
    image: '/img/c18e0c5c-11ab-4943-bc5c-f0b93b9df4e8.jpg',
    rating: 4.9,
    available: true
  },
  {
    id: 3,
    title: 'Витрина кафе',
    description: 'Уютная витрина кафе с большим потоком людей',
    price: 12000,
    location: 'Пешеходная зона',
    size: '2.5x3 м',
    type: 'Ретейл',
    image: '/img/31935384-a040-449d-b6e6-fd0d121f8d9f.jpg',
    rating: 4.7,
    available: true
  }
];

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [balance, setBalance] = useState(50000);
  const [rentals, setRentals] = useState<any[]>([]);

  const handleRent = (windowItem: any) => {
    if (balance >= windowItem.price) {
      setBalance(prev => prev - windowItem.price);
      setRentals(prev => [...prev, { ...windowItem, rentedAt: new Date().toLocaleDateString() }]);
      alert(`Окно "${windowItem.title}" успешно арендовано!`);
    } else {
      alert('Недостаточно средств на балансе');
    }
  };

  const addFunds = (amount: number) => {
    setBalance(prev => prev + amount);
    alert(`Баланс пополнен на ${amount.toLocaleString()} ₽`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                WindowRent
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                <Icon name="Wallet" className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-700">{balance.toLocaleString()} ₽</span>
              </div>
              <Icon name="User" className="h-8 w-8 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="main" className="flex items-center space-x-2">
              <Icon name="Home" className="h-4 w-4" />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="catalog" className="flex items-center space-x-2">
              <Icon name="Grid3X3" className="h-4 w-4" />
              <span className="hidden sm:inline">Каталог</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <Icon name="User" className="h-4 w-4" />
              <span className="hidden sm:inline">Кабинет</span>
            </TabsTrigger>
            <TabsTrigger value="rentals" className="flex items-center space-x-2">
              <Icon name="Calendar" className="h-4 w-4" />
              <span className="hidden sm:inline">Аренды</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center space-x-2">
              <Icon name="CreditCard" className="h-4 w-4" />
              <span className="hidden sm:inline">Пополнить</span>
            </TabsTrigger>
          </TabsList>

          {/* Главная страница */}
          <TabsContent value="main" className="space-y-8">
            <div className="text-center py-12 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Арендуйте лучшие окна в городе</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Уникальная платформа для аренды окон с лучшими видами и локациями
              </p>
              <Button 
                onClick={() => setActiveTab('catalog')} 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
              >
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Лучшие локации</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Окна в самых престижных районах города</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Полная страховка и гарантия качества</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>24/7 поддержка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Круглосуточная техническая поддержка</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Популярные окна</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {windowsData.slice(0, 3).map((window) => (
                  <Card key={window.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={window.image} 
                        alt={window.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        Доступно
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{window.title}</CardTitle>
                      <CardDescription>{window.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Размер:</span>
                        <span className="font-medium">{window.size}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Тип:</span>
                        <Badge variant="outline">{window.type}</Badge>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{window.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-primary">
                        {window.price.toLocaleString()} ₽
                      </div>
                      <Button onClick={() => handleRent(window)} className="bg-primary hover:bg-primary/90">
                        Арендовать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Каталог окон */}
          <TabsContent value="catalog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Каталог окон</h2>
              <div className="flex items-center space-x-4">
                <Icon name="Filter" className="h-5 w-5 text-gray-500" />
                <span className="text-muted-foreground">Найдено: {windowsData.length} окон</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {windowsData.map((window) => (
                <Card key={window.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up">
                  <div className="relative">
                    <img 
                      src={window.image} 
                      alt={window.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      Доступно
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{window.title}</CardTitle>
                    <CardDescription>{window.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Локация:</span>
                      <span className="font-medium">{window.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Размер:</span>
                      <span className="font-medium">{window.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Тип:</span>
                      <Badge variant="outline">{window.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{window.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {window.price.toLocaleString()} ₽
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => handleRent(window)} 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Арендовать окно
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Личный кабинет */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="User" className="h-6 w-6" />
                  <span>Личный кабинет</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Имя</label>
                    <p className="text-lg font-medium">Иван Петров</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="text-lg font-medium">ivan@example.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Телефон</label>
                    <p className="text-lg font-medium">+7 (999) 123-45-67</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Баланс</label>
                    <p className="text-lg font-bold text-green-600">{balance.toLocaleString()} ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Статистика</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{rentals.length}</div>
                    <div className="text-sm text-muted-foreground">Активных аренд</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">12</div>
                    <div className="text-sm text-muted-foreground">Всего аренд</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent">4.8</div>
                    <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Мои аренды */}
          <TabsContent value="rentals" className="space-y-6">
            <h2 className="text-3xl font-bold">Мои аренды</h2>
            
            {rentals.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Icon name="Calendar" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Пока нет активных аренд</h3>
                  <p className="text-muted-foreground mb-6">Посмотрите наш каталог и выберите идеальное окно</p>
                  <Button onClick={() => setActiveTab('catalog')}>
                    Перейти к каталогу
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {rentals.map((rental, index) => (
                  <Card key={index}>
                    <div className="relative">
                      <img 
                        src={rental.image} 
                        alt={rental.title}
                        className="w-full h-32 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        Активна
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{rental.title}</CardTitle>
                      <CardDescription>Арендовано: {rental.rentedAt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Стоимость:</span>
                        <span className="font-bold text-primary">{rental.price.toLocaleString()} ₽</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Пополнение баланса */}
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="CreditCard" className="h-6 w-6" />
                  <span>Пополнение баланса</span>
                </CardTitle>
                <CardDescription>
                  Текущий баланс: <span className="font-bold text-green-600">{balance.toLocaleString()} ₽</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4">Быстрое пополнение</h4>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {[5000, 10000, 25000, 50000].map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        onClick={() => addFunds(amount)}
                        className="p-6 h-auto flex flex-col items-center space-y-2 hover:bg-primary/5"
                      >
                        <span className="text-2xl font-bold text-primary">
                          {amount.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">рублей</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Способы оплаты</h4>
                  <div className="grid gap-3 md:grid-cols-3">
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="flex items-center space-x-3">
                        <Icon name="CreditCard" className="h-6 w-6" />
                        <span>Банковская карта</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="flex items-center space-x-3">
                        <Icon name="Smartphone" className="h-6 w-6" />
                        <span>SBP</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="flex items-center space-x-3">
                        <Icon name="Wallet" className="h-6 w-6" />
                        <span>Электронные деньги</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;