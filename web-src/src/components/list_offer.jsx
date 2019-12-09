import React, { Component } from 'react'

export default class ListOffer extends Component {
    render() {
        return (
            <div className="spectrum-Table" role="grid">
                <div className="spectrum-Table-head" style={{display: 'flex'}} role="row">
                    <div className="spectrum-Table-headCell is-sortable is-sorted-desc" style={{flex: 1}} role="columnheader" aria-sort="descending" tabIndex="0">
                        Column Title
                        <svg className="spectrum-Icon spectrum-UIIcon-ArrowDownSmall spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                            <use xlinkHref="#spectrum-css-icon-ArrowDownSmall" />
                        </svg>
                    </div>
                    <div className="spectrum-Table-headCell is-sortable" style={{flex: 1}} role="columnheader" aria-sort="none">
                        Column Title
                        <svg className="spectrum-Icon spectrum-UIIcon-ArrowDownSmall spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                            <use xlinkHref="#spectrum-css-icon-ArrowDownSmall" />
                        </svg>
                    </div>
                    <div className="spectrum-Table-headCell" style={{flex: 1}} role="columnheader">Column Title</div>
                </div>
                <div className="spectrum-Table-body" style={{height: '600px','vertical-align':'top'}} role="rowgroup">
                    <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Alpha</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Alpha</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Alpha</div>
                    </div>
                    <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Bravo</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Bravo</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Bravo</div>
                    </div>
                    <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Charlie</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Charlie</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Charlie</div>
                    </div>
                    <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Delta</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Delta</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Delta</div>
                    </div>
                    <div className="spectrum-Table-row" style={{display: 'flex'}} role="row">
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Echo</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Echo</div>
                        <div className="spectrum-Table-cell" style={{flex: 1}} role="gridcell" tabIndex="0">Row Item Echo</div>
                    </div>
                </div>
            </div>
        )
    }
}