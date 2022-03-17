const https = require('https');
const fs = require('fs');
const path = require("path");

module.exports = class UntappdClient {
    clientID;
    clientSecret;
    accessToken;

    constructor() {
        let keys = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'keys.json')));
        this.clientID = keys.client_id;
        this.clientSecret = keys.client_secret;
        this.accessToken = keys.access_token;
    }

    get(givenPath) {
        const options = {
            hostname: 'api.untappd.com',
            port: 443,
            path: givenPath,
            method: 'GET'
        }
    
        let promise = new Promise((resolve, reject) => {
            https.get(options, (res) => {
                // console.log('statusCode:', res.statusCode);
                // console.log('headers:', res.headers);
              
                let result = "";

                res.on('data', (d) => {
                  //process.stdout.write(d);
                  result += d;
                }).on('end', () => {
                    resolve(JSON.parse(result));
                });
              
            }).on('error', (e) => {
                //console.error(e);
                reject(e);
            });
        })

        return promise;
    }

    async retrieveInformation(listOfUsers) {
        let result = [];
        let user_counter = 0;
        var today = new Date();
	    
        for (let i = 0; i < listOfUsers.length; i++) {
            let user = listOfUsers[i];
            let data = await this.get(`/v4/user/info/${listOfUsers[i]}?access_token=${this.accessToken}`);
            
            //const data = require('./test.json'); 
            
            let realName = data.response.user.first_name.concat(" ", data.response.user.last_name);
            let weeklyjson = data.response.user.checkins.items;
            
            
            weeklyjson.forEach(obj => {
        	Object.entries(obj).forEach(([key, value]) => {
        	
        	if (key == "created_at") {
        		//check if date is in past seven days, if so add 1 to the counter
        		var dd_beer = value.slice(5,7);
        		var mm_beer_char = value.slice(8,11);
        		switch(mm_beer_char) {
  				case "Jan":
    					var mm_beer = "01"
    					break;
  				case "Nov":
    					var mm_beer = "11"
    					break;
    				case "Feb":
    					var mm_beer = "02"
    					break;
  				case "Mar":
    					var mm_beer = "03"
    					break;
    				case "Apr":
    					var mm_beer = "04"
    					break;
  				case "May":
    					var mm_beer = "05"
    					break;
    				case "Jun":
    					var mm_beer = "06"
    					break;
  				case "Jul":
    					var mm_beer = "07"
    					break;
    				case "Aug":
    					var mm_beer = "08"
    					break;
  				case "Sep":
    					var mm_beer = "09"
    					break;
    				case "Oct":
    					var mm_beer = "10"
    					break;
  				default:
    					var mm_beer = "12"
			} 
        		
        		var yyyy_beer = value.slice(12,16);
        		var beer_date_str = mm_beer + '/' + dd_beer + '/' + yyyy_beer;
        		var beer_date = new Date(beer_date_str);
        		//console.log(beer_date);
        		
        		// To calculate the time difference of two dates
			var Difference_In_Time = today.getTime() - beer_date.getTime();
  
			// To calculate the no. of days between two dates
			var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
			
			//is time between the two less then a week?
			if (Difference_In_Days < 8) {
				user_counter += 1;
			}
        		
        		}
        	});
   	    });
   	    
            result.push([user, realName, data.response.user.stats.total_beers, data.response.user.stats.total_checkins, data.response.user.stats.total_badges, user_counter]);
            user_counter = 0;
            
        }
        
        return this.sortInformation(result);
    }

    sortInformation(listOfInformation) {
        // number of unique beers
        let numberOfUniqueBeersList = [...listOfInformation].sort((a, b) => {
            return b[2] - a[2];
        });
        numberOfUniqueBeersList.unshift('number_unique_beers');

        // number of total beers
        let numberOfTotalBeersList = [...listOfInformation].sort((a, b) => {
            return b[3] - a[3];
        });
        numberOfTotalBeersList.unshift('number_total_beers');
          
        // number of badges
        let numberOfBadgesList = [...listOfInformation].sort((a, b) => {
            return b[4] - a[4];
        });
        numberOfBadgesList.unshift('number_badges');

        let combination = [numberOfUniqueBeersList, numberOfTotalBeersList, numberOfBadgesList];
        return combination;
    }

}
