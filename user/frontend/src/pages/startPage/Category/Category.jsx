import React from 'react';
import './style.sass'
import { data } from './data';
import { Link } from 'react-router-dom'
const Category = () => {
    return (
        <div className='category-container'>
            {data.map(item => {
                return (
                    <a className='category-item-big' key={item.path} href={item.path}>
                        <div className='category-item'>
                            {item.img}
                        </div>
                        {item.title}
                    </a>
                )
            })}
        </div>
    );
};

export default Category;