import LazyLoad from 'vanilla-lazyload';

export default () => {
  // const mapContainer = document.getElementById('map');
  
  const lazyMap = new LazyLoad({
    elements_selector: '#map',
    callback_reveal: el => {
      document.head.append(createMapEl());
    }
  });
}

function createMapEl() {
  const newMap = document.createElement('script');

  newMap.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  newMap.type = 'text/javascript';

  newMap.addEventListener('load', yamapsInit);

  return newMap;
}

function yamapsInit() {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [55.809616, 37.512649],
        zoom: 16,
        controls: []
      },
      {
        searchControlProvider: "yandex#search"
      }
    );

    var myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Retail Holding",
        balloonContent: "Москва, Ленинградский проспект, дом 80, корпус 39"
      },
      {
        iconLayout: "default#image",
        iconImageHref: window.location.origin + "/img/general/map-pin.png",
        iconImageSize: [37, 51],
        iconImageOffset: [-18, -51]
      }
    );
      
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('drag');

    if (window.matchMedia("(min-width: 769px)").matches) {
      var pixelCenter = myMap.getGlobalPixelCenter([55.809616, 37.512649]);

      pixelCenter = [
        pixelCenter[0] - 200,
        pixelCenter[1]
      ];
      
      var geoCenter = myMap.options.get('projection').fromGlobalPixels(pixelCenter, myMap.getZoom());
      myMap.setCenter(geoCenter);
    }
    
  }
}