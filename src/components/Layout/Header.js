// import Avatar from 'components/Avatar';
// import { UserCard } from 'components/Card';
// import Notifications from 'components/Notifications';
// import SearchInput from 'components/SearchInput';
// import { notificationsData } from 'demos/header';
// import withBadge from 'hocs/withBadge';
import React from 'react';
import {
  MdClearAll,
  // MdExitToApp,
  // MdHelp,
  // MdInsertChart,
  // MdMessage,
  // MdNotificationsActive,
  // MdNotificationsNone,
  // MdPersonPin,
  // MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  // ListGroup,
  // ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  // NavItem,
  // NavLink,
  // Popover,
  // PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';
import { MdExitToApp } from "react-icons/md";

const bem = bn.create('header');

// const MdNotificationsActiveWithBadge = withBadge({
//   size: 'md',
//   color: 'primary',
//   style: {
//     top: -10,
//     right: -10,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   children: <small>5</small>,
// })(MdNotificationsActive);

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    // const { isNotificationConfirmed } = this.state;

    return (
      <Navbar  light expand className={bem.b('bg-white')}>
        <Nav  navbar className="mr-2">
          <Button className="btn btn-info" onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar className={bem.e('nav-right')}>
          <Nav navbar className="mr-2" >
            <Button className="btn btn-info" >
              <MdExitToApp size={20} />
            </Button>
          </Nav>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;