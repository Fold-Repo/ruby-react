import React from "react";

const ContactDetails = () => {
    return (
        <div className='bg-white-smoke px-5 py-8 rounded-xl'>

            <div className="max-w-4xl m-auto flex flex-col space-y-7">

                <div className="space-y-4">

                    <h1 className="font-bold text-lg lg:!text-xl text-center text-black">
                        📩 Contact Ruby
                    </h1>

                    <p className="text-sm text-black/80 text-center">
                        Have a question, need support, or want to give feedback? We'd love to hear from you!
                    </p>
                    
                </div>

                <div className="grid md:grid-cols-2 gap-5 text-sm font-semibold">

                    <div className="space-y-5">
                        <p>
                            <b> Phone:{" "}</b>
                            <a className="underline" href="tel:+44 1234 567 890">
                                +44 1234 567 890
                            </a>
                        </p>

                        <p>
                            <b> Email:{" "}</b>
                            <a className="underline" href="mailto:support@rubyfashion.co.uk">
                                support@rubyfashion.co.uk
                            </a>
                        </p>
                    </div>

                    <div className="space-y-5">
                        <p> <b>Customer Service Hours:</b> Mon–Fri, 9am–6pm</p>
                        <p>
                            <b>Address:</b> 2163 Phillips Gap Rd, West Jefferson, North Carolina, United States
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactDetails;
