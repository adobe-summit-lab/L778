import React, { Component } from 'react'

export default class CreateOffer extends Component {
    render() {
        return (
            <form className="spectrum-Form">
                <div className="spectrum-Form-item">
                    <label className="spectrum-Form-itemLabel spectrum-FieldLabel--left" htmlFor="fieldLabelExample-name">Offer Name</label>
                    <div className="spectrum-Form-itemField">
                        <input className="spectrum-Textfield" aria-invalid="false" type="text" placeholder="Enter the name of the offer" id="fieldLabelExample-name" />
                    </div>
                </div>
                <div className="spectrum-Form-item">
                    <label htmlFor="fieldLabelExample-content"
                        className="spectrum-Form-itemLabel spectrum-FieldLabel--left">Offer Content</label>
                    <div className="spectrum-Form-itemField">
                        <textarea id="fieldLabelExample-content" placeholder="Enter Offer Content" name="field" className="spectrum-Textfield spectrum-Textfield--multiline"></textarea>
                    </div>
                </div>
            </form>



        )
    }
}