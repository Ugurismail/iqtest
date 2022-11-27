"use strict";
// İngilizce sorusu
const english = {
	soru: "hangisi köşeli parantez içindeki kelime ile eş anlamlıdır?",
	cümleler: [
		"The dessert will [spoil] if you don't keep it in the fridge. ",
		"At the end of the book, there is a [quotation] from Nietzsche.",
		"Just before the rain started the clouds started to [disperse].",
		"This is the third [consecutive] day that I've spent crying.",
		"He was found guilty of obtaining money through [deception].",
	],
	yanitlar: {
		0: ["Associate", "Extract", "Fragile", "Rot", "Discontinuous"],
		1: ["Decelerate", "Citation", "Precise", "Extensive", "Susceptible"],
		2: ["Scatter", "Concentrate", "Deceive", "Bare", "Trivial"],
		3: ["Trickery", "Scarce", "Grasp", "Humidity", "Sequential"],
		4: ["Dishonesty", "Impoverished", "Significant", "Graceful", "Diffuse"],
	},
	ayarlaEng: function () {
		const randomEng = Math.floor(Math.random() * 5);
		const soruEng = document.getElementById("soruEng");
		soruEng.innerText = this.soru;

		const eklenecekCümle = `
    ${this.cümleler[randomEng]}
    `;

		const cumleContainer = document.getElementById("cumleEng");
		cumleContainer.insertAdjacentHTML("afterbegin", eklenecekCümle);

		const eklenecekSiklarEng = `    
    <h6 class="english" id="english sik" name="a"> A-${this.yanitlar[randomEng][0]}</h6>
    <h6 class="english" id="english sik" name="b"> B-${this.yanitlar[randomEng][1]}</h6>
    <h6 class="english" id="english sik" name="c"> C-${this.yanitlar[randomEng][2]}</h6>
    <h6 class="english" id="english sik" name="d"> D-${this.yanitlar[randomEng][3]}</h6>
    <h6 class="english" id="english sik" name="e" cami ="cami"> E-${this.yanitlar[randomEng][4]}</h6>`;

		const şıklarContainer = document.getElementById("şıklarEng");
		şıklarContainer.insertAdjacentHTML("afterbegin", eklenecekSiklarEng);

		const englishAnswers = document.querySelectorAll(".english");

		englishAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				const yanitdeger = e.target.attributes.name.value;
				console.log(yanitdeger);
			}),
		);
	},
};
english.ayarlaEng();

// Türkçe sorusu
const turkish = {
	soru: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
	yanitlar: {
		0: [
			"Rakunum, kulübe de yatıyor.***",
			"Sabahları, şen düşlerde gezerdim…",
			"Kulaklarda hep aynı nağme.",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğin artık bende.",
		],
		1: [
			"Rakun, sırtüstü de yüzüyor.",
			"Sabahları, şen düşler de gezerdim…***",
			"Kulakların da çok ufakmış.",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğini artık ben de giyerim.",
		],
		2: [
			"Rakunum, kulübesinde yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Kulaklarda hep aynı nağme.",
			"Sende benim kadar gerçekleri görüyorsun.**",
			"Yeşil yeleğin artık bende.",
		],
		3: [
			"Rakunum, kulübesinde yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Gözlerinde bozukmuş senin.**",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğin artık bende.",
		],
		4: [
			"Rakunum, kulübesinde yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Kulaklarda hep aynı nağme.",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğin artık ben de.*",
		],
	},
	ayarlaTr: function () {
		document.getElementById("soruTr").innerText = turkish.soru;
		const randomTr = Math.floor(Math.random() * 5);
		const eklenecekSiklarTr = `    
<h6 class="turkish" id="turkish sik" name="a"> A-${turkish.yanitlar[randomTr][0]}</h6>
<h6 class="turkish" id="turkish sik" name="b"> B-${turkish.yanitlar[randomTr][1]}</h6>
<h6 class="turkish" id="turkish sik" name="c"> C-${turkish.yanitlar[randomTr][2]}</h6>
<h6 class="turkish" id="turkish sik" name="d"> D-${turkish.yanitlar[randomTr][3]}</h6>
<h6 class="turkish" id="turkish sik" name="e"> E-${turkish.yanitlar[randomTr][4]}</h6>`;

		document
			.getElementById("şıklarTr")
			.insertAdjacentHTML("afterbegin", eklenecekSiklarTr);

		const turkishAnswers = document.querySelectorAll(".turkish");

		turkishAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				const yanitdeger = e.target.attributes.name.value;
				console.log(yanitdeger);
			}),
		);
	},
};
turkish.ayarlaTr();

// Matematik sorusu
const math = {
	soru: "Aşağıdaki İşlemin sonucu kaçtır?",
	cümleler: [
		"1+(-1-(-1+1-1)-1-(-1)+1)",
		"2-	1+((-1*-1)+(-1-1))-(-1)",
		"1+((-1+1-1)-(-1*-1))+1",
		"1+((1+1-1)-(-1*-1))+1+1",
		"1+((1+1-1)-(1*1))+1*2+1",
	],
	yanitlar: {
		0: "0",
		1: "1",
		2: "2",
		3: "3",
		4: "4",
	},
	ayarlaMath: function () {
		document.getElementById("soruMath").innerHTML = math.soru;
		const randomMath = Math.floor(Math.random() * 5);
		document.getElementById("cumleMath").innerHTML = math.cümleler[randomMath];
		const eklenecekSiklarMath = `    
<h6 class="şıklarMath" id="math sik" name="a"> A-${math.yanitlar[0]}</h6>
<h6 class="şıklarMath" id="math sik" name="b"> B-${math.yanitlar[1]}</h6>
<h6 class="şıklarMath" id="math sik" name="c"> C-${math.yanitlar[2]}</h6>
<h6 class="şıklarMath" id="math sik" name="d"> D-${math.yanitlar[3]}</h6>
<h6 class="şıklarMath" id="math sik" name="e"> E-${math.yanitlar[4]}</h6>`;
		document
			.getElementById("şıklarMath")
			.insertAdjacentHTML("afterbegin", eklenecekSiklarMath);

		const mathAnswers = document.querySelectorAll(".şıklarMath");

		mathAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				const yanitdeger = e.target.attributes.name.value;
				console.log(yanitdeger);
			}),
		);
	},
};
math.ayarlaMath();

//latin sorusu
const latin = {
	soru: "Boşluğa hangi kelime gelmelidir?",
	metinler: [
		"Roma tibi subito motibus ibit amor. Signa te , signa , temere me tangis et angis. Sole medere, pede ede perede melos. Subi dura a rudibus. Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur ____ ?",
		"Roma tibi subito motibus ibit amor. Signa te , signa , temere me tangis et angis. Subi dura a rudibus.  Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur igni. Sole medere, pede ede perede ____?",
		"Signa te , signa , temere me tangis et angis. Sole medere, pede ede perede melos. Subi dura a rudibus. Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur igni. Roma tibi subito motibus ibit ___?",
		"Roma tibi subito motibus ibit amor.  Sole medere, pede ede perede melos. Subi dura a rudibus. Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur igni. Signa te , signa , temere me tangis et ____?",
		"Roma tibi subito motibus ibit amor. Signa te , signa , temere me tangis et angis. Sole medere, pede ede perede melos. Subi dura a rudibus. In girum imus nocte et consumimur igni. Si bene te tua laus taxat, sua laute ____?",
	],
	yanitlar: {
		0: ["aqua", "igni", "podex", "terra", "aura"],
		1: ["aqua", "terra", "podex", "melos", "aura"],
		2: ["aqua", "igni", "podex", "terra", "amor"],
		3: ["aqua", "igni", "podex", "terra", "ignis"],
		4: ["aqua", "igni", "podex", "tenebis", "aura"],
	},
	ayarlaLtn: function () {
		const randomLtn = Math.floor(Math.random() * 5);
		document.getElementById("soruLtn").innerText = this.soru;
		document.getElementById("cumleLtn").innerText = this.metinler[randomLtn];
		const eklenecekLtn = `
		<h6 class="latin" id="latin sik" name="a"> A-${this.yanitlar[randomLtn][0]}</h6>
		<h6 class="latin" id="latin sik" name="b"> B-${this.yanitlar[randomLtn][1]}</h6>
		<h6 class="latin" id="latin sik" name="c"> C-${this.yanitlar[randomLtn][2]}</h6>
		<h6 class="latin" id="latin sik" name="d"> D-${this.yanitlar[randomLtn][3]}</h6>
		<h6 class="latin" id="latin sik" name="e"> E-${this.yanitlar[randomLtn][4]}</h6>
		`;
		document
			.getElementById("şıklarLtn")
			.insertAdjacentHTML("afterbegin", eklenecekLtn);

		const latinAnswers = document.querySelectorAll(".latin");

		latinAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				const yanitdeger = e.target.attributes.name.value;
				console.log(yanitdeger);
			}),
		);
	},
};
latin.ayarlaLtn();

const tekSayi = {
	soru: "Hangisi Tabloya ait değildir?",
	sayılar: [
		[
			"4",
			"32",
			"144",
			"17",
			"28",
			"122",
			"18",
			"64",
			"188",
			"322",
			"14",
			"202",
		],
		["2", "24", "114", "9", "62", "138", "12", "44", "180", "422", "18", "212"],
		[
			"6",
			"36",
			"198",
			"13",
			"82",
			"112",
			"14",
			"54",
			"172",
			"422",
			"24",
			"202",
		],
		[
			"8",
			"44",
			"162",
			"15",
			"92",
			"132",
			"16",
			"74",
			"162",
			"522",
			"34",
			"302",
		],
		[
			"2",
			"62",
			"190",
			"19",
			"72",
			"142",
			"18",
			"84",
			"152",
			"622",
			"44",
			"402",
		],
	],
	yanitlar: {
		0: ["4", "17", "28", "144", "188"],
		1: ["2", "9", "62", "114", "180"],
		2: ["6", "13", "82", "198", "422"],
		3: ["8", "162", "15", "92", "74"],
		4: ["2", "190", "44", "19", "402"],
	},
	ayarlaTkSayi: function () {
		const randomtksayi = Math.floor(Math.random() * 5);
		document.getElementById("tkSyisoru").innerText = this.soru;
		for (let index = 0; index < 12; index++) {
			document.getElementById("cell" + (index + 1)).innerText =
				this.sayılar[randomtksayi][index];
		}
		const eklenekcekTkSayi = `
		<h6 class="tkSyi" id="tkSyi sik" name="a"> A-${this.yanitlar[randomtksayi][0]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="b"> B-${this.yanitlar[randomtksayi][1]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="c"> C-${this.yanitlar[randomtksayi][2]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="d"> D-${this.yanitlar[randomtksayi][3]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="e"> E-${this.yanitlar[randomtksayi][4]}</h6>
		`;
		document
			.getElementById("tkSyiSik")
			.insertAdjacentHTML("afterbegin", eklenekcekTkSayi);

		const tekSayiSiklar = document.querySelectorAll(".tkSyi");

		tekSayiSiklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				const yanitdeger = e.target.attributes.name.value;
				console.log(yanitdeger);
			}),
		);
	},
};
tekSayi.ayarlaTkSayi();

const birler = {
	sorular: [
		["21 + 18 = 93", "46 + 32 = 87", "95 + 81 = 77", "91 + 92 = ?"], //48
		["21 + 18 = 93", "46 + 32 = 87", "95 + 81 = 77", "81 + 92 = ?"], //47
		["21 + 18 = 93", "46 + 32 = 87", "95 + 81 = 77", "71 + 92 = ?"], //46
		["21 + 18 = 93", "46 + 32 = 87", "95 + 81 = 77", "61 + 92 = ?"], //45
		["21 + 18 = 93", "46 + 32 = 87", "95 + 81 = 77", "51 + 92 = ?"], //44
	],
	yanitlar: {
		0: ["48", "92", "123", "49", "60"],
		1: ["48", "92", "123", "47", "60"],
		2: ["48", "92", "46", "128", "60"],
		3: ["45", "92", "123", "49", "60"],
		4: ["48", "92", "123", "49", "44"],
	},
	ayarlaBirler: function () {
		const randomtbrlr = Math.floor(Math.random() * 4);
		const randomtbrlr2 = Math.floor(Math.random() * 5);
		const eklenecekBrler = `
	<h2 class="brler" id="brler" name="a"> ${this.sorular[randomtbrlr][0]}</h2>
	<h2 class="brler" id="brler" name="b"> ${this.sorular[randomtbrlr][1]}</h2>
	<h2 class="brler" id="brler" name="c"> ${this.sorular[randomtbrlr][2]}</h2>
	<h2 class="brler" id="brler" name="d"> ${this.sorular[randomtbrlr][3]}</h2>
	`;
		document
			.getElementById("birler")
			.insertAdjacentHTML("afterbegin", eklenecekBrler);

		const eklenecekBrSiks = `
		<h6 class="brlerSik" id="birler sik" name="a"> A-${this.yanitlar[randomtbrlr2][0]}</h6>
		<h6 class="brlerSik" id="birler sik" name="b"> B-${this.yanitlar[randomtbrlr2][1]}</h6>
		<h6 class="brlerSik" id="birler sik" name="c"> C-${this.yanitlar[randomtbrlr2][2]}</h6>
		<h6 class="brlerSik" id="birler sik" name="d"> D-${this.yanitlar[randomtbrlr2][3]}</h6>
		<h6 class="brlerSik" id="birler sik" name="e"> E-${this.yanitlar[randomtbrlr2][4]}</h6>
		`;
		document
			.getElementById("birler-siklar")
			.insertAdjacentHTML("afterbegin", eklenecekBrSiks);
	},
};
birler.ayarlaBirler();
