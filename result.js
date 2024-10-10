window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const bname = sessionStorage.getItem('BNAME');
    const iban = sessionStorage.getItem('IBAN');
    const accnumber = sessionStorage.getItem('ACCNUMBER');
    const swift = sessionStorage.getItem('SWIFT');
    const city = sessionStorage.getItem('CITY');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-bname').innerHTML = bname;
    document.getElementById('result-iban').innerHTML = iban;
    document.getElementById('result-accnumber').innerHTML = accnumber;
    document.getElementById('result-swift').innerHTML = swift;
    document.getElementById('result-city').innerHTML = city;
    

})

