import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
// import instagramLogo from '../images/instagram.jpg';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.instagram}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
    render() {
      if (this.props.badges.length === 0) {
        return (
          <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
        );
      }
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map(badge => {
              return (
                <li key={badge.id}>
                  <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                      <BadgesListItem badge={badge} />  
                  </Link>
                  
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
          
//             <ul className="list-unstyled">
// {/* m a p es una funcion que recibe otro valores */}
//                 {this.props.badges.map((badge)=>{
//                     return (
//               // VAMOS A VOLVER ESTO UN COMPONENTE
//                         <li key={badge.id} className="Badge__List">
//                             <img className="Badges__avatar" src={badge.avatarUrl} alt= "Avatar"/>
//                             <div className="Badges__container-list">
//                                 <p>{badge.firstName} {badge.lastName}</p>
//                                 <p className="Badge__instagram" >
//                                     <span><img src={instagramLogo} alt="Instagram Logo" className="Badge__logo" /> {badge.instagram}</span>
//                                 </p>
//                                 <p>{badge.jobTitle}</p>
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         );
//     }
// }

export default BadgesList;