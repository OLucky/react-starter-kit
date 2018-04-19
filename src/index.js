import "./styles.scss";

import React, {Component} from "react";
import {render} from "react-dom";

class Root extends Component {
	state = {
		works: true
	}

    render() {
        return (
            <div>
                <h3> - Hello there.</h3>
                <h3> - General Kenobi!</h3>
            </div>
        );
    }
}

render(<Root/>, document.getElementById("root"));