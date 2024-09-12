import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../component/Card';
import Footer from '../component/Footer';

const Products = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const singleUser = (item) => {
        navigate(`/singleProduct/${item.id}`);
    };
    return (
        <>
            <div className=" min-h-screen">
                <div className="container mx-auto px-4">
                    <CardList data={data} singleUser={singleUser} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products