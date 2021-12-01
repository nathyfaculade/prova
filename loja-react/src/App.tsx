import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Newsletter } from "./components/NewsLetter";
import { useEffect, useState } from "react";
import { Product } from "./@types/intex";
import axios from "axios";


function App() {
    const brands = [
        {alt: 'brand1', source: 'assects/imagens/brand1.png'},
        {alt: 'brand2', source: 'assects/imagens/brand2.png'},
        {alt: 'brand3', source: 'assects/imagens/brand3.png'},
        {alt: 'brand4', source: 'assects/imagens/brand4.png'},
        {alt: 'brand5', source: 'assects/imagens/brand5.png'}
    ]

const[products, setProducts] = useState<Product[]>([] as Product[]);

    useEffect(()=>{
        axios.get('http://localhost:3333/products')
        .then(result => {
            setProducts(result.data);
        })
        .catch(error => {
            console.log('Puts!', error);
        })
    }, [])

    return (
        <div>

            <Header />

            <main>
                <div className="container">

                    <Collection />

                    <Products itens={products}/>

                    <Newsletter />

                    <div className="container">

                    </div>
                </div>
            </main>

            <Footer />

        </div>
    );
}

export default App;