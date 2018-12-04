import * as React from 'react';

import './PageTemplate.css';

interface IPageTemplateProps{
    children: React.ReactNode,
    className: string
}

export const PageTemplate = ({children, className}:IPageTemplateProps) =>(
    <div className = {`page ${className}`}>
        <div className='content'>
            {children}
        </div>
    </div>
);