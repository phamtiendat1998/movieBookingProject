import * as React from 'react';
// Scss
import './Nav.component.scss';
// Mat
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

export interface NavComponentProps {
}

export interface NavComponentState {
    navStatus: 'menu' | 'info';
}

export default class NavComponent extends React.Component<NavComponentProps, NavComponentState> {
    constructor(props: NavComponentProps) {
        super(props);
        this.state = {
            navStatus: 'menu'
        }

    }

    public toogleNavStatus = () => {
        const newNavStatus = this.state.navStatus === 'menu' ? 'info' : 'menu';
        this.setState({ navStatus: newNavStatus });
    }

    public render() {
        let bindNavView;
        if (this.state.navStatus === 'info') {
            bindNavView =
                <div className="nav__userinfo">
                    <Button variant="outlined" color="primary">
                        <NavLink to="/login" className="nav__item">
                            <p>Sign in</p>
                        </NavLink>
                    </Button>
                </div>;
        } else {
            bindNavView =
                <div className="nav__menu">
                    <div>
                        <NavLink exact to="/" className="nav__item" activeClassName="nav__item--active">
                            <p>New on screens</p>
                        </NavLink>
                        <NavLink to="/showtimes" className="nav__item" activeClassName="nav__item--active">
                            <p>Showtimes</p>
                        </NavLink>
                        <NavLink to="/comingsoon" className="nav__item" activeClassName="nav__item--active">
                            <p>Coming soon</p>
                        </NavLink>
                        <NavLink to="/reviews" className="nav__item" activeClassName="nav__item--active">
                            <p>New and Reviews</p>
                        </NavLink>
                        <NavLink to="/contactus" className="nav__item" activeClassName="nav__item--active">
                            <p>Contact us</p>
                        </NavLink>
                    </div>
                    <div>

                    </div>
                </div>;
        }
        return (
            <div className="nav">
                <div className="nav__toggle" onClick={this.toogleNavStatus}>
                    <Icon fontSize="large">menu</Icon>
                </div>
                <div className="nav__view">
                    {bindNavView}
                </div>
            </div>
        );
    }
}
