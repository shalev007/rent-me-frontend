import React from 'react';
import FormComponent from 'src/components/Abstract/FormComponent/Component';

const RegisterForm: React.FC = (): JSX.Element => {
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    return (
        <div className="register-form">
            <form action="#" method="post" onSubmit={handleFormSubmit}>
                <FormComponent title="Email address" type="email" placeholder="Email address" />
                <FormComponent title="First Name" type="text" placeholder="First Name" />
                <FormComponent title="Last Name" type="text" placeholder="Last Name" />
                <FormComponent title="Age" type="number" placeholder="Age" />
                <FormComponent title="Password" type="password" placeholder="Password" />
                <button type="submit">Register Now</button>
            </form>
        </div>
    );
};

export default RegisterForm;
