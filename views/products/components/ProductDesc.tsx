import React from 'react';

const ProductDesc = ({ desc }: { desc: string }) => {
    return (
        <div
            className="prose prose-sm prose-slate leading-7 max-w-none"
            dangerouslySetInnerHTML={{ __html: desc }}
        />
    );
};

export default ProductDesc;
