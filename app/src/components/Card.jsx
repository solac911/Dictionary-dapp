import React from "react";

function Card({ title, description, onEdit }) {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <button className="btn btn-primary btn-sm" onClick={onEdit}>
                    Edit
                </button>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Card;
