import * as React from 'react';
import './App.css';
import PrayNavbar from './Navbar';
import PrayJumbotron from './Jumbotron';
import PrayCard from './Card';


class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className={"App w-75 m-auto"}>
          <PrayNavbar />
          <PrayJumbotron />
          <div className="d-flex justify-content-around">
            <PrayCard />
            <PrayCard />
            <PrayCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
