# QUESTIONS

* After submitting, our message entry didn't clear... :|
  * Html is naturally stateful
  * Needs to be a controlled component so that we can clear it programmatically
* Big picture of how the store fits in:
  * there's only one store
  * the way that our components get stuff from the store is via connect (mapStateToProps/mapDispatchToProps)
* When to pass prop to super
  * Only one circumstance - if you use props in the constructor

  ```
  :)

  constructor () {
    super()
    this.state = {}
    this.blah = this.blah.bind(this)
  }
  ```
    
  ```
  X(
  constructor () {
    super()
    this.state = {}
    this.blah = this.blah.bind(this)
    this.props.something()
  }
  ```

  ```
  :/
  constructor (props) {
    super(props)
    this.state = {}
    this.blah = this.blah.bind(this)
    props.something()
  }
  ```

* mapStateToProps

  ```
  const mapState = (state) => {
    // return state :(
    return { // :)
      puppies: state.puppies

    }
  }

  ```
