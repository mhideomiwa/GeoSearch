'use client';

import React, { useEffect } from 'react';

const ForceErrorComponent = () => {
    useEffect(() => {
        throw new Error('This is a test error');
    }, []);

    return <div>Everything is fine!</div>;
};

export default ForceErrorComponent;
