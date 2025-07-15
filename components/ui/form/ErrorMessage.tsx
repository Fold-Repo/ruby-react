import { cn } from '@/lib';
import React from 'react';

interface ErrorMessageProps {
    error?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    if (!error) return null;
    return <div className={cn("text-danger text-xs mt-2 tracking-wide")}>{error}</div>;
};

export default ErrorMessage;
