import { Divider, Typography } from "@mui/material";
import React from "react";
import styled from 'styled-components'



function CustomAppBar() {    
    const DivStyled = styled.div({
        display:'flex',
        justifyContent:'space-between',
        marginTop:'2.5vh',
        // marginBottom:'',
        height:'8vh',
        width: '95%',
        marginLeft:'auto',
        marginRight:'auto',
        alignItems:'center'
      });
    return (
        <DivStyled>
           <div>
           <Typography  style={{ color: '#0F123F',fontWeight:'bold' }}>Peak Shaving & Alert</Typography>
           </div>
           <div>
           <Typography  style={{ color: '#0F123F',fontWeight:'bold' }}>Carlsberg Group</Typography>
           </div>
        </DivStyled>
    );
}

export default CustomAppBar;
