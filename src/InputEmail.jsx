import React from "react";

export default class InputEmail extends React.Component {
    state = {
        email: ""
    }

    handleEmailEdit = (e) => {
        console.log("handleEmailEdit e", e)
        const chr = e.nativeEvent?.data
        const email = e.target?.value 
        this.setState({email: chr})
    }

    render() {


        return <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input
                id="email"
                type="email"
                name="email"

                required

            />
            <p className="field-error" id="email-error">%error message%</p>
        </div>
    }
}