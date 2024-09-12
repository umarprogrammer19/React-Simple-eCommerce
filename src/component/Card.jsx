import React from 'react'

const Card = ({data, singleUser}) => {
  return (
    <div className="py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">All Products</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {
          data ? data.map((item) => (
            <div
              key={item.id}
              className="border border-gray-400 rounded-lg shadow-lg p-6 max-w-xs mx-auto transition-transform transform hover:scale-105 bg-gray-800 text-gray-200"
            >
              <div className="mb-4 flex justify-center">
                <img
                  className="w-40 h-40 rounded-md object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center truncate-title">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center truncate-description">
                {item.description}
              </p>
              <p className="text-2xl text-orange-400 font-bold mb-4 text-center">${item.price}</p>
              <div className="flex justify-center">
                <button
                  className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors"
                  onClick={() => singleUser(item)}
                >
                  Show More
                </button>
              </div>
            </div>
          )) : (
            <h1 className="text-center text-2xl text-gray-100">Loading...</h1>
          )
        }
      </div>
    </div>
  );
}

export default Card
