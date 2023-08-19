import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchForm,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
      Report.info(
        'Ooops',
        "Looks like You didn't enter anything for the search.",
        'Okay',
        {
          svgSize: '42px',
          messageMaxLength: 1923,
          plainText: false,
          color: 'green',
          titleFontSize: '20px',
          messageFontSize: '16px',
        }
      );
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <div>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchInput
            onChange={this.handleInputChange}
            value={this.state.query}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
          />
          <StyledSearchBtn>Submit</StyledSearchBtn>
        </StyledSearchForm>
      </div>
    );
  }
}
