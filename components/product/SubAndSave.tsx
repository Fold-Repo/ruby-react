'use client'

import React, { useState, useEffect } from 'react'
import { Radio } from '../ui'
import { QuantitySelector } from '../cart'

type SubAndSaveProps = {
    onChange?: (value: {
        type: 'one-time' | 'subscribe'
        occurrence?: number
        quantity: number
        discountPercent?: number
    }) => void
}

const deliveryOptions = [30, 60, 90]

const SubAndSave = ({ onChange }: SubAndSaveProps) => {

    const [type, setType] = useState<'one-time' | 'subscribe'>('one-time')
    const [occurrence, setOccurrence] = useState(30)
    const [quantity, setQuantity] = useState(1)

    const discountPercent = type === 'subscribe' ? 10 : 0

    useEffect(() => {
        onChange?.({
            type,
            occurrence: type === 'subscribe' ? occurrence : undefined,
            quantity,
            discountPercent: discountPercent || undefined,
        })
    }, [type, occurrence, quantity])

    return (
        <div className="bg-white-smoke p-5 rounded-lg space-y-6">

            <h1 className="text-sm md:text-base font-bold block !pb-3">
                Subscribe and Save
            </h1>

            <div className="flex flex-col gap-y-2">
                <Radio
                    name="purchase"
                    checked={type === 'one-time'}
                    onChange={() => setType('one-time')}
                    label="One-time purchase"
                />
                <Radio
                    name="purchase"
                    checked={type === 'subscribe'}
                    onChange={() => setType('subscribe')}
                    label={
                        <>
                            Subscribe & Save <span className="text-primary">10%</span>
                        </>
                    }
                />
            </div>

            {type === 'subscribe' && (
                <div className="flex flex-col gap-3">

                    <h2 className="text-sm">
                        Delivers every:{' '}
                        <span className="font-bold active-value">{occurrence} Days</span>
                    </h2>

                    <div className="flex items-center gap-2">
                        {deliveryOptions.map((day) => (
                            <button
                                key={day}
                                onClick={() => setOccurrence(day)}
                                className={`cursor-pointer px-3 text-xs py-1.5 rounded-lg transition-all ${occurrence === day
                                        ? 'bg-primary text-white'
                                        : 'border border-primary text-primary'
                                    }`}>
                                {day} Days
                            </button>
                        ))}
                    </div>

                </div>
            )}

            <div className="flex flex-col gap-y-3">
                <label className="text-sm font-medium" htmlFor="qty">
                    Quantity
                </label>
                <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

        </div>
    )
}

export default SubAndSave
