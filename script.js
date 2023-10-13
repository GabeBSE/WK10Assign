// script.js

// JS waits for the html page to fully load before running
document.addEventListener("DOMContentLoaded", function () {
    const giftForm = document.getElementById("gift-form");
    const giftList = document.getElementById("gift-list");

    giftForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form input values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const item = document.getElementById("item").value;
        const storeWebsite = document.getElementById("store-website").value;
        const fragile = document.getElementById("fragile").checked;
        const occasion = document.getElementById("occasion").value;
        const specialtyWrapped = document.getElementById("specialty-wrapped").checked;
       
       // Get the selected date from the "Occasion Date" input
        const occasionDateInput = document.getElementById("occasion-date");
        const occasionDate = occasionDateInput.value;


        // Create a new row in the table
        const newRow = giftList.insertRow();
        newRow.innerHTML = `
            <td>${firstName} ${lastName}</td>
            <td>${item}</td>
            <td>${storeWebsite}</td>
            <td>${occasion}</td>
            <td>${occasionDate}</td>
            <td>${fragile ? "Yes" : "No"}</td>
            <td>${specialtyWrapped ? "Yes" : "No"}</td>
            <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
        `;

        // Clear form inputs
        giftForm.reset();
    });

    // Delete button functionality
    giftList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const row = event.target.closest("tr");
            row.remove();
            
        }
    });
});
