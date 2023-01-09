import React from 'react'
import classNames from "classnames";


export default function NotFound() {
    return (
        <div className={classNames('container', 'py-4', 'text-center')}>
            <h1 className={classNames('x-large text-primary')}>Page Not Found </h1>
            <p className="lead">Please visit </p>
            <ul style={{ listStyle: 'none' }}>
                <li><a href="/posts">Posts Page </a></li>
                <li><a href="/">Home  </a></li>
            </ul>
        </div>
    )
}
