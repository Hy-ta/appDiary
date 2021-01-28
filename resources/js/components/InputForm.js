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
      console.log('props', this.props)
        return(
            <div className="px-4">
                        <Form>
                            {/* 1 */}
                            <FormGroup className="row py-4">
                              <div className="pb-2 col-sm-1">
                                <Label>Title:</Label>
                              </div>
                              <div className="col-sm-2">
                                  <Input 
                                    type="text" 
                                    name="title"
                                    value={this.props.value}
                                    placeholder="Title" 
                                    onChange={(e) => this.props.setSearchValue(e.target.value)}
                                    />
                              </div>
                            <span>{this.props.err}</span>

                              <div className="pb-2 col-sm-1">
                                <Label>Start Date:</Label>
                              </div>
                                <div className="col-sm-2 mx-4">
                                        <Input 
                                          type="date" 
                                          id="start" 
                                          name="startDate"    
                                          value={this.state.startDate} 
                                          onChange={this.handleNameChange}
                                          className="form-control"
                                         />
                                </div>
                                
                                <div className="pb-2 col-sm-1">
                                  <Label>End Date:</Label>
                                </div>
                                <div className="col-sm-2">
                                        <Input 
                                            type="date" 
                                            id="start" 
                                            name="endDate" 
                                            value={this.state.endDate} 
                                            onChange={this.handleNameChange}
                                            />   
                                </div>
                            </FormGroup>
                            {/* //1 */}
                
                            <FormGroup className="py-3" >
                                <div className="row py-2">
                                      <div className="col-sm-1">
                                        <Label htmlFor="exampleFormControlInput1">Process:</Label>
                                      </div>
                                                    
                                      <div className="form-check col-sm-1">
                                        <Input 
                                          className="form-check-input" 
                                          type="radio" 
                                          name="gridRadios" 
                                          id="gridRadios1" 
                                          checked={this.state.span} 
                                          onChange={this.handleNameChange}
                                           
                                        />
                                        <Label className="form-check-Label" htmlFor="gridRadios1">
                                          毎週
                                        </Label>
                                      </div>
                  
                                      <div className="form-check col-1">
                                        <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <Label className="form-check-Label" htmlFor="gridRadios2">
                                          毎月
                                        </Label>
                                      </div>
                  
                                      <div className="form-check col-sm-1">
                                        <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                        <Label className="form-check-Label" htmlFor="gridRadios3">
                                          四半期
                                        </Label>
                                      </div>
                  
                                      <div className="form-check col-sm-1">
                                          <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                                          <Label className="form-check-Label" htmlFor="gridRadios4">
                                          その他
                                          </Label>
                                      </div>
                              
 
                                {/* <!---------------
                                      status  
                                    ---------------> */}

                                      
                                   
                                      <div className="mx-4 col-sm-1"><Label htmlFor="exampleFormControlInput1">Status:</Label></div>
                                        <div className="form-check col-sm-1">
                                          <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  />
                                          <Label className="form-check-Label" htmlFor="gridRadios1">
                                            非公開
                                          </Label>
                                        </div>
                    
                                        <div className="form-check col-sm-1">
                                          <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                          <Label className="form-check-Label" htmlFor="gridRadios2">
                                            運用開始前
                                          </Label>
                                        </div>
                    
                                        <div className="form-check col-sm-1">
                                          <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                          <Label className="form-check-Label" htmlFor="gridRadios3">
                                            運用中
                                          </Label>
                                        </div>
                    
                                        <div className="form-check col-sm-1">
                                            <Input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                                            <Label className="form-check-Label" htmlFor="gridRadios4">
                                            運用終了
                                            </Label>
                                        </div>  
                                      </div>
                                    </FormGroup>
                
                                    
                                        <div className="form-group py-2">
                                            <Button className="btn-sm btn-primary searchBtn" type="submit" value="Submit">検索</Button>
                                        </div>
                        
                        </Form>
                    </div>
        )
    }
}

export default InputForm;