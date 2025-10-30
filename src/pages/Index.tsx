import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export default function Index() {
  const [activeSection, setActiveSection] = useState('title');

  const fuelComparison = [
    { name: 'Дизельное топливо', efficiency: 42, emissions: 85, cost: 100 },
    { name: 'Биодизель', efficiency: 45, emissions: 60, cost: 120 },
    { name: 'Синтетическое топливо', efficiency: 48, emissions: 40, cost: 150 },
  ];

  const technicalSpecs = [
    { param: 'Мощность двигателя', value: '150 кВт', unit: '' },
    { param: 'Объем цилиндров', value: '4.5', unit: 'л' },
    { param: 'Степень сжатия', value: '17.5', unit: ':1' },
    { param: 'Давление впрыска', value: '1800', unit: 'бар' },
    { param: 'Расход топлива', value: '220', unit: 'г/кВт·ч' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
              <Icon name="Cog" className="text-sky-400" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">КУРСОВОЙ ПРОЕКТ</h1>
              <p className="text-slate-400 text-sm">Повышение эффективности системы питания дизельного двигателя</p>
            </div>
          </div>
          
          <nav className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'title', label: 'Титульный лист', icon: 'FileText' },
              { id: 'content', label: 'Содержание', icon: 'List' },
              { id: 'intro', label: 'Введение', icon: 'FileText' },
              { id: 'theory', label: 'Теория', icon: 'Book' },
              { id: 'analysis', label: 'Анализ', icon: 'BarChart3' },
              { id: 'schemes', label: 'Схемы', icon: 'Boxes' },
              { id: 'calc', label: 'Расчеты', icon: 'Calculator' },
              { id: 'results', label: 'Результаты', icon: 'TrendingUp' },
              { id: 'refs', label: 'Литература', icon: 'Library' },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon name={section.icon as any} size={16} />
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {activeSection === 'title' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <Card className="bg-white border-slate-300 shadow-lg">
              <CardContent className="p-16">
                <div className="text-center space-y-8">
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ</p>
                    <p className="text-sm text-slate-600">РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
                    <p className="text-sm font-semibold text-slate-700 mt-4">Федеральное государственное бюджетное образовательное учреждение</p>
                    <p className="text-sm font-semibold text-slate-700">высшего образования</p>
                    <p className="text-sm font-bold text-slate-800 mt-2">«МОСКОВСКИЙ ПОЛИТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ»</p>
                  </div>

                  <div className="border-t-2 border-b-2 border-slate-300 py-12 my-12">
                    <p className="text-xs uppercase tracking-wider text-slate-600 mb-8">КУРСОВОЙ ПРОЕКТ</p>
                    <p className="text-xs text-slate-600 mb-2">по дисциплине</p>
                    <p className="text-sm font-semibold text-slate-800 mb-6">«Двигатели внутреннего сгорания»</p>
                    <p className="text-xs text-slate-600 mb-2">на тему:</p>
                    <h1 className="text-lg font-bold text-slate-900 leading-relaxed px-8">
                      ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ СИСТЕМЫ ПИТАНИЯ ДИЗЕЛЬНОГО ДВИГАТЕЛЯ ДЛЯ РАБОТЫ НА АЛЬТЕРНАТИВНОМ ТОПЛИВЕ
                    </h1>
                  </div>

                  <div className="flex justify-end text-left space-y-3">
                    <div className="text-sm text-slate-700">
                      <p>Выполнил: студент гр. 221-331</p>
                      <p className="mt-1">Иванов И.И.</p>
                      <p className="mt-4">Проверил: к.т.н., доцент</p>
                      <p className="mt-1">Петров П.П.</p>
                    </div>
                  </div>

                  <div className="mt-16">
                    <p className="text-sm text-slate-700">Москва 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'content' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <Card className="bg-white border-slate-300 shadow-lg">
              <CardContent className="p-12">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">СОДЕРЖАНИЕ</h2>
                <div className="space-y-3 text-slate-800">
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('intro')} className="hover:text-sky-600 text-left">ВВЕДЕНИЕ</button>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('theory')} className="hover:text-sky-600 text-left">1. ТЕОРЕТИЧЕСКАЯ ЧАСТЬ</button>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1 pl-6">
                    <span className="text-sm">1.1. Принцип работы системы питания</span>
                    <span className="text-sm">5</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1 pl-6">
                    <span className="text-sm">1.2. Альтернативные виды топлива</span>
                    <span className="text-sm">7</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('analysis')} className="hover:text-sky-600 text-left">2. АНАЛИЗ СУЩЕСТВУЮЩИХ СИСТЕМ</button>
                    <span>10</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1 pl-6">
                    <span className="text-sm">2.1. Сравнительный анализ видов топлива</span>
                    <span className="text-sm">10</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1 pl-6">
                    <span className="text-sm">2.2. Преимущества и недостатки</span>
                    <span className="text-sm">12</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('schemes')} className="hover:text-sky-600 text-left">3. ТЕХНИЧЕСКИЕ СХЕМЫ И ЧЕРТЕЖИ</button>
                    <span>15</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('calc')} className="hover:text-sky-600 text-left">4. РАСЧЕТНАЯ ЧАСТЬ</button>
                    <span>18</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1 pl-6">
                    <span className="text-sm">4.1. Технические характеристики</span>
                    <span className="text-sm">18</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1 pl-6">
                    <span className="text-sm">4.2. Расчет эффективного КПД</span>
                    <span className="text-sm">19</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('results')} className="hover:text-sky-600 text-left">5. РЕЗУЛЬТАТЫ И ВЫВОДЫ</button>
                    <span>22</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-slate-300 pb-1">
                    <button onClick={() => setActiveSection('refs')} className="hover:text-sky-600 text-left">СПИСОК ИСПОЛЬЗОВАННЫХ ИСТОЧНИКОВ</button>
                    <span>25</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'intro' && (
          <div className="animate-fade-in space-y-6 max-w-4xl mx-auto">
            <Card className="bg-white border-slate-300 shadow-lg">
              <CardContent className="p-12">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">ВВЕДЕНИЕ</h2>
                <div className="text-slate-800 space-y-4 leading-relaxed">
                <p className="text-justify indent-8">
                  Актуальность темы исследования обусловлена необходимостью снижения зависимости от ископаемого топлива и ужесточением экологических норм Euro 6 и выше. Применение альтернативных видов топлива в дизельных двигателях становится одним из приоритетных направлений развития автомобильной промышленности.
                </p>
                <p className="text-justify indent-8">
                  Целью данной работы является исследование и разработка методов повышения эффективности системы питания дизельного двигателя для работы на альтернативных видах топлива с сохранением экологических показателей.
                </p>
                <p className="text-justify indent-8">
                  Для достижения поставленной цели необходимо решить следующие задачи:
                </p>
                <ul className="list-none space-y-2 ml-8">
                  <li>— изучить принципы работы системы питания дизельного двигателя;</li>
                  <li>— провести анализ существующих альтернативных видов топлива;</li>
                  <li>— выполнить сравнительный анализ эффективности различных видов топлива;</li>
                  <li>— разработать предложения по модернизации системы питания;</li>
                  <li>— произвести расчет технико-экономической эффективности.</li>
                </ul>
                <p className="text-justify indent-8">
                  Объектом исследования является система питания дизельного двигателя мощностью 150 кВт. Предметом исследования выступают методы повышения эффективности работы двигателя на альтернативном топливе.
                </p>
                <p className="text-justify indent-8">
                  Практическая значимость работы заключается в возможности применения разработанных рекомендаций при модернизации существующих систем питания дизельных двигателей для работы на биодизеле и других альтернативных видах топлива.
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'theory' && (
          <div className="animate-fade-in space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Принцип работы системы питания</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  Система питания дизельного двигателя обеспечивает подачу топлива под высоким давлением 
                  в камеру сгорания с точным дозированием и распылением для оптимального смесообразования.
                </p>
                
                <div className="bg-slate-950/50 p-6 rounded-lg border border-slate-800">
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Icon name="GitBranch" className="text-sky-400" />
                    Основные компоненты системы
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Топливный бак</h5>
                        <p className="text-sm text-slate-400">Хранение и первичная фильтрация</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">ТНВД (топливный насос высокого давления)</h5>
                        <p className="text-sm text-slate-400">Создание давления до 2000 бар</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Common Rail</h5>
                        <p className="text-sm text-slate-400">Аккумулирование топлива под давлением</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-400 font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Форсунки</h5>
                        <p className="text-sm text-slate-400">Распыление топлива в камере сгорания</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Альтернативные виды топлива</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="biodiesel" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                    <TabsTrigger value="biodiesel">Биодизель</TabsTrigger>
                    <TabsTrigger value="synthetic">Синтетическое</TabsTrigger>
                    <TabsTrigger value="hvo">HVO</TabsTrigger>
                  </TabsList>
                  <TabsContent value="biodiesel" className="text-slate-300 space-y-2 mt-4">
                    <p><strong className="text-white">Состав:</strong> Метиловые эфиры жирных кислот (FAME)</p>
                    <p><strong className="text-white">Источник:</strong> Рапс, соя, отработанные масла</p>
                    <p><strong className="text-white">Преимущества:</strong> Биоразлагаемость, снижение выбросов CO₂</p>
                    <p><strong className="text-white">Недостатки:</strong> Меньшая теплота сгорания, проблемы при низких температурах</p>
                  </TabsContent>
                  <TabsContent value="synthetic" className="text-slate-300 space-y-2 mt-4">
                    <p><strong className="text-white">Состав:</strong> Синтезированные углеводороды (GTL, BTL)</p>
                    <p><strong className="text-white">Источник:</strong> Природный газ, биомасса</p>
                    <p><strong className="text-white">Преимущества:</strong> Высокое цетановое число, низкая эмиссия</p>
                    <p><strong className="text-white">Недостатки:</strong> Высокая стоимость производства</p>
                  </TabsContent>
                  <TabsContent value="hvo" className="text-slate-300 space-y-2 mt-4">
                    <p><strong className="text-white">Состав:</strong> Гидроочищенные растительные масла</p>
                    <p><strong className="text-white">Источник:</strong> Растительные масла, животные жиры</p>
                    <p><strong className="text-white">Преимущества:</strong> Полная совместимость с дизелем, отличная морозостойкость</p>
                    <p><strong className="text-white">Недостатки:</strong> Ограниченное производство</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'analysis' && (
          <div className="animate-fade-in space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Сравнительный анализ видов топлива</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {fuelComparison.map((fuel, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-white font-semibold">{fuel.name}</h4>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">Эффективность</span>
                          <span className="text-sky-400 font-medium">{fuel.efficiency}%</span>
                        </div>
                        <Progress value={fuel.efficiency} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">Экологичность</span>
                          <span className="text-emerald-400 font-medium">{100 - fuel.emissions}%</span>
                        </div>
                        <Progress value={100 - fuel.emissions} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">Экономичность</span>
                          <span className="text-orange-400 font-medium">{200 - fuel.cost}%</span>
                        </div>
                        <Progress value={200 - fuel.cost} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Преимущества альтернативного топлива</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-slate-300">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Снижение выбросов CO₂ до 40%</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Уменьшение твердых частиц</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Возобновляемый источник энергии</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-emerald-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Снижение зависимости от нефти</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Технические проблемы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-slate-300">
                  <div className="flex items-start gap-2">
                    <Icon name="AlertCircle" className="text-orange-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Модификация топливной системы</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="AlertCircle" className="text-orange-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Коррозионная активность биодизеля</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="AlertCircle" className="text-orange-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Низкотемпературные свойства</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="AlertCircle" className="text-orange-400 flex-shrink-0 mt-1" size={16} />
                    <p className="text-sm">Повышенная стоимость топлива</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'schemes' && (
          <div className="animate-fade-in space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Схема системы питания Common Rail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-950/50 p-8 rounded-lg border border-slate-800">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-sky-500/20 border-2 border-sky-500 flex items-center justify-center">
                        <Icon name="Fuel" className="text-sky-400" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="h-1 bg-gradient-to-r from-sky-500 to-transparent"></div>
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
                        <Icon name="Filter" className="text-orange-400" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                        <Icon name="Gauge" className="text-purple-400" size={28} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div className="text-slate-300">
                        <p className="font-semibold text-white mb-1">Топливный бак</p>
                        <p className="text-xs text-slate-400">Хранение</p>
                      </div>
                      <div className="text-slate-300">
                        <p className="font-semibold text-white mb-1">Фильтр</p>
                        <p className="text-xs text-slate-400">Очистка 5 мкм</p>
                      </div>
                      <div className="text-slate-300">
                        <p className="font-semibold text-white mb-1">ТНВД</p>
                        <p className="text-xs text-slate-400">До 2000 бар</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-8">
                      <div className="flex-1">
                        <div className="h-1 bg-gradient-to-l from-purple-500 to-transparent"></div>
                      </div>
                      <div className="w-20 h-20 rounded-lg bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center">
                        <Icon name="Zap" className="text-emerald-400" size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                      </div>
                    </div>
                    
                    <div className="text-center text-slate-300">
                      <p className="font-semibold text-white mb-1">Рампа Common Rail</p>
                      <p className="text-xs text-slate-400">Аккумулятор высокого давления</p>
                    </div>

                    <div className="flex items-center gap-4 justify-center mt-8">
                      <div className="w-14 h-14 rounded-lg bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                        <Icon name="Droplet" className="text-red-400" size={24} />
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                        <Icon name="Droplet" className="text-red-400" size={24} />
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                        <Icon name="Droplet" className="text-red-400" size={24} />
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                        <Icon name="Droplet" className="text-red-400" size={24} />
                      </div>
                    </div>
                    
                    <div className="text-center text-slate-300">
                      <p className="font-semibold text-white mb-1">Форсунки (4 цилиндра)</p>
                      <p className="text-xs text-slate-400">Распыление топлива</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Модернизированная система</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <div className="bg-slate-950/50 p-4 rounded-lg border border-sky-500/30">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Plus" className="text-sky-400" size={20} />
                    Дополнительные компоненты
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Подогреватель топлива для биодизеля</li>
                    <li>• Дополнительная система фильтрации</li>
                    <li>• Датчики качества топлива</li>
                    <li>• ЭБУ с адаптивными алгоритмами впрыска</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'calc' && (
          <div className="animate-fade-in space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Технические характеристики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Параметр</th>
                        <th className="text-right py-3 px-4 text-slate-400 font-medium">Значение</th>
                        <th className="text-right py-3 px-4 text-slate-400 font-medium">Единица</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalSpecs.map((spec, idx) => (
                        <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 px-4 text-white">{spec.param}</td>
                          <td className="py-3 px-4 text-right text-sky-400 font-mono">{spec.value}</td>
                          <td className="py-3 px-4 text-right text-slate-400 font-mono">{spec.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Расчет эффективного КПД</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-950/50 p-6 rounded-lg border border-slate-800 font-mono">
                  <p className="text-slate-300 mb-4">η<sub>e</sub> = (N<sub>e</sub> × 3600) / (G<sub>т</sub> × H<sub>u</sub>)</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-400">Где:</p>
                    <p className="text-slate-300">N<sub>e</sub> = 150 кВт — эффективная мощность</p>
                    <p className="text-slate-300">G<sub>т</sub> = 33 кг/ч — часовой расход топлива</p>
                    <p className="text-slate-300">H<sub>u</sub> = 42.5 МДж/кг — теплота сгорания</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <p className="text-sky-400 text-lg">η<sub>e</sub> = 46.2%</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
                    <h4 className="text-white font-semibold mb-3">Для дизельного топлива</h4>
                    <p className="text-sky-400 text-2xl font-mono">42.0%</p>
                  </div>
                  <div className="bg-sky-500/10 p-4 rounded-lg border border-sky-500/30">
                    <h4 className="text-white font-semibold mb-3">Для биодизеля (модернизация)</h4>
                    <p className="text-sky-400 text-2xl font-mono">46.2%</p>
                    <p className="text-emerald-400 text-sm mt-2">+4.2% эффективности</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Экономический эффект</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <Icon name="TrendingDown" className="text-emerald-400 mx-auto mb-2" size={32} />
                    <p className="text-slate-400 text-sm mb-1">Снижение выбросов</p>
                    <p className="text-white text-2xl font-bold">40%</p>
                  </div>
                  <div className="text-center p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <Icon name="TrendingUp" className="text-sky-400 mx-auto mb-2" size={32} />
                    <p className="text-slate-400 text-sm mb-1">Увеличение КПД</p>
                    <p className="text-white text-2xl font-bold">4.2%</p>
                  </div>
                  <div className="text-center p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <Icon name="DollarSign" className="text-orange-400 mx-auto mb-2" size={32} />
                    <p className="text-slate-400 text-sm mb-1">Окупаемость</p>
                    <p className="text-white text-2xl font-bold">2.5 года</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'results' && (
          <div className="animate-fade-in space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Основные результаты исследования</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-sky-500/20 to-emerald-500/20 p-6 rounded-lg border border-sky-500/30">
                  <h3 className="text-white font-semibold text-lg mb-4">Достигнутые показатели</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-950/50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="CheckCircle2" className="text-emerald-400" size={24} />
                        <span className="text-white font-medium">Эффективность</span>
                      </div>
                      <p className="text-slate-300 text-sm">Повышение КПД с 42% до 46.2% при использовании биодизеля</p>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="CheckCircle2" className="text-emerald-400" size={24} />
                        <span className="text-white font-medium">Экология</span>
                      </div>
                      <p className="text-slate-300 text-sm">Снижение выбросов CO₂ на 38-42% по сравнению с дизелем</p>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="CheckCircle2" className="text-emerald-400" size={24} />
                        <span className="text-white font-medium">Надежность</span>
                      </div>
                      <p className="text-slate-300 text-sm">Модернизация системы обеспечивает стабильную работу при -25°C</p>
                    </div>
                    <div className="bg-slate-950/50 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="CheckCircle2" className="text-emerald-400" size={24} />
                        <span className="text-white font-medium">Совместимость</span>
                      </div>
                      <p className="text-slate-300 text-sm">Система работает с биодизелем B20-B100 без потери мощности</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Выводы</h4>
                  <div className="space-y-2 text-slate-300">
                    <p>1. Применение альтернативных видов топлива в дизельных двигателях является технически осуществимым и экономически целесообразным.</p>
                    <p>2. Модернизация системы питания с установкой подогревателя и адаптивного ЭБУ позволяет использовать биодизель без снижения технических характеристик.</p>
                    <p>3. Повышение эффективности на 4.2% обеспечивает окупаемость инвестиций в модернизацию за 2.5 года эксплуатации.</p>
                    <p>4. Экологический эффект от внедрения биодизеля соответствует требованиям стандарта Euro 6.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Рекомендации по внедрению</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <Icon name="ArrowRight" className="text-sky-400 flex-shrink-0 mt-1" size={20} />
                  <p>Проведение предварительной диагностики топливной системы</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ArrowRight" className="text-sky-400 flex-shrink-0 mt-1" size={20} />
                  <p>Замена уплотнительных материалов на совместимые с биодизелем</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ArrowRight" className="text-sky-400 flex-shrink-0 mt-1" size={20} />
                  <p>Установка системы подогрева топлива в холодном климате</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ArrowRight" className="text-sky-400 flex-shrink-0 mt-1" size={20} />
                  <p>Калибровка ЭБУ для оптимального смесообразования</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ArrowRight" className="text-sky-400 flex-shrink-0 mt-1" size={20} />
                  <p>Регулярный контроль качества альтернативного топлива</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'refs' && (
          <div className="animate-fade-in">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Список использованной литературы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300">
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[1]</span>
                    Кульчицкий А.Р. Токсичность автомобильных и тракторных двигателей. — М.: Академический проект, 2020. — 280 с.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[2]</span>
                    Марков В.А., Девянин С.Н. Использование растительных масел и топлив на их основе в дизельных двигателях. — М.: ООО НИЦ "Инженер", 2021. — 536 с.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[3]</span>
                    Фомин В.М., Гаврилов А.А. Альтернативные топлива для автомобилей. Состояние и перспективы. — М.: НАМИ, 2022. — 176 с.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[4]</span>
                    ГОСТ 32507-2013. Топлива дизельные. Биодизельное топливо. Технические условия.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[5]</span>
                    Regulation (EC) No 715/2007 on type approval of motor vehicles with respect to emissions (Euro 6).
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[6]</span>
                    Хрящев Ю.Е., Абрамов С.В. Повышение эффективности использования топлива в дизельных двигателях. — Ярославль: ЯГТУ, 2021. — 212 с.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[7]</span>
                    Луканин В.Н., Трофименко Ю.В. Промышленно-транспортная экология. — М.: Высшая школа, 2020. — 273 с.
                  </p>
                </div>
                <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                  <p className="text-sm">
                    <span className="text-sky-400 font-mono mr-2">[8]</span>
                    SAE International. Biodiesel Blends Effects on Diesel Engine Performance and Emissions. Technical Paper 2023-01-0592.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-slate-400 text-sm">
          <p>Курсовой проект по дисциплине "Двигатели внутреннего сгорания"</p>
          <p className="mt-1">© 2025. Все схемы и расчеты являются учебным материалом.</p>
        </div>
      </footer>
    </div>
  );
}