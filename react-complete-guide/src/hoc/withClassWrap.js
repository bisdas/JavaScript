import React from 'react';

const withClassWrap = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
}

export default withClassWrap;