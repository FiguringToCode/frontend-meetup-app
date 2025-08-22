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

                <div className="d-flex justify-content-between container">
                    <div className="">
                        <h1>Meetup Events</h1>
                    </div>
                    <div className="">
                        <select onChange={(e) => setEventFilter(e.target.value)} className="p-2 rounded-3 px-4 text-secondary">
                            <option value="All" >Select Event Type</option>
                            <option value="Offline" >Offline</option>
                            <option value="Online" >Online</option>
                            <option value="Both" >Both</option>
                        </select>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        {data ? finalFilteredData.map((event) => (
                                <div key={event._id} className="col-lg-3 mx-5 my-4 p-0 card shadow lift-card-dramatic h-100">
                                    <img src={event.eventImageUrl} className="card-img-top" alt="eventImg" />
                                    <div className='card-img-overlay text-primary fw-bold fs-5'>{event.eventType}</div>
                                    <div className="card-body">
                                        <p className="text-secondary">{event.dateTime}</p>
                                        <p className='fw-bold fs-5'>{event.title}</p>
                                        <Link to={`/events/${event._id}`} className="stretched-link"></Link>
                                    </div>
                                </div>
                        )) : loading && (<p>Loading...</p>) }
                    </div>
                    

                </div>

            </main>
        </>
    )
}

export default Hero