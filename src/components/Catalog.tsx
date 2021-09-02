import React from 'react';

import { useSelector } from 'react-redux';

export function Catalog() {
    const catalog = useSelector(state => state);
    return (
        <h1>Catalog</h1>
    );
}