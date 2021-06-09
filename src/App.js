import Canvas from './components/Canvas.js'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ColorPicker from './components/ColorPicker'

function App() {
    const [color, setColor] = useState(0)

    return (
	<div className="App">
	    <ColorPicker currentColor={color} setColor={color => setColor(color)} />
	    <Canvas currentColor={color} />
	</div>
    )
}

export default App;
