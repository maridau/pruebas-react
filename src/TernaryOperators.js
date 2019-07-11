import React from 'react';

class TernaryOperators extends React.Component {

    render() {
        const users = [
            { name: 'Robin', isDeveloper: true },
            { name: 'Markus', isDeveloper: false },
        ]
        const showUsers = false;

        return (
            <div className="container">
                <h1>Mostrando si hay o no hay</h1>
                {
                    showUsers ? (
                        <ul>
                            {users.map(user => <li>{user.name}</li>)}
                        </ul>
                    ) : (
                            null
                        )
                }
                <h1>Mostrando solo los que cumplen la concidción</h1>
                    {
                        showUsers && (
                            <ul>
                                {users.map(user => <li>{user.name}</li>)}
                            </ul>
                        )
                    }
            </div>
        );
    }
}

export default TernaryOperators;