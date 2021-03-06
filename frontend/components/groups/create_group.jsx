import React from "react";
import { withRouter } from 'react-router-dom';


class CreateGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      city: "",
      organizer_id: props.organizer_id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    this.props.createGroup(group).then( (group) => this.props.history.push(`groups/`)
    )};

  update (field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  // showErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, idx) => {
  //           return <li key={`error-${idx}`}>{error}</li>
  //         }
  //       )}
  //     </ul>
  //   )
  // }

  render () {
    return (
      <div className="create-group-container">

        <div className="create-banner">
          <h1 className="create-title">Start a new Meet.Sup?</h1>
          <span className="group-span">We'll help you find the right people to make it happen</span>
        </div>

      <div className="create-group-section">
      <form className="create-form" onSubmit={this.handleSubmit}>


            <div className='create-group-inputs-container'>


            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
                <span className="step-span">Step 1 of 4</span>
              <label htmlFor='form-city'>What's your new MeetSup's hometown?</label>
                  <input 
                    id="form-city"
                    type="city" 
                    value={this.state.city}
                    onChange={this.update('city')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>
                <span className="step-span">Step 2 of 4</span>
              <label htmlFor='form-name'>What will your MeetSup's name be?</label>
                  <input 
                    id="form-name"
                    type="text" 
                    value={this.state.name}
                    onChange={this.update('name')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                <span className="step-span">Step 3 of 4</span>
              <label htmlFor='form-description'>Describe who should join, and what your MeetSup <br/>
                will do.</label>
                  <textarea 
                    id="form-description"
                    type="text" 
                    value={this.state.description}
                    onChange={this.update('description')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/533695931247066883484/start_v2/people.svg"/>
                <span className="step-span">Step 4 of 4</span>
              <label htmlFor='form-name'>What it means to be a MeetSup</label>
                  <ul>
                    <li>Real, in-person conversations</li>
                    <li>Open and honest intentions</li>
                    <li>Always safe and respectful</li>
                    <li>Put your members first</li>
                  </ul>
                </div>
                  

            </div>
          <p className="create-disclaimer">We review all MeetSups based on our Community Guidelines</p>
          <input className="create-submit-button" type="submit" value="Agree & Continue"/>
        
      </form>
      </div>
      </div>
    )
  }
}

export default withRouter(CreateGroup);