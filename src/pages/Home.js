import React, { Component } from 'react'
import { Title } from '../components/title'
import { Searchform } from '../components/searchform'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
        this.setState({results, usedSearch: true})
    }

    _renderResult () {
        return this.state.results.length === 0
        ? <p>Sorry! Result not found!</p>
        : <MoviesList movies={this.state.results} />
    }

    render(){
        return (
            <div>
                <Title>Search movies</Title>
                <div className="SeachForm-wrapper">
                <Searchform onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                ? this._renderResult()
                    :<small>Use the form to search a movie</small>
                }
            </div>
        )
    }
}