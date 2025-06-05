/* eslint-disable @typescript-eslint/no-unused-vars */
import {db} from '../firebase'
// Firebase Firestore'dan veri çekmek için gerekli fonksiyonlar
import {
  collection, //Belirli bir koleksiyona erişim sağlar
  getDocs, //Koleksiyondaki tüm dökümanları çeker
  getDoc, //Belirli bir dökümanı çeker
  addDoc, // Yeni veri ekler
  updateDoc, // Belirli bir dökümanı günceller
  deleteDoc, // Belirli bir dökümanı siler
  doc, // Belirli bir döküman referansı oluşturur
  query, // Sorgu oluşturur
  where, // Sorgu koşulu ekler
  QuerySnapshot // Sorgu sonuçlarını temsil eder
} from 'firebase/firestore';

import type { Recipe } from '../types';

// Firestore'da 'recipes' koleksiyonuna referans oluşturduk.
//Bu referans, bu koleksiyon üzerinde CRUD işlemleri yapmamızı sağlayacak
const recipesCollectionRef = collection(db, 'recipes');

//recipeService nesnesi, uygulamanın Firebase Firestore ile etkileşim kuracağı fonksiyonları içerir.
const recipeService = {
    //Tüm tarifleri getiren fonksiyon
    getAllRecipes: async(): Promise<Recipe[]> =>{ //Bir promise döndürüyor, çözümlendiğinde Recipe arayüzüne uygun tarif nesnelerinin bir dizisini içerir.
        try{
            //Burada tüm dökümanları çekiyoruz ve gelen verileri recipe arayüzüne uygun hale getiriyoruz.
            const data = await getDocs(recipesCollectionRef);
            const recipes = data.docs.map(doc =>({...doc.data(), id: doc.id})) as Recipe[];
            return recipes;
        }catch(error){
            console.error("Tarifler getirilirken hata oluştu (Firestore):", error);
            throw error;
        }
    },

    //ID'si verilen tarifi getiren fonksiyon
    getRecipeById: async (id: string): Promise<Recipe | null> =>{
        try {
            const recipeDocRef = doc(db, 'recipes', id);
            const docSnap = await getDoc(recipeDocRef);
            if (docSnap.exists()) {
                return{...docSnap.data(), id: docSnap.id} as Recipe;
            }else{
                console.warn(`Tarif bulunamadı (Firestore): ID ${id}`);
                return null;
            }
        } catch (error) {
            console.error(`Tarif getirilirken hata oluştu (Firestore): ID ${id}`, error);
            throw error;
        }
    },
    //Yeni bir tarif ekleyen fonksiyon
    addRecipe: async(recipe: Omit<Recipe, 'id'>): Promise<Recipe> => {
        try{
            const docRef = await addDoc(recipesCollectionRef, recipe);
            return {...recipe, id: docRef.id} as Recipe; //Yeni tarifin ID'sini ekliyoruz
        }catch(error){
            console.error("Yeni tarif eklenirken hata oluştu (Firestore):", error);
            throw error;
        }
    },

    //ID'si verilen tarifi güncelleyen fonksiyon
    updateRecipe: async(id: string, updatedRecipe: Omit<Recipe, 'id'>) =>{
        try {
            const recipeDocRef = doc(db, 'recipes', id);
            await updateDoc(recipeDocRef, updatedRecipe);
        } catch (error) {
            console.error(`Tarif güncellenirken hata oluştu (Firestore): ID ${id}`, error);
            throw error;
        }
    },

    //ID'si verilen tarifi silen fonksiyon
    deleteRecipe: async(id: string) : Promise<void> => {
        try {
            const recipeDocRef = doc(db, 'recipes', id);
            await deleteDoc(recipeDocRef);
        } catch (error) {
            console.error(`Tarif silinirken hata oluştu (Firestore): ID ${id}`, error);
            throw error;
        }
    },

    //Arama fonksiyonu
    searchRecipes: async(queryText: string): Promise<Recipe[]> =>{
        try {
            const q = query(
                recipesCollectionRef,
                where('title', '>=', queryText),
                where('title', '<=', queryText + '\uf8ff') //Unicode son karakteri ile tam eşleşme sağlıyoruz
            );
            const querySnapshot = await getDocs(q);
            const recipes = querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id} as Recipe));
            return recipes;
        } catch (error) {
            console.error("Tarifler aranırken hata oluştu (Firestore):", error);
            throw error;
        }
    }
    


}

export default recipeService;
// recipeService nesnesi, uygulamanın Firebase Firestore ile etkileşim kuracağı fonksiyonları içerir.