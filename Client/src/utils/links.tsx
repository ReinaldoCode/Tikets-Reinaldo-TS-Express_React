import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { LinkType } from "../types";

export const links : LinkType [] = [
    {
        text: 'add item',
        path:'.',
        icon: <FaWpforms/>,
    },
    {
        text: 'all item',
        path:'all-items',
        icon: <MdQueryStats/>, 
    },
    {
        text: 'stats',
        path:'stats',
        icon: <IoBarChartSharp/>,
    },
    {
        text: 'profile',
        path:'profile',
        icon: <ImProfile/>,
    },
    {
        text: 'admin',
        path:'admin',
        icon: <MdAdminPanelSettings/>,
    },
]