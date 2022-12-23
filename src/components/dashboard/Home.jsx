import { Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import CustomAppBar from "../appbar/CustomAppBar";
import DetailsMainTab from "../details/DetailsMain";
import CustomGraphs from "../graph/CustomGraph";
import Navbar from "../navbar/Navbar";



function Home() {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
    }, [])

    const DivStyled = styled.div({
        display: 'flex',
        flexDirection:'column',
        marginTop: '1.5vh',
        marginBottom: '1.5vh',
        height: '97vh',
        marginLeft: '18%',
        marginRight: 'inherit',
        background: '#D8DDE5',
        width: '81%',
        borderRadius: "8px",
    });
    return (
        <div>
            <Navbar userName={localStorage.getItem('user')} />
            <DivStyled>
                <CustomAppBar />
                <CustomGraphs />
                <DetailsMainTab />


                

            </DivStyled>

        </div>
    );
}

export default Home;
