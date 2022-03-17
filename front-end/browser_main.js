const total_unique_beers_button = document.getElementById('total_unique_beers_button');
const total_beers_button = document.getElementById('total_beers_button');
const total_badges_button = document.getElementById('total_badges_button');
const button_2021 = document.getElementById('button_2021');

total_unique_beers_button.onclick = async() => { showTab(total_unique_beers_button, 'total_unique_beers_tab'); };
total_beers_button.onclick = async() => { showTab(total_beers_button, 'total_beers_tab'); };
total_badges_button.onclick = async() => { showTab(total_badges_button, 'total_badges_tab'); };
button_2021.onclick = async() => { showTab(button_2021, 'tab_2021'); };

showTab(total_unique_beers_button, 'total_unique_beers_tab');
start();

async function start() {
	let button_2012 = document.getElementById('button_2021');
	button_2021.disabled = true;
	button_2012.style.display = 'none';
	
	let leaderboard2021 = await get('http://arne.ulyssis.be/Untappd/leaderboard2021.json');
	
	if (leaderboard2021 != "") {
		button_2021.disabled = false;
		button_2012.style.display = 'block';

		document.getElementById('total_unique_beers_position_1_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_1;
		document.getElementById('total_unique_beers_position_2_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_2;
		document.getElementById('total_unique_beers_position_3_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_3;
		document.getElementById('total_unique_beers_position_4_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_4;
		document.getElementById('total_unique_beers_position_5_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_5;
		document.getElementById('total_unique_beers_position_6_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_6;
		document.getElementById('total_unique_beers_position_7_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_7;
		document.getElementById('total_unique_beers_position_8_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_8;
		document.getElementById('total_unique_beers_position_9_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_9;
		document.getElementById('total_unique_beers_position_10_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_10;
		document.getElementById('total_unique_beers_position_11_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_11;
		document.getElementById('total_unique_beers_position_12_name_2021').innerHTML = leaderboard2021.number_unique_beers.ranking.position_12;

		document.getElementById('total_unique_beers_position_1_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_1;
		document.getElementById('total_unique_beers_position_2_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_2;
		document.getElementById('total_unique_beers_position_3_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_3;
		document.getElementById('total_unique_beers_position_4_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_4;
		document.getElementById('total_unique_beers_position_5_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_5;
		document.getElementById('total_unique_beers_position_6_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_6;
		document.getElementById('total_unique_beers_position_7_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_7;
		document.getElementById('total_unique_beers_position_8_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_8;
		document.getElementById('total_unique_beers_position_9_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_9;
		document.getElementById('total_unique_beers_position_10_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_10;
		document.getElementById('total_unique_beers_position_11_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_11;
		document.getElementById('total_unique_beers_position_12_points_2021').innerHTML = leaderboard2021.number_unique_beers.points.points_12;
	}
	
	let leaderboard = await get('http://arne.ulyssis.be/Untappd/leaderboard.json');
	
	
	document.getElementById('total_unique_beers_position_1_name').innerHTML = leaderboard.number_unique_beers.ranking.position_1;
	document.getElementById('total_unique_beers_position_2_name').innerHTML = leaderboard.number_unique_beers.ranking.position_2;
	document.getElementById('total_unique_beers_position_3_name').innerHTML = leaderboard.number_unique_beers.ranking.position_3;
	document.getElementById('total_unique_beers_position_4_name').innerHTML = leaderboard.number_unique_beers.ranking.position_4;
	document.getElementById('total_unique_beers_position_5_name').innerHTML = leaderboard.number_unique_beers.ranking.position_5;
	document.getElementById('total_unique_beers_position_6_name').innerHTML = leaderboard.number_unique_beers.ranking.position_6;
	document.getElementById('total_unique_beers_position_7_name').innerHTML = leaderboard.number_unique_beers.ranking.position_7;
	document.getElementById('total_unique_beers_position_8_name').innerHTML = leaderboard.number_unique_beers.ranking.position_8;
	document.getElementById('total_unique_beers_position_9_name').innerHTML = leaderboard.number_unique_beers.ranking.position_9;
	document.getElementById('total_unique_beers_position_10_name').innerHTML = leaderboard.number_unique_beers.ranking.position_10;
	document.getElementById('total_unique_beers_position_11_name').innerHTML = leaderboard.number_unique_beers.ranking.position_11;
	document.getElementById('total_unique_beers_position_12_name').innerHTML = leaderboard.number_unique_beers.ranking.position_12;
	document.getElementById('total_unique_beers_position_13_name').innerHTML = leaderboard.number_unique_beers.ranking.position_13;
	document.getElementById('total_unique_beers_position_14_name').innerHTML = leaderboard.number_unique_beers.ranking.position_14;
	document.getElementById('total_unique_beers_position_15_name').innerHTML = leaderboard.number_unique_beers.ranking.position_15;
	document.getElementById('total_unique_beers_position_16_name').innerHTML = leaderboard.number_unique_beers.ranking.position_16;
    
	document.getElementById('total_unique_beers_position_1_points').innerHTML = leaderboard.number_unique_beers.points.points_1;
	document.getElementById('total_unique_beers_position_1_points').innerHTML += " (+"
	document.getElementById('total_unique_beers_position_1_points').innerHTML += leaderboard.number_unique_beers.weekly.weekly_1;
	document.getElementById('total_unique_beers_position_1_points').innerHTML += ")"
	document.getElementById('total_unique_beers_position_2_points').innerHTML = leaderboard.number_unique_beers.points.points_2;
	document.getElementById('total_unique_beers_position_3_points').innerHTML = leaderboard.number_unique_beers.points.points_3;
	document.getElementById('total_unique_beers_position_4_points').innerHTML = leaderboard.number_unique_beers.points.points_4;
	document.getElementById('total_unique_beers_position_5_points').innerHTML = leaderboard.number_unique_beers.points.points_5;
	document.getElementById('total_unique_beers_position_6_points').innerHTML = leaderboard.number_unique_beers.points.points_6;
	document.getElementById('total_unique_beers_position_7_points').innerHTML = leaderboard.number_unique_beers.points.points_7;
	document.getElementById('total_unique_beers_position_8_points').innerHTML = leaderboard.number_unique_beers.points.points_8;
	document.getElementById('total_unique_beers_position_9_points').innerHTML = leaderboard.number_unique_beers.points.points_9;
	document.getElementById('total_unique_beers_position_10_points').innerHTML = leaderboard.number_unique_beers.points.points_10;
	document.getElementById('total_unique_beers_position_11_points').innerHTML = leaderboard.number_unique_beers.points.points_11;
	document.getElementById('total_unique_beers_position_12_points').innerHTML = leaderboard.number_unique_beers.points.points_12;
	document.getElementById('total_unique_beers_position_13_points').innerHTML = leaderboard.number_unique_beers.points.points_13;
	document.getElementById('total_unique_beers_position_14_points').innerHTML = leaderboard.number_unique_beers.points.points_14;
	document.getElementById('total_unique_beers_position_15_points').innerHTML = leaderboard.number_unique_beers.points.points_15;
	document.getElementById('total_unique_beers_position_16_points').innerHTML = leaderboard.number_unique_beers.points.points_16;
    
	document.getElementById('total_beers_position_1_name').innerHTML = leaderboard.number_total_beers.ranking.position_1;
	document.getElementById('total_beers_position_2_name').innerHTML = leaderboard.number_total_beers.ranking.position_2;
	document.getElementById('total_beers_position_3_name').innerHTML = leaderboard.number_total_beers.ranking.position_3;
	document.getElementById('total_beers_position_4_name').innerHTML = leaderboard.number_total_beers.ranking.position_4;
	document.getElementById('total_beers_position_5_name').innerHTML = leaderboard.number_total_beers.ranking.position_5;
	document.getElementById('total_beers_position_6_name').innerHTML = leaderboard.number_total_beers.ranking.position_6;
	document.getElementById('total_beers_position_7_name').innerHTML = leaderboard.number_total_beers.ranking.position_7;
	document.getElementById('total_beers_position_8_name').innerHTML = leaderboard.number_total_beers.ranking.position_8;
	document.getElementById('total_beers_position_9_name').innerHTML = leaderboard.number_total_beers.ranking.position_9;
	document.getElementById('total_beers_position_10_name').innerHTML = leaderboard.number_total_beers.ranking.position_10;
	document.getElementById('total_beers_position_11_name').innerHTML = leaderboard.number_total_beers.ranking.position_11;
	document.getElementById('total_beers_position_12_name').innerHTML = leaderboard.number_total_beers.ranking.position_12;
	document.getElementById('total_beers_position_13_name').innerHTML = leaderboard.number_total_beers.ranking.position_13;
	document.getElementById('total_beers_position_14_name').innerHTML = leaderboard.number_total_beers.ranking.position_14;
	document.getElementById('total_beers_position_15_name').innerHTML = leaderboard.number_total_beers.ranking.position_15;
	document.getElementById('total_beers_position_16_name').innerHTML = leaderboard.number_total_beers.ranking.position_16;
    
	document.getElementById('total_beers_position_1_points').innerHTML = leaderboard.number_total_beers.points.points_1;
	document.getElementById('total_beers_position_2_points').innerHTML = leaderboard.number_total_beers.points.points_2;
	document.getElementById('total_beers_position_3_points').innerHTML = leaderboard.number_total_beers.points.points_3;
	document.getElementById('total_beers_position_4_points').innerHTML = leaderboard.number_total_beers.points.points_4;
	document.getElementById('total_beers_position_5_points').innerHTML = leaderboard.number_total_beers.points.points_5;
	document.getElementById('total_beers_position_6_points').innerHTML = leaderboard.number_total_beers.points.points_6;
	document.getElementById('total_beers_position_7_points').innerHTML = leaderboard.number_total_beers.points.points_7;
	document.getElementById('total_beers_position_8_points').innerHTML = leaderboard.number_total_beers.points.points_8;
	document.getElementById('total_beers_position_9_points').innerHTML = leaderboard.number_total_beers.points.points_9;
	document.getElementById('total_beers_position_10_points').innerHTML = leaderboard.number_total_beers.points.points_10;
	document.getElementById('total_beers_position_11_points').innerHTML = leaderboard.number_total_beers.points.points_11;
	document.getElementById('total_beers_position_12_points').innerHTML = leaderboard.number_total_beers.points.points_12;
	document.getElementById('total_beers_position_13_points').innerHTML = leaderboard.number_total_beers.points.points_13;
	document.getElementById('total_beers_position_14_points').innerHTML = leaderboard.number_total_beers.points.points_14;
	document.getElementById('total_beers_position_15_points').innerHTML = leaderboard.number_total_beers.points.points_15;
	document.getElementById('total_beers_position_16_points').innerHTML = leaderboard.number_total_beers.points.points_16;
    
	document.getElementById('total_badges_position_1_name').innerHTML = leaderboard.number_badges.ranking.position_1;
	document.getElementById('total_badges_position_2_name').innerHTML = leaderboard.number_badges.ranking.position_2;
	document.getElementById('total_badges_position_3_name').innerHTML = leaderboard.number_badges.ranking.position_3;
	document.getElementById('total_badges_position_4_name').innerHTML = leaderboard.number_badges.ranking.position_4;
	document.getElementById('total_badges_position_5_name').innerHTML = leaderboard.number_badges.ranking.position_5;
	document.getElementById('total_badges_position_6_name').innerHTML = leaderboard.number_badges.ranking.position_6;
	document.getElementById('total_badges_position_7_name').innerHTML = leaderboard.number_badges.ranking.position_7;
	document.getElementById('total_badges_position_8_name').innerHTML = leaderboard.number_badges.ranking.position_8;
	document.getElementById('total_badges_position_9_name').innerHTML = leaderboard.number_badges.ranking.position_9;
	document.getElementById('total_badges_position_10_name').innerHTML = leaderboard.number_badges.ranking.position_10;
	document.getElementById('total_badges_position_11_name').innerHTML = leaderboard.number_badges.ranking.position_11;
	document.getElementById('total_badges_position_12_name').innerHTML = leaderboard.number_badges.ranking.position_12;
	document.getElementById('total_badges_position_13_name').innerHTML = leaderboard.number_badges.ranking.position_13;
	document.getElementById('total_badges_position_14_name').innerHTML = leaderboard.number_badges.ranking.position_14;
	document.getElementById('total_badges_position_15_name').innerHTML = leaderboard.number_badges.ranking.position_15;
	document.getElementById('total_badges_position_16_name').innerHTML = leaderboard.number_badges.ranking.position_16;
    
	document.getElementById('total_badges_position_1_points').innerHTML = leaderboard.number_badges.points.points_1;
	document.getElementById('total_badges_position_2_points').innerHTML = leaderboard.number_badges.points.points_2;
	document.getElementById('total_badges_position_3_points').innerHTML = leaderboard.number_badges.points.points_3;
	document.getElementById('total_badges_position_4_points').innerHTML = leaderboard.number_badges.points.points_4;
	document.getElementById('total_badges_position_5_points').innerHTML = leaderboard.number_badges.points.points_5;
	document.getElementById('total_badges_position_6_points').innerHTML = leaderboard.number_badges.points.points_6;
	document.getElementById('total_badges_position_7_points').innerHTML = leaderboard.number_badges.points.points_7;
	document.getElementById('total_badges_position_8_points').innerHTML = leaderboard.number_badges.points.points_8;
	document.getElementById('total_badges_position_9_points').innerHTML = leaderboard.number_badges.points.points_9;
	document.getElementById('total_badges_position_10_points').innerHTML = leaderboard.number_badges.points.points_10;
	document.getElementById('total_badges_position_11_points').innerHTML = leaderboard.number_badges.points.points_11;
	document.getElementById('total_badges_position_12_points').innerHTML = leaderboard.number_badges.points.points_12;
	document.getElementById('total_badges_position_13_points').innerHTML = leaderboard.number_badges.points.points_13;
	document.getElementById('total_badges_position_14_points').innerHTML = leaderboard.number_badges.points.points_14;
	document.getElementById('total_badges_position_15_points').innerHTML = leaderboard.number_badges.points.points_15;
	document.getElementById('total_badges_position_16_points').innerHTML = leaderboard.number_badges.points.points_16;
}

function get(url) {
	let promise = new Promise((resolve, reject) => {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {			
			if (this.readyState == 4 && this.status == 200) {
				if (this.responseText.length > 0) {
					resolve(JSON.parse(this.responseText));
				}
				else {
					resolve(this.responseText);
				}
			}
		};
		xhttp.open('GET', url, true);
		xhttp.send();
	});
	return promise;
}

function showTab(button, tab) {
	let i;
	let tablinks;

	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	const currentTab = document.getElementById(tab);
	currentTab.style.display = 'block';
	button.className += ' active';
}

function findSize(fileInput) {
    try{
        return fileInput.files[0].size; // Size returned in bytes.
    }catch(e){
        var objFSO = new ActiveXObject("Scripting.FileSystemObject");
        var e = objFSO.getFile( fileInput.value);
        var fileSize = e.size;
        return fileSize;    
    }
}
