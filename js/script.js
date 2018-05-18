

ymaps.ready(init);
 var myMap;

function init() {
    myMap = new ymaps.Map("map", {
            center: [56.236782, 43.839860],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [56.236782, 43.839860]
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

    myMap.geoObjects.add(myGeoObject);
    myMap.behaviors.disable('scrollZoom');

}


 function startSlider(){
    $('.header__img').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
 }


$(document).ready(function(){
    startSlider();
});
    