import React, { PropsWithChildren, InputHTMLAttributes, ReactNode } from 'react';

interface FormComponentProps extends PropsWithChildren<any>, InputHTMLAttributes<any> {}

const FormComponent: React.FC<FormComponentProps> = (props: FormComponentProps): JSX.Element => {
    const formComponent: ReactNode = props.children || <input {...props} />;
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.title}</label>
            {formComponent}
        </div>
    );
};

export default FormComponent;
