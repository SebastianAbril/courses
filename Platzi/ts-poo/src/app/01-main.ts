import axios from 'axios';

import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () => {
  async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // code
    
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));
})();
