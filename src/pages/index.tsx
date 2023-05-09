import Product from "@/components/Product";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";


const Home: NextPage = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json));
  }, []);
  
  const categoryNames = [...new Set (productsInfo.map(p => p['category']))];
  

  return (
    <>
      <Head>
        <title>Turquiose Cobra Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        console.log(productsInfo);
        <div className="p-5">
          <div>
            {categoryNames.map(categoryName => (
              <div key={categoryName}>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {productsInfo.filter(p => p['category'] === categoryName).map(product => (
                    <div key={product['id']} className="px-5 snap-start">
                      <Product {...productsInfo} />
                    </div>
                  ))}
                </div>
              </div>
              
            ))}
          </div>
        </div>
        console.log(productsInfo);
      </main>
    </>
  );
};

export default Home;
 
