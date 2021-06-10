import React from 'react';

class BadgeFrom extends React.Component {
    //pasamos los input de no controlado a controlado
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: '',
    //     instagram: ''
    // };
    //el metodo va a recibir el evento y vamos a imprimir ese valor
    // handleChange = e =>{
        // console.log({ 
        //     name: e.target.name,
        //     value: e.target.value });
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick = e =>{
        console.log('Button was clicked');
    }

    // handleSubmit = e =>{
    //     e.preventDefault();
    //     console.log('Form was submitted')
    //     console.log(this.state)
    // }
    render() {
        return(
            <div>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" 
                        //pasamos los input de no controlado a controlado
                        value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" 
                        value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" 
                        value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" 
                        value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Instagram</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="instagram" 
                        value={this.props.formValues.instagram}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
                </form>
            </div>
        )
    }
}

export default BadgeFrom;