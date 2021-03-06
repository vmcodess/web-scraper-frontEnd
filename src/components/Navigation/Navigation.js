import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick= {() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick= {() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
                <p onClick= {() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

// const Navigation = () => {
//     return (
//         <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
//             <Link to="/signin" className='f3 link dim black underline pa3 pointer'>Sign in</Link>
//             <Link to="/register" className='f3 link dim black underline pa3 pointer'>Register</Link>
//         </nav> 
//     )
// }

export default Navigation;