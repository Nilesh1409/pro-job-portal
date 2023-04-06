import React from 'react';
// import { withRouter } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter<ComponentProps>(Component: React.FunctionComponent<ComponentProps>) {
    function ComponentWithRouterProp(props: ComponentProps) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();

        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

const NavActiveLink = (props: any) => {
    // let cuurentLocation = history.location.pathname;
    // let isActive = this.context.router.isActive(this.props.to, true);
    // let className = isActive ? "active" : "";

    return (
        <li className="nav-item">
            {props.children}
        </li>
    )
}

export default withRouter(NavActiveLink);