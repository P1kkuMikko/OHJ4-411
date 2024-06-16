document.addEventListener('DOMContentLoaded', function() {
    const lomake = document.getElementById('rekisterointi');

    lomake.addEventListener('submit', function(tapahtuma) {
        tapahtuma.preventDefault();

        const kayttajaID = document.getElementById('kayttajaID').value.trim();
        const salasana = document.getElementById('salasana').value.trim();
        const postinumero = document.getElementById('postinumero').value.trim();
        const sahkoposti = document.getElementById('sahkoposti').value.trim();

        const nimi = document.getElementById('nimi').value.trim();
        const osoite = document.getElementById('osoite').value.trim();
        const maa = document.getElementById('maa').value;
        const sukupuoliElementit = document.getElementsByName('sukupuoli');
        const kieliElementit = document.getElementsByName('kieli');

        let sukupuoliValittu = false;
        let kieliValittu = false;

        for (let i = 0; i < sukupuoliElementit.length; i++) {
            if (sukupuoliElementit[i].checked) {
                sukupuoliValittu = true;
                break;
            }
        }

        for (let i = 0; i < kieliElementit.length; i++) {
            if (kieliElementit[i].checked) {
                kieliValittu = true;
                break;
            }
        }

        const virheet = [];

        if (kayttajaID.length < 6) {
            virheet.push('Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä.');
            naytaVirhe('kayttajaID', 'Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä.');
        } else {
            piilotaVirhe('kayttajaID');
        }

        if (salasana.length < 6 || !/[0-9]/.test(salasana) || !/[A-Z]/.test(salasana) || !/[!@£$€&%#]/.test(salasana)) {
            virheet.push('Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää vähintään yhden numeron, ison kirjaimen ja erikoismerkin.');
            naytaVirhe('salasana', 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää vähintään yhden numeron, ison kirjaimen ja erikoismerkin.');
        } else {
            piilotaVirhe('salasana');
        }

            if (postinumero.length !== 5 || !/^\d{5}$/.test(postinumero)) {
                virheet.push('Postinumeron tulee olla 5 numeroa pitkä.');
                naytaVirhe('postinumero', 'Postinumeron tulee olla 5 numeroa pitkä.');
            } else {
                piilotaVirhe('postinumero');
            }

            if (!/\S+@\S+\.\S+/.test(sahkoposti)) {
                virheet.push('Sähköpostiosoitteen tulee olla sähköpostimuotoinen.');
                naytaVirhe('sahkoposti', 'Sähköpostiosoitteen tulee olla sähköpostimuotoinen.');
            } else {
                piilotaVirhe('sahkoposti');
            }

            if (nimi === '' || osoite === '' || maa === 'alku' || !sukupuoliValittu || !kieliValittu) {
                virheet.push('Kaikki kentät paitsi Lisätietoja ovat pakollisia.');
                naytaVirhe('paitsi', 'Kaikki kentät paitsi Lisätietoja ovat pakollisia.');
            } else {
                piilotaVirhe('paitsi');
            }

        if (nimi === '') {
            virheet.push('Nimi on pakollinen.');
            naytaVirhe('nimi', 'Nimi on pakollinen.');
        } else {
            piilotaVirhe('nimi');
        }

        if (osoite === '') {
            virheet.push('Osoite on pakollinen.');
            naytaVirhe('osoite', 'Osoite on pakollinen.');
        } else {
            piilotaVirhe('osoite');
        }

        if (maa === 'alku') {
            virheet.push('Maa on pakollinen.');
            naytaVirhe('maa', 'Maa on pakollinen.');
        } else {
            piilotaVirhe('maa');
        }

        if (!sukupuoliValittu) {
            virheet.push('Sukupuoli on pakollinen.');
            naytaVirhe('sukupuoli', 'Sukupuoli on pakollinen.');
        } else {
            piilotaVirhe('sukupuoli');
        }

        if (!kieliValittu) {
            virheet.push('Kieli on pakollinen.');
            naytaVirhe('kieli', 'Kieli on pakollinen.');
        } else {
            piilotaVirhe('kieli');
        }

        function naytaVirhe(kenttaId, virheviesti) {
            const virheElementti = document.getElementById(kenttaId + '-error');
            if (virheElementti) {
                virheElementti.textContent = virheviesti;
            }
        }

        function piilotaVirhe(kenttaId) {
            const virheElementti = document.getElementById(kenttaId + '-error');
            if (virheElementti) {
                virheElementti.textContent = '';
            }
        }

        if (virheet.length > 0) {
        } else {
            console.log('Kaikki kentät ovat validit!');
        }
    });
});