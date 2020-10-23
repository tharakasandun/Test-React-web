import React, { Component } from "react";
import { Container, Row, Col, Form, Input } from 'reactstrap';
import { Button, FormGroup, } from "react-bootstrap";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
            usernameValid: "",
        };
    }

    closeAlert = () => {
        this.setState({ alert: 0 });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });

    };

    reset = e => {
        this.setState({
            username: "",
            password: "",
            usernameError: "",
            passwordError: "",
        });
        document.getElementById("form").reset();
    };

    validate = () => {
        let error = false;
        let usernameError = "";
        let passwordError = "";
        if (this.state.username.length < 1) {
            error = true;
            usernameError = " Enter Username";
        }
        if (this.state.password.length < 1) {
            error = true;
            passwordError = " Enter Password";
        }

        this.setState({
            usernameError: usernameError,
            passwordError: passwordError
        });
        return error;
    }

    onSubmit(e) {
        e.preventDefault();
        const error = this.validate();
        if (!error) {
            localStorage.setItem('login', this.state.username);
            setTimeout(() => {
                window.location.reload(false);
            }, 100);
        }
        else {
        }
    }

    render() {
        return (
            <section>
                <React.Fragment>

                    <Container>
                        <Row>
                            <Col xs="0" sm="4"></Col>

                            <Col xs="12" sm="4">
                                <div className='center' >
                                    <h2>
                                        Log In
                                    </h2>
                                </div>
                                <br />
                                <div >
                                    <Form id="form" onSubmit={this.onSubmit}>

                                        <FormGroup>
                                            <Input type="text" name="username" placeholder="Username" id="username" onChange={this.onChange} />
                                            <div style={{ fontSize: 15, color: "red" }}>{this.state.usernameError}</div>

                                        </FormGroup>

                                        <FormGroup>
                                            <Input type="password" name="password" placeholder="Password" id="password" onChange={this.onChange} />
                                            <div style={{ fontSize: 15, color: "red" }}>{this.state.passwordError}</div>
                                        </FormGroup>
                                        <Row>
                                            <Col xs="12" sm="12">
                                                <Button color="info" type="submit" length="100" block>Log In</Button>
                                            </Col>

                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                            <Col xs="0" sm="4"></Col>
                        </Row>
                    </Container>
                </React.Fragment>
            </section>
        );
    }
} 