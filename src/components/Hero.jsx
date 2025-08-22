import { useState } from 'react'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'


const Hero = ({searchTerm}) => {
    const {data, loading, error} = useFetch('https://backend-meetup-app-nine.vercel.app/events')
    // console.log(data)

    const [eventfilter, setEventFilter] = useState('All')
    const filteredEvent = eventfilter === "All" ? data : data.filter(event => event.eventType === eventfilter)
    // console.log(searchTerm.toLowerCase())
    // console.log(filteredEvent)
    
    const finalFilteredData = filteredEvent === undefined ? filteredEvent : filteredEvent.filter(event => searchTerm === undefined ? event : event.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // console.log(finalFilteredData)


    return (
        <>
            <main className="bg-body-secondary h-100 py-5">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <h1 className="text-center text-md-start">Meetup Events</h1>
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-md-0 text-center text-md-end">
                        <select onChange={(e) => setEventFilter(e.target.value)} className="p-2 rounded-3 px-4 text-secondary w-100 w-md-auto">
                        <option value="All">Select Event Type</option>
                        <option value="Offline">Offline</option>
                        <option value="Online">Online</option>
                        <option value="All">Both</option>
                        </select>
                    </div>
                    </div>

                    <div className="row mt-4 g-4">
                    {data ? (
                        finalFilteredData.map((event) => (
                        <div key={event._id} className="col-12 col-sm-6 col-lg-4 col-xl-4 d-flex">
                            <div className="card shadow lift-card-dramatic w-100">
                            <img src={event.eventImageUrl} className="card-img-top" alt="eventImg"/>
                            <div className="card-img-overlay text-primary bg-light fw-bold fs-6" style={{width: "100px", height: "35px", margin: "8px", paddingTop: "2px",}}>
                                {event.eventType}
                            </div>
                            <div className="card-body">
                                <p className="text-secondary">{event.dateTime}</p>
                                <p className="fw-bold fs-5">{event.title}</p>
                                <Link to={`/events/${event._id}`} className="stretched-link"></Link>
                            </div>
                            </div>
                        </div>))) : (loading && <p>Loading...</p>)}
                    </div>
                </div>
            </main>

        </>
    )
}

export default Hero