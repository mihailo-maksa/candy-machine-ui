import React from 'react'
import { Link } from 'react-router-dom'
import './layout.css'

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <div className="content-404">
          <h1 className="title-404 bold text-center">Oops!</h1>
          <p className="desc-404 text-muted text-center">
            We couldn't find the page...
          </p>

          <button
            className="btn btn-primary regular-btn bold border-rad-05 back-to-vaults-btn"
            type="button"
            style={{
              marginLeft: '10px',
            }}
          >
            <Link
              to="/"
              className="btn-link"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.175rem',
              }}
            >
              ↩ Back to Homepage
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
