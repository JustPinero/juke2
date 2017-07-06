import React, {Component} from 'react'

const NotFound = (props) => {
console.log(props);
  return (
    <h1> {props.location.pathname} Not Found </h1>
  )
}


  export default NotFound
