import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";
import { fetchItems, editItem } from "../../../actions/items";
import PropTypes from "prop-types";

class Dashboard extends Component {
    state = {
        message: null
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        item: PropTypes.object.isRequired,
        fetchItems: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        const { fetchItems } = this.props;
        fetchItems();
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "ITEMS_ERROR") {
                this.setState({ message: error.message });
            } else {
                this.setState({ message });
            };
        };  
    };

    render() {
        const { message } = this.state;
        const { 
            item: { items } 
        } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        );
    };
};  

const mapStateToProps = state => ({
    error: state.error,
    item: state.item
});

const mapDispatchToProps = { fetchItems, editItem };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);