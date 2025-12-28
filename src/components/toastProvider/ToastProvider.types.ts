import React from "react";

export type Variant = 'default' | 'error' | 'success' | 'warning' | 'info';

export interface MessageOptions {
  variant: Variant;
}

export interface ToastContextValue {
  enqueueSnackbar: (body: string, options?: MessageOptions) => void;
}

const value: ToastContextValue = {
  enqueueSnackbar: () => {},
};
export const ToastContext = React.createContext<ToastContextValue>(value);
