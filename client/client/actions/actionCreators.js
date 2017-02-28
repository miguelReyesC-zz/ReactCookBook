import axios from 'axios';

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log("Dispatching add comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// NUEVO
/*export function showUsers(){
  const users = [
    {id : 1 , name : "First name"},
    {id : 2 , name : "Second Comment"}
  ]
  return {
    type: "SHOW_USERS",
    payload: users
  }
}*/

export function showUsers(){
  return(dispatch, getState) => {
    axios.get("http://localhost:3000/users").then((response) => {
    //axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(">>>>>>>>>>");
      console.log(response.data);
      dispatch({
        type: "SHOW_USERS",
        payload: response.data
      })
    })
  }
}

export function showReceipes(){
  return(dispatch, getState) => {
    axios.get("http://localhost:3000/receipes").then((response) => {
    //axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(">>>>>>>>>>");
      console.log(response.data);
      dispatch({
        type: "SHOW_RECEIPES",
        payload: response.data
      })
    })
  }
}

export function getCategories(){
  return(dispatch, getState) => {
    axios.get("http://localhost:3000/categories").then((response) => {
    //axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(">>>>>>>>>>");
      console.log(response.data);
      dispatch({
        type: "GET_CATEGORIES",
        payload: response.data
      })
    })
  }
}



