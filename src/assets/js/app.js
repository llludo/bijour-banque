console.log('Bijour Bank !');
/**
 * init foundation
 */
$(document).ready(function () {
	$(document).foundation();
});

function donneform() {
	var i = localStorage.length;
	let arrayStorage = {
		titre: document.getElementById('titre').value,
		desc: document.getElementById('desc').value,
		montant: document.getElementById('montant').value,
		operator: document.getElementById('operator').value,
	};
	localStorage.setItem(i, JSON.stringify(arrayStorage));
}

for (let i = 0; i < localStorage.length; i++) {
	let obj = JSON.parse(localStorage.getItem(i));
	console.log(obj);
	if (obj.operator == 'credit') {
		img = 'sac-dargent';
	} else {
		img = 'depenses';
	}
	var html = `
	<div class="grid-container">
	<div class="operation ${obj.operator}>
	<div class="grid-x grid-padding-x align-middle">
	  <div class="cell shrink">
		<div class="picto">
		  <img src="./assets/images/${img}.png" alt="${obj.operator}" />
		</div>
	  </div>
	  <div class="cell auto">
		<div>
		  <h2>${obj.titre}</h2>
		  <small>${obj.desc}</small>
		</div>
	  </div>
	  <div class="cell small-3 text-right">
		<div>
		  <p class="count">${obj.montant}</p>
		  <small>100%</small>
		  </div>
		  </div>
		  </div>
		  </div>
	</div>`;

	var finilexercice = document.getElementById('money');
	finilexercice.insertAdjacentHTML('afterbegin', html);
}
