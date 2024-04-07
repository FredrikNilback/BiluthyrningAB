
//Funktion för att ta bort parametrar i URLen som är tomma, detta så att man kan få en korrekt
//lista med bilar man söker för.
function removeEmptyParamsFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let newParamsString = '';
//Man tar den URLen som skapas och loopar igenom alla keys. Kollar ifall varje key har en value och isåfall
//lägger till den i en ny String newParamsString.
    for (const [key, value] of urlParams.entries()) {
        if (value.trim() !== '') {
            if (newParamsString !== '') {
                newParamsString += '&';
            }
            newParamsString += `${key}=${value}`;
        }
    }

    //Sätter in den nya Stringen i URLen så man får den fri ifrån tomma parametrar.
    const newUrl = `${location.origin}/searchAllCars?${newParamsString}`;


    window.location.href = newUrl;
}

//Här kopplar man så att funktonen ovan körs när man klickar på knappen som hör till formen searchForm på
// searchCars.html. Initierar en formData som skapar ett objekt av formen och sparar alla värden man skrivit in.
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            console.log('Form submitted');
            event.preventDefault();
            const formData = new FormData(searchForm);
            removeEmptyParamsFromURL(formData);
        });
    }
});
