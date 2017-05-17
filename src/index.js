import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const CLIENT_ID = '316687114127-cgtb9vm2ah9p8u601en9n7un2dlm18a7.apps.googleusercontent.com'
const API_KEY = 'qTnYQPmyQOYwtcePmw19sMCp'

// Create a new component. This component should produce some HTML
class App extends React.Component  {
    render() {
        return (
            <div>
              <SearchBar />
            </div>
        )
    }
}

// Take this component's generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
