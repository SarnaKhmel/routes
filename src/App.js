import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

const HomeComponent = () => {
  return <p>Home component</p>;
};

const ShopComponent = () => {
  return <p>Shop component</p>;
};

const PhotosComponent = () => {
  return <p>Photos component</p>;
};

const ContactUsComponent = () => {
  return <p> Contact us component</p>;
};
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/contact-us">Contact us</Link>
      </nav>
      <h1>Routes app</h1>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/photos" component={PhotosComponent} />
        <Route path="/contact-us" component={ContactUsComponent} />
      </Switch>
    </div>
  );
}

export default App;
