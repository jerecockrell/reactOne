
var greetingsArr = ["hello", "hej", "bonjour", "hola", "konichiwa", "nihao"]


var Gravatar = React.createClass({
	render: function() {

		var title = "Various Greetings";
		/*var makeList = function(e){
			return <li> {e} </li>
		};*/
		var greetings = this.props.hellos.map(function(e){
			return <li> {e} </li>
		})
		return (
			<div>
				<h3> { title } </h3>
				<h3> My name is { this.props.name } </h3>
				<h3> I am { this.props.age } years old </h3>
				<ul>
					{ greetings }
				</ul>
			</div>
		)
	}
});

React.render(<Gravatar 
			  name="Hubert" 
			  age="57" 
			  hellos={greetingsArr} />,
	document.getElementById('gravatar'));