import React from 'react';
import { connect } from 'react-redux';
import { Section, Container, Button, ImageBlock, Error } from '../styles';
import { requestImage } from '../../actions';

class MainPage extends React.Component {

  buttonRef = React.createRef();

  scrollToMyRef = (ref) => window.scrollBy(0, ref.current.offsetTop)

  componentDidMount() {
    const { fetchImage, images } = this.props;

    if (!images.length) {
      fetchImage()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.images.length && prevProps.images !== this.props.images) {

      this.scrollToMyRef(this.buttonRef);
    }
  }

  render() {

    const { fetchImage, images, errorMessage } = this.props

    const imagesContent = images.map((image, i, arr) => (
      <ImageBlock key={image.id} >
        <img src={image.url} alt={image.id} />
      </ImageBlock>
    ))

    return (
      <Section>
        <Container>
          <div>
            <h1>Главная</h1>
            <div>
              {errorMessage.length ? <Error>Ошибка загрузки, попробуйте позже</Error> : imagesContent}
            </div>
            <Button primary type="button" onClick={fetchImage} ref={this.buttonRef}>Загрузить еще</Button>
          </div>
        </Container>
      </Section>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    ready: state.ready,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImage: () => dispatch(requestImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)