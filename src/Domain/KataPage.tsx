import React, {useState} from 'react'
import Rover from './Rover'
import Coordinate from './Location'
import Direction from './Direction'

export const KataTitleText: React.FC  = () => {
        return (
            <div className='title'>
                <h1>Welcome to the Mars Rover Kata</h1>
            </div>
        )
}

export const MarsRover: React.FC = () => {
    const [activeRover, setRover] = useState(new Rover());
    const [currentLocation, setLocation] = useState(new Coordinate());
    const [currentDirection, setDirection] = useState(Direction.North);

    return (
        <div>
            <p>Rover Details </p>
            <p>{currentLocation.toString()} and Direction: {currentDirection}</p>
            <p>
                <button className="Button"onClick={() => {setRover(activeRover.turnLeft()); setLocation(activeRover.location); setDirection(activeRover.direction)}}>Turn Left</button>
                <button className="Button"onClick={() => {setRover(activeRover.moveForward()); setLocation(activeRover.location); setDirection(activeRover.direction)}}>Move Forward</button>
                <button className="Button"onClick={() => {setRover(activeRover.moveBackward()); setLocation(activeRover.location); setDirection(activeRover.direction)}}>Move Backward</button>
                <button className="Button"onClick={() => {setRover(activeRover.turnRight()); setLocation(activeRover.location); setDirection(activeRover.direction)}}>Turn Right</button>
            </p>
        </div>
    )
}



export default KataTitleText;

