#### Display a navbar based on a position that the user has scrolled to, and onClick, scroll the user down to the selected Component

###### App.js
* Set the state. scrollTo will be the position the scroll the user to
* showNav will tell whether the navbar will show or not

```
constructor(props) {
  super(props);
  this.state = {
    scrollTo: 0,
    showNav: false
  };
}
```

* Mount the event-listener scroll, along with the handleScroll function
* Use if conditions to test whether showNav should be true or false, which will decide if the Navbar should show or not
```
componentDidMount = () => {
  window.addEventListener("scroll", this.handleScroll);
};

handleScroll = e => {
  if (window.pageYOffset > 60) {
  this.setState({
    showNav: true
  });
  } else if (window.pageYOffset < 60) {
    this.setState({
      showNav: false
    });
  }
};
```

* Take in the name from e.target and scroll to the position onClick
```
scrollToPosition = e => {
  const { name } = e.target;
  window.scrollTo(0, parseInt(name));
};
```
