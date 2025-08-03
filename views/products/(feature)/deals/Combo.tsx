'use client'

import { Checkbox } from '@/components'
import { ProductType } from '@/types'
import React, { useState } from 'react'

const comboOptions = [
    { id: 1, quantity: 2, discountPercent: 10 },
    { id: 2, quantity: 3, discountPercent: 15 },
    { id: 3, quantity: 4, discountPercent: 20 },
    { id: 4, quantity: 5, discountPercent: 25 }
]

type Props = {
    product: ProductType
    onChange: (combo: { quantity: number; discountPercent: number } | null) => void
}

const Combo = ({ product, onChange }: Props) => {
    const [selectedComboId, setSelectedComboId] = useState<number | null>(null)

    const handleClick = (optionId: number) => {
        if (selectedComboId === optionId) {
            setSelectedComboId(null)
            onChange(null)
        } else {
            const selected = comboOptions.find(c => c.id === optionId)
            if (selected) {
                setSelectedComboId(optionId)
                onChange({
                    quantity: selected.quantity,
                    discountPercent: selected.discountPercent
                })
            }
        }
    }

    return (
        <div className="border border-gray-300 p-3 md:p-4 rounded-lg">
            <h1 className="text-sm md:text-base font-bold block">Combo Offers</h1>

            <div className="mt-3 space-y-3">
                {comboOptions.map(option => {
                    const totalPrice = product?.price * option.quantity
                    const discountAmount = totalPrice * (option.discountPercent / 100)
                    const discountedPrice = totalPrice - discountAmount
                    const isSelected = selectedComboId === option.id

                    return (
                        <div
                            key={option.id}
                            onClick={() => handleClick(option.id)}
                            className={`flex md:items-center flex-wrap gap-y-3 gap-x-3 justify-between p-3 text-sm rounded-lg cursor-pointer transition border ${isSelected ? 'border-primary bg-primary/5' : 'border-gray-300'
                                }`}>
                            <div className="inline-flex items-center gap-2">
                                <Checkbox checked={isSelected} />
                                <span className="font-semibold">
                                    Buy {option.quantity} get {option.discountPercent}% off
                                </span>
                            </div>

                            <h5>
                                <span className="text-gray-600">Total: </span>
                                <span className="font-semibold">
                                    {discountedPrice.toFixed(2)}
                                </span>
                            </h5>

                            <div className="inline-flex items-center gap-2">
                                <h5>
                                    <span className="text-gray-600">Discount: </span>
                                    <span className="font-semibold line-through">
                                        {totalPrice.toFixed(2)}
                                    </span>
                                </h5>

                                <span className="text-white bg-primary rounded text-[11px] py-1 px-2">
                                    -{option.discountPercent}%
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Combo
