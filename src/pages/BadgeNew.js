import React from 'react';

import './style/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import BadgeFrom from '../components/BadgeForm';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import Api from '../Api'

class BadgeNew extends React.Component {
    state = {

        loading: false,
        error: null,
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          instagram: '',
        },
      };

//     handleChange = e => {
//         const nextForm = this.state.form
//         nextForm[e.target.name] = e.target.value;
//         this.setState({
//         form: nextForm
//     });
// };

    handleChange = e => {
        this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })
        try {
            await Api.badges.create(this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/badges');
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    }
    render() {
        if (this.state.loading){
            return <PageLoading />
        }        
        return (
        <React.Fragment>
            <div className="BadgeNew__hero">
                <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
            </div>

            <div className="container">

                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            email = {this.state.form.email || 'EMAIL'}
                            avatarUrl="https://es.gravatar.com/userimage/206711297/732014f7f39a2263ed165ea1d2586b7c.jpg?size=200"
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            instagram={this.state.form.instagram || 'INSTAGRAM'}
                        />
                    </div>
                    <div className="col-6">
                        <h1>New Attendant</h1>
                        <BadgeFrom onChange={this.handleChange} 
                        onSubmit={this.handleSubmit}
                        formValues={this.state.form} 
                        error={this.state.error}
                        />
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default BadgeNew;