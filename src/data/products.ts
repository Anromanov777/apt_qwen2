export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'rolls' | 'pizza';
  weight?: string;
  size?: string;
  popular?: boolean;
}

export const products: Product[] = [
  // Роллы
  {
    id: 1,
    name: 'Филадельфия',
    description: 'Нежный лосось, сливочный сыр, огурец, рис, нори',
    price: 450,
    image: '🍣',
    category: 'rolls',
    weight: '250г',
    popular: true,
  },
  {
    id: 2,
    name: 'Калифорния',
    description: 'Крабовое мясо, авокадо, огурец, тобико, рис',
    price: 420,
    image: '🍣',
    category: 'rolls',
    weight: '240г',
    popular: true,
  },
  {
    id: 3,
    name: 'Дракон',
    description: 'Угорь, авокадо, огурец, унаги соус, кунжут',
    price: 520,
    image: '🐉',
    category: 'rolls',
    weight: '280г',
    popular: true,
  },
  {
    id: 4,
    name: 'Спайси лосось',
    description: 'Острый лосось, сливочный сыр, зелёный лук',
    price: 380,
    image: '🌶️',
    category: 'rolls',
    weight: '230г',
  },
  {
    id: 5,
    name: 'Темпура ролл',
    description: 'Креветка в темпуре, авокадо, сливочный сыр',
    price: 490,
    image: '🍤',
    category: 'rolls',
    weight: '260г',
  },
  {
    id: 6,
    name: 'Вулкан',
    description: 'Запечённый ролл с лососем, сливочным сыром и соусом спайси',
    price: 470,
    image: '🌋',
    category: 'rolls',
    weight: '270г',
    popular: true,
  },
  {
    id: 7,
    name: 'Радуга',
    description: 'Лосось, тунец, угорь, авокадо, огурец, тобико',
    price: 550,
    image: '🌈',
    category: 'rolls',
    weight: '290г',
  },
  {
    id: 8,
    name: 'Цезарь ролл',
    description: 'Курица гриль, салат романо, пармезан, соус цезарь',
    price: 410,
    image: '🥗',
    category: 'rolls',
    weight: '250г',
  },
  // Пицца
  {
    id: 9,
    name: 'Маргарита',
    description: 'Томатный соус, моцарелла, свежий базилик, оливковое масло',
    price: 490,
    image: '🍕',
    category: 'pizza',
    size: '30 см',
    popular: true,
  },
  {
    id: 10,
    name: 'Пепперони',
    description: 'Томатный соус, моцарелла, пикантная пепперони',
    price: 550,
    image: '🍕',
    category: 'pizza',
    size: '30 см',
    popular: true,
  },
  {
    id: 11,
    name: 'Четыре сыра',
    description: 'Моцарелла, горгонзола, пармезан, чеддер',
    price: 590,
    image: '🧀',
    category: 'pizza',
    size: '30 см',
    popular: true,
  },
  {
    id: 12,
    name: 'Гавайская',
    description: 'Томатный соус, моцарелла, ветчина, ананасы',
    price: 520,
    image: '🍍',
    category: 'pizza',
    size: '30 см',
  },
  {
    id: 13,
    name: 'Мясная',
    description: 'Томатный соус, моцарелла, бекон, ветчина, пепперони, говядина',
    price: 650,
    image: '🥩',
    category: 'pizza',
    size: '30 см',
    popular: true,
  },
  {
    id: 14,
    name: 'Карбонара',
    description: 'Сливочный соус, моцарелла, бекон, шампиньоны, пармезан',
    price: 580,
    image: '🍕',
    category: 'pizza',
    size: '30 см',
  },
  {
    id: 15,
    name: 'Морская',
    description: 'Томатный соус, моцарелла, креветки, мидии, кальмары',
    price: 690,
    image: '🦐',
    category: 'pizza',
    size: '30 см',
  },
  {
    id: 16,
    name: 'Острая',
    description: 'Томатный соус, моцарелла, халапеньо, пепперони, красный лук',
    price: 540,
    image: '🔥',
    category: 'pizza',
    size: '30 см',
  },
];

export const categories = [
  { id: 'all', name: 'Все', icon: '🍽️' },
  { id: 'rolls', name: 'Роллы', icon: '🍣' },
  { id: 'pizza', name: 'Пицца', icon: '🍕' },
];
