import axios from "axios";
import React, { useState } from "react";
import styled from 'styled-components'
import CustomAppBar from "../appbar/CustomAppBar";
import CustomTable from "./DetailsTable";
import UpdateDetails from "./DetailsUpdate";



function DetailsMainTab() {
    const [tableData, setTableData] = useState(null);

    React.useEffect(() => {
        fetchData();
    }, [])

    const fetchData=async ()  => {
        let emptyArray = []
        await axios.post('http://localhost:3030/api/get-sample-data', {
            'token': localStorage.getItem('token')
        }).then((res) => {
            let dataObject = {}
            res.data.data.forEach((element) => {
                dataObject["key"] = element.id
                dataObject["name"] = element.name
                dataObject["criteria"] = element.criteria
                dataObject["value"] = element.value
                dataObject["email"] = element.email
                dataObject["days"] = element.days
                dataObject["psignal"] = "DK1"
                emptyArray.push(dataObject)
                dataObject = {}
            })
        })
        setTableData(emptyArray)
    }

    const onFinish = async (values) => {
        await axios.post('http://localhost:3030/api/create-sample-data', {
            'token': localStorage.getItem('token'),
            name: values.name,
            criteria: values.criteria,
            value: values.value,
            days: values.days,
            email: values.email,
            phone: values.phone
        }).then(() => {
            fetchData();
        })
    };


    const DivStyled = styled.div({
        display: 'flex',
        flexDirection: 'row',
        marginTop: '0.5vh',
        marginBottom: '2.5vh',
        height: '46vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#D8DDE5',
        width: '98%',
        borderRadius: "8px",
    });

    const PartDivFirst = styled.div({
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        height: '41vh',
        marginLeft: '1.5vw',
        marginRight: 'auto',
        background: '#ffffff',
        width: '25%',
        borderRadius: "8px",
    })
    const PartDivSeconfd = styled.div({
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        height: '41vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: '#ffffff',
        width: '68%',
        borderRadius: "8px",
    })
    return (

        <DivStyled>
            <PartDivFirst>
                <UpdateDetails onFinish={onFinish} />

            </PartDivFirst>
            <PartDivSeconfd>
                {tableData && tableData !== null ? <CustomTable tableData={tableData} /> : ""}
            </PartDivSeconfd>



        </DivStyled>
    );
}

export default DetailsMainTab;
