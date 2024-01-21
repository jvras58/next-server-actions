'use client';

import React, { PropsWithChildren } from "react";
import { useFormState } from "react-dom";

type HtmlFormProps = React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
>;

type FormProps = PropsWithChildren<
    Omit<HtmlFormProps, "action"> & {
        action: (prevState: any, formData: FormData) => Promise<any>;
    }
>;

export function Form(props: FormProps) {
    const [state, FormAction] = useFormState(props.action, {error: null});
    console.log(state);
    
    return <form {...props} action={FormAction}>
        {state.error && <div className="bg-red-500 text-white p-2">{state.error}</div>}
        {props.children}
    </form>;
}