interface AuthLayoutProps {
    children: JSX.Element;
}

const AuthLayout = (props: AuthLayoutProps) => {
    return <section>{props.children}</section>
};

export default AuthLayout;