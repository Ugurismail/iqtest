"use strict";

let yanitList = [];
let yanitlar = [];
function next(yanit, sakla, goster) {
	yanitList.push(yanit);
	document.querySelector(sakla).classList.add("hidden");
	document.querySelector(goster).classList.remove("hidden");
}

function switchKeys(key) {
	switch (key) {
		case 0:
			yanitlar.push("a");
			break;
		case 1:
			yanitlar.push("b");
			break;
		case 2:
			yanitlar.push("c");
			break;
		case 3:
			yanitlar.push("d");
			break;
		case 4:
			yanitlar.push("e");
			break;
		default:
			break;
	}
}
function countdown(elementName, minutes, seconds) {
	let element, endTime, hours, mins, msLeft, time;

	function twoDigits(n) {
		return n <= 9 ? "0" + n : n;
	}

	function updateTimer() {
		msLeft = endTime - +new Date();
		if (msLeft < 1000) {
			element.innerHTML = "Time is up!";
			history.back();
		} else {
			time = new Date(msLeft);
			hours = time.getUTCHours();
			mins = time.getUTCMinutes();
			element.innerHTML =
				(hours ? hours + ":" + twoDigits(mins) : mins) +
				":" +
				twoDigits(time.getUTCSeconds());
			setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
		}
	}

	element = document.getElementById(elementName);
	endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
	updateTimer();
}
// countdown("ten-countdown", 13, 0);

document.getElementById("girisbtn").addEventListener("click", () => {
	document.getElementById("giriş").classList.add("hidden");
	document.querySelector(".regIq1").classList.remove("hidden");
	countdown("ten-countdown", 13, 0);
});

const latin = {
	soru: "Boşluğa hangi kelime gelmelidir?",
	metinler: [
		"Roma tibi subito motibus ibit amor. Signa te , signa , temere me tangis et angis. Sole medere, pede ede perede melos. Subi dura a rudibus. Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur ____ ?",
		"Roma tibi subito motibus ibit amor. Signa te , signa , temere me tangis et angis. Subi dura a rudibus.  Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur igni. Sole medere, pede ede perede ____?",
		"Signa te , signa , temere me tangis et angis. Sole medere, pede ede perede melos. Subi dura a rudibus. Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur igni. Roma tibi subito motibus ibit ___?",
		"Roma tibi subito motibus ibit amor.  Sole medere, pede ede perede melos. Subi dura a rudibus. Si bene te tua laus taxat, sua laute tenebis. In girum imus nocte et consumimur igni. Si bene te tua laus taxat, sua laute _____? ",
		"Roma tibi subito motibus ibit amor. Signa te , signa , temere me tangis et angis. Sole medere, pede ede perede melos. Subi dura a rudibus. In girum imus nocte et consumimur igni. Lorem ipsum dolor sit, tisro lodmus ipme ___?",
	],
	yanitlar: {
		0: ["igni", "aqua", "podex", "terra", "aura"],
		1: ["aqua", "melos", "terra", "podex", "aura"],
		2: ["aqua", "igni", "amor", "podex", "terra"],
		3: ["aqua", "igni", "podex", "tenebis", "ignis"],
		4: ["aqua", "igni", "podex", "tenebis", "rol"],
	},
	ayarlaLtn: function () {
		const randomLtn = Math.floor(Math.random() * 5);
		switchKeys(randomLtn);
		document.getElementById("soruLtn").innerText = this.soru;
		document.getElementById("cumleLtn").innerText = this.metinler[randomLtn];
		const eklenecekLtn = `
		<h6 class="latin" id="latin sik" name="a"> ${this.yanitlar[randomLtn][0]}</h6>
		<h6 class="latin" id="latin sik" name="b"> ${this.yanitlar[randomLtn][1]}</h6>
		<h6 class="latin" id="latin sik" name="c"> ${this.yanitlar[randomLtn][2]}</h6>
		<h6 class="latin" id="latin sik" name="d"> ${this.yanitlar[randomLtn][3]}</h6>
		<h6 class="latin" id="latin sik" name="e"> ${this.yanitlar[randomLtn][4]}</h6>
		`;
		document
			.getElementById("şıklarLtn")
			.insertAdjacentHTML("afterbegin", eklenecekLtn);

		const latinAnswers = document.querySelectorAll(".latin");

		let yanitDeger;

		latinAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitDeger = e.target.attributes.name.value;
				next(yanitDeger, ".regIq1", ".regIq2");
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
			"172",
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
		0: ["17", "4", "28", "144", "188"],
		1: ["2", "9", "62", "114", "180"],
		2: ["6", "82", "13", "198", "422"],
		3: ["8", "162", "92", "15", "74"],
		4: ["2", "190", "44", "402", "19"],
	},
	ayarlaTkSayi: function () {
		const randomtksayi = 3;
		// Math.floor(Math.random() * 5);
		switchKeys(randomtksayi);
		document.getElementById("tkSyisoru").innerText = this.soru;
		for (let index = 0; index < 12; index++) {
			document.getElementById("cell" + (index + 1)).innerText =
				this.sayılar[randomtksayi][index];
		}
		const eklenekcekTkSayi = `
		<h6 class="tkSyi" id="tkSyi sik" name="a">${this.yanitlar[randomtksayi][0]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="b">${this.yanitlar[randomtksayi][1]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="c">${this.yanitlar[randomtksayi][2]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="d">${this.yanitlar[randomtksayi][3]}</h6>
		<h6 class="tkSyi" id="tkSyi sik" name="e">${this.yanitlar[randomtksayi][4]}</h6>
		`;
		document
			.getElementById("tkSyiSik")
			.insertAdjacentHTML("afterbegin", eklenekcekTkSayi);

		const tekSayiSiklar = document.querySelectorAll(".tkSyi");
		let yanitdeger;
		tekSayiSiklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq2", ".regIq3");
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
		1: ["48", "47", "92", "123", "60"],
		2: ["48", "92", "46", "128", "60"],
		3: ["92", "123", "49", "45", "60"],
		4: ["48", "92", "123", "49", "44"],
	},
	ayarlaBirler: function () {
		const randomtbrlr = Math.floor(Math.random() * 5);
		switchKeys(randomtbrlr);
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
		<h6 class="brlerSik" id="birler sik" name="a">${this.yanitlar[randomtbrlr][0]}</h6>
		<h6 class="brlerSik" id="birler sik" name="b">${this.yanitlar[randomtbrlr][1]}</h6>
		<h6 class="brlerSik" id="birler sik" name="c">${this.yanitlar[randomtbrlr][2]}</h6>
		<h6 class="brlerSik" id="birler sik" name="d">${this.yanitlar[randomtbrlr][3]}</h6>
		<h6 class="brlerSik" id="birler sik" name="e">${this.yanitlar[randomtbrlr][4]}</h6>
		`;
		document
			.getElementById("birler-siklar")
			.insertAdjacentHTML("afterbegin", eklenecekBrSiks);

		const brlersklar = document.querySelectorAll(".brlerSik");
		let yanitdeger;
		brlersklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq3", ".regIq4");
			}),
		);
	},
};
birler.ayarlaBirler();

const ekskhrf = {
	sorular: [
		"A-B-C-Ç-D-G-Ğ-H-I-J-L-M-N-O-Ö-P-R-S-Ş-U-Ü-Y-Z",
		"A-C-Ç-D-F-G-Ğ-H-I-J-L-M-N-O-Ö-P-S-Ş-U-Ü-V-Y-Z",
		"A-B-C-Ç-D-F-G-Ğ-H-I-J-K-L-M-N-O-Ö-S-Ş-U-Ü-V-Y-Z",
		"A-B-C-Ç-D-F-G-Ğ-H-I-J-L-M-O-Ö-P-R-S-Ş-U-Ü-V-Y-Z",
		"A-B-C-Ç-D-F-G-Ğ-H-I-J-K-L-M-N-O-Ö-R-Ş-U-Ü-V-Y-Z",
	],
	yanitlar: {
		0: ["tevkif", "tertip", "tenkit", "terkip", "tesbih"], //tevkif
		1: ["tevkif", "tebrik", "tenkit", "terkip", "tesbih"], //tebrik
		2: ["tebrik", "tevkif", "tertip", "tenkit", "terkip"], //tertip
		3: ["tebrik", "tevkif", "tertip", "tenkit", "tesbih"], //tenkit
		4: ["tebrik", "tevkif", "tertip", "türkan", "tespit"], //tespit
	},
	eksikHarf: function () {
		const randomEksk = Math.floor(Math.random() * 5);
		switchKeys(randomEksk);
		document.getElementById("ekskhrfmtn").innerText = this.sorular[randomEksk];
		const eklenecekEksk = `
		<h6 class="ekskhrf" id="ekskHrf sik" name="a">${this.yanitlar[randomEksk][0]}</h6>
		<h6 class="ekskhrf" id="ekskHrf sik" name="b">${this.yanitlar[randomEksk][1]}</h6>
		<h6 class="ekskhrf" id="ekskHrf sik" name="c">${this.yanitlar[randomEksk][2]}</h6>
		<h6 class="ekskhrf" id="ekskHrf sik" name="d">${this.yanitlar[randomEksk][3]}</h6>
		<h6 class="ekskhrf" id="ekskHrf sik" name="e">${this.yanitlar[randomEksk][4]}</h6>
		`;
		document
			.getElementById("ekskhrfsklar")
			.insertAdjacentHTML("afterbegin", eklenecekEksk);

		const eksksiklar = document.querySelectorAll(".ekskhrf");
		let yanitdeger;
		eksksiklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq4", ".regIq5");
			}),
		);
	},
};
ekskhrf.eksikHarf();

const alti = {
	sorular: [
		["1 5 9 6 = 3", "5 7 8 9 = 5", "1 2 3 4 = 4", "6 7 4 2 = 1", "7 4 6 7 = ?"], //0
		["1 5 9 6 = 3", "5 7 0 9 = 3", "1 2 9 4 = 4", "6 7 4 3 = 2", "7 4 6 2 = ?"], //1
		["1 2 9 6 = 0", "5 7 8 9 = 5", "1 2 3 4 = 4", "6 7 4 2 = 1", "7 5 6 8 = ?"], //2
		["1 5 9 6 = 3", "5 7 8 9 = 5", "1 2 3 4 = 4", "6 7 4 2 = 1", "7 3 3 9 = ?"], //4
		["1 5 9 6 = 3", "5 7 8 9 = 5", "1 2 3 4 = 4", "6 7 4 2 = 1", "8 3 5 7 = ?"], //5
	],
	yanitlar: ["0", "1", "2", "4", "5"],
	ayarlaAlti: function () {
		const randomAlti = Math.floor(Math.random() * 5);
		switchKeys(randomAlti);
		const eklenecekAltiTablo = `
		<h2 class="alti" id="alti" name="a"> ${this.sorular[randomAlti][0]}</h2>
		<h2 class="alti" id="alti" name="b"> ${this.sorular[randomAlti][1]}</h2>
		<h2 class="alti" id="alti" name="c"> ${this.sorular[randomAlti][2]}</h2>
		<h2 class="alti" id="alti" name="d"> ${this.sorular[randomAlti][3]}</h2>
		<h2 class="alti" id="alti" name="d"> ${this.sorular[randomAlti][4]}</h2>
		`;
		document
			.getElementById("altiTablo")
			.insertAdjacentHTML("afterbegin", eklenecekAltiTablo);

		const eklenecekAltiyanit = `
		<h6 class="alti-sik" id="alti-sik" name="a">${this.yanitlar[0]}</h6>
		<h6 class="alti-sik" id="alti-sik" name="b">${this.yanitlar[1]}</h6>
		<h6 class="alti-sik" id="alti-sik" name="c">${this.yanitlar[2]}</h6>
		<h6 class="alti-sik" id="alti-sik" name="d">${this.yanitlar[3]}</h6>
		<h6 class="alti-sik" id="alti-sik" name="e">${this.yanitlar[4]}</h6>
		`;
		document
			.getElementById("altiSiklar")
			.insertAdjacentHTML("afterbegin", eklenecekAltiyanit);

		const altiSklar = document.querySelectorAll(".alti-sik");
		let yanitdeger;
		altiSklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq5", ".regIq6");
			}),
		);
	},
};
alti.ayarlaAlti();

const sayiDz = {
	sorular: [
		"25-24-22-19-?", //15
		"42-41-39-36-?", //32
		"103-102-100-97- ?", //93
		"55-54-52-49-?", //45
		"99-98-96-93-?", //89
	],
	yanitlar: ["15", "32", "93", "45", "89"],
	ayarlaSayiDz: function () {
		const rndmSyDz = Math.floor(Math.random() * 5);
		switchKeys(rndmSyDz);
		document.getElementById("sayiDzSoru").innerText = this.sorular[rndmSyDz];
		const eklnecekSyDz = `
		<h6 class="syDzSik" id="syDzsik" name="a">${this.yanitlar[0]}</h6>
		<h6 class="syDzSik" id="syDzsik" name="b">${this.yanitlar[1]}</h6>
		<h6 class="syDzSik" id="syDzsik" name="c">${this.yanitlar[2]}</h6>
		<h6 class="syDzSik" id="syDzsik" name="d">${this.yanitlar[3]}</h6>
		<h6 class="syDzSik" id="syDzsik" name="e">${this.yanitlar[4]}</h6>
		`;
		document
			.getElementById("sayiDzSiklar")
			.insertAdjacentHTML("afterbegin", eklnecekSyDz);

		const syDzSiklar = document.querySelectorAll(".syDzSik");
		let yanitdeger;
		syDzSiklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq6", ".regIq7");
			}),
		);
	},
};
sayiDz.ayarlaSayiDz();

const hrfDz = {
	sorular: [
		"A-Ç-F-H-?", //J
		"K-N-P-Ş-?", //Ü
		"C-E-Ğ-İ-?", //L
		"Ğ-İ-L-O-?", //R
		"H-J-M-Ö-?", //S
	],
	yanitlar: ["J", "Ü", "L", "R", "S"],
	ayarlaHrfDz: function () {
		const rndmHrfDz = Math.floor(Math.random() * 5);
		switchKeys(rndmHrfDz);
		document.getElementById("hrfDzSoru").innerText = this.sorular[rndmHrfDz];
		const eklnecekHrfDz = `
		<h6 class="hrfDzSik" id="hrfDzsikID" name="a">${this.yanitlar[0]}</h6>
		<h6 class="hrfDzSik" id="hrfDzsikID" name="b">${this.yanitlar[1]}</h6>
		<h6 class="hrfDzSik" id="hrfDzsikID" name="c">${this.yanitlar[2]}</h6>
		<h6 class="hrfDzSik" id="hrfDzsikID" name="d">${this.yanitlar[3]}</h6>
		<h6 class="hrfDzSik" id="hrfDzsikID" name="e">${this.yanitlar[4]}</h6>
		`;
		document
			.getElementById("hrfDzSiklar")
			.insertAdjacentHTML("afterbegin", eklnecekHrfDz);

		const harfDisizi = document.querySelectorAll(".hrfDzSik");
		let yanitdeger;
		harfDisizi.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq7", ".regIq8");
			}),
		);
	},
};
hrfDz.ayarlaHrfDz();

const hngFrk = {
	soru: "Hangi Kelime diğerlerinden farklıdır?",
	kelimeler: [
		["DİYARBAKIR", "ANKARA", "EDİRNE", "AMASYA", "SİVAS"],
		["SİVAS", "ŞIRNAK", "KARABÜK", "EDİRNE", "TOKAT"],
		["SAMOS", "ANKARA", "MARDİN", "AMASYA", "ADANA"],
		["SİVAS", "ANTALYA", "AMASYA", "BURSA", "KARABÜK"],
		["KARABÜK", "ANKARA", "EDİRNE", "AMASYA", "RİZE"],
	],
	ayarlaHngFrk: function () {
		const randomHng = Math.floor(Math.random() * 5);
		switchKeys(randomHng);
		document.getElementById("frkliWordSru").innerText = this.soru;
		document.getElementById("frkliWordCumle").innerText =
			this.kelimeler[randomHng];
		const eklenecekHng = `
		<h6 class="hng" id="hngID" name="a">${this.kelimeler[randomHng][0]}</h6>
		<h6 class="hng" id="hngID" name="b">${this.kelimeler[randomHng][1]}</h6>
		<h6 class="hng" id="hngID" name="c">${this.kelimeler[randomHng][2]}</h6>
		<h6 class="hng" id="hngID" name="d">${this.kelimeler[randomHng][3]}</h6>
		<h6 class="hng" id="hngID" name="e">${this.kelimeler[randomHng][4]}</h6>
		`;
		document
			.getElementById("farkliKlmSiklar")
			.insertAdjacentHTML("afterbegin", eklenecekHng);

		const hngSiklar = document.querySelectorAll(".hng");

		hngSiklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				const yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq8", ".regIq9");
			}),
		);
	},
};
hngFrk.ayarlaHngFrk();

const xyz = {
	soru: [
		[`X=2Y\nZ-X=Y\nZ=Y*? `], //3
		[`X=3Y\nZ-X=Y\nZ=Y*? `], //4
		[`X=4Y\nZ-X=Y\nZ=Y*? `], //5
		[`X=5Y\nZ-X=Y\nZ=Y*? `], //6
		[`X=6Y\nZ-X=Y\nZ=Y*? `], //7
	],
	yanitlar: ["3", "4", "5", "6", "7"],
	ayarlaxyz: function () {
		const randomXyz = Math.floor(Math.random() * 5);
		switchKeys(randomXyz);
		document.getElementById("xyzQ").innerText = this.soru[randomXyz];
		const eklenecekXyz = `
		<h6 class="xyz" id="xyzID" name="a">${this.yanitlar[0]}</h6>
		<h6 class="xyz" id="xyzID" name="b">${this.yanitlar[1]}</h6>
		<h6 class="xyz" id="xyzID" name="c">${this.yanitlar[2]}</h6>
		<h6 class="xyz" id="xyzID" name="d">${this.yanitlar[3]}</h6>
		<h6 class="xyz" id="xyzID" name="e">${this.yanitlar[4]}</h6>
		`;
		document
			.getElementById("xyzYnt")
			.insertAdjacentHTML("afterbegin", eklenecekXyz);
		const xyzSiklar = document.querySelectorAll(".xyz");
		let yanitdeger;
		xyzSiklar.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".regIq9", ".english-questions");
			}),
		);
	},
};
xyz.ayarlaxyz();

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
		0: ["Rot", "Associate", "Extract", "Fragile", "Discontinuous"],
		1: ["Decelerate", "Citation", "Precise", "Extensive", "Susceptible"],
		2: ["Concentrate", "Deceive", "Scatter", "Bare", "Trivial"],
		3: ["Trickery", "Scarce", "Grasp", "Sequential", "Humidity"],
		4: ["Impoverished", "Significant", "Graceful", "Diffuse", "Dishonesty"],
	},
	ayarlaEng: function () {
		const randomEng = Math.floor(Math.random() * 5);
		switchKeys(randomEng);
		const soruEng = document.getElementById("soruEng");
		soruEng.innerText = this.soru;

		const eklenecekCümle = `
    ${this.cümleler[randomEng]}
    `;

		const cumleContainer = document.getElementById("cumleEng");
		cumleContainer.insertAdjacentHTML("afterbegin", eklenecekCümle);

		const eklenecekSiklarEng = `    
    <h6 class="english" id="english sik" name="a">${this.yanitlar[randomEng][0]}</h6>
    <h6 class="english" id="english sik" name="b">${this.yanitlar[randomEng][1]}</h6>
    <h6 class="english" id="english sik" name="c">${this.yanitlar[randomEng][2]}</h6>
    <h6 class="english" id="english sik" name="d">${this.yanitlar[randomEng][3]}</h6>
    <h6 class="english" id="english sik" name="e">${this.yanitlar[randomEng][4]}</h6>`;

		const şıklarContainer = document.getElementById("şıklarEng");
		şıklarContainer.insertAdjacentHTML("afterbegin", eklenecekSiklarEng);

		const englishAnswers = document.querySelectorAll(".english");
		let yanitdeger;
		englishAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".english-questions", ".turkish-questions");
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
			"Rakunum, kulübe de yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Kulaklarda hep aynı nağme.",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğin artık bende.",
		],
		1: [
			"Rakun, sırtüstü de yüzüyor.",
			"Sabahları, şen düşler de gezerdim…",
			"Kulakların da çok ufakmış.",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğini artık ben de giyerim.",
		],
		2: [
			"Rakunum, kulübesinde yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Sende benim kadar gerçekleri görüyorsun.",
			"Kulaklarda hep aynı nağme.",
			"Yeşil yeleğin artık bende.",
		],
		3: [
			"Rakunum, kulübesinde yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Keşke aklım sende kalmasaydı…",
			"Gözlerinde bozukmuş senin.",
			"Yeşil yeleğin artık bende.",
		],
		4: [
			"Rakunum, kulübesinde yatıyor.",
			"Sabahları, şen düşlerde gezerdim…",
			"Kulaklarda hep aynı nağme.",
			"Keşke aklım sende kalmasaydı…",
			"Yeşil yeleğin artık ben de.",
		],
	},
	ayarlaTr: function () {
		document.getElementById("soruTr").innerText = turkish.soru;
		const randomTr = Math.floor(Math.random() * 5);
		switchKeys(randomTr);
		const eklenecekSiklarTr = `    
<h6 class="turkish" id="turkish sik" name="a">${turkish.yanitlar[randomTr][0]}</h6>
<h6 class="turkish" id="turkish sik" name="b">${turkish.yanitlar[randomTr][1]}</h6>
<h6 class="turkish" id="turkish sik" name="c">${turkish.yanitlar[randomTr][2]}</h6>
<h6 class="turkish" id="turkish sik" name="d">${turkish.yanitlar[randomTr][3]}</h6>
<h6 class="turkish" id="turkish sik" name="e">${turkish.yanitlar[randomTr][4]}</h6>`;

		document
			.getElementById("şıklarTr")
			.insertAdjacentHTML("afterbegin", eklenecekSiklarTr);

		const turkishAnswers = document.querySelectorAll(".turkish");
		let yanitdeger;
		turkishAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".turkish-questions", ".math-questions");
			}),
		);
	},
};
turkish.ayarlaTr();

// Matematik sorusu
const math = {
	soru: "Aşağıdaki İşlemin sonucu kaçtır?",
	cümleler: [
		"1+((-1+1-1)-(-1*-1))+1",
		"2-1+((-1*-1)+(-1-1))-(-1)",
		"1+(-1-(-1+1-1)-1-(-1)+1)",
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
		switchKeys(randomMath);
		document.getElementById("cumleMath").innerHTML = math.cümleler[randomMath];
		const eklenecekSiklarMath = `    
<h6 class="şıklarMath" id="math sik" name="a">${math.yanitlar[0]}</h6>
<h6 class="şıklarMath" id="math sik" name="b">${math.yanitlar[1]}</h6>
<h6 class="şıklarMath" id="math sik" name="c">${math.yanitlar[2]}</h6>
<h6 class="şıklarMath" id="math sik" name="d">${math.yanitlar[3]}</h6>
<h6 class="şıklarMath" id="math sik" name="e">${math.yanitlar[4]}</h6>`;
		document
			.getElementById("şıklarMath")
			.insertAdjacentHTML("afterbegin", eklenecekSiklarMath);

		const mathAnswers = document.querySelectorAll(".şıklarMath");
		let yanitdeger;
		mathAnswers.forEach((answer) =>
			answer.addEventListener("click", (e) => {
				yanitdeger = e.target.attributes.name.value;
				next(yanitdeger, ".math-questions", ".sonuc");

				function result() {
					let dogruNum = 0;
					let yanlisNum = 0;
					for (let i = 0; i < 12; i++) {
						if (yanitList[i] === yanitlar[i]) {
							dogruNum++;
						} else {
							yanlisNum++;
						}
					}
					document.getElementById(
						"sonucum",
					).innerText = `Doğru sayınız ${dogruNum} yanlış sayınız ${yanlisNum}`;
				}
				result();
			}),
		);
	},
};
math.ayarlaMath();
