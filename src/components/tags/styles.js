import styled from "styled-components";
import {theme} from "../../styles";

export const StyledContent = styled.div`
    margin-top: 10px;
    transition: ${theme.transition};
    -moz-transition: ${theme.transition};
    easing: ${theme.easing};
`;

export const StyledButton = styled.button`
    padding: 10px;
    margin: 10px 0px;
    margin-right: 10px;
    border-radius: 2px;
    border: none;
    box-shadow: 0px 2px 2px 0px #f2f2f2;
    font-size: ${theme.fontSizes.sm};
    font-weight: 200;
    cursor: pointer;
    background-color: ${theme.colors.darkgrey};
`;

export const StyledTagInput = styled.input.attrs(props => ({
        type: props.type || 'text',
        size: props.small ? 5 : undefined,
        placeholder: props.placeholder,
        name: props.name
    }))`
    border: none;
    border-bottom: 2px solid ${theme.colors.darkgrey};
    padding: 10px 0;
    display: block;
    color: ${theme.colors.lightBlack};
    font-size: ${theme.fontSizes.lg};
    font-weight: 100;
    padding: ${props => props.padding};
    
    &:focus {
        outline: none;
        border-bottom: 2px solid ${theme.colors.black};
        transition: 0.4s;
    }
`;