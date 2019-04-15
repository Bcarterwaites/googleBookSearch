import React from "react"
import Form from "../Form/Form"
import "./Card.css"

const Card = () => (
    <div className="card">
    <div className="card-header">
    Book Search
    </div>
    <div className="card-body">
    Books
    <Form />
    </div>
    </div>
)

export default Card