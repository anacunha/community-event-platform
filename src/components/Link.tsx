import { Link as AmplifyLink } from '@aws-amplify/ui-react';
import { LinkProps, Link as ReactRouterLink } from 'react-router';

function Link({ to, children, ... props}: LinkProps) {
    return (
        <AmplifyLink as={ReactRouterLink} to={to} {...props}>
            {children}
        </AmplifyLink>
    );
}

export default Link;
