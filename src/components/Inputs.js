//file for practicing input boxes/test boxes// form fills

import React, {Component} from "react";
import "./../styles/inputs.scss"

class InputPractice extends Component {
    render() {
        return(
            <>
                <div>
                    <input className="input-1"></input>
                </div>
                <div>
                    <input className="input-2"></input>
                </div>
                <div>
                    <input className="input-3"></input>
                </div>
            </>
        )
    }
}

export default InputPractice;