//Using D3 to read CSV file and extract data
function getPCList (pc) {
	resultLib = [];

	//read CSV files
	d3.csv(websersrc, function(postcode) {

		data = postcode.map(function(d) {
			//each d is one line of the csv file represented as a json object
			//console.log("d", d)

			pcode = d.postcode;
			suburb = d.suburb;
			state = d.state;
			dc = d.dc;
			dc_type = d.type;
			lat = d.lat;
			lon = d.lon;
					
			if (pcode == pc) {
				resultLib.push(d);
			}
					
			return {"postcode": postcode,
					"suburb": suburb,
					"state": state,
					"dc": dc,
					"dc_type": dc_type,
					"lat": lat,
					"lon": lon} ;
		})
		//console.log("data", data)

		//
		var columns = ['postcode','suburb','state','dc','dc_type','lat','lon'];
		drawTable(resultLib, columns);
	});
};

function drawTable(data, columns) {
	//Draw table
	d3.json('materials/return.json', function (error, data) {
		function tabulate(data, columns) {
			//refresh/remove table state before drawing
			d3.select('body').select('table').remove();
			
			var table = d3.select('body').append('table');
			var thead = table.append('thead');
			var tbody = table.append('tbody');

			// append the header row
			thead.append('tr')
				.selectAll('th')
				.data(columns).enter()
			    .append('th')
				.text(function (column) { return column; });

			// create a row for each object in the data
			var rows = tbody.selectAll('tr')
							.data(data)
							.enter()
							.append('tr');

			// create a cell in each row for each column
			var cells = rows.selectAll('td')
							.data(function (row) {
					return columns.map(function (column) {
					return {column: column, value: row[column]};
				});
			})
				.enter()
				.append('td')
				.text(function (d) { return d.value; });
			return table;
		}

		// render the table(s)
		tabulate(resultLib, columns);
	});
}