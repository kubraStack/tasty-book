import React from 'react';
import type  { RecipeCardProps } from '../../types';
import './RecipeCard.css';


const RecipeCard: React.FC<RecipeCardProps> = ({recipe, onClick}) => {
    return (
        <div className='recipe-card'  onClick={() => onClick(recipe.id)}>
            <img src={recipe.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'} alt={recipe.title} />
            <div className='recipe-card-info'>
                <h3>{recipe.title}</h3>
                <p>Kategori: {recipe.category}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
