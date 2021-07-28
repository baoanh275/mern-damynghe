import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from './../Page/HomePage'
import Detail from './../detail/Detail'
import Test from '../Test';
import Login from '../auth/Login'
import Register from '../auth/Register'
import CategoryPage from '../Page/CategoryPage';
import SubCategoryPage from '../Page/SubCategoryPage';
import SearchPage from '../Page/SearchPage';
import NotFound from '../utils/NotFound';

const PrivateRoute =() => {

    let routee = useRoutes([
        {
            path: '/',
            element: <HomePage />
        
        },
        {
            path: '/chi-tiet/:id',
            element: <Detail />
        
        },
        {
            path: '/test',
            element: <Test />
        
        },
        {
            path: '/register',
            element: <Register />
        
        },
        {
            path: '/login',
            element: <Login />
        
        },
        {
            path: '/danh-muc/:id',
            element: <CategoryPage />
        
        }
        ,
        {
            path: '/danh-muc/:id/:slug',
            element: <SubCategoryPage />
        
        }
        ,
        {
            path: '/search/:id' ,
            element: <SearchPage />
        
        }
        ,
        {
            path: '*' ,
            element: <NotFound />
        
        }




    ])

    return routee;
    
}

export default PrivateRoute;