function toggleElement(elements) {
	let titleEl = elements[0];
	let mainEl = elements[1];
	
	
	if (mainEl.classList.contains("hidden")) {
		titleEl.innerText = titleEl.innerText.replace(/.$/,"▲");
	} else {
		titleEl.innerText = titleEl.innerText.replace(/.$/,"▼");
	}
	mainEl.classList.toggle("hidden");
}

let skills = document.querySelectorAll(".hbo_wat_skills");
let skills2 = document.querySelectorAll(".hbo_skills");
let vaar = document.querySelectorAll(".hbo_vaar");
let tle = document.querySelectorAll(".hbo_tle");
let bronnen = document.querySelectorAll(".bronnen_inner");

skills[0].addEventListener('click', function() {
	toggleElement(skills);
});
skills2[0].addEventListener('click', function() {
	toggleElement(skills2);
});
vaar[0].addEventListener('click', function() {
	toggleElement(vaar);
});
tle[0].addEventListener('click', function() {
	toggleElement(tle);
});
bronnen[0].addEventListener('click', function() {
	toggleElement(bronnen);
});