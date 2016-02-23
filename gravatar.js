var people = [
	{ name: 'andrew', email: 'andrew@myspace' },
	{ name: 'wawa', email: 'wawa@aol.com' },
	{ name: 'jaja', email: 'jaja@gmail.com' },
	{ name: 'haha', email: 'haha@yahoo.com' }
];

var Gravatar = React.createClass({
	render: function() {

		var listPeople = this.props.people.map(function(e){
			return <li> {e.name} </li>
		})
		return (
			<div>
				<h3>People</h3>
				<ul>
					{ listPeople }
				</ul>
			</div>
		)
	}
});

React.render(<Gravatar 
			  people={people} />,
	document.getElementById('gravatar'));