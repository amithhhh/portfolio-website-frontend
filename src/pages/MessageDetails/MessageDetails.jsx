import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { retrieveMessageById } from '../../../api/Api';

function MessageDetails() {
    const { id } = useParams();
    const [message, setMessage] = useState({});

    useEffect(() => {
        const fetchMessage = async () => {
            const data = await retrieveMessageById(id);
            setMessage(data);
        };
        fetchMessage();
    }, [id]);

    const containerStyle = {
        width: '60%',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif'
    };

    const headerStyle = {
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px',
        marginBottom: '10px'
    };

    const titleStyle = {
        fontSize: '18px',
        margin: '0'
    };

    const infoStyle = {
        margin: '5px 0',
        color: '#555'
    };

    const timestampStyle = {
        fontSize: '12px',
        color: '#888'
    };

    const bodyStyle = {
        fontSize: '16px',
        color: '#333',
        lineHeight: '1.5'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h2 style={titleStyle}>{message.subject}</h2>
                <p style={infoStyle}>From: {message.name} &lt;{message.email}&gt;</p>
                <p style={timestampStyle}>{new Date(message.timestamp).toLocaleString()}</p>
            </div>
            <div style={bodyStyle}>
                {message.message}
            </div>
        </div>
    );
}

export default MessageDetails;