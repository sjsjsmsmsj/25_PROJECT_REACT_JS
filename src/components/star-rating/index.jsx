import {FaStar} from 'react-icons/fa';
import React, { useState } from 'react';

export default function StarRating({ numberOfStars }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseOver = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = () => {
        setHover(0);
    }


    return (
        <div className="start-rating" onMouseLeave={handleMouseLeave}>
            {
                [...Array(numberOfStars)].map((_, index) => {
                    const currentIndex = index + 1;
                    return (
                        <FaStar
                            key={index}
                            onClick={ () => handleClick(currentIndex)}
                            onMouseEnter={ () => handleMouseOver(currentIndex)}
                            color={currentIndex <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            style={{
                                cursor: 'pointer'
                            }}
                            size={40}
                        />
                    )
                })
            }
        </div>
    );
}