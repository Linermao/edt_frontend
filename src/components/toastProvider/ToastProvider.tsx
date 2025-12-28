import { SnackbarProvider, MaterialDesignContent, useSnackbar, type SnackbarKey } from "notistack";
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from "react";
import { ToastContext } from "./ToastProvider.types";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent-default': {
    backgroundColor: theme.palette.primary.main,
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.palette.success.main,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: theme.palette.error.main,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: theme.palette.warning.main,
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: theme.palette.info.main,
  },
}));

interface ToastCloseButtonProps {
  toastKey: SnackbarKey;
}
const ToastCloseButton = ({ toastKey }: ToastCloseButtonProps) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton size="small" aria-label="close" color="inherit" onClick={() => closeSnackbar(toastKey)}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

interface ToastContextInitializerProps {
  children: React.ReactNode;
}
const ToastContextInitializer = ({ children }: ToastContextInitializerProps) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <ToastContext.Provider
      value={{
        enqueueSnackbar,
      }}>
      {children}
    </ToastContext.Provider>
  );
};

interface ToastProviderProps {
  children: React.ReactNode;
}
export function ToastProvider ({ children }: ToastProviderProps) {
    return (
        <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            action={(key) => <ToastCloseButton toastKey={key} />}
            autoHideDuration={1000}
            data-testid="toast"
            Components={{
                default: StyledMaterialDesignContent,
                success: StyledMaterialDesignContent,
                error: StyledMaterialDesignContent,
                warning: StyledMaterialDesignContent,
                info: StyledMaterialDesignContent,
            }}>
        <ToastContextInitializer>{children}</ToastContextInitializer>
        </SnackbarProvider>
    );
};