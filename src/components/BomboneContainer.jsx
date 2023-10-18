import React from 'react'
import {connect} from 'react-redux'
import { buyBombone } from '../redux'

function BomboneContainer(props) {
  return (
    <div>
        <h2>Number of bombone - {props.numOfBombone}</h2>
        <button onClick={props.buyBombone}>Buy bombone</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return {
        numOfBombone:state.bombone.numOfBombone
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyBombone:()=>dispatch(buyBombone())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BomboneContainer)