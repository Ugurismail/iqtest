"use strict";
// İngilizce sorusu için gerekli durum.
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
	},
};

const userAnswers = [];
english.ayarlaEng();

const englishAnswers = document.querySelectorAll(".english");

englishAnswers.forEach((answer) =>
	answer.addEventListener("click", (e) => {
		const yanitdeger = e.target.attributes.name.value;
		console.log(yanitdeger);
	}),
);

// Türkçe sorusu için gerekli durum.
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
};
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
