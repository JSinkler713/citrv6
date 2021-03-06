import { Component } from 'react';

class Carousel extends Component {
    constructor () {
        // calls the Component constructor
        super()

        this.state = {
          active: 0
        }
    }
    static defaultProps = {
      images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }
    

  render() {
    const { active } = this.state
    const { images } = this.props
    return (
      <div className="carousel">
        <img data-testid="hero" src={images[active]} alt='animal' />
        <div className="carousel-smaller">
          {images.map((photo, index)=> (
            <img
            data-testid={`thumbnail${index}`}
            key={photo}
            src={photo}
            onClick={()=> this.setState({ active: index })}
            className={index === active ? 'active' : ''
          } 
            alt='animal=thumbnail' 
          />
          ))}
        </div>

      </div>

    )
  }
}

export default Carousel
