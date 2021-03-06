import React from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails'
import Api from '../Api';

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await Api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e =>{
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = e =>{
    this.setState({modalIsOpen: false})
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
        <BadgeDetails 
        onCloseModal={this.handleCloseModal} 
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.modalIsOpen}
        badge={this.state.data} />
    );
  }
}

export default BadgeDetailsContainer;


