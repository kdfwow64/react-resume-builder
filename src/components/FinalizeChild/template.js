import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import Loadable from 'react-loadable';
import { Templates, TemplateThemes } from '../Templates';

function Template(props) {
    const query = useSelector(state => state);
    const {activeTemplate} = query;
    const [activeTheme, setActiveTheme] = useState(TemplateThemes.find(t=>t.key === activeTemplate.theme));
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
      }, [activeTemplate]);

    return (
        <div>
            { modules.map((item, i) => {
                let Module = modules[i]
                return <Module key={i} theme={ activeTheme } />
            }) 
            }

        </div>
    );
}
export default Template;