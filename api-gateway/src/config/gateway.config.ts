export const serviceConfig = {
  users: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3000',
    timeout: 10000, // 10 segundos
  },
  products: {
    url: process.env.PRODUCTS_SERVICE_URL || 'http://localhost:3001',
    timeout: 10000, // 10 segundos
  },
  checkout: {
    url: process.env.CHECKOUT_SERVICE_URL || 'http://localhost:3003',
    timeout: 10000, // 10 segundos
  },
  payments: {
    url: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3004',
    timeout: 10000, // 10 segundos
  },
} as const;
