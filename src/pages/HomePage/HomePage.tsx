import React from 'react';
import Header from '../../components/Header/Header';
import '../HomePage/HomePage.css';

const HomePage: React.FC = () => {
    return(
        <>
            <Header />
            // Şimdilik sadece Header'ı ve bir placeholder mesajı gösterelim
            // Daha sonra RecipeList ve SearchBar eklenecek
            <div className="home-page">
                <h2>Anasayfaya Hoş Geldiniz!</h2>
                <p>Tarifler burada listelenecek ve arama çubuğu gelecek.</p>
                <p>Şimdilik sadece Header'ın düzgün çalıştığını kontrol ediyoruz.</p>
            </div>
        </>
    );
}



export default HomePage;
