import React, { Component } from "react";

import { connect } from "react-redux";
import { createItem } from "../../../actions/items";
import PropTypes from "prop-types";

class Form extends Component {
    state = {
        name: "",
        description: "",
        message: null
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        item: PropTypes.object.isRequired,
        updateItem: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "ITEMS_ERROR") {
                this.setState({ });
            } else {
                this.setState({ });
            };  
        };
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;
        const { } = this.props;

    };

    render() {
        const { name, description, message } = this.state;

        return (
            <Form inline>
                
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error,
    item: state.item
});

const mapDispatchToProps = { updateItem };

export default connect(mapStateToProps, mapDispatchToProps)(Form);