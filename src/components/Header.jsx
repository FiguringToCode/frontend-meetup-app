import { useState } from "react"
import useFetch from "../useFetch"


const Header = ({searchTerm, setSearchTerm}) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-body-secondary">
                <div className="container">
                {/* Brand / Logo */}
                <a className="navbar-brand">
                    <img src="https://vectorseek.com/wp-content/uploads/2023/09/Meetup-Logo-Vector.svg-.png" width="150" className="img-fluid" alt="Meetup Logo"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <form className="d-flex ms-auto mt-3 mt-md-0" role="search">
                    <input className="form-control me-2 text-secondary" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search by Title or Tags" aria-label="Search" />
                    </form>
                </div>
                </div>
            </nav>
            <div className="border-bottom border-secondary-subtle mx-3"></div>
        </header>

    )
}

export default Header