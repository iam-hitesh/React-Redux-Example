import styled from "styled-components";
import {media, theme} from "../../styles";

export const StyledProfilesCard = styled.div`
    margin: 0;
    height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};;
    box-shadow: 5px 10px ${theme.colors.lightgrey};
`;

export const StyledProfile = styled.div`
    position: relative;
    padding: 15px;
    border-bottom: 1px solid ${theme.colors.lightgrey};  
    padding-left: 100px;
    list-style: none;
`;

export const StyledImageContainer = styled.div`    
    position: absolute;
    left: 20px;
    ${media.tablet`
        padding: 0;
    `};
`;

export const StyledImage = styled.img`
    width: 120px;
    height: 120px;
    border: 1px solid #ccc;
    border-radius:50%;
    svg {
        width: 20px;
        height: 20px;
    }
    ${media.tablet`
        width: 50px;
        height: 50px;
    `};
`;

export const StyledDetails = styled.div`
    padding: 0px;
    padding-left: 80px;
    h2{
        font-size: ${theme.fontSizes.h3};
        margin: 0px;
        text-transform: uppercase;
    }
    span {
        display: block;
        font-size: ${theme.fontSizes.md};
        color: ${theme.colors.darkestGrey};
        font-weight: 200;
    }
    ${media.tablet`
        padding: 0;
    `};
`;

export const StyledOtherDetails = styled.div`
    padding: 10px 15px;
    
    ${media.tablet`
        padding: 0;
    `};
`;

export const StyledSearchBox = styled.input.attrs(props => ({
        type: props.type || 'text',
        size: props.small ? 5 : undefined,
        placeholder: props.placeholder,
        name: props.name
    }))`
    border: none;
    border-bottom: 1px solid ${theme.colors.darkgrey};
    padding: 10px 0;
    display: block;
    width: 95%;
    margin: 1%;
    color: ${theme.colors.darkestGrey};
    font-size: ${theme.fontSizes.lg};
    font-weight: 100;
    padding: ${props => props.padding};
    
    &:focus {
        outline: none;
        border-bottom: 1px solid ${theme.colors.black};
        transition: 0.4s;
    };
    
    ${media.tablet`
        width: 100%;
        margin: 0;
    `};
`;

export const StyleExpandableButton = styled.div`
    text-align: right;
    position: absolute;
    font-size: ${theme.fontSizes.h3};
    font-weight: 900;
    color: ${theme.colors.darkestGrey};
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 20px;
    cursor: pointer;
`;