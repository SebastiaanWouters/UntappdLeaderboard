const UntappdClient = require('./client.js');

main();

async function main() {
	const userList = ['eurniee', 'DriesWets', 'BassieWouters', 'Den_Henry', 'LarsVer', 'zico_van_acker_3579', 'Tommiexp', 'lennaert_wouters_6771', 'Mattheus_', 'heidi_algoedt_9808', 'Filip_vermeul', 'JorenDeleu', 'ellenvaneyken', 'bert_haverals_3063', 'Aphroditi', 'Arne11'];
	let client = new UntappdClient();
	let information = await client.retrieveInformation(userList);
	console.log(generateJSON(information));
}

function generateJSON(information) {
	let newJSON = '{\n';
	for (let i = 0; i < information.length; i++) {
		newJSON += `"${information[i][0]}" : {
            "ranking" : {
                "position_1" : "${information[i][1][1]}"
                "position_2" : "${information[i][2][1]}",
                "position_3" : "${information[i][3][1]}",
                "position_4" : "${information[i][4][1]}",
                "position_5" : "${information[i][5][1]}",
                "position_6" : "${information[i][6][1]}",
                "position_7" : "${information[i][7][1]}",
                "position_8" : "${information[i][8][1]}",
                "position_9" : "${information[i][9][1]}",
                "position_10" : "${information[i][10][1]}",
                "position_11" : "${information[i][11][1]}",
                "position_12" : "${information[i][12][1]}",
                "position_13" : "${information[i][13][1]}",
                "position_14" : "${information[i][14][1]}",
                "position_15" : "${information[i][15][1]}",
                "position_16" : "${information[i][16][1]}"
            },
            "points" : {
                "points_1" : "${information[i][1][i+2]}"
                "points_2" : "${information[i][2][i+2]}",
                "points_3" : "${information[i][3][i+2]}",
                "points_4" : "${information[i][4][i+2]}",
                "points_5" : "${information[i][5][i+2]}",
                "points_6" : "${information[i][6][i+2]}",
                "points_7" : "${information[i][7][i+2]}",
                "points_8" : "${information[i][8][i+2]}",
                "points_9" : "${information[i][9][i+2]}",
                "points_10" : "${information[i][10][i+2]}",
                "points_11" : "${information[i][11][i+2]}",
                "points_12" : "${information[i][12][i+2]}",
                "points_13" : "${information[i][13][i+2]}",
                "points_14" : "${information[i][14][i+2]}",
                "points_15" : "${information[i][15][i+2]}",
                "points_16" : "${information[i][16][i+2]}"
            },
            "weekly" : {
            	"weekly_1" : "${information[i][1][5]}"
            	"weekly_2" : "${information[i][2][5]}"
            	"weekly_3" : "${information[i][3][5]}"
            	"weekly_4" : "${information[i][4][5]}"
            	"weekly_5" : "${information[i][5][5]}"
            	"weekly_6" : "${information[i][6][5]}"
            	"weekly_7" : "${information[i][7][5]}"
            	"weekly_8" : "${information[i][8][5]}"
            	"weekly_9" : "${information[i][9][5]}"
            	"weekly_10" : "${information[i][10][5]}"
            	"weekly_11" : "${information[i][11][5]}"
            	"weekly_12" : "${information[i][12][5]}"
            	"weekly_13" : "${information[i][13][5]}"
            	"weekly_14" : "${information[i][14][5]}"
            	"weekly_15" : "${information[i][15][5]}"
            	"weekly_16" : "${information[i][16][5]}"
            	
            }
        }`;
		if (i+1 < information.length) {
			newJSON += ',';
		}
	}
	newJSON += '\n}';
	return newJSON;
}
