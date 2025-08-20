import Link from 'next/link';
import React from 'react';
import { Button, Input, PasswordInput } from '@/components';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const CheckOutAuth = () => {
    return (
        <>

            {/* Registration prompt */}
            <div className="bg-white-smoke dark:bg-gray-800 p-3 text-sm lg:!text-base font-medium">
                
                <p className="text-black/50 dark:text-gray-400">
                    Don’t have an account with us?{' '}
                    <Link href="/register" className="text-primary dark:text-primary-light font-semibold underline">
                        Register Here
                    </Link>
                </p>
                
            </div>

            <div className="bg-white dark:bg-gray-900 border border-black/30 dark:border-gray-600 rounded-xl p-5 space-y-6">

                <p className="text-black dark:text-gray-200 text-sm">
                    Already have an account{' '}
                    <Link href="/login" className="font-semibold underline text-primary dark:text-primary-light">
                        Login here
                    </Link>
                </p>

                <form className="space-y-5">
                    <Input
                        type="email"
                        radius="xl"
                        startContent={<EnvelopeIcon className="size-4 text-gray-500 dark:text-gray-400" />}
                        name="email"
                        placeholder="Email"
                        className="bg-input-bg dark:bg-gray-700 text-black dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />

                    <PasswordInput
                        radius="xl"
                        startContent={<LockClosedIcon className="size-4 text-gray-500 dark:text-gray-400" />}
                        name="password"
                        placeholder="Password"
                        className="bg-input-bg dark:bg-gray-700 text-black dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />

                    <div className="flex justify-center !pt-2">
                        <Button rounded="full" className="max-w-xs w-full">
                            Login
                        </Button>
                    </div>

                </form>

            </div>

        </>
    );
};

export default CheckOutAuth;
