import { useState } from "react"
import useFetch from "../useFetch"


const Header = ({searchTerm, setSearchTerm}) => {
    return (
        <header>
            <nav className="navbar bg-body-secondary">
                <div className="container">
                    <a className="navbar-brand"><img src="https://vectorseek.com/wp-content/uploads/2023/09/Meetup-Logo-Vector.svg-.png" width={200} /></a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 text-secondary" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search by Title or Tags" aria-label="Search"/>
                    </form>
                </div>
            </nav>
            <div className="border-bottom border-secondary-subtle mx-3"></div>
        </header>
    )
}

export default Header