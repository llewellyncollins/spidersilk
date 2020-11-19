import { useEffect, useState } from 'react';
import { remoteConfig } from '../localFirebase';

export interface IRemoteConfig {
    contact_form: boolean;
}

const useRemoteConfig = () => {
    const [ config, setConfig ] = useState<IRemoteConfig | null>( null );

    useEffect( () => {
        remoteConfig.defaultConfig = ( {
            contact_form: false
        } );

        remoteConfig.fetchAndActivate()
            .finally( () => {
                setConfig( {
                    contact_form: remoteConfig.getBoolean( "contact_form" )
                } );
            } );
    } );

    return config;
}

export default useRemoteConfig;
