import React, { Component } from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import { Button, } from "react-bootstrap";


export default class HomePage extends Component {

    onSubmit(e) {
        localStorage.removeItem('login');
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div className='center' >
                        <h2>
                            Hello {localStorage.getItem('login')}
                        </h2>
                    </div>
                    <br />
                    <br />
                    <div>
                        <Form id="form" onSubmit={this.onSubmit}>
                            <Row>
                                <Col xs="12" sm="2">
                                    <Button color="info" type="submit" length="100" block>Log Out</Button>
                                </Col>

                            </Row>
                        </Form>

                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

// <Container>
//     <div className='center' >
//         <h2>
//             Hello {localStorage.getItem('login')}
//         </h2>
//     </div>
//     <br />
//     <br />
//     <div>
//         <Row>
//             <Col xs="12" sm="2">
//                 <Button color="info" type="submit" length="100" block>Log Out</Button>
//             </Col>

//         </Row>
//     </div>
// </Container>
// )
// export default HomePage