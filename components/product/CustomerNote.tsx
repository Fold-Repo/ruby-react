import React from 'react';
import { Input, TextArea } from '../ui';

interface CustomerNoteProps {
    note: string;
    file: File | null;
    onNoteChange: (value: string) => void;
    onFileChange: (file: File | null) => void;
}

const CustomerNote: React.FC<CustomerNoteProps> = ({ note, onNoteChange, onFileChange }) => {
    return (
        <div className="py-3">

            <div className="space-y-1.5 mb-6">
                <h2 className="font-bold text-base text-gray-900 dark:text-gray-100">
                    Add your Personalization
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Add your name, note or upload your customized image to personalize your item
                </p>
            </div>

            <div className="space-y-3">
                <TextArea
                    radius="xl"
                    className="text-xs py-3 text-gray-800 dark:text-gray-200 
                               bg-white dark:bg-gray-800 border border-gray-300 
                               dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500"
                    value={note}
                    onChange={(e) => onNoteChange(e.target.value)}
                />
                <Input
                    className="h-auto py-3 text-gray-800 dark:text-gray-200 
                            bg-white dark:bg-gray-800 border border-gray-300 
                            dark:border-gray-600 file:text-gray-700 dark:file:text-gray-300"
                    radius="xl"
                    name="file"
                    type="file"
                    onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                />
            </div>

        </div>
    );
};

export default CustomerNote;
