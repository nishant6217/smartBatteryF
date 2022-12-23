import React from "react";
import styled from "styled-components";
// import ReactApexChart from 'apexcharts'
import MyApexChart from "./Graph";

function CustomGraphs() {
    const DivStyled = styled.div({
        
        marginTop: '0.5vh',
        marginBottom: '2.5vh',
        height: '46vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#ffffff',
        width: '95%',
        borderRadius: "8px",
    });
    return (
        <>
            <DivStyled>
                <MyApexChart />
            </DivStyled>

        </>
    )

}

export default CustomGraphs;
