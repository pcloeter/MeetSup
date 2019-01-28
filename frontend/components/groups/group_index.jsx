import React from 'react';
import GroupIndexItem from '../groups/group_index_item';

class GroupIndex extends React.Component {

 componentDidMount() {
   this.props.fetchGroups();
 }

 render() {
   return (
      <div className="main-groups-container">
      <h1>working on it!!</h1>
        {this.props.groups.map( group => (
            <GroupIndexItem
              group={group}
              key={group.id}
              ></GroupIndexItem>
        ))}
      </div> 

   )
 }
};




export default GroupIndex;