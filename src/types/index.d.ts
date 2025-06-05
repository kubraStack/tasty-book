export interface Recipe {
    id: string;
    title: string;
    category: string;
    ingredients: string[];
    instructions: string;
    imageUrl?: string;
}

export interface RecipeCardProps{
    recipe: Recipe; // Görüntülenecek tarif nesnesi, Recipe arayüzündeki tüm alanları içerir.
    onClick: (id: string) => void; //Karta tıkladığında çağrılacak bir fonksiyon, tıklanan tarifin ID'sini argüman olarak alır ve detay sayfasına yönlendirir. 
}

export interface RecipeListProps{
    recipes: Recipe[]; // Görüntülenecek tariflerin listesi, Recipe arayüzündeki tüm alanları içeren tarif nesnelerinden oluşur.
}

export interface SearchBarProps{
    onSearch: (query: string) =>void; // Arama çubuğuna yazılan sorguyu alacak bir fonksiyon, arama işlemini gerçekleştirmek için kullanılır.
}

export interface RecipeFormProps{
    initialRecipe?: Recipe; // Formun başlangıçta doldurulacak tarif nesnesi, isteğe bağlı olarak tarif bilgilerini içerebilir.
    onSubmit: (recipe: Omit<Recipe, 'id'>) => Promise<void>; // Form gönderildiğinde çağrılacak bir fonksiyon, tarif nesnesini argüman olarak alır ve veritabanına kaydeder.
    onCancel: () => void; // Form iptal edildiğinde çağrılacak bir fonksiyon, formu kapatmak için kullanılır.
}

export interface RecipeDetailProps{
    recipeId: string; // Detay sayfasında görüntülenecek tarifin ID'si, tarif bilgilerini almak için kullanılır.
    onEdit: (id: string) => void; // Tarif düzenleme sayfasına yönlendirmek için çağrılacak bir fonksiyon, tıklanan tarifin ID'sini argüman olarak alır.
    onDelete: (id: string) => Promise<void>; // Tarif silme işlemi için çağrılacak bir fonksiyon, tıklanan tarifin ID'sini argüman olarak alır ve veritabanından siler.
    onBack: () => void; // Geri dönme işlemi için çağrılacak bir fonksiyon, detay sayfasından önceki sayfaya yönlendirir.
}


