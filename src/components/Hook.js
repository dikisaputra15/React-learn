import React,{ useState } from 'react'

const Hook = props => {
const [fruiteState, setFruitState] = useState({
        fruits:[
            {name:'Mango',weight:'120gm'},
            {name:'Apple',weight:'20gm'},
            {name:'Orange',weight:'60gm'},

        ]

    });

    const clickHandler = () => {
    
        setFruitState({
            fruits:[
                {name:'Samsung',weight:'120gm'},
                {name:'Apple',weight:'20gm'},
                {name:'Nokia',weight:'60gm'},
            ]
        })
    }

		return (
                <div>
                    <button onClick={clickHandler}>Change Me</button>
                    <h1> Fruite name is {fruiteState.fruits[0].name} </h1>
                    <h1> Fruite name is {fruiteState.fruits[1].name} </h1>
                    <h1> Fruite name is {fruiteState.fruits[2].name} </h1>
                </div>
		    )
    }

export default Hook
