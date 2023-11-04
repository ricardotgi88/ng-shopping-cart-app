import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface ApiProduct {
    id: number;
    name: string;
    price: number;
    type?: string;
}

interface ApiCartItem {
    id: number;
    product: ApiProduct;
    amount: number;
    subtotal: number;
}

export class InMemoryBackendService implements InMemoryDbService {
    createDb() {
        const products: ApiProduct[] = [
            { id: 1, name: 'iPhone', price: 500, type: 'default' },
            { id: 2, name: 'PlayStation', price: 250, type: 'default' },
            { id: 3, name: '8K OLED TV', price: 300, type: 'default' },
            { id: 4, name: '4K Ultrabook', price: 600, type: 'default' },
            { id: 5, name: 'iPad PRO', price: 600, type: 'default' },
        ];
        const cart: ApiCartItem[] = [
            { id: 1, product: products[0], amount: 1, subtotal: products[0].price },
            { id: 2, product: products[1], amount: 2, subtotal: products[1].price * 2 },
        ];
        return {
            products,
            cart,
        };
    }
}
