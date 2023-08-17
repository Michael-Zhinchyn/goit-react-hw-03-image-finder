import {
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchForm,
} from './Searchbar.styled';

export const SearchBar = () => {
  return (
    <div>
      <header>
        <StyledSearchForm
          onSubmit={e => {
            e.preventDefault();
            console.log('Form submitted');
          }}
        >
          <StyledSearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
          />
          <StyledSearchBtn type="submit">Submit</StyledSearchBtn>
        </StyledSearchForm>
      </header>
    </div>
  );
};
