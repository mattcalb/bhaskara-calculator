import React, { useState } from 'react';

import ResultsTable from '../../components/ResultsTable';

import './style.css';

function MainPage() {

    const [coeficientA, setCoeficientA] = useState(0);

    const [coeficientB, setCoeficientB] = useState(0);

    const [coeficientC, setCoeficientC] = useState(0);

    const [delta, setDelta] = useState(0);

    const [xVertex, setXVertex] = useState(0);

    const [yVertex, setYVertex] = useState(0);

    const [solution, setSolution] = useState([]);

    function roundNumber(number) {

        if (Number.isInteger(number)) {

            return number;

        } else {

            number = number.toFixed(1);

            return number;
        }
    }

    function handleSubmit(e) {

        e.preventDefault();

        const tmp_delta = roundNumber(Math.pow(coeficientB, 2) - 4 * coeficientA * coeficientC);

        if (tmp_delta < 0) {

            alert ("Negative Delta, can't calculate!");

            window.location.reload();
        
            return;
        }

        setDelta(tmp_delta);

        const tmp_xVertex = roundNumber(Math.round(- coeficientB / (2 * coeficientA), 2));

        setXVertex(tmp_xVertex);

        const tmp_yVertex = roundNumber(- tmp_delta / (4 * coeficientA));

        setYVertex(tmp_yVertex);

        const tmp_solution = [2];

        tmp_solution[0] = roundNumber((- coeficientB + Math.sqrt(tmp_delta)) / (2 * coeficientA));

        tmp_solution[1] = roundNumber((- coeficientB - Math.sqrt(tmp_delta)) / (2 * coeficientA));

        setSolution(tmp_solution);
    }

    return (
        <div>
                <form autoComplete="off" onSubmit={handleSubmit}>

                    <h1>Bhaskara Calculator</h1>

                    <label htmlFor="coeficient-a">Coeficient A</label>

                    <input type="number" id="coeficient-a" placeholder="0" onChange={e => setCoeficientA(e.target.value)}></input>

                    <label htmlFor="coeficient-b">Coeficient B</label>

                    <input type="number" id="coeficient-b" placeholder="0" onChange={e => setCoeficientB(e.target.value)}></input>      
                
                    <label htmlFor="coeficient-c">Coeficient C</label>

                    <input type="number" id="coeficient-c" placeholder="0" onChange={e => setCoeficientC(e.target.value)}></input>

                    <button type="submit" className="submit-button">Submit</button>

                    <hr></hr>

                    <ResultsTable delta={delta} solution={solution} xVertex={xVertex} yVertex={yVertex}/>

                </form>
        </div>
    )
};

export default MainPage;