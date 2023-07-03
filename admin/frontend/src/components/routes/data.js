import PublickInfo from "../../pages/PublickInfo";
import LinksPage from "../../pages/LinksPage";
import Ad from "../../pages/AdPage";
import Feedback from "../../pages/Feedback/Feedback";
import Autorization from "../../pages/Autorization";
export const routes = [
    {
        path: '/main',
        component: PublickInfo
    },
    {
        path: '/links',
        component: LinksPage
    },
    {
        path: '/ad',
        component: Ad
    },
    {
        path: '/feedback',
        component: Feedback
    }
]