import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import Loadable from 'react-loadable';
import { Templates, TemplateThemes } from '../Templates';

function Template(props) {
    const query = useSelector(state => state);
    const {activeTemplate, server_data} = query;
    const [activeTheme, setActiveTheme] = useState(TemplateThemes.find(t=>t.key === activeTemplate.theme));
    const [customColor, setCustomColor] = useState(activeTemplate.customColor);
    const [modules, setModules] = useState([])

    useEffect(() => {
        const template = Templates.find(t=> t.key === activeTemplate.key);
        setModules([
            Loadable({
                loader: () => import('../Templates/' + template.path),
                loading: () => <div>Loading...</div>
            })
        ]);
        setActiveTheme(TemplateThemes.find(t=>t.key === activeTemplate.theme));
        setCustomColor(activeTemplate.customColor);
      }, [activeTemplate]);

    return (
        <div>
            { modules.map((item, i) => {
                let Module = modules[i]
                return <Module key={i} theme={ activeTheme } data = { server_data } customColor = { activeTemplate.customColor } />
            }) 
            }

        </div>
    );
}
export default Template;