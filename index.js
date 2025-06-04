document.addEventListener("DOMContentLoaded", function () {
    const pickers = document.querySelectorAll('.picker');



    pickers.forEach(picker => {
        picker.addEventListener('click', function () {
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle('active');
        });
    });

    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', function (event) {
            event.preventDefault();
            const picked = this.textContent;
            const pickedElement = this.closest('.box-element').querySelector('.picked');
            pickedElement.querySelector('p').textContent = picked;
            const dropdown = this.closest('.dropdown');
            dropdown.classList.remove('active');
        });
    });

    window.addEventListener('click', function (event) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.previousElementSibling.contains(event.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});

$(function () {
    $('.selectpicker').selectpicker();
});

////////

document.querySelectorAll(".accordion__question").forEach((item) => {
    item.addEventListener("click", (event) => {
        let collapse = item.nextElementSibling;

        if (!item.classList.contains("collapsing")) {
        }

        if (!item.classList.contains("open")) {
            console.log("toggle accordion button");

            collapse.style.display = "block";

            let accHeight = collapse.clientHeight;
            console.log(accHeight);

            setTimeout(() => {
                collapse.style.height = accHeight + "px";
                collapse.style.display = "";
            }, 1);

            collapse.classList = "accordion__collapse collapsing";

            setTimeout(() => {
                console.log("open accordion content");
                collapse.classList = "accordion__collapse collapse open";
            }, 0.5);
        } else {
            collapse.classList = "accordion__collapse collapsing";

            setTimeout(() => {
                collapse.style.height = "0px";
            }, 1);

            setTimeout(() => {
                collapse.style.height = "0px";
            }, 1);

            setTimeout(() => {
                console.log("close accordion content");
                collapse.classList = "accordion__collapse collapse";
                collapse.style.height = "";
            }, 300);
        }

        item.classList.toggle("open");
        collapse.classList.toggle("open");
    });
});


///////////////////////////////////////////////


// document.addEventListener("DOMContentLoaded", function () {
//     fetch('./JSON/cars.json')
//         .then(response => response.json())
//         .then(data => {
//             const carList = document.getElementById('carList');
//             data.forEach(car => {
//                 const carElement = document.createElement('div');
//                 carElement.classList.add('car');
//                 carElement.innerHTML = `
//             <h2>${car.make} ${car.model}</h2>
//             <p>Year: ${car.year}</p>
//           `;
//                 carList.appendChild(carElement);
//             });
//         })
//         .catch(error => console.error('Error fetching cars:', error));
// });

function renderCars(cars) {
    carList.innerHTML = "";
    if (cars.length === 0) {
        carList.style.display = "flex";
        carList.style.alignItems = "center";
        carList.style.justifyContent = "center";
        carList.innerHTML = `<h4>No Data Found</h4>`;
    }
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        // Get the first image URL
        const firstImageUrl = car.images.length > 0 ? car.images[0] : '';
        const airCondition = car['air-condition'] === 'available' ? 'A/C' : car['air-condition'];
        carElement.innerHTML = `
            <div class="car-images">
                <img src="${firstImageUrl}" alt="Car Image">
            </div>
            <div class="car-details">
                <div class="car-info-section">
                    <h2>${car.make} ${car.model}</h2>
                    <p class="info-sec">
                        <svg width="18" height="18" viewBox="0 0 8.4666669 8.4666669" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg">
                            <defs id="defs2"/>
                            <g id="layer1" transform="translate(0,-288.53332)">
                                <path stroke-width="1.5" d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z" id="path929" style="color:#65727e;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#65727e;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#65727e;solid-opacity:1;vector-effect:none;fill:#b0b5b9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.52916664;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                                <path stroke-width="1.5" d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z" id="circle931" style="color:#65727e;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#65727e;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#65727e;solid-opacity:1;vector-effect:none;fill:#b0b5b9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.52916664;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
                            </g>
                        </svg> ${car.location}
                    </p>

                    <div class="car-info-div info-sec">
                        <p>
                            <svg class="fuel" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 17.5H1" stroke="#b0b5b9" stroke-linecap="round" stroke-width="1.5"/>
                                <path stroke-width="1.5" d="M5.37726 3.5H10.623C11.7793 3.5 12.5 4.21744 12.5 4.86584V17.5H3.5V4.86584C3.5 4.2175 4.2209 3.5 5.37726 3.5Z" stroke="#b0b5b9" stroke-linecap="round"/>
                                <path stroke-width="1.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 7.5H6H10Z" stroke="#b0b5b9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path stroke-width="1.5" d="M12.5 14C12.5 14 15.5 14 15.5 10.5C15.5 7 15.5 6 15.5 6" stroke="#b0b5b9" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${car['fuel-type']}
                        </p>
                        <p>
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="#b0b5b9" stroke-linecap="round" stroke-width="1.5" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                    ${car.passengers}
                                </p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#b0b5b9" class="bi bi-suitcase" viewBox="0 0 16 16">
                                    <path stroke-width="1.5" d="M6 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 6 5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 10 5"/>
                                    <path stroke-width="1.5" d="M6.5 0a.5.5 0 0 0-.5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.031 1.75A1.003 1.003 0 0 0 5 16a1 1 0 0 0 1-1h4a1 1 0 1 0 1.969-.25A2 2 0 0 0 13 13V5a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-.5-.5zM9 3H7V1h2zm3 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                    </svg> 
                                    ${car.baggages}
                                </p>
                                <!--<p>
                                    <svg style="height: 20px; width: 20px" fill="#000000" viewBox="0 0 24.00 24.00" id="car-door-4" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line id="secondary" x1="14" y1="15" x2="16" y2="15" style="fill: none; stroke: #65727e; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.5;"></line><path id="primary" d="M19,21H5a1,1,0,0,1-1-1V11.41a1,1,0,0,1,.29-.7l7.42-7.42a1,1,0,0,1,.7-.29H19a1,1,0,0,1,1,1V20A1,1,0,0,1,19,21ZM4.1,11H20" style="fill: none; stroke: #65727e; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.5;"></path></g></svg>
                                    ${car.doors}
                                </p>-->
                                <p>
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 4V10.6848" stroke="#b0b5b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path d="M8.5 4V10.6848" stroke="#b0b5b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path d="M14.5 4V7.09998" stroke="#b0b5b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path d="M3 7.5H14.5" stroke="#b0b5b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path stroke-width="1.5" d="M4 2C4 2.82843 3.32843 3.5 2.5 3.5C1.67157 3.5 1 2.82843 1 2C1 1.17157 1.67157 0.5 2.5 0.5C3.32843 0.5 4 1.17157 4 2Z" stroke="#b0b5b9"/>
                                    <path stroke-width="1.5" d="M10 2C10 2.82843 9.32843 3.5 8.5 3.5C7.67157 3.5 7 2.82843 7 2C7 1.17157 7.67157 0.5 8.5 0.5C9.32843 0.5 10 1.17157 10 2Z" stroke="#b0b5b9"/>
                                    <path stroke-width="1.5" d="M16 2C16 2.82843 15.3284 3.5 14.5 3.5C13.6716 3.5 13 2.82843 13 2C13 1.17157 13.6716 0.5 14.5 0.5C15.3284 0.5 16 1.17157 16 2Z" stroke="#b0b5b9"/>
                                    <path stroke-width="1.5" d="M4 13C4 13.8284 3.32843 14.5 2.5 14.5C1.67157 14.5 1 13.8284 1 13C1 12.1716 1.67157 11.5 2.5 11.5C3.32843 11.5 4 12.1716 4 13Z" stroke="#b0b5b9"/>
                                    <path stroke-width="1.5" d="M10 13C10 13.8284 9.32843 14.5 8.5 14.5C7.67157 14.5 7 13.8284 7 13C7 12.1716 7.67157 11.5 8.5 11.5C9.32843 11.5 10 12.1716 10 13Z" stroke="#b0b5b9"/>
                                    </svg>
                                    ${car.transmission.slice(0, 1)}
                                </p>
                            </div>
                            <!--<div class="car-info-div info-sec">
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65727e" class="bi bi-snow" viewBox="0 0 16 16">
                                    <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/>
                                    </svg> 
                                    ${airCondition}
                                </p>
                            </div>-->
                    </div>
                    <div class="book-n-price">
                        <p id="price"><span>${car.currency}${car.price}</span>/${car.price_basis}</p>
                        <a data-id="${car.id}" onclick="toggleSidebar(this.getAttribute('data-id'))" class="book-btn">Reserve</a>
                    </div>
                </div>
            </div>
        `;
        carList.appendChild(carElement);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    fetch("cars.json")
        .then(response => response.json())
        .then(data => {
            renderCars(data);
        });
});


const btn_find_car = document.getElementById("btn-find-car");

btn_find_car.addEventListener("click", function () {
    const location = document.getElementById('location-p');
    const input_to = document.getElementById('input_to');
    const input_from = document.getElementById('input_from');
    const carList = document.getElementById("carList");
    const clear_btn = document.getElementById('clear_filters_btn');



    if (location.textContent !== "Please select an option" && input_from.value !== "" && input_to.value !== "") {

        clear_btn.style.display = "block";

        function filterCity(cars, city_name) {
            return cars.filter(car => car.location === city_name);
        }

        function filterAvailableCars(cars, startDate, endDate) {

            startDate = new Date(startDate);
            endDate = new Date(endDate);
            return cars.filter(car => {
                for (let i = 0; i < car["reserved-dates"].length; i++) {
                    const reservedStartDate = new Date(car["reserved-dates"][i][0]);
                    const reservedEndDate = new Date(car["reserved-dates"][i][1]);

                    if ((startDate <= reservedEndDate && startDate >= reservedStartDate) ||
                        (endDate <= reservedEndDate && endDate >= reservedStartDate) ||
                        (startDate <= reservedStartDate && endDate >= reservedEndDate)) {
                        return false;
                    }
                }
                return true;
            });
        }


        fetch("cars.json")
            .then(response => response.json())
            .then(data => {
                let filteredCars;

                if (location.textContent === "London, UK") {
                    filteredCars = filterCity(data, 'London, UK');
                } else if (location.textContent === "New York, USA") {
                    filteredCars = filterCity(data, 'New York, USA');
                } else if (location.textContent === "Paris, France") {
                    filteredCars = filterCity(data, 'Paris, France');
                } else if (location.textContent === "Beirut, Lebanon") {
                    filteredCars = filterCity(data, 'Beirut, Lebanon');
                } else if (location.textContent === "Rome, Italy") {
                    filteredCars = filterCity(data, 'Rome, Italy');
                } else if (location.textContent === "Milan, Italy") {
                    filteredCars = filterCity(data, 'Milan, Italy');
                }

                filteredCars = filterAvailableCars(filteredCars, input_from.value, input_to.value);
                if (filteredCars !== null) {
                    renderCars(filteredCars);
                }
            });
    }
});

function clear_filters() {

    const clear_btn = document.getElementById('clear_filters_btn');
    clear_btn.style.display = "none";
    fetch("cars.json")
        .then(response => response.json())
        .then(data => {
            renderCars(data);
        });

    document.getElementById('input_to').value = "";
    document.getElementById('input_from').value = "";
    document.getElementById('location-p').textContent = "Please select an option";


    const minPrice = document.getElementById("price-min");
    const maxPrice = document.getElementById("price-max");
    const minYear = document.getElementById("year-min");
    const maxYear = document.getElementById("year-max");
    const checkboxes = document.querySelectorAll('.filter_checkbox input');
    minPrice.value = "0";
    maxPrice.value = "1000";
    minYear.value = "2010";
    maxYear.value = "2024";



    checkboxes.forEach(checkbox => checkbox.checked = false);

}



///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Reservation JS ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleSidebar(id) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-open');

    const location = document.getElementById("location-reserve");
    const passenger = document.getElementById("Passenger-reseve");
    const air = document.getElementById("air-conditioning-reserve");
    const door = document.getElementById("car-door-number");
    const tran = document.getElementById("transmission-type-reserve");
    const fuel = document.getElementById("Fuel_type_reserve");
    const img = document.getElementById("reserce-img");
    const title = document.getElementById("car-type-reserve");
    const title2 = document.getElementById("car-make-reserve");


    const totalPriceElement = document.getElementById('totalPrice');
    const carPrice = document.getElementById('car_price');

    let totalPrice = 0;

    const checkboxes = document.querySelectorAll('.extraCheckBox');

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        const checkboxDivId = checkbox.id + 'Box';
        const checkboxDiv = document.getElementById(checkboxDivId);
        checkboxDiv.style.display = 'none';
    });




    fetch("cars.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(car => {

                if (car.id == id) {
                    location.textContent = car.location;
                    passenger.textContent = car.passengers;

                    if (car['air-condition'] == "available") {
                        air.textContent = "Available";
                    }
                    else {
                        air.textContent = "Unavailable";
                    }
                    door.textContent = car.doors

                    tran.textContent = car.transmission;

                    if (car['fuel-type'] == "Fuel") fuel.textContent = "Full to Full";
                    else if (car['fuel-type'] == "Diesel") fuel.textContent = "Full to Full"
                    else fuel.textContent = "Full Charge"


                    const firstImageUrl = car.images.length > 0 ? car.images[0] : '';

                    img.innerHTML = `<img src="${firstImageUrl}" alt="Car Image">`;


                    title.textContent = car['car-type'] + " " + car.model;
                    title2.textContent = car.make;

                    console.log(`car price ${car.price}`);

                    carPrice.textContent = car.price;
                    totalPrice = car.price;
                    totalPriceElement.textContent = totalPrice;

                    console.log(`thr final price ${totalPrice}`);
                };
            })
        });





    totalPrice = parseFloat(totalPriceElement.textContent);
    const priceMap = {
        'BabyChildSeat': 38,
        'BoosterSeat': 38,
        'RoadsideAssistance': 32,
        'HandheldNavigationSystem': 36,
        'WinterTyre': 40,
        'SkiRack': 98
    };

    function updateTotalPrice(checkbox, add) {
        const price = priceMap[checkbox.id];
        totalPrice += add ? price : -price;
        totalPriceElement.textContent = totalPrice.toFixed(2);;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const checkboxDivId = checkbox.id + 'Box';
            const checkboxDiv = document.getElementById(checkboxDivId);
            if (checkbox.checked) {
                checkboxDiv.style.display = 'flex';
            } else {
                checkboxDiv.style.display = 'none';
            }
            updateTotalPrice(checkbox, checkbox.checked);
        });
    });


}

