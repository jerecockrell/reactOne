var people = [
	{ name: 'andrew', email: 'andrew@myspace' },
	{ name: 'wawa', email: 'wawa@aol.com' },
	{ name: 'jaja', email: 'jaja@gmail.com' },
	{ name: 'haha', email: 'haha@yahoo.com' }
];

var G_URL = "http://gravatar.com/avatar"

var Gravatar = React.createClass({
	render: function() {

		var listPeople = this.props.people.map(function(e){
			var email = e.email;
			var size = 36;
			var hash = md5(email);
			console.log(hash);
			var url = G_URL + '/' + hash + '?s=' + size;
			return (<li> 
						<p> { e.name } </p>
						<p> { e.email } </p>
						<p> <img src={ "http://www.alt-market.com/images/stories/sheeple1.jpg" }/> </p>
					</li>)

		})
		return (
			<div>
				<h3>Sheeple</h3>
				<ul>
					{ listPeople }
				</ul>
			</div>
		)
	}
});

React.render(<Gravatar 
			  people={ people }/>,
	document.getElementById('gravatar'));