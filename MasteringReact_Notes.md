<!-- 
MASTERING REACT NOTES: 

React re-renders when state is updated to be a different object in memory
  initialize state variables to be their empty case

React also re-renders when props are updated

React re-renders from top->down in component tree
  react renders the parent component's constructor, it's render method, any lifecycle methods
    and then if there are any children components within the parent, react renders those child methods next
      so on and so forth

render(): explicity telling what HTML we want to render
  uses JSX as a JS extension to be used in HTML

callback function: () => 
  function that is passed into another function
    once first function is finished, run this call back

setState second argument that can optionally be passed is a callback function 
  allows program to update the value of state using setState and then perform certain actions on the updated value of state
    otherwise those actions will be performed on the previous value of state because of asynchronous nature of setState.

.map: use a callback function to access/ iterate through each state array element & then return HTML with state element attributes
  with mapping, each element in the array also needs a unique key to differentiate each other

lifecycle method: 3 phases of a React component lifecycle - Mount, Update, Unmount 
  componentDidMount- gets run whenever the component gets rendered to the page/ mounted into DOM
  componentDidUpdate- called after the component is updated in the DOM.
    A component is updated whenever there is a change in the component's state or props.
  componentWillUnmount- when a component is removed from the DOM, or unmounting as React likes to call it.

promise: async, usually refers to fetch API calls
  -> it is a promise that eventually a value will be returned

setState: can directly pass in the object to have state value point to api value
  setState({ yankees: players })
or can use function method that takes in callback functions
  useful for testing updated state values in a more synchronous way (after setState is finished)

whenever a Class Component that uses an API Call to display appropriate data to UI:
  put that API fetch call in the componentDidMount lifcycle method

order of React methods being called with Class Components: 
  1- constructor 2- render (initial) 3- lifecycle (componentDidMOunt) 4- render (re-render w/ updated state data from lifecycle method)

exporting: export default Component-Name
  allows other files to import component code from outside

custom components in React must be capitalized

components should be as GENERALIZED AS POSSIBLE
  if a property of your custom component seems too specific to that application- instead pass it in as a custom prop
    from Search-Box class component:
      placeholder={this.props.placeholder}
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Yankees Players"/>

pass custom props into each custom component: each custom component usually utilizes some properties and/or state 
  <SearchBox onChangeHandler={onSearchChange}/>
  <CardList yankees={filteredYankees} />

within each component: there must be only one parent element that represents the entirety of that component
  aka, you cannot have two parent div containers at top level. you must have one div container/element that holds of the HTML for that component

.filter(): similar to .map()- it's an array method that returns a new array with elements that passes boolean check

.includes(): boolean method/ returns true if a string contains a specified string , otherwise it returns false. 
  .includes() method is case sensitive. best practice to use .toLowerCase() with .includes

some response object properties may be null (FanDuelName for some objects may be null)
  use ? to check if property is null before calling .toLowerCase() on it
    const filteredYankees = this.state.yankees.filter((yankee) => {
    return yankee.FanDuelName?.toLowerCase().includes(searchString);
    });

Optimizations: 
  destructure state variables for better readability- when we use this/state/props in more place than one
    const { yankees, searchField } = this.state;
    const { onSearchHandler } = this;
    const { PlayerID, FanDuelName, Jersey, Position, BatHand, Status } = this.props.yankee;
        use exact props name as defined in parent component (yankee) when accessing / de-structuring this.props

  create separate method outside of render method for better performance
    it doesn't have to be re-rendered every time as an anonymous function 

React: Functions vs Class Components:
    - functions do not have constructors, renders, or any lifecycle methods
        - constructors are related to classes
        - functions have SIDE EFFECTS. not lifecycle methods
    - functional components act just like JS functions 
        - take in arguments (props) and return JSX
        - run from top -> bottom 
    - react renders & re-renders the entire functional component from top -> down when state/props change
        - whereas with class components, the constructor-render-lifecyle-render methods were called individually at turns
    - SIDE EFFECTS: PURE and IMPURE functions
        - pure functions should always return the same value
            - pure functions are solely dependent on props being passed in
            - pure functions should not produce side effects
        - impure functions may have different values returned
            - impure functions may be reliant on an external, changing parameter/argument prop
        - side effects are when a function changes a variable thats from outside the functions scope
        - React hooks are used to make impure functions
            - hooks are generating side effects
            - this is how functional components render / re render with hooks
    - functional components get props automatically passed into function's argument
        - example: 
            - const Card = ({ yankee }) => {
                const { PlayerID, FanDuelName, Jersey, Position, BatHand, Status } = yankee;
            }
                - since props is passed into function param by default, you can destructure off of props in param directly 

React Hooks: 
    - useState allows us to encapsukate local state in a functional component
        - useState uses array destructuring to declare 2 variables
        - useState then returns an array of 2 values
            - 1 state variable and 1 variable to change (set) that state variable
        - useState is used to set individual state values
            - NOT a state object like in class components
        - React re-renders when state changes initial state (similar to class components)
            - setState does not necessarily cause a re-render
                - if setState is just setting state to the initial state value, no re-render
                - if setState is setting state to be different than initial state value, React re-renders
    - useEffect allows us to handle side effects without re-rendering our function every time
        - example: a fetch API call that uses setState will continuously re-set state with outside data
            - thus the entire function will re-render every time in an infinite loop
    - useEffect takes in 2 arguments
        - 1) callback function: the code/effect we want to happen in our functional component
            - is called first time component mounts (similar to lifecycle hook componentDidMount)
        - 2) array of dependencies (dependencies being state values or props)
            - whenever values in this array change is when the callback function will run again
                - if you never want to run callback function again, then keep array empty

DOM / VirtualDOM / ReactDOM:
    - The VirtualDOM serves as a Snapshot of the real DOM
    - The ReactDOM library serves as a Javascript Copy of the VirtualDOM

    - Each time something in the real DOM changes, since DOM is represented as a tree structure, changes to the DOM are pretty quick BUT-
      the changed element, and it’s children’s has to go through Reflow/Layout stage and then the changes have to be Re-painted (re-mounted) which are slow. 
        - Therefore more the DOM elements/nodes to reflow/repaint, slower your app becomes.
    - VirtualDom tries to minimize these two stages to get better performance. 
        - Virtual means a representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM
    
React with JSX vs Pure React Code:
    - JSX is easier to read equivalent of React.createElement
    - JSX looks like HTML & takes in JS variables
        - React.createElement('h1', { class: 'title' }, "React is rendering")
            - vs
        - <h1 className = 'title'>React is rendering</h1>
    - Pure React code component has to be in script tags in index.html to ReactDOM.render into getElementById('root')
-->