import React from 'react';
import {Link} from 'react-router-dom';
// import { GroupIndexItem } from "../groups/group_index_item";


class Splash extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchGroups()
  }

  render () {

    return (
      <div className='main-container'>

        <div className="splash-container">
          <video className="splash-video" id="video" muted autoPlay loop><source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4"/></video>
        </div>
          
          <div className="splash-text">
              <h1>What do you love?</h1>
              <h3>Do more of it with Meet.Sup?</h3>
                <Link to={'/signup'}><button className='splash-button'>Sign Up</button></Link>
          </div>


      </div>
   
   ) 
  }
  
}
{/* <div class="main-groups-container">
  {this.props.groups.map( group => (
      <GroupIndexItem
        group={group}
        key={group.id}
        ></GroupIndexItem>
  ))}
</div> */}

export default Splash;