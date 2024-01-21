'use client'

import React, { PropsWithChildren } from "react";

type HtmlFormProps = React.DetailedHTMLProps<
React.FormHTMLAttributes<HTMLFormElement>,
HTMLFormElement
>;



type FormProps = PropsWithChildren<
    Omit<HtmlFormProps, "actions"> & {
        action: (formData: FormData) => Promise<any>;
    }
>;


export function Form(props: FormProps){

    return <form{...props}/>
}