import React, { useEffect } from 'react'
import './styles.css'
import { useState } from "react"

function Square(props, onClick) {
    return <button className='square' onClick={props.onClick}>{props.value}</button>
}

const TicTacToe = () => {

    const [squares, setSquares] = useState(Array(9).fill(''))
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState(false)

    function getWinner(squares) {
        const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (value) => {
        let copyS = [...squares];
        if (copyS[value] !== '' || getWinner(copyS)) return;
        copyS[value] = xIsNext ? 'X' : 'O'
        setSquares(copyS)
        setXIsNext(!xIsNext)
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus(`This is a draw! Please post the game`)
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}`)
        } else {
            setStatus(`Next player is ${xIsNext ? 'X' : 'O'}`)
        }

    }, [squares, xIsNext])

    return (
        <div className="tic-tac-toe-container">
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1>{status}</h1>
        </div>
    )
}

export default TicTacToe