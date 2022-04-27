import { Component } from "react";
import './search-box-style.css';

class SearchBox extends Component {
    render() {

        console.log(this.props);
        const { className, placeholder, onChangeHandler } = this.props;

        return (
            <input
                className={`search-bar ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}>
            </input>
        )
    }
}

export default SearchBox;