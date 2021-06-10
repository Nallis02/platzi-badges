import React from 'react';

import './style/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom'

// class Badges extends React.Component {
    
//     constructor(props){
//         super(props)
//         this.state = {
//             data: [],
//           };
//         console.log('1. constructor')
//     }

//     componentDidMount() {
//         console.log('3. componentDidMount')
//         this.timeoutId = setTimeout( () =>{
//             this.setState({
//                 data: [
//                     {
//                       id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
//                       firstName: 'Freda',
//                       lastName: 'Grady',
//                       email: 'Leann_Berge@gmail.com',
//                       jobTitle: 'Legacy Brand Director',
//                       instagram: 'FredaGrady22221-7573',
//                       avatar:
//                         'https://image.freepik.com/vector-gratis/lindo-astronauta-dibujos-animados-paz-mano-concepto-icono-tecnologia-espacial-aislado-estilo-dibujos-animados-plana_138676-2184.jpg',
//                     },
//                     {
//                       id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
//                       firstName: 'Major',
//                       lastName: 'Rodriguez',
//                       email: 'Ilene66@hotmail.com',
//                       jobTitle: 'Human Research Architect',
//                       instagram: 'MajorRodriguez61545',
//                       avatar:
//                         'https://image.freepik.com/vector-gratis/ilustracion-vector-dibujos-animados-lindo-corgi-beber-leche-te-boba-bebida-animal-concepto-aislado-vector-estilo-dibujos-animados-plana_138676-1943.jpg',
//                     },
//                     {
//                       id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
//                       firstName: 'Daphney',
//                       lastName: 'Torphy',
//                       email: 'Ron61@hotmail.com',
//                       jobTitle: 'National Markets Officer',
//                       instagram: 'DaphneyTorphy96105',
//                       avatar:
//                         'https://image.freepik.com/vector-gratis/lindo-astronauta-sentado-planeta-agitando-mano-ilustracion-dibujos-animados-concepto-icono-espacio_138676-1913.jpg',
//                     },
//                   ],
//             });

//         }, 3000);
//     }

//     componentDidUpdate(prevProps, prevState){
//         console.log('5. coponentDidUpdate')
//         console.log({
//             prevProps: prevProps, 
//             prevState: prevState
//         });
//         console.log({
//             props: this.props,
//             state: this.state,
//         })
//     }

//     componentWillUnmount(){
//         console.log('6. componentWillUnmount')
//         clearTimeout(this.timeoutId)
//     }
//     render() {
//         console.log('2/4. render')
//         return (
//             <React.Fragment>
//                 <div className="Badges">
//                     <div className="Badges__hero">
//                         <div className="Badges__container">
//                             <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="Badge__container">
//                     <div className="Badges__buttons">
//                         <Link to="/badges/new" className="btn btn-primary">
//                             New Badge
//                         </Link>
//                     </div>
                    
//                     <div className="Badges__list">
//                         <div className="Badges__container">
//                             <BadgeList badges={this.state.data} />
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
//clase 25 curso (https://platzi.com/clases/1548-react/18711-solicitando-datos-get/) solicitando datos Get 
import api from '../Api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount(){
      clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error}/>
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
          
          {this.state.loading && <MiniLoader /> }
      </div>
      </React.Fragment>
    );
  }
}

export default Badges;