import PublickInfo from "../../pages/PublickInfo";
import LinksPage from "../../pages/LinksPage";
import Ad from "../../pages/AdPage";
import Feedback from "../../pages/Feedback/Feedback";
export const routes = [
    {
        path: '/',
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