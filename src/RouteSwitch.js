import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BookList from './BookList';
import Book from './Book';
import NewBook from './NewBook';
import BookLayout from './BookLayout';
import BookRoutes from './BookRoutes';
import { Link, NavLink, Navigate } from 'react-router-dom';

export default function RouteSwith() {
    return (
        <BrowserRouter>

            <ul>
                <li><NavLink to='/'>{({ isActive }) => {
                    return isActive ? 'Active home' : 'home'
                }}</NavLink><br /></li>
                <li><Link to='/books'>Books</Link></li>
            </ul>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/books/*' element={<BookRoutes />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>  
        </BrowserRouter>
    );
}