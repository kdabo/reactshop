import React, { PureComponent } from 'react';
import styled from 'styled-components';
import theme from "../styles/theme";

export interface Props {
    step: string;
    title: string;
    text?: string;
    src: string;
}

const VerticalSliderItemContainer = styled.div`
    padding: 1rem;
    display: block;
    background: ${theme.colors.white};
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    
    ${theme.mediaQueries.medium} {
      padding: 2rem 3rem;
      display: flex;
    }
`;

const ContentHolder = styled.div`
    flex: 2;
`;

const IframeHolder = styled.div < {} > `
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 40px, rgba(0, 0, 0, 0.03) 0px 0px 12px;
    padding: 0px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    overflow: hidden;
    animation: 0.5s ease-in-out 0s 1 normal none running;
    height: 275px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    
     ${theme.mediaQueries.medium} {
         width: 275px;
    }
`;

const IframeHowItWorks = styled.img < {} > `
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
`;

const Step = styled.p < {} > `
    font-size: ${theme.typography.p};
    font-family: ${theme.typography.fontFamilySecondary};
    padding: 0 0 1rem;
`;

const Title = styled.h2 < {} > `
    width: 275px;
    font-size: ${theme.typography.h4}
    padding-bottom: 1rem;

    ${theme.mediaQueries.medium} {
        font-size: ${theme.typography.h3}
    }
`;

export class VerticalSliderItem extends PureComponent<Props> {
    render() {
        const { step, title, text, src } = this.props;

        return (
            <VerticalSliderItemContainer>
               <ContentHolder>
                <Step>{step}</Step>
                <Title>{title}</Title>
                <p>{text}</p>
               </ContentHolder>
                <IframeHolder>
                    <IframeHowItWorks src={src} />
                </IframeHolder>
            </VerticalSliderItemContainer>
        );
    }
}
