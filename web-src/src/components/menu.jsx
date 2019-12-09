import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <ul className="spectrum-Menu" role="listbox">
                <li role="presentation">
                    <span className="spectrum-Menu-sectionHeading" id="menu-heading-sf" aria-hidden="true">Offers</span>
                    <ul className="spectrum-Menu" role="group" aria-labelledby="menu-heading-sf">
                        <li className="spectrum-Menu-item" role="option" aria-selected="true" tabIndex="0">
                            <span className="spectrum-Menu-itemLabel">
                                <Link to={'/list_offers'} className="spectrum-Link spectrum-Link--subtle"> List Offers </Link>
                            </span>
                        </li>
                        <li className="spectrum-Menu-item" role="option" tabIndex="0">
                            <span className="spectrum-Menu-itemLabel">
                                <Link to={'/create_offer'} className="spectrum-Link spectrum-Link--subtle"> Create Offer </Link>
                            </span>
                        </li>
                        <li className="spectrum-Menu-item" role="option" tabIndex="0">
                            <span className="spectrum-Menu-itemLabel">Delete Off</span>
                        </li>
                    </ul>
                </li>
                <li className="spectrum-Menu-divider" role="separator"></li>
                <li role="presentation">
                    <span className="spectrum-Menu-sectionHeading" id="menu-heading-oak" aria-hidden="true">Activities</span>
                    <ul className="spectrum-Menu" role="group" aria-labelledby="menu-heading-oak">
                        <li className="spectrum-Menu-item" role="option" tabIndex="0">
                            <span className="spectrum-Menu-itemLabel">List Activities</span>
                        </li>
                        <li className="spectrum-Menu-item" role="option">
                            <span className="spectrum-Menu-itemLabel">
                                <Link to={'/create_activity'} className="spectrum-Link spectrum-Link--subtle">Create Activity</Link>
                            </span>
                        </li>
                        <li className="spectrum-Menu-item is-selected" role="option" tabIndex="0">
                            <span className="spectrum-Menu-itemLabel">Delete Activity</span>
                        </li>
                    </ul>
                </li>
            </ul>
            
        )
    }
}