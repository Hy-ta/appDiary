import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class InputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            startDate: '',
            endDate: '',
            desc: '',
            span: false,
            process: '',
            status: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e){
        this.setState({ 
            title: e.target.value,
            startDate: e.target.value,
            endDate: e.target.value,
            desc: e.target.value,
            span: e.target.checked,
            process: e.target.value, 
        });
    };

    render(){
        return(
            <div className="px-4">
                        <Form>
                            {/* 1 */}
                            <FormGroup className="row py-4">
                              <div className="pb-2 col-sm-1">
                                <Label className="pt-2">Title:</Label>
                              </div>
                              <div className="col-sm-2">
                                  <Input 
                                    className="ml-2 form-control"
                                    type="text" 
                                    name="title"
                                    value={this.props.value}
                                    placeholder="Type here..." 
                                    onChange={(e) => this.props.setSearchValue(e.target.value)}
                                    />
                              </div>
                            <span>{this.props.err}</span>

                              <div className="pb-2 col-sm-1">
                                {/* <Label>Start Date:</Label> */}
                              </div>
                                <div className="col-sm-2 mx-4">
                                        {/* <Input 
                                          type="date" 
                                          id="start" 
                                          name="startDate"    
                                          value={this.props.valueSt} 
                                          onChange={(e) => this.props.setSearchStDateValue(e.target.value)}
                                          className="form-control"
                                         /> */}
                                </div>
                                
                                <div className="pb-2 col-sm-1">
                                  {/* <Label>End Date:</Label> */}
                                </div>
                                <div className="col-sm-2">
                                        {/* <Input 
                                            type="date" 
                                            id="start" 
                                            name="endDate" 
                                            value={this.props.valueEd} 
                                            onChange={(e) => this.props.setSearchEdDateValue(e.target.value)}
                                            />    */}
                                </div>
                            </FormGroup>
                            {/* //1 */}
                
                            {/* <FormGroup className="py-3" >
                                <div className="row py-2">
                                      <div className="col-sm-2">
                                        <Label htmlFor="exampleFormControlInput1">Process:</Label>
                                      </div>
                                                    
                                      <div className="form-check col-sm-2">
                                        <Input 
                                          className="form-check-input" 
                                          type="radio" 
                                          name="gridRadios" 
                                          id="gridRadios1" 
                                          checked={this.state.span} 
                                          onChange={this.handleNameChange}
                                           
                                        />
                                        <Label className="form-check-Label" htmlFor="gridRadios1">
                                          Everyday
                                        </Label>
                                      </div>
                  
                                      <div className="form-check col-2">
                                        <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <Label className="form-check-Label" htmlFor="gridRadios2">
                                          Every Month
                                        </Label>
                                      </div>
                  
                                      <div className="form-check col-sm-2">
                                        <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                        <Label className="form-check-Label" htmlFor="gridRadios3">
                                        fourth quarter
                                        </Label>
                                      </div>
                  
                                      <div className="form-check col-sm-2">
                                          <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                                          <Label className="form-check-Label" htmlFor="gridRadios4">
                                          Other
                                          </Label>
                                      </div> */}

                                {/* <!---------------
                                      status  
                                    ---------------> */}
                                    {/* </div>     
                                  </FormGroup> */}
                        </Form>
                    </div>
        )
    }
}

export default InputForm;