// console.log("hello");
let render_vehicles = document.querySelector("#presentation-cars .img-render");
console.log(render_vehicles);
function imgItem(linkUrl, className, classText, text){
    return `<div class = ${className}>
                <img src=${linkUrl} alt="car-image">
                <p class = ${classText}>${text}</p>
            </div>`
}

// render_vehicles.insertAdjacentHTML('beforeend', imgItem('https://www.infiniti.ca/content/dam/Infiniti/Canada/vehicles/Q50/2024/vap/vehicle-profile/infiniti-q50-red-sport-proactive-trim-grand-blue.png.ximg.l_3_m.smart.png', 'img-item', 'text-img', "Hello"))
// render_vehicles.insertAdjacentHTML('beforeend', imgItem('https://www.infiniti.ca/content/dam/Infiniti/Canada/vehicles/Q50/2024/vap/vehicle-profile/infiniti-q50-red-sport-proactive-trim-grand-blue.png.ximg.l_3_m.smart.png', 'img-item', 'text-img', "Hello"))
// render_vehicles.insertAdjacentHTML('beforeend', imgItem('https://www.infiniti.ca/content/dam/Infiniti/Canada/vehicles/Q50/2024/vap/vehicle-profile/infiniti-q50-red-sport-proactive-trim-grand-blue.png.ximg.l_3_m.smart.png', 'img-item', 'text-img', "Hello"))
// render_vehicles.insertAdjacentHTML('beforeend', imgItem('https://www.infiniti.ca/content/dam/Infiniti/Canada/vehicles/Q50/2024/vap/vehicle-profile/infiniti-q50-red-sport-proactive-trim-grand-blue.png.ximg.l_3_m.smart.png', 'img-item', 'text-img', "hello"))
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://project-infinity-car-f8a94-default-rtdb.firebaseio.com/Product.json", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        

    })
    .catch((error) => console.error(error));
