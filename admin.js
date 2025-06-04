///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Open on Desktop Only JS ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


window.onload = function () {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 1200) {
        alert("It's recommended to view this page on a desktop for better experience.");
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// ADD CAR JS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("addCar-modal");
    const overlay = document.getElementById("overlay");
    const closeButton = document.querySelector(".close");
    const filterBtn = document.querySelector(".add-car");

    closeButton.addEventListener("click", function () {
        closeModal();
    });

    const handleFilterButtonClick = function (event) {
        event.preventDefault();
        openModal();
    }

    filterBtn.addEventListener('click', handleFilterButtonClick);

    overlay.addEventListener("click", function () {
        closeModal();
    });

    const closeModal = function () {
        modal.style.opacity = "0";
        overlay.style.opacity = "0";
        setTimeout(function () {
            modal.style.display = "none";
            overlay.style.display = "none";
        }, 300);
    };

    const openModal = function () {
        modal.style.display = "block";
        overlay.style.display = "block";
        setTimeout(function () {
            modal.style.opacity = "1";
            overlay.style.opacity = "1";
        }, 10);
    };
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Table JS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//     fetch('./JSON/cars.json')
//         .then(response => response.json())
//         .then(data => {
//             const tableBody = document.getElementById('table-body');
//             const today = new Date();

//             data.forEach(car => {
//                 const row = document.createElement('tr');

//                 const isReservedToday = car['reserved-dates'].some(reservedDates => {
//                     const pickupDate = new Date(reservedDates[0]);
//                     const dropoffDate = new Date(reservedDates[1]);
//                     return today >= pickupDate && today <= dropoffDate;
//                 });

//                 let reservationHTML = '';
//                 if (isReservedToday) {
//                     reservationHTML = '<td class="reservation-cell"><div class="red-point"></div></td>';
//                 } else {
//                     reservationHTML = '<td class="reservation-cell"><div class="green-point"></div></td>';
//                 }

//                 const availabilityClass = car.availabality === 'available' ? 'available' : 'unavailable';

//                 row.innerHTML = `
//                 <td>${car.id}</td>
//                 <td>${car.make}</td>
//                 <td>${car.model}</td>
//                 <td>${car['car-type']}</td>
//                 <td>${car.location}</td>
//                 <td>${car.currency}${car.price}</td>
//                 ${reservationHTML}
//                 <td><span class="${availabilityClass}">${car.availabality}</span></td>
//                 <td class="actions-btns">
//                     <a href="#">
//                         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
//                         </svg>
//                     </a>
//                     <a href="#">
//                         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
//                         </svg>
//                     </a>
//                     <a href="#">
//                         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
//                             <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
//                             <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
//                         </svg>                  
//                     </a>
//                 </td>
//             `;
//                 tableBody.appendChild(row);
//             });

//             // document.getElementById('export-csv').addEventListener('click', function () {
//             //     const table = document.querySelector('table');
//             //     const csv = convertToCSV(table);
//             //     downloadCSV(csv, 'cars_table.csv');
//             // });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });



let carsData = [];

const addCar = (car) => {
    carsData.push(car);
    renderTable(carsData);
};

document.addEventListener('DOMContentLoaded', function () {
    

    fetch('cars.json')
        .then(response => response.json())
        .then(data => {
            carsData = data;
            renderTable(carsData);
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
    const searchBarInput = document.getElementById("searchBar");

    function findCar() {
        const searchTerm = searchBarInput.value.trim().toLowerCase();

        const filteredCars = carsData.filter(car => {
            const idMatch = car.id.toString().includes(searchTerm);
            const makeMatch = car.make.toLowerCase().includes(searchTerm);
            const modelMatch = car.model.toLowerCase().includes(searchTerm);
            const typeMatch = car['car-type'].toLowerCase().includes(searchTerm);
            const locationMatch = car.location.toLowerCase().includes(searchTerm);
            return idMatch || makeMatch || modelMatch || typeMatch || locationMatch;
        });

        renderTable(filteredCars);
    }

    searchBarInput.addEventListener("input", findCar);

    
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Export Table CSV JS //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


function convertToCSV(table, data) {
    let csv = [];
    let headerAdded = false;

    const rows = table.querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
        const row = [], cols = rows[i].querySelectorAll('td:not(:last-child), th:not(:last-child)');

        if (!headerAdded && rows[i].querySelector('th')) {
            const headerRow = [];
            const headerCols = rows[i].querySelectorAll('th');
            for (let j = 0; j < headerCols.length - 1; j++) {
                headerRow.push(headerCols[j].innerText);
            }
            csv.push(headerRow.join(','));
            headerAdded = true;
            continue;
        }

        for (let j = 0; j < cols.length; j++) {
            if (j === 6) {
                const carIndex = i - 1;
                const car = data[carIndex];
                if (car) {
                    const isReservedToday = car['reserved-dates'].some(reservedDates => {
                        const pickupDate = new Date(reservedDates[0]);
                        const dropoffDate = new Date(reservedDates[1]);
                        const today = new Date();
                        return today >= pickupDate && today <= dropoffDate;
                    });
                    const reservationValue = isReservedToday ? 'reserved' : 'not-reserved';
                    row.push(`"${reservationValue}"`);
                } else {
                    row.push('');
                }
            } else if (j === 4) {
                const locationText = cols[j].innerText.trim();
                row.push(`"${locationText}"`);
            } else {
                row.push(cols[j].innerText);
            }
        }
        csv.push(row.join(','));
    }
    return csv.join('\n');
}

function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(csvFile);
    link.download = filename;
    link.click();
}





function selectItem(item) {

    var dropdownButton = event.target.closest('.dropdown').querySelector('.btn-custom');
    dropdownButton.textContent = item;
}







// upload js 

const form = document.querySelector("#uploadForm"),
    fileInput = document.querySelector("#fileInput"),
    progressArea = document.querySelector("#progressArea"),
    uploadedArea = document.querySelector("#uploadedArea");

form.addEventListener("click", () => {
    fileInput.click();
});

fileInput.onchange = ({ target }) => {
    let file = target.files[0];
    if (file) {
        let fileName = file.name;
        if (fileName.length >= 12) {
            let splitName = fileName.split('.');
            fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
        }
        uploadFile(file, fileName);
    }
}

function uploadFile(file, name) {
    let progressHTML = `<li class="row">
        <i class="fas fa-file-alt" style="position: absolute;top: 17px;left: 5px;width: 10px;"></i>
        <div class="content">
            <div class="details">
                <span class="name">${name} • Uploading</span>
                <span class="percent">0%</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: 0%"></div>
            </div>
        </div>
    </li>`;
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;

    let progress = 0;
    let interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            progressArea.querySelector(".progress").style.width = progress + "%";
            progressArea.querySelector(".percent").innerText = progress + "%";
        } else {
            clearInterval(interval);
            progressArea.innerHTML = "";
            let uploadedHTML = `<li class="row">
                <div class="content upload">
                    <i class="fas fa-file-alt"></i>
                    <div class="details">
                        <span class="name">${name} • Uploaded</span>
                        <span class="size">${formatFileSize(file.size)}</span>
                    </div>
                </div>
                <i class="fas fa-check" style="position: absolute;top: 25px;right: 25px;width: 10px;"></i>
            </li>`;
            uploadedArea.classList.remove("onprogress");
            uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
        }
    }, 300);
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " Bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + " MB";
    else return (bytes / 1073741824).toFixed(1) + " GB";
}


   
    document.addEventListener("DOMContentLoaded", function() {

        const closeModal = function() {
            const modal = document.getElementById("addCar-modal");
            const overlay = document.getElementById("overlay");
            modal.style.opacity = "0";
            overlay.style.opacity = "0";
            setTimeout(function() {
                modal.style.display = "none";
                overlay.style.display = "none";
            }, 300);
        };
    
        var addButton = document.querySelector('.add-btn');
        addButton.addEventListener('click', function() {
            var id = document.getElementById("id").value;
            var model = document.getElementById("model").value;
            var CarBrand = document.getElementById("Car-brand").textContent.trim();
            var location = document.getElementById("Location").textContent.trim();
            var carType = document.getElementById("car-type").textContent.trim();
            var fuelType = document.getElementById("fuel-type").textContent.trim();
            var year = document.getElementById("year").textContent.trim();
            var passengers = document.getElementById("Passengers").value;
            var doors = document.getElementById("Door").value;
            var luggages = document.getElementById("Baggages").value;
            var price = document.getElementById("Price").value;
            var transmission = document.getElementById("transmission").textContent.trim();
            var currency = document.getElementById("currency").textContent.trim();
            var priceBasis = document.querySelector('input[name="price"]:checked');
            var airCondition = document.querySelector('input[name="Air"]:checked');
            var uploadedImage = document.querySelector('.uploaded-area li');
    
            if (id === '' || model === '' || CarBrand ==="Select car Brand" || location === 'Select Location' || carType === 'Select car type' || fuelType === 'Select fuel type' || year === 'Select Year' || transmission === 'Select transmission' || currency === 'Select Currency' || !priceBasis || !airCondition || !uploadedImage) {
                alert('Please fill in all fields.');
                return;
            }
            const newCar = {
                "id": id,
                "make": CarBrand, 
                "model": model,
                "year": year,
                "car-type": carType,
                "fuel-type": fuelType,
                "passengers": passengers,
                "doors": doors,
                "baggages": luggages,
                "air_condition": airCondition ? airCondition.value : "",
                "transmission": transmission,
                "availabality": "available", 
                "reserved-dates": [["", ""]],
                "location": location,
                "price": price,
                "currency": getCurrencySymbol(currency),
                "price_basis": priceBasis ? priceBasis.value : ""
            };
            addCar(newCar);
            clearForm();
            closeModal();
        });
    
        const clearForm = function() {
            document.getElementById("id").value = '';
            document.getElementById("model").value = '';
            document.getElementById("Car-brand").textContent = 'Select car Brand';
            document.getElementById("Location").textContent = 'Select Location';
            document.getElementById("car-type").textContent = 'Select car type';
            document.getElementById("fuel-type").textContent = 'Select fuel type';
            document.getElementById("year").textContent = 'Select Year';
            document.getElementById("Passengers").value = '2';
            document.getElementById("Door").value = '2';
            document.getElementById("Baggages").value = '0';
            document.getElementById("Price").value = '50';
            document.getElementById("transmission").textContent = 'Select transmission';
            document.getElementById("currency").textContent = 'Select Currency';
            var priceRadioButtons = document.querySelectorAll('input[name="price"]');
            priceRadioButtons.forEach(function(button) {
                button.checked = false;
            });
            var airRadioButtons = document.querySelectorAll('input[name="Air"]');
            airRadioButtons.forEach(function(button) {
                button.checked = false;
            });
            var uploadedArea = document.querySelector('#uploadedArea');
        uploadedArea.innerHTML = '';
        };
    
        
    });




    function renderTable(cars) {
        const tableBody = document.getElementById('table-body');
        const today = new Date();
        tableBody.innerHTML = ''; 

        cars.forEach(car => {
            const row = document.createElement('tr');

            const isReservedToday = car['reserved-dates'].some(reservedDates => {
                const pickupDate = new Date(reservedDates[0]);
                const dropoffDate = new Date(reservedDates[1]);
                return today >= pickupDate && today <= dropoffDate;
            });

            let reservationHTML = '';
            if (isReservedToday) {
                reservationHTML = '<td class="reservation-cell"><div class="red-point"></div></td>';
            } else {
                reservationHTML = '<td class="reservation-cell"><div class="green-point"></div></td>';
            }

            const availabilityClass = car.availabality === 'available' ? 'available' : 'unavailable';

            row.innerHTML = `
                <td>${car.id}</td>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car['car-type']}</td>
                <td>${car.location}</td>
                <td>${car.currency}${car.price}</td>
                ${reservationHTML}
                <td><span class="${availabilityClass}">${car.availabality}</span></td>
                <td class="actions-btns">
                    <a href="#">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
                        </svg>
                    </a>
                    <a class="delete-btn">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        </svg>                  
                    </a>
                </td>
            `;
            tableBody.appendChild(row);


            const deleteBtn = row.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {

            row.remove();
            carsData.splice(index, 1);
            renderTable(carsData);
        });
        });

        document.getElementById('export-csv').addEventListener('click', function () {
            const table = document.querySelector('table');
            const csv = convertToCSV(table, carsData);
            downloadCSV(csv, 'cars_table.csv');
        });
    }



    function getCurrencySymbol(currencyCode) {
        switch (currencyCode) {
            case 'USD':
                return '$';
            case 'EUR':
                return '€';
            case 'JPY':
                return '¥';
            case 'GBP':
                return '£';
            case 'AUD':
                return 'A$';
            default:
                return currencyCode; // Return the code itself if no symbol found
        }
    }
    
    