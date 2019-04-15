import React from "react"
import "./Form.css"

const Form = (props) => (
  <div className="form-group">
  <input type="search" className="form-control" id="searchForm" onChange={(e) => props.handleChange(e)} aria-describedby="search" placeholder="Search"></input>
  
  <button type="submit" className="btn btn-primary" onClick={(e) => props.handleSearchClick(e)}>Search</button>
  </div>
    
)

export default Form