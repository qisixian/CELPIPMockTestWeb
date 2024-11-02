import {createContext, useEffect, useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import MyList from "../components/MyList";
import { Button, notification } from 'antd';

import {Routes, Route} from "react-router-dom";
import MyCard from "../components/MyCard";
import MyImage from '../components/MyImage';
import axios from 'axios';



function Home() {
    const data = [
        'Mock Test 1',
        'Mock Test 2',
        'Mock Test 3',
        'Mock Test 4',
        'Mock Test 5',
    ];

    const [api, contextHolder] = notification.useNotification();



    const openNotification = (desc: String) => {
        api.info({
            message: 'Notification',
            description: desc,
        });
    };


    const googleLogin = () => {
        axios.get("http://localhost:8080/oauth2/authorization/google", {
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // }
        })
            .then(function (response) {
                console.log(response.data);
            });
    };
    return (
        <>
            <h1>CELPIP Test</h1>
            <Button type="primary" onClick={() => googleLogin()}>Authentication</Button>
            <MyImage imageUrl="http://localhost:8080/media/2"/>
            <MyList items={data}>1</MyList>
            {contextHolder}
            <Button type="primary" onClick={() => openNotification("hi")}>Hi</Button>
        </>
    );
}

export default Home;
