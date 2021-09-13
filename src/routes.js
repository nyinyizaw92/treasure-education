import HomePage from './components/website/HomePage';
import Login from './components/website/Login';
import Register from './components/website/Register';
import Header from './components/website/Header';
import English from './components/website/English'
import MultipleQuestion from './components/website/MultipleQuestion'
import EnglishContact from './components/website/EnglishContact'
import SingleQuestion from './components/website/SingleQuestion'

export default [
    {
        path:'/',
        component:HomePage,

        children:[
            {
                path:'/',
                component:Header,
            },
            {
                path:'/about-us',
                component:Header,
            },
            {
                path:'/login',
                component:Login,
               
            },
            {
                path:'/register',
                component:Register
            },

            {
                path:'/english',
                component:English,
    
                children:[
                    {
                        path:'/english',
                        component:EnglishContact
                    },
                    {
                        path:'/english/multiple-question',
                        component:MultipleQuestion
                    },
                    {
                        path:'/english/single-question',
                        component:SingleQuestion
                    }
                ]
            }

        ]
        
    },
   
]