export function initMap() {
    // Créez une instance de carte
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 45.4215, lng: -75.6906},
      zoom: 15
    });

    // Ajoutez un marqueur à la position souhaitée
    var marker = new google.maps.Marker({
      position: { lat: 45.4215, lng: -75.6906},
      map: map,
      title: "Titre du marqueur"
    });
  }