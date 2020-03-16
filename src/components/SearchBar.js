import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
        state = {
            searchTerm: '',
        }

        handleChange = (event) => {
            // console.log(event.target.value);
            this.setState({ searchTerm:event.target.value })
        }

        handleSubmit = (event) => { //Arrow function "this" can be referred outside the funct its been used
            const { searchTerm } = this.state;
            const { onFormSubmit } = this.props;

            onFormSubmit(searchTerm);

            event.preventDefault(); //PREVENT FULL PAGE REFREASH
            // console.log(this.state.searchTerm, this.state.value, this.state.value1)  THIS IS TOO LONG SO WE DO BELOW INSTEAD

            // console.log(this.state.searchTerm) 
         
        }
        render() {
        return (
            <Paper elevation={6} style={{ padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label ="Search..." onChange={this.handleChange}/>
                </form>
            </Paper> 
               
            
        )
    }
}

export default SearchBar;
