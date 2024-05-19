import Product from '../components/Product';

import { getProducts } from '../lib/datamanagement';

export default async function Home() {
  const products = await getProducts();

  return(
    <main className='grid grid-cols-4 justify-items-center items-center'>
      {products.map(product => <Product key={product.id} product={product}/>)}
    </main>
  )
}