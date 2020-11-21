import React from 'react';
import './featureBlock.scss';

export interface IFeatureBlockConfig {
    title: string;
    icon: string;
}
export default function FeatureBlock(config: IFeatureBlockConfig) {
    return (
        <div className='feature-block'>
            <img className='feature-block__icon' src={config.icon} alt={config.title}></img>
            <span className='feature-block__text'>{config.title}</span>
        </div>
    );
}
