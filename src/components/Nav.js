import React from 'react';

const Nav = ({username}) => {
        // Logic to make a default username
        if (!username) {
            username = 'User user'
        }

    return (
        <nav>
        <ul>
          <li>
            HIOF
          </li>
          <li>
            {username}
           </li>
        </ul>
      </nav>
    )
}

export default Nav