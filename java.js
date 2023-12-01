function befektetes1() {
  let penz = parseFloat(document.getElementById("p").value);
  let evek = parseInt(document.getElementById("e").value);
  let szazalek = parseFloat(document.getElementById("sz").value) / 100;
  let osszesen = penz;

  if (penz < 0 || evek < 0) {
    alert(
      "A befektetett pénzösszegnek és a futamidőnek 0-nál nagyobbnak kell lenniük!"
    );
  } else {
    if (szazalek == 0) {
      alert("Az Ön pénzének értéke nem változik!");
    } else {
      if (document.getElementById("kk").checked) {
        for (let i = 0; i < evek; i++) {
          osszesen += osszesen * szazalek;
        }
      } else {
        osszesen = penz + evek * (penz * szazalek);
      }
      let osszkamat = osszesen - penz;
      osszkamat = parseInt(osszkamat).toLocaleString();
      osszesen = parseInt(osszesen).toLocaleString();

      alert(
        `${evek} év alatt az Ön pénze ${osszesen} Ft-ot érne. A teljes kamat értéke ${osszkamat} Ft.`
      );
    }
  }
}
