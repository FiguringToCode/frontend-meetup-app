import Header from "./Header"
import Footer from "./Footer"
import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import {MapPin, IndianRupeeIcon, Clock} from "lucide-react"


const EventDetails = () => {
    const eventId = useParams()
    const event_Id = eventId.eventId
    // console.log(event_Id)

    const {data, loading, error} = useFetch(`https://backend-meetup-app-nine.vercel.app/events/${event_Id}`)
    console.log(data)
    


    return (
        <>
            <Header />
            <main className="bg-body-secondary">
                <div className="container">
                    <div className="row py-5">
                    {data ? (
                        <>
                        <div className="col-12 col-lg-6">
                            <h1 className="fw-semibold">{data.eventDetail[0].title}</h1>
                            <p className="fw-semibold">Hosted By: {data.eventDetail[0].eventHostedBy}</p>
                            <div>
                            <img src={data.eventDetail[0].eventImageUrl} className="w-100 py-4 img-fluid rounded" alt="event"/>
                            <p className="fs-5 fw-bold">Details:</p>
                            <p className="text-secondary">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati cupiditate
                                non provident...
                            </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mt-4 mt-lg-0 mx-auto">
                            <div className="row bg-light p-3 rounded-3 shadow-sm my-5">
                                <div className="col-12 d-flex align-items-center gap-3 mt-2">
                                    <Clock />
                                    <p className="text-secondary mb-0">{data.eventDetail[0].dateTime} PM</p>
                                </div>
                                <div className="col-12 d-flex align-items-center gap-3 mt-2">
                                    <MapPin />
                                    <p className="text-secondary mb-0">{data.eventDetail[0].venue.name},  {data.eventDetail[0].venue.address}</p>
                                </div>
                                <div className="col-12 d-flex align-items-center gap-3 mt-2">
                                    <IndianRupeeIcon />
                                    <p className="text-secondary mb-0">{data.eventDetail[0].entryPrice}</p>
                                </div>
                            </div>

                            <div className="my-5">
                                <h2 className="fs-5 fw-bold">Speakers: {data.eventDetail[0].speakerDetails[0].speakerName}</h2>
                                <img src={data.eventDetail[0].speakerDetails[0].photo} alt="speakerPhoto" className="border rounded-5 img-fluid w-50" />
                            </div>

                            <div className="my-5">
                                <h2 className="fs-5 fw-bold">Additional Information:</h2>
                                <p><b>Dress Code:</b> {data.eventDetail[0].dressCode}</p>
                                <p><b>Age Restrictions:</b> 18 and above</p>
                            </div>

                            <div className="my-5">
                            <h2 className="fs-4 fw-bold">Event Tags:</h2>
                            {data.eventDetail[0].eventTags.map((tag, i) => (
                                <button key={i} className="btn btn-danger me-2 mb-2 px-3">{tag}</button>
                            ))}
                            </div>
                        </div>
                        </>
                    ) : (
                        loading && <p>Loading...</p>
                    )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default EventDetails
