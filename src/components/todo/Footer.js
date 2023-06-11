import React from 'react';
import { Link } from '../router';

export const Footer = () => {
    return (
        <div className="footer">
            <Link data-cy="all" to="/">All</Link>
            <Link data-cy="active" to="/active">Active</Link>
            <Link data-cy="complete" to="/complete">Complete</Link>
        </div>
    );
};
