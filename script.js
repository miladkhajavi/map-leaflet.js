var map = L.map("map").setView([35.558039099999995, 51.236116499999994], 18);

L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png").addTo(map);

navigator.geolocation.getCurrentPosition((position) => {
  const {
    coords: { latitude, longitude },
  } = position;
  var marker = L.marker([latitude, longitude], {
    title: "Title",
    draggable: true,
    clickable: true,
    autoPan: true,
  }).addTo(map);
  marker.bindPopup("مکان مورد نظر را انتخاب کنید");
  marker.on("click", onClick);

  function onClick(e) {
    var popup = e.target.getPopup();
    var content = popup.getContent();
    document.getElementById("lat").innerHTML = e.latlng.lat
    document.getElementById("lng").innerHTML = e.latlng.lng
    // console.log(content);
    console.log(e.latlng);
  }
});

// console.log(navigator.geolocation.getCurrentPosition());


// navigator.geolocation.getCurrentPosition((position) => {
//   const {
//     coords: { latitude, longitude },
//   } = position;
//   var marker = new L.marker([latitude, longitude], {
//     draggable: true,
//     clickable: true,
//     autoPan: true,
//   })
//     .addTo(map)
//     .bindPopup()
//     .openPopup();
//   console.log(marker._latlng);
// });
