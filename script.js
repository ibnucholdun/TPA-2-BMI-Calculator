let form = document.querySelector('form');
let inputBerat = document.querySelector('#berat');
let inputTinggi = document.querySelector('#tinggi');
let formSection = document.querySelector('.form-section');
let hasil = document.querySelector('.hasil');
let bmiHasil = document.querySelector('.bmi');
let statusHasil = document.querySelector('.status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let berat = inputBerat.value;
    let tinggi = inputTinggi.value;
    let rumus = (berat/(tinggi/100)**2).toFixed(2);

    if (rumus <= 18.5) {
        hasil.style.display = 'block';
        bmiHasil.innerHTML = rumus;
        statusHasil.innerHTML = 'Kurus';
        form.reset();
    } else if (rumus > 18.5 && rumus <= 24.9) {
        hasil.style.display = 'block';
        bmiHasil.innerHTML = rumus;
        statusHasil.innerHTML = 'Normal';
        form.reset();
    }
    else if (rumus > 25 && rumus <= 29.9) {
        hasil.style.display = 'block';
        bmiHasil.innerHTML = rumus;
        statusHasil.innerHTML = 'Gemuk';
        form.reset();
    } else {
        hasil.style.display = 'block';
        bmiHasil.innerHTML = rumus;
        statusHasil.innerHTML = 'Obesitas';
        form.reset();
    }
});