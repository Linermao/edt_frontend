import { useContext } from "react";
import { ToastContext, type ToastContextValue, type Variant } from "./ToastProvider.types"

const getVariantFromMessageLevel = (level: string): Variant => {
  switch (level) {
    case 'ERROR':
      return 'error';
    case 'INFO':
      return 'info';
    case 'WARNING':
      return 'warning';
    case 'SUCCESS':
      return 'success';
    default:
      return 'default';
  }
};

export function useMultiToast() {
    const { enqueueSnackbar } = useContext<ToastContextValue>(ToastContext);

    function addMessages(messages: { body: string; level: string; }[]) {
        messages.map((message: { body: string; level: string; }) => enqueueSnackbar(message.body, { variant: getVariantFromMessageLevel(message.level) }));
    }
    function addErrorMessage (message: string) {
        addMessages([{ body: message, level: 'error' }]);
    } 

    return {
        addErrorMessage,
        addMessages,
    };
}