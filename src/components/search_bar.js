import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    render() {
        return <input type="text" onChange={this.onInputChange} />
    }

    onInputChange(event) {
        console.log(event.target.value)
    }
}

export default SearchBar
