// This one is for 

// ES6 class way to define a component:
class StoryBox extends React.Component{
	render() {

		const TopicList = ['HTML', 'Javascript', 'React'];

		return(
			<div>
				<ul>
					{TopicList.map( topic => <li>{topic}</li> )}
				</ul>
			</div>
		);
	}
}

// The good way to make Component - with defaultProps initialized
// fom https://toddmotto.com/react-create-class-versus-component/
class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}
Contacts.propTypes = {

};
Contacts.defaultProps = {



var AwesomeContainer = React.createClass({
  render : function() {
    return(
    	<div>
    		<h2>fetched datas</h2>
    	</div>
    );
  }
});

// With argument = props argument
var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello, {this.props.name}!</div>;
    }
});

React.render(
	new HelloWorld({ name: "Chris Harrington" }), document.body
);

//user-defined component
// it passes JSX attributes to this component as a single object. We call this object "props"
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

/* 
*******************************************
*******************************************	
*/
// Nouvel exemple un peu plus complexe de découpage en sous-conponent
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} /> // On peut réduire toutes ces ligne en un nv conponent - <Avatar />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const commentaires = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
ReactDOM.render(
  <Comment
    date={commentaires.date}
    text={commentaires.text}
    author={commentaires.author} />,
  document.getElementById('root')
);

//Après changement
function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

// FETCH
// Tous les navigateurs n'implémente pas le fetch


if(self.fetch) {
    // exécuter ma requête fetch ici
} else {
    // Faire quelque chose avec XMLHttpRequest?
}

// Créer la requ^ete fetch - ici pour le src d'une image
var myHeaders = new Headers();
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('flowers.jpg',myInit)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

// Vérifier que la requ^ete a fonctionner
fetch('flowers.jpg').then(function(response) {
  if(response.ok) {
    response.blob().then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      myImage.src = objectURL;
    });
  } else {
    console.log('Mauvaise réponse du réseau');
  }
})
.catch(function(error) {
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
});

// Gérer les erreur
fetch(myRequest).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      // traitement du JSON
    });
  } else {
    console.log("Oops, nous n'avons pas du JSON!");
  }
});