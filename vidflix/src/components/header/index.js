import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';

import { Background, Conatiner, Logo} from './styles/header';

export default function Header({ bg = true, children, ...restProps}){
    return bg ? <Background { ...restProps}>{children}</Background>: children;
}

Header.Frame= function HeaderFrame({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo= funtion HeaderLogo({to, ...restProps }){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};