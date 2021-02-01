import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class SignUp extends Component {
  // userData;
  constructor(props){
    super(props);
    this.state = {
      signUpData: {
        name: '',
        email: '',
        phone: '',
        password: '',
        isLoading: '',
      },
      msg: '',
      redirect: false,
    };
    this.onChangehandler = this.onChangehandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

  }

  onChangehandler(e, key){
    const { signUpData } = this.state;
    signUpData[e.target.name] = e.target.value;
    this.setState({ signUpData });
  };

  onSubmitHandler(e){
    e.preventDefault();
    axios.post(`api/user/create`, this.state.signUpData)
      .then(response => {
        this.setState({ isLoading: false });

        if(response.data.status === 200){
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("email", this.state.email);
          this.setState({
            msg: response.data.message,
            redirect: true,
              signUpData: {
              name: '',
              email: '',
              phone: '',
              password: '',
              },
          });
        
          setTimeout(() => {
            this.setState({ msg: ''});
          }, 2000);
        }
        if(response.data.status === 'failed'){
          this.setState({ msg: response.data.message });
          setTimeout(() => {
            this.setState({ msg: ''});
          }, 2000);
        }
    });
  };

  render(){
    const isLoading = this.state.isLoading;
    const login = localStorage.getItem("isLoggedIn");
    if(this.state.redirect){
      return <Redirect to="search" />;
    } if (login){
      return <Redirect to="search" />;
    }

    return(

                        <div className="card">
                            <div className="card-header"><h1>Sign Up</h1></div>
                                <div className="card-body">
                                      <Form className='containers shadow'>

                                        <FormGroup>
                                        <div className="col-md-8">
                                          <Label for='name'>Name: </Label>
                                          <Input
                                            type='name'
                                            name='name'
                                            placeholder='Enter Name'
                                            value={this.state.signUpData.name}
                                            onChange={this.onChangehandler}
                                          />
                                          <span className="invalid-feedback" role="alert">
                                                <strong></strong>
                                            </span>
                                        </div>
                                        </FormGroup>

                                        <FormGroup>
                                        <div className="col-md-8">
                                          <Label for='phone'>Phone: </Label>
                                          <Input
                                            type='phone'
                                            name='phone'
                                            placeholder='Enter Phone'
                                            value={this.state.signUpData.phone}
                                            onChange={this.onChangehandler}
                                          />
                                          <span className="invalid-feedback" role="alert">
                                                <strong></strong>
                                            </span>
                                        </div>
                                        </FormGroup>

                                        <FormGroup>
                                        <div className="col-md-8">
                                          <Label for='email'>E-mail: </Label>
                                          <Input
                                            type='email'
                                            name='email'
                                            placeholder='Enter Email'
                                            value={this.state.signUpData.email}
                                            onChange={this.onChangehandler}
                                          />
                                          </div>
                                        </FormGroup>

                                        <FormGroup>
                                        <div className="col-md-8">
                                          <Label for='password'>Password: </Label>
                                          <Input
                                            type='password'
                                            name='password'
                                            placeholder='Enter Password'
                                            value={this.state.signUpData.password}
                                            onChange={this.onChangehandler}
                                          />
                                            <span className="invalid-feedback" role="alert">
                                            <strong></strong>
                                              </span>
                                        </div>
                                        </FormGroup>

                                        <p className='text-danger text-center'>{this.state.msg}</p>

                                        <div className="form-group row mb-0">
                                          <div className="col-md-8 offset-md-0 ml-3">
                                            <Button
                                              className='text-center mb-4'
                                              color='success'
                                              onClick={this.onSubmitHandler}
                                            >
                                              Sign Up
                                              {isLoading ? (
                                                  <span 
                                                    className='spinner-border spinner-border-sm ml-5'
                                                    role='status'
                                                    aria-hidden='true'
                                                  ></span>
                                              ) : (
                                                <span></span>
                                              )}
                                            </Button>
                                          
                                            <Link to="/login">
                                                <Button 
                                                    className="text-center mb-4 ml-4"
                                                    color="primary"
                                                >
                                                    Login ?
                                                </Button>
                                            </Link>
                                          </div>
                                      </div>
                                  </Form>        
                              </div>
                        </div>
      );
  }
}


export default SignUp;