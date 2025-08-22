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
                    <div className=" py-5 row">
                        {data ? ( 
                            <>
                                <div className="col-lg-6">
                                    <h1 className="fw-semibold">{data.eventDetail[0].title}</h1>
                                    <p className="fw-semibold">Hosted By: {data.eventDetail[0].eventHostedBy}</p>
                                    <div>
                                        <img src={data.eventDetail[0].eventImageUrl} className="w-100 py-4" />
                                        <p className="fs-5 fw-bold">Details: </p>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className=" row bg-light w-75 p-3 rounded-3 mar-left">
                                        <div className="col-12 d-flex gap-4 mt-2">
                                            <Clock />
                                            <p className="text-secondary">{data.eventDetail[0].dateTime}PM</p>
                                        </div>
                                        <div className="col-12 d-flex gap-4 mt-2">
                                            <MapPin />
                                            <p className="text-secondary">{data.eventDetail[0].venue.name}, {data.eventDetail[0].venue.address}</p>
                                        </div>
                                        <div className="col-12 d-flex gap-4 mt-2">
                                            <IndianRupeeIcon />
                                            <p className="text-secondary">{data.eventDetail[0].entryPrice}</p>
                                        </div>
                                    </div>
                                    <div className="mar-left mar-top">
                                        <h1 className="fs-5 fw-bold">Speakers: {data.eventDetail[0].speakerDetails[0].speakerName}</h1>
                                    </div>
                                    <div className="mar-left mar-top">
                                        <h1 className="fs-5 fw-bold">Additional Information:</h1>
                                        <p><b>Dress Code: </b>{data.eventDetail[0].dressCode}</p>
                                        <p><b>Age Restrictions: </b>18 and above</p>
                                    </div>
                                    <div className="mar-left mar-top">
                                        <h1 className="fs-2 fw-bold">Event Tags:</h1>
                                        {data.eventDetail[0].eventTags.map(tag => (<button className="btn btn-danger me-4 px-3 mt-4">{tag}</button>))}
                                    </div>
                                </div>

                            </>    
                        ) : loading && (<p>Loading...</p>)}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default EventDetails