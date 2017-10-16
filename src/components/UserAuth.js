import React from 'react';
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

const UserAuth = () => {
    return(
        <ButtonGroup>
            <Button>1</Button>
            <DropdownButton title="User" id="bg-nested-dropdown">
                <MenuItem eventKey="2">Account Settings</MenuItem>
                <MenuItem eventKey="1">Logout</MenuItem>
            </DropdownButton>
        </ButtonGroup>
    );
}

export default UserAuth;