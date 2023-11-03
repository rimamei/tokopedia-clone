import { cat_1, cat_2, cat_3, cat_4, cat_5, cat_6 } from '@/assets';
import { v4 as uuidv4 } from 'uuid';

export const categoryList = [
  {
    id: uuidv4(),
    title: 'Official Store',
    img: cat_1,
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'Produk Indonesia',
    img: cat_2,
    path: '/',
  },
  { id: uuidv4(), title: 'Terlaris', img: cat_6, path: '/' },
  {
    id: uuidv4(),
    title: 'Top-Up dan Tagihan',
    img: cat_3,
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'Promo dan Kupon',
    img: cat_5,
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'Lihat Semua',
    img: cat_4,
    path: '/',
  },
];
