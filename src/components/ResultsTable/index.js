import React from 'react';

import './style.css';

function ResultsTable({delta, solution, xVertex, yVertex}) {

    if (solution[0] === undefined && solution[1] === undefined) {
        
        solution[0] = ' ';
        solution[1] = ' ';
    }

    return (
        <div className="container">

            <div className="result-box solution">
                Solution = {`{${solution[0]}, ${solution[1]}}`}
            </div>

            <div className="result-box delta">
                Delta = {delta}
            </div>

            <div className="result-box xvertex">
                X Vertex = {xVertex}
            </div>

            <div className="result-box yvertex">
                Y Vertex = {yVertex}
            </div>

        </div>
    )
};

export default ResultsTable;