import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Carousel from './Carousel'
 
class Details extends Component { 
    constructor () {
        // calls the Component constructor
        super()

        this.state = {
            loading: true
        }
    }

    // useEffect(()=> {}, [])
    async componentDidMount () {
        // react component rendered for the first time
        let res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
        res = await res.json()
        this.setState({ 
            loading: false,
            ...res.pets[0]
         })
    }
    render() {
        if (this.state.loading) {
            return <h2>Loading ...</h2>
        }
        const { animal, breed, city, state, description, name, images} =  this.state
        return (
            <div className="details">
                <Carousel  images={ images } />
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                    
                </div>
            </div>
        )
    }
} 
export default withRouter(Details);