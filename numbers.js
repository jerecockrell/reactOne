var numbersArr = [1,2,3,4,5,6,7,8,9,10];

var Numbers = React.createClass({
	render: function(){
		var listElements = numbersArr.map(function(e){
			return <li> {e} </li>
		});

		return (

			<div>
				<h3> Check Out My Numbers: </h3>
				<ul>
					{ listElements }
				</ul>
			</div>

		)
	}
});

React.render(< Numbers />,
	document.getElementById('numbers')
	);