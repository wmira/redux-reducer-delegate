
import React, { PropTypes } from 'react';

const FlexBox = (flexAttribs) => ({className, children, style}) => (
        <div className={className} style={{ display: 'flex', ...flexAttribs, ...style }}>{children}</div>
);

const Div = (className) => ({children}) => <div className={className}>{children}</div>;

export const Left = Div('pull-left');
export const Right = Div('pull-right');
export const FlexCenter = FlexBox({alignItems: 'center', height: '100%', justifyContent: 'center' });

Left.propTypes = {
    children: PropTypes.node
};

Right.propTypes = {
    children: PropTypes.node
};
