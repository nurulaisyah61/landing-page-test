import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return (
        <Wrapper {...props}>
            <ShadowWrapper {...props}>
                <p>{props.title}</p>
            </ShadowWrapper>
            <StyledTitle {...props}>
                {props.title}
            </StyledTitle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: ${props => props.center ? "center" : "baseline"};
`;

const ShadowWrapper = styled.div`
    position: absolute;
    p {
        opacity: 0.11;
        font-family: 'work sans';
        font-size: 44px;
        font-weight: 600;
        color: #e0c8ff;
    }
    &:after {
        content: "";
        display: block;
        height: 1px;
        width: 50%;
        background:#c789ff;
        opacity: 0.4;
        border-radius: 4px;
        box-shadow: 0 0 1px 1px #c789ff;
        border: solid 1px #c493ff;
        margin: ${props => props.center? "auto": 0}
    }
`;

const StyledTitle = styled.p`
    position: absolute;
    font-family: 'work sans';
    font-size: 36px;
    font-weight: 500;
    color: #e0c8ff;
    margin-top: 20px;
    margin-left: ${props => props.center? "unset": "40px"};
`;

export default Title;