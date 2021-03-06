var baseUrl = 'https://cors-anywhere.herokuapp.com/https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '4199',
	'X-Auth-Token': '78a3824e3de6b28e20102de34d52f660'
};

fetch(baseUrl + '/board', { headers: myHeaders })
	.then(function(resp) {
		return resp.json();
	})
	.then(function(resp) {
		setupColumns(resp.columns);
	}
);

//add columns
function setupColumns(columns) {
	columns.forEach(function(column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

//add carts
function setupCards(col, cards) {
	cards.forEach(function (card) {
    	var cardObj = new Card(card.id, card.name);
  		col.addCard(cardObj);
	});
}

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}
