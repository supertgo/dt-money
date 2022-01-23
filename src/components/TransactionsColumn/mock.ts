import { TransactionsColumnProps } from '.';

export default [
  {
    title: 'Desenvolvimento de site',
    type: 'deposit',
    amount: 12000,
    category: 'Vendas',
    createdAt: '2021-06-12'
  },
  {
    title: 'Hamburgueria Pizzy',
    type: 'withdraw',
    amount: 59,
    category: 'Alimentação',
    createdAt: '2021-06-12'
  },
  {
    title: 'Aluguel do apartamento',
    type: 'withdraw',
    amount: 12000,
    category: 'Casa',
    createdAt: '2021-06-12'
  }
] as TransactionsColumnProps[];
