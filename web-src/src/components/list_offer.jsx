import React, { Component } from 'react'
import axios from 'axios';


export default class ListOffer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          offers:[]
        }
      }

    componentDidMount() {
        axios.get('https://runtime.adobe.io/api/v1/web/lamont2/L778-0.0.2/offers')
        .then(response => {
          //return response.data.offers;
          this.setState({offers: response.data.offers});
          console.log("state", this.state.offers)
        })
        .catch(error => {
          console.log(error);
        });
    }
    render() {
        return (
            <div className="spectrum-Table" role="grid">
                <div className="spectrum-Table-head" style={{display: 'flex'}} role="row">
                    <div className="spectrum-Table-headCell" style={{flex: 1}} role="columnheader">
                        Offer ID
                    </div>
                    <div className="spectrum-Table-headCell" style={{flex: 1}} role="columnheader">
                        Offer Name
                    </div>
                    <div className="spectrum-Table-headCell" style={{flex: 1}} role="columnheader">Offer Type</div>
                </div>
                <div className="spectrum-Table-body" style={{height: '600px','verticalAlign':'top'}} role="rowgroup">

                {this.state.offers.map((offer, index) => 
          
                    <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">{offer.id}</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">{offer.name}</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">{offer.type}</div>
                    </div>
                )}

                </div>
            </div>
        )
    }
}