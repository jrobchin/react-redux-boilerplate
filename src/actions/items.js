import {
    ITEMS_LOADING,
    ITEM_CREATED, ITEMS_FETCHED,
    ITEM_RETURNED, ITEM_UPDATED, ITEM_DELETED 
} from "./types";
import { returnErrors } from "./errors";
import axios from "axios";

export const setLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};

export const createItem = item => dispatch => {
    axios.post(`/api/v1/items`, item)
    .then(res => dispatch({
        type: ITEM_CREATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "ITEMS_ERROR")
    ));
};

export const fetchItems = () => dispatch => {
    axios.delete("/api/v1/items")
    .then(res => dispatch({
        type: ITEMS_FETCHED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "ITEMS_ERROR")
    ));
};

export const editItem = id => dispatch => {
    axios.get(`/api/v1/items/${id}`)
    .then(res => dispatch({
        type: ITEM_RETURNED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "ITEMS_ERROR")
    ));
};

export const updateItem = (id, item) => dispatch => {
    axios.put(`/api/v1/items/${id}`, item)
    .then(res => dispatch({
        type: ITEM_UPDATED,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "ITEMS_ERROR")
    ));
};

export const deleteItem = id => dispatch => {
    axios.delete(`/api/v1/items/${id}`)
    .then(res => dispatch({
        type: ITEM_DELETED,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.response.data, err.response.status, "ITEMS_ERROR")
    ));
};