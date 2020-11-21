import React from 'react';
import FeatureBlock from '../FeatureBlock/FeatureBlock';
import IconDevices from './icons/devices_other-white-48dp.svg';
import IconHTTPs from './icons/https-white-48dp.svg';
import IconInsights from './icons/insights-white-48dp.svg';
import IconMonetization from './icons/monetization_on-white-48dp.svg';
import IconStar from './icons/star_border-white-48dp.svg';
import IconDesigns from './icons/design_services-white-48dp.svg';
import './appDevSection.scss';

export default function AppDevSection() {
    return (
        <section className='app-dev-section'>
            <h1>App Development</h1>

            <p>
                Here at SPIDERSILK, we strive to deliver high-quality applications to our clients. All our applications are thoroughly
                tested to ensure a secure, performant, and visually stunning experience for your customers.
            </p>
            <p>
                We treat your customers as if they were our customers. We work with our clients to tailor the user experience and encourage
                maximum in-application engagement. An engaged user is a potential paying user. Using custom metrics we can help you identify
                what is working well and what can be improved.
            </p>
            <p>
                If you would like to see your application transition from inception to fruition? Please don't hesitate to reach out now. We
                will get back to you as soon as possible with a plan to get your application into your customer's hands!
            </p>

            <div className='feature-blocks'>
                <div className='feature-blocks-row'>
                    <FeatureBlock title='High Quality' icon={IconStar} />
                </div>
                <div className='feature-blocks-row'>
                    <FeatureBlock title='Monetization' icon={IconMonetization} />
                    <FeatureBlock title='Analytics' icon={IconInsights} />
                </div>
                <div className='feature-blocks-row'>
                    <FeatureBlock title='Cross Platform' icon={IconDevices} />
                    <FeatureBlock title='Secure' icon={IconHTTPs} />
                    <FeatureBlock title='UI / UX' icon={IconDesigns} />
                </div>
            </div>
        </section>
    );
}
