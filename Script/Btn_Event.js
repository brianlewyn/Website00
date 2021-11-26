
// =================================================================== //
// =================================================================== //
let Hamburger = document.querySelector("i#Hamburger")
let Sidebar = document.querySelector("nav.Sidebar")
let SearchPhone = document.querySelector("button#Search-Phone")
let SearchDestok = document.querySelector("i#Search-Destok")


// ========================== Btn Hamburger ========================== //
Hamburger.onclick = function() {
	Sidebar.classList.toggle('Active')
	Hamburger.classList.toggle('bx-menu')
	Hamburger.classList.toggle('bx-x')

	if (Sidebar.classList.contains('Active')) {
		SearchPhone.style.display = 'flex'
		SearchDestok.style.display = 'none'
	} else {
		SearchPhone.style.display = 'none'
		SearchDestok.style.display = 'flex'
	}
}


// ========================== Btn Search ========================== //
SearchDestok.onclick = function() {
	Sidebar.classList.toggle('Active')
	Hamburger.classList.toggle('bx-menu')
	Hamburger.classList.toggle('bx-x')

	if (Sidebar.classList.contains('Active')) {
		SearchPhone.style.display = 'flex'
		SearchDestok.style.display = 'none'
	} else {
		SearchPhone.style.display = 'none'
		SearchDestok.style.display = 'block'
	}
}




// =================================================================== //
// =================================================================== //
let Moon = document.querySelector("i#Moon")
let Body = document.body;

// ========================== DarkMode() ========================== //
LoadOne(); LoadTwo();

DarkMode = function () {
   Body.classList.toggle('Dark');
   StoreOne(Body.classList.contains('Dark'))

   	Moon.classList.toggle('bxs-moon')
	Moon.classList.toggle('bx-moon')
	StoreTwo(Moon.classList.contains('bxs-moon'))
}


// ========================== Body.class ========================== //
function LoadOne() {
	const Mode = localStorage.getItem('Dark')

	if(!Mode) {
		StoreOne('false')
	} else if(Mode == 'true') {
		Body.classList.add('Dark')
	}
}
function StoreOne(Bool) {
	localStorage.setItem('Dark', Bool)
}


// ========================== Icon.class ========================== //
function LoadTwo() {
	const IconMoon = localStorage.getItem('bxs-moon')

	if(!IconMoon) {
		StoreTwo('false')
	} else if(IconMoon == 'true') {
		Moon.classList.add('bxs-moon')
		Moon.classList.remove('bx-moon')
	}
}
function StoreTwo(Bool) {
	localStorage.setItem('bxs-moon', Bool)
}




// =================================================================== //
// =================================================================== //
let Arrow = document.querySelectorAll(".Arrow")


// ====================== Arrow: Drop-Down List ====================== //
for (let i = 0; i < Arrow.length; i++) {
	Arrow[i].addEventListener('click', (e)=> {
		let ArrowParent = e.target.parentElement.parentElement;
		ArrowParent.classList.toggle('ShowMenu');
	});
}



// =================================================================== //
// =================================================================== //
let Main = document.querySelector("main");

// =========================== OnForm() =========================== //
OnForm = function() {
	Main.classList.add('FullSpace');
   Main.classList.remove('NoneSpace');
}

// =========================== OffForm() ========================== //
OffForm = function() {
	Main.classList.remove('FullSpace');
   Main.classList.add('NoneSpace');
}