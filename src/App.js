import "./App.css";
import { Switch, Route } from "react-router-dom";

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
  return <p>Countact us component</p>;
};
function App() {
  return (
    <div className="App">
      <h1>Routes app</h1>
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route path="/shop">
          <ShopComponent />
        </Route>
        <Route path="/photos">
          <PhotosComponent />
        </Route>
        <Route path="/contact-us">
          <ContactUsComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
