import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CountryList from '../../components/local/CountryList/CountryListStyled';
import Banner from '../../components/global/Banner/BannerStyled';
import { Input } from '../../components/global/Input/Input';
import { Section } from '../../components/local/Sections/Sections';
import { Spinner, SpinnerText } from '../../components/global/Spinner/Spinner';
import { Container } from '../../components/global/Container/Container';
import { Button } from '../../components/global/Button/Button';
import { Gif } from '../../components/global/Gif/Gif';

import { fetchCountries } from './store/operations';
import * as actions from './store/actions';

class Home extends Component {
  state = {
    countryInput: '',
    focus: false,
    display: true,
    showGif: false,
  }

  componentDidMount() {
    const { fetchCountries } = this.props;
    fetchCountries();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, this.showCountries)
  }

  showCountries = () => {
    const { filteredCountries, resetCountries } = this.props;
    const { countryInput } = this.state;
    filteredCountries(countryInput);
    resetCountries(countryInput);
  }

  handleFocus = () => {
    this.setState({
      focus: true,
    })
  }

  handleClick = () => {
    this.setState({
      focus: false,
      display: false,
      showGif: true,
    }, this.handleHideGif)
  }

  handleHideGif = () => {
    setTimeout(() => {
      this.setState({
        showGif: false,
      })
    }, 2000)
  }

  render() {
    const { pending, inputCountries, error } = this.props;
    const { countryInput, focus, display } = this.state;

    if (pending) {
      return (
        <Container>
          <Spinner>
            <SpinnerText>Loading...</SpinnerText>
          </Spinner>
        </Container>
      )
    }

    if (error) {
      return (
        <Banner title={`Error ${error}`} />
      )
    }

    return (
      <Section>
        {focus && display && <Button className={display ? null : 'noneActive'} onClick={this.handleClick}>Do you like inputs?</Button>}
        <Gif className={this.state.showGif ? 'active' : null} />
        <Banner title="Let's learn geography">
          <Input placeholder="Enter country name" name='countryInput' value={countryInput} onChange={this.handleChange} onFocus={this.handleFocus} />
        </Banner>
        <CountryList inputCountries={inputCountries} />
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.pending,
  countries: state.countries,
  inputCountries: state.inputCountries,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  fetchCountries: () => dispatch(fetchCountries()),
  filteredCountries: inputValue => dispatch(actions.filteredCountries(inputValue)),
  resetCountries: inputValue => dispatch(actions.resetCountries(inputValue))
})

Home.propTypes = {
  pending: PropTypes.bool,
  countries: PropTypes.array,
  inputCountries: PropTypes.array,
  error: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);