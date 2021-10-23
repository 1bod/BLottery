<script>
	/*
 ___  ___  ________  ___           ___    ___      ________  ________  ________  _______      
|\  \|\  \|\   ____\|\  \         |\  \  /  /|    |\   ____\|\   __  \|\   ___ \|\  ___ \     
\ \  \\\  \ \  \___|\ \  \        \ \  \/  / /    \ \  \___|\ \  \|\  \ \  \_|\ \ \   __/|    
 \ \  \\\  \ \  \  __\ \  \        \ \    / /      \ \  \    \ \  \\\  \ \  \ \\ \ \  \_|/__  
  \ \  \\\  \ \  \|\  \ \  \____    \/  /  /        \ \  \____\ \  \\\  \ \  \_\\ \ \  \_|\ \ 
   \ \_______\ \_______\ \_______\__/  / /           \ \_______\ \_______\ \_______\ \_______\
    \|_______|\|_______|\|_______|\___/ /             \|_______|\|_______|\|_______|\|_______|
                                 \|___|/                                                      
                                                                                              
                                                                                              
*/
	import { onMount } from 'svelte';

	var theme = 'dark';
	var animColors1 = '#ffff00';
	var animColors2 = '#ffc400';
	var animDeg = 344;
	var textColor = '#ffffff';

	function loadApp() {
		animatedContainers = [
			document.querySelectorAll('.animations'),
			document.querySelectorAll('.diagonal'),
			document.querySelectorAll('.content')
		];
		var animTime1 = document.querySelector("input[name='animTime']").value;
		var animTime2 = animTime1 - 2;
		animTime = animTime2 * 1000;

		theme = document.querySelector("input[name='theme']:checked").value;
		animColors1 = document.querySelector("input[name='animColor1']").value;
		animColors2 = document.querySelector("input[name='animColor2']").value;
		animDeg = document.querySelector("input[name='animDeg']").value;
		textColor = document.querySelector("input[name='textColor']").value;
		/*
	var result;
  for (var i = 1; i < 100; i++) {
    result =
      result +
      "<div onclick='clicked(this)' class='button " +
      i +
      "'>" +
      i +
      "</div>\n";
  }*/

		if (theme == 'light') {
			document.querySelector('body').classList.add('light');
		} else {
			document.querySelector('body').classList.remove('light');
		}

		document.createElement('style').innerHTML =
			'.diagonal:before {background: linear-gradient(' +
			animDeg +
			'deg, ' +
			animColors1 +
			', ' +
			animColors2 +
			');} \n .diagonal{ color: ' +
			textColor +
			';}';

		// document.getElementsByClassName("container").item(0).innerHTML =result.substring(9);

		document.querySelector('form').style = 'display:none;';
		document.querySelector('#app').style = '';
	}

	var animatedContainers, animTime;

	function handleClick(button) {
		if (button.classList.contains('toggled')) {
			button.classList.toggle('toggled');
			console.log('Removed ' + button.innerHTML);
		} else {
			document.getElementsByClassName('content').item(0).innerHTML = button.innerHTML;
			animatedContainers.forEach((element) => {
				element.item(0).classList.remove('off');
				element.item(0).classList.remove('stop-anim');
				setTimeout(() => {
					element.item(0).classList.add('stop-anim');
					setTimeout(() => {
						element.item(0).classList.remove('stop-anim');
						setTimeout(() => {
							element.item(0).classList.add('stop-anim');
							element.item(0).classList.add('off');
						}, 1000);
					}, animTime);
				}, 1000);
			});
			button.classList.toggle('toggled');
		}
	}
	onMount(() => {
		//  ELECTRON ONLY
		// var win = require("electron").remote.getCurrentWindow();
	});
	function toggleFullscreen() {
		if (!document.fullscreenElement) {
			document.querySelector('body').requestFullscreen();
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
	}

	function back() {
		if (document.querySelector('form').style.display == 'none') {
			document.querySelector('form').style = ';';
			document.querySelector('#app').style = 'display:none';
		} else {
			document.querySelector('form').style = 'display:none;';
			document.querySelector('#app').style = '';
		}
	}

	function reset() {
		if (confirm('Êtes vous sûr de vouloir remettre à zéro la partie actuelle ?')) {
			window.location.reload();
		}
	}
</script>

<svelte:head>
	<title>Config // Bod Lottery</title>
	<style lang="css" type="text/css">
		/* RESET CSS
		/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		b,
		u,
		i,
		center,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			vertical-align: baseline;
		}

		/* HTML5 display-role reset for older browsers */
		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		menu,
		nav,
		section {
			display: block;
		}

		body {
			line-height: 1;
		}

		ol,
		ul {
			list-style: none;
		}

		blockquote,
		q {
			quotes: none;
		}

		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: '';
			content: none;
		}

		table {
			border-collapse: collapse;
			border-spacing: 0;
		}
	</style>
	<link rel="stylesheet" href="bootstrap.min.css" />
</svelte:head>

<form class="container mt-5">
	<h1>Bod's lottery</h1>
	<h6>Raccourcis:</h6>
	<ul>
		<li>Plein écran : <kbd>F11</kbd></li>
		<li>Remise à zéro : <kbd>Ctrl + R</kbd></li>
	</ul>
	<p>
		Un menu caché apparaîtra lorsque pous placerez votre curseur dans le coin en haut à gauche de la
		fenêtre.
	</p>
	<h2>Configuration</h2>
	<fieldset>
		<div class="row mb-3">
			<legend class="col-form-label col-sm-2 pt-0">Thème</legend>
			<div class="col-sm-10">
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="theme"
						id="gridRadios1"
						value="dark"
						title="Foncé"
						checked
					/>
					<label class="form-check-label" for="gridRadios1"> Foncé </label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="theme"
						id="gridRadios2"
						value="light"
						title="Clair"
					/>
					<label class="form-check-label" for="gridRadios2"> Clair </label>
				</div>
			</div>
		</div>
	</fieldset>
	<div class="row mb-3">
		<legend class="col-form-label col-sm-2 pt-0">Personnalisation</legend>
		<div class="col-auto">
			<div class="col-auto ml-5">
				<div class="form-color">
					<input
						type="color"
						class="form-color-input"
						name="animColor1"
						id="animColors1"
						value="#ffff00"
					/>
					<label class="form-color-label" for="animColors1">Couleur n°1 du dégradé</label>
				</div>
				<div class="form-color">
					<input
						type="color"
						class="form-color-input"
						name="animColor2"
						id="animColors2"
						value="#ffc400"
					/>
					<label class="form-color-label" for="animColors2">Couleur n°2 du dégradé</label>
				</div>
				<div class="col-auto">
					<div class="input-group">
						<input
							type="number"
							name="animDeg"
							id="animDeg"
							class="form-control"
							min="0"
							max="359"
							value="344"
						/>
						<div class="input-group-text">degrés</div>
					</div>
				</div>
				<div class="form-color mt-2">
					<input
						type="color"
						name="textColor"
						id="textColor"
						class="form-color-input"
						value="#ffffff"
					/>
					<label class="form-color-label" for="textColor"
						>Couleur du texte de la bande d'annonce</label
					>
				</div>
			</div>
		</div>
	</div>
	<div class="row mb-3">
		<legend class="col-form-label col-sm-2 pt-0">Animation</legend>
		<div class="col-auto">
			<div class="input-group">
				<input
					type="number"
					name="animTime"
					class="form-control"
					id="animTime"
					placeholder="Durée d'animation"
					min="2"
					value="7"
					title="Temps de l'animation d'affichage du dernier nombre sélectionné (min 2 secondes)"
				/>
				<div class="input-group-text">secondes</div>
			</div>
		</div>
	</div>
	<input on:click={loadApp} type="button" class="btn btn-primary" id="submit" value="Démarrer" />
</form>
<div id="app" style="display:none;">
	<div class="control">
		<button class="back" on:click={(event) => back(event)}>Retour</button>
		<button class="reset" on:click={(event) => reset(event)}>Reset</button>
		<button class="fullscreen" on:click={(event) => toggleFullscreen(event)}>Plein écran</button>
	</div>
	<div class="center" id="run">
		<div class="main {theme}">
			{#each Array(100) as _, i}
				<div on:click={(event) => handleClick(event.target)} class="button {i} {theme}">{i}</div>
			{/each}
		</div>
		<div class="animations stop-anim off">
			<div class="diagonal stop-anim off">
				<div class="content short stop-anim off" />
			</div>
		</div>
	</div>
</div>

<style lang="scss" type="text/scss">
	form {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, Arial, Helvetica, sans-serif;
	}
</style>
