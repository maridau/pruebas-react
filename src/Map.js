import React from 'react';

class Map extends React.Component {

    render() {
        const users = [
            { name: 'Robin', isDeveloper: true },
            { name: 'Markus', isDeveloper: false },
        ]

        return (
            <div className="container">

                <h2>Función sin flecha</h2>
                <ul>
                    {users.map(function (user) {
                        return <li>{user.name}</li>;
                    })}
                </ul>

                <h2>Map con flecha</h2>
                <ul>
                    {users.map(user => <li>{user.name}</li>)}
                </ul>

                <h2>Map con filter</h2>
                <ul>
                    {users
                        .filter(user => user.isDeveloper)
                        .map(user => <li>{user.name}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Map;