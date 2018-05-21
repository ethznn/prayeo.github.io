import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

interface State {
  isOpen: any
}

export default class Example extends React.Component<{}, State> {
  constructor(props:any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  public toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  public render() {
    return (
      <div>
        <Navbar color="light" light={true} expand="md">
          <NavbarBrand href="/">LEE HYEONHO / PRAY</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/components/">PROFILE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/prayeo">GITHUB</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}