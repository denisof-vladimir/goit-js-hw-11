
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import {createGaleryCard} from './render-functions';

export const TestAndSearch = event => {
    event.preventDefault();

    const API_KEY = '48542018-8722dafc38583a35c899e9bbe';
    const dataUserQuery=event.currentTarget.elements.userQuery.value.trim();
    if (dataUserQuery.length ==0){
        iziToast.show({
            title: 'Attention !!',
            color: 'red',
            position:'center',
            message: 'Заполните поле для формирования запроса..'
        });
        return;
    }

    fetch(
        "https://pixabay.com/api/?key="+API_KEY+"&q="+
            encodeURIComponent(dataUserQuery) +
            "&image_type=photo"+
            "&orientation=horizontal"+
            "&safesearch=true"
        )
    .then(Response=>{
        if(! Response.ok) { throw new Error(response.status); }
        return Response.json();
        })
        .then(data =>{
            const pictInfo=data.hits;
            const galleryUlList = document.querySelector('.js-gallery');
            if (pictInfo.length ==0) {
                iziToast.show({
                    title: '',
                    color: 'green',
                    position:'center',
                    message: 'Sorry, there are no images matching your search query. Please try again!.'
                });
                galleryUlList.innerHTML= '';
                event.reset();
                return;
                }          

            const gallerySmallCard = '<div class="loader"></div>'+
                    pictInfo.map(pictInfo => createGaleryCard(pictInfo)).join('');
            galleryUlList.innerHTML= gallerySmallCard;
            
            new SimpleLightbox('.gallery-item a',{captionsData: 'alt', captionDelay:250});
            
            
        })      
    .catch(err =>{console.log(err);  });

} 