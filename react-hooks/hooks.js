import React, { useState } from “react”;

import ReactDOM from “react-dom”;

// do not work with CDN

        function HooksExample () {
            
            const [phrase, setPhrase] = useState('Admin User is = ');
            return (
                <div>
                    <p>{phrase}</p>
                    <button onClick={ () => setPhrase(phrase + 'Kolesnikov Yaroslav')}>
                        Show Admin
                    </button> 
                </div>
            )
        }
      ReactDOM.render(
        <HooksExample />,
        document.getElementById('root')
      );


