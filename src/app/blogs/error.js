'use client'
import React, { useEffect } from 'react';

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error.message);
    }, [error])
    return (
        <div>
            <h2>something went wrong</h2>
            <button onClick={() => reset()}>Try Again</button>

        </div>
    );
};

export default Error;