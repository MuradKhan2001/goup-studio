import Home from "../components/home/Home";
import Loader from "../components/loader/Loader";
import Zones from "../components/zones/Zones";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import BookingZone from "../components/booking-zone/BookingZone";


export const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/zones",
        element: <Zones/>
    },
    {
        path: "/services",
        element: <Services/>
    },
    {
        path: "/contacts",
        element: <Contact/>
    },
    {
        path: "/booking-zone",
        element: <BookingZone/>
    },
    {
        path: "/load",
        element: <Loader/>
    }
];

