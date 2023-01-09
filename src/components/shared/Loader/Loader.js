import React, { Component, Fragment } from 'react'

import './Loader.scss'
export class Loader extends Component {
    render() {
        return (
            <Fragment>
                <div className="logo">
                    <div className="overflow-frame">
                        <div className="square-frame">
                            <div className="line-left"></div>
                            <div className="line-right"></div>
                            <div className="line-middle"></div>

                            {/* <div className="cross-top-right"></div>
                            <div className="cross-bottom-left"></div>

                            <div className="cross-top-left"></div>
                            <div className="cross-bottom-right"></div> */}


                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Loader
