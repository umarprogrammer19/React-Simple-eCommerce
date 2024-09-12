import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../component/Footer'; // Adjust path as necessary

const SingleProduct = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    return (
        <>
            <div className="min-h-screen bg-gray-300 py-16 px-6 ">
                <div className="container mx-auto max-w-6xl">
                    {data ? (
                        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8">
                            {/* Product Image */}
                            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-auto max-w-md rounded-lg"
                                />
                            </div>
                            {/* Product Details */}
                            <div className="md:w-1/2 md:pl-8">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
                                <p className="text-xl text-gray-700 mb-6">{data.description}</p>
                                <p className="text-2xl text-green-600 font-bold mb-4">${data.price}</p>
                                <p className="text-lg text-gray-700 mb-4"><strong>Category:</strong> {data.category}</p>
                                <p className="text-lg text-gray-700 mb-6"><strong>Rating:</strong> {data.rating.rate} ({data.rating.count} reviews)</p>
                                <button
                                    onClick={() => window.history.back()}
                                    className="bg-blue-900 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    ) : (
                        <h1 className="text-center text-2xl">Loading...</h1>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SingleProduct;
