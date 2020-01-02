import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom'
import React from 'react'
import {Links} from "./Pages/PageList";

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <header className="header">
                    {Links.map(link => {
                        return (
                            <NavLink key={link.path} to={link.path}>
                                {link.label}
                            </NavLink>
                        )
                    })}
                </header>
                {/* ТЕЛО ВСЕЙ СТРАНИЦЫ */}
                <main className="container">
                    <Switch>
                        {Links.map(link => {
                            return (
                                <Route key={link.path} exact path={link.path} component={link.component}/>
                            )
                        })}
                        <Redirect to="/"/>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
};

