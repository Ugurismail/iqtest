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
		const random = Math.floor(Math.random() * 5);
		const soru = document.getElementById("soru");
		soru.innerText = this.soru;

		const eklenecekCümle = `
    ${this.cümleler[random]}
    `;

		const cumleContainer = document.getElementById("cumle");
		cumleContainer.insertAdjacentHTML("afterbegin", eklenecekCümle);

		const eklenecekSiklar = `    
    <h6 class="english" id="english sik" name="a"> A-${this.yanitlar[random][0]}</h6>
    <h6 class="english" id="english sik" name="b"> B-${this.yanitlar[random][1]}</h6>
    <h6 class="english" id="english sik" name="c"> C-${this.yanitlar[random][2]}</h6>
    <h6 class="english" id="english sik" name="d"> D-${this.yanitlar[random][3]}</h6>
    <h6 class="english" id="english sik" name="e" cami ="cami"> E-${this.yanitlar[random][4]}</h6>`;

		const şıklarContainer = document.getElementById("şıklar");
		şıklarContainer.insertAdjacentHTML("afterbegin", eklenecekSiklar);
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
