import React from 'react';
import FormComponent from 'src/components/Abstract/FormComponent/Component';

const LoginForm: React.FC = (): JSX.Element => {
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    return (
        <div className="login-form">
            <form action="#" method="post" onSubmit={handleFormSubmit}>
                <FormComponent title="Email address" type="email" placeholder="Email address" />
                <FormComponent title="Password" type="password" placeholder="Password" />
                <button type="submit">Login Now</button>
            </form>
        </div>
    );
};

export default LoginForm;
