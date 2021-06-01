import { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'

class ErrorBoundary extends Component {
    constructor () {
        super()

        this.state = {
          hasError: false,
          redirect: false
        }
    }
    static getDerivedStateFromError(error) {
          return { hasError: true }
    }

    
    componentDidCatch(error, info) {
      console.error("Error Boundary caught an error", error, info);
      // getDerivedStateFromError already catches it
      // this.setState({ hasError: true })
      setTimeout(()=> this.setState({ redirect: true }), 5000)
    }
    componentDidUpdate () {
      // never called on the first time, so not going to do it here
      /*
      if (this.state.hasError) {
        console.log('hey component updated')
        setTimeout(()=> this.setState({ redirect: true }), 5000)
      }
      */
    }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/' />
    }
    if (this.state.hasError) {
      console.log('this is in the render')
      return (
        <h2>
          This listing has an error. <Link to='/'>CLick here</Link> to go back to the home page </h2>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
