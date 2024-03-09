'use client'
import React from 'react';
import { Providers } from './Provider'
const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Providers>
                {children}
        </Providers>
    );
};

export default RootLayout;


