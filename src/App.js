import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const per_page = 5;
const page = 1;
var EncryptedIssuesfromDeepSpace: [];

console.log(per_page+' issues / pages. Id page: '+page);

function getData(page, per_page){
  page = ((page !== undefined) && !isNaN(page) ) ? page : 1;
  per_page = ((per_page !== undefined) && !isNaN(per_page) ) ? per_page : 5;

  console.log('function getData - page: '+page);
  
  fetch("https://api.github.com/repos/rails/rails/issues?page="+page+"&per_page="+per_page)
    .then((response) => {
      console.log('function getData - response.json(): '+response);
      console.log(response);
      return response.json();
    })
    .then((EncryptedIssuesfromDeepSpace) => {
      console.log('EncryptedIssuesfromDeepSpace : ');
      console.log(EncryptedIssuesfromDeepSpace);
      this.setState({ EncryptedIssuesfromDeepSpace: EncryptedIssuesfromDeepSpace })
    })
    .catch(function(error) {
      console.log('Houston, we got a problem with fetch: \n' + error.message);
    });
  }

class StarshipContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.EncryptedIssuesfromDeepSpace.bind(this);
    // this.state = { EncryptedIssuesfromDeepSpace: [] }
  }

  getData

  // componentWillMount() {
  // fetch("https://api.github.com/repos/rails/rails/issues?page="+page+"&per_page="+per_page)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((EncryptedIssuesfromDeepSpace) => {
  //     this.setState({ EncryptedIssuesfromDeepSpace: EncryptedIssuesfromDeepSpace })
  //   })
  // }

  render() {

    return (
    	<div className="App">
        <div className="comet"></div>
    		<div className="Container">
	    		<div className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h2>The React Force awaken!</h2>
		      </div>

            {/*<Cockpit list={this.state.EncryptedIssuesfromDeepSpace} page={page} />
            <IndividualFetchCapsule list={EncryptedIssuesfromDeepSpace} page={page} />*/}

            <IndividualFetchCapsule list={this.state.EncryptedIssuesfromDeepSpace} page={page} />

            <NextBay />

		    </div>
		  </div>
    )
  }
} // End of StarshipContainer Class

class IndividualFetchCapsule extends React.Component {
  render() {
    return (
      <ul className="media-list">
        {this.props.list.map( issue => <li className="IndividualFetchCapsule">{issue.id}<br/>{issue.title}</li> )}
      </ul>
    ); // End or return
  } // End of render
} // End of IndividualFetchCapsule02 Class

// IndividualFetchCapsule.propTypes = {
// };

IndividualFetchCapsule.defaultProps = {
	url: '',
	repository_url: '',
	labels_url: '',
	comments_url: '',
	events_url: '',
	html_url: '',
	id: '',
	number: '',
	title: '',
	user: '',
	labels: '',
	state: '',
	locked: '',
	assignee: '',
	assignees: '',
	milestone: '',
	comments: '',
	created_at: '',
	updated_at: '',
	closed_at: '',
	body: ''
};

class NextBay extends React.Component {
  constructor(props) {
    super(props);
    // buton next & previous
    this.handleChange = this.handleChange.bind(this);
    this.state = {valueButon: '1'};
  }

  // If there is changement with butons
  handleChange(valueButon) {
    this.setState({valueButon: this.state.value});
    getData(page+valueButon);
    console.log(page);
  }

  render() {
    // buton next & previous
    // const NumberOfPage = getData(page++);
    const valueButon = this.state.value;

    return (
		<div className="NextBay">
	    	<div>
	    		<p>
            <button value={-1} onClick={this.handleChange}> Previous </button>  --  <button value={1} onClick={this.handleChange}> Next </button>
            <br/>

	    			<span title="Display the 5 previous issues" > &lt;&lt; Previous</span> - <span title="Display the 5 next issues">Next &gt;&gt;</span>
	    	  </p>

        {//<IndividualFetchCapsule list={this.state.EncryptedIssuesfromDeepSpace} page={value} />
      }

	    </div>
	  </div>
    );
  }
} // End of StarshipContainer Class

export default StarshipContainer;