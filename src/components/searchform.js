import React, { Component } from 'react'

const API_KEY = '33c81196'

export class Searchform extends Component {
    state = {
        inputMovie: ''
    }

    _handlechange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handlesubmit = (e) => {
        e.preventDefault()
        //alert(this.state.inputMovie)
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = '0'} = results
                console.log({Search, totalResults})
                this.props.onResults(Search)
            })
    }

    render(){
        return(
            <form onSubmit={this._handlesubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this._handlechange}
                            type="text" 
                            placeholder="Movie to seach"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}