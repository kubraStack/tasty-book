import React from 'react';
import '../RecipeList/RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import type { RecipeListProps } from '../../types';
import { useNavigate } from 'react-router-dom';


const RecipeList: React.FC<RecipeListProps> = ({recipes}) => {
    const navigate = useNavigate();

    //Tarife tıklayınca detay sayfasına yönlendir
    const handleRecipeClick = (id: string) => {
        navigate(`/recipe/${id}`);
    }

    return(
        <div className='recipe-list-container'>
            {/* Gelen tarifleri döngüye alıp her biri için kart oluşturur */}
            {recipes.map((recipe) => (
                <RecipeCard 
                    key={recipe.id} //Her liste elemanı için benzersiz bir 'key' olmalı
                    recipe={recipe} 
                    onClick={handleRecipeClick} //Tıklama olayını RecipeCard'a iletiyoruz
                />
            ))}
        </div>
    );
}

export default RecipeList;
