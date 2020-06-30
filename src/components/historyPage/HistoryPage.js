import React from 'react';
import { connect } from 'react-redux';
import { Section, Container, ImageBlockHistory, ImageBlock, DateBlock, ButtonBlock, Button } from '../styles';
import { deleteImage } from '../../actions';

class HistoryPage extends React.Component {

  deleteImageHandler(imageId) {
    const updatedImages = this.props.images.filter((elem) => elem.id !== imageId)
    this.props.onChange(updatedImages);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { images } = this.props;

    const blocks = images.map(image => (
      <ImageBlockHistory key={image.id}>
        <ImageBlock>
          <img src={image.url} alt={image.id} />
          <p>{image.title.length ? image.title : 'No name'}</p>
        </ImageBlock>
        <DateBlock>{image.date}</DateBlock>
        <ButtonBlock>
          <Button type="button" onClick={this.deleteImageHandler.bind(this, image.id)}>Удалить</Button>
        </ButtonBlock>
      </ImageBlockHistory>
    ))

    return (
      <Section>
        <Container>
          <h1>История загрузок</h1>
          <div>
            {blocks}
          </div>
        </Container>
      </Section>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: images => dispatch(deleteImage(images))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)