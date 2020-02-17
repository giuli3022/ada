import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Parasite from "../../Components/Card/images/Parasite.jpg";
import Irishman from "../../Components/Card/images/irishman.jpeg";
import OnceUpon from "../../Components/Card/images/once_upon.jpg";

const SwitchComponent = () => {
    return (
        <Switch>

            <Route exact path="/Card/:id">
                <Card></Card>
            </Route>
            <Route path="/Card/:id">
                <Card></Card>
            </Route>
            <Route path="/Card/:id">
                <Card></Card>
            </Route>
        </Switch>
    )
};

export default SwitchComponent;
