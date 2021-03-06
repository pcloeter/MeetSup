import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class GroupShow extends React.Component {
 
  constructor (props) {
    super(props);
    this.alreadyMember = this.alreadyMember.bind(this);
    this.notMember = this.notMember.bind(this);
    this.organizedGroup = this.organizedGroup.bind(this);
    this.whichButton = this.whichButton.bind(this);
    this.groupEventsShow = this.groupEventsShow.bind(this);
    this.whichPicture = this.whichPicture.bind(this);
    this.reroute = this.reroute.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId)
  }

 
  organizedGroup () {
    return (
      <button onClick={() => this.props.deleteGroup(this.props.match.params.groupId).then( () => {
       this.props.history.push('/groups')})}
      className="membership-leave">Delete Group</button>
    )
  }

  alreadyMember () {
    return (
      <button onClick={() => this.props.deleteMembership(this.props.match.params.groupId).then( () => this.props.history.push('/groups'))} 
      className="membership-leave">Leave Group</button>
    )
  }

  notMember () {
    return (
      <button onClick={() => this.props.createMembership(this.props.match.params.groupId).then( () => this.props.fetchGroup(this.props.match.params.groupId))} 
      className="membership-join">Join Group</button>  
    )
  }

  whichButton () {
    if (this.props.currentUser.id === this.props.organizer.id) {
      return this.organizedGroup();
    } else if (this.props.group.memberIds.includes(this.props.currentUser.id)) {
      return this.alreadyMember();
    } else {
      return this.notMember();
    }
  }

  reroute (eventId, groupId) {
    this.props.history.push(`/groups/${groupId}/events/${eventId}`);
  }
  
  notAttending (eventId, groupId) {
    return <button onClick={() => this.props.createRsvp(eventId).then(this.reroute(eventId, groupId))} className="rsvp-no">Attend</button>
    
  }

  alreadyAttending (eventId) {
    return <button onClick={() => this.props.deleteRsvp(eventId).then( () => this.props.fetchGroup(this.props.match.params.groupId))}
    className="rsvp-yes"><i className="fas fa-times-circle"></i> Can't go</button>
  }

  whichRsvpButton (event, groupId) {
    if (event.attendeeIds.includes(this.props.currentUser.id)) {
      return this.alreadyAttending(event.id)
    } else {
      return this.notAttending(event.id, groupId)
    }
  };

  whichPicture (id) {
    if (id % 10 === 9) { var img = `/img8.jpg`; }
    else if (id % 10 === 8) { var img = `/img9.jpg`; }
    else if (id % 10 === 7) { var img = `/img7.jpg`; }
    else if (id % 10 === 6) { var img = `/img6.jpg`; }
    else if (id % 10 === 5) { var img = `/img5.jpg`; }
    else if (id % 10 === 4) { var img = `/img4.jpg`; }
    else if (id % 10 === 3) { var img = `/img3.jpg`; }
    else if (id % 10 === 2) { var img = `/img2.jpg`; }
    else if (id % 10 === 1) { var img = `/img1.jpg`; }
    else { var img = `/img0.jpg`; }

    return img;
  }
  
  groupEventsShow () {
    if (!this.props.events) { return null };
    if (this.props.group.eventsCount === 0 ) {
      return <li id="noEvents">{this.props.group.name} has no events scheduled! :-( </li>
        
      } else {
        const eventItems = this.props.events.slice(0, 1).map( event => {
          const eventPicId = (event.id + 5);

        return(
        <li className="group-events-show" key={event.id}>
        <div className="group-event-container">
        <div className="group-event-info">
          <div className="group-event-details">
            <span id="date">{event.formattedDate} {event.formattedTime}</span>
            <span id="title">{event.title}</span>
            <span id="address">	&#x261e; {event.address}</span>
          </div>
          <img src={this.whichPicture(eventPicId)}/>
        </div>
        <p id="group-event-description">{event.details}</p>
        <div className="group-event-attend">
        <div id="attending">
          <img src="https://image.flaticon.com/icons/png/128/149/149072.png"/>
          <span className="attendees">&nbsp; {event.attendeesCount} Attendees</span>
        </div>
        {this.whichRsvpButton(event, event.group_id)}
        </div>
        </div>
        </li>
        )
      })
      return eventItems;
    }
  };

  
  render () {
    if (!this.props.group) { return null };

    const groupId = this.props.group.id;
    const groupMembers = this.props.members.map(member => {
      return (
          <li key={member.id}>
            <img src="https://image.flaticon.com/icons/png/128/149/149072.png"/>
            <p>{member.name}</p>
          </li>
      )
    });
    return (
      <div>

      <div className="main-top">
        <div className="show-head-container">
            <img style={{backgroundImage: `url(${this.whichPicture(groupId)})`}}className="group-show-pic" />
            <div className="group-show-info">
              <p className="group-title">{this.props.group.name}</p>
              <p className="show-info">&#127760; {this.props.group.city}</p>
              <p className="show-info">	&#128107; {this.props.group.membersCount}</p>
              <p className="show-info">&#128483; {this.props.organizer.name}</p>
            </div>
          </div>
      </div>

        <div className="group-menu">
        <div className="group-menu-container">
          <Link to={`/groups/${this.props.group.id}`}className="group-menu-item">About</Link>
          <Link to={`/groups/${this.props.group.id}/events`}className="group-menu-item">Events</Link>
          {/* <Link to={`/groups/${this.props.group.id}/members`}className="group-menu-item">Members</Link> */}
          <div>
          {this.whichButton()}
          </div>
          </div>
        </div>

<div className="main-bottom">
        <div className="show-content-container">
          <div className="show-left">
            <div className="group-about">
              <h2>What we're about</h2>
              <p>{this.props.group.description}</p>
            </div>

            <div className="group-events">
              <h2>Upcoming Events ({this.props.group.eventsCount})</h2>
              <ul className="group-events-list">
                {this.groupEventsShow()}
              </ul>
            </div>

          </div>

          <div className="show-right">

            <div className="group-organizer">
              <h2>Organizer</h2>
              <img className="organizer-pic" src="https://image.flaticon.com/icons/svg/145/145850.svg"/>
              <p>{this.props.organizer.name}</p>
            </div>

            <div className="group-members">
              <h2>Members ({this.props.group.membersCount})</h2>
                <ul>{groupMembers}</ul>
            </div>

          </div>

         </div>
        </div>

      </div>
    )
  }

}

export default withRouter(GroupShow);