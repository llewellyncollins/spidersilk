import React from 'react';
import FeatureBlock from '../FeatureBlock/FeatureBlock';
import './appDevSection.scss';

export default function AppDevSection() {
    return (
        <section className='app-dev-section'>
            <h1>App Development</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in erat et ligula vestibulum feugiat. Aenean pharetra nibh non
                porttitor imperdiet. Donec non nunc at ante sollicitudin gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed in erat et ligula vestibulum feugiat. Aenean pharetra nibh non porttitor imperdiet. Donec non nunc at ante sollicitudin
                gravida.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in erat et ligula vestibulum feugiat. Aenean pharetra nibh non
                porttitor imperdiet. Donec non nunc at ante sollicitudin gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed in erat et ligula vestibulum feugiat. Aenean pharetra nibh non porttitor imperdiet. Donec non nunc at ante sollicitudin
                gravida.
            </p>

            <div className='feature-blocks'>
                <div className='feature-blocks-row'>
                    <FeatureBlock title='Cross Platform' icon='devices_other-white-48dp' />
                </div>
                <div className='feature-blocks-row'>
                    <FeatureBlock title='Cross Platform' icon='devices_other-white-48dp' />
                    <FeatureBlock title='Cross Platform' icon='devices_other-white-48dp' />
                </div>
                <div className='feature-blocks-row'>
                    <FeatureBlock title='Cross Platform' icon='devices_other-white-48dp' />
                    <FeatureBlock title='Cross Platform' icon='devices_other-white-48dp' />
                    <FeatureBlock title='Cross Platform' icon='devices_other-white-48dp' />
                </div>
            </div>
        </section>
    );
}
