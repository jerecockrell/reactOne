var HelloWorld = React.createClass({

	render: function(){

		return(
			<div>
	          	<h3>Hello World!</h3>
            </div>
		)
	}
});

var PooWorld = React.createClass({

	render: function(){

		return(
			<div>
				<h3>Poop On The World!</h3>
			</div>

		)
	}
});

var VariableWorld = React.createClass({

	render: function(){
		var sentence = "Not On This World!";
		return (
			<div>
				<h3>{sentence}</h3>
			</div>
		)
	}
});

var App = React.createClass({
	render: function(){

		return (
			<div>
				< HelloWorld />
				< PooWorld />
				< VariableWorld />
			</div>
		)
	}
});

React.render(<App/>, document.getElementById('app'));
