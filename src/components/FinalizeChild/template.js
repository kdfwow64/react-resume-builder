import React, { useEffect } from "react";
import Loadable from 'react-loadable';

function Template(props) {
    let modules = [
        Loadable({
            loader: () => import('../Templates/' + props.path),
            loading: () => <div>Loading...</div>
        })
    ];

    return (
        <div>
            { modules.map((item, i) => {
                let Module = modules[i]
                return <Module key={i} />
            }) 
            }

        </div>
    );
}
export default Template;