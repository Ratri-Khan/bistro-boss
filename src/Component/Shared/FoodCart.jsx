// import React from 'react';

const FoodCart = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card text-center bg-slate-300 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 bg-slate-900 p-3 text-white rounded-full">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-action">
                        <button className="btn btn-outline border-0 border-b-4 ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;