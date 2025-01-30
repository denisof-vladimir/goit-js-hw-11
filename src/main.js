// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// const API_KEY = '48542018-8722dafc38583a35c899e9bbe';
// import {createGaleryCard} from './js/render-functions';
import {TestAndSearch} from './js/pixabay-api';

// const galleryUlList = document.querySelector('.js-gallery');
// console.log(galleryUlList);
// const SelectInput = document.querySelector('userQuery');
const startBtn = document.querySelector('.js-search-form');

startBtn.addEventListener('submit', TestAndSearch);
