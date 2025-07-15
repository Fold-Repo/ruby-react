import { TeamMemberCard } from '@/components/cards'
import { teamMembers } from '@/data'
import React from 'react'

const OurTeam = () => {
    return (
        <div className="space-y-5">

            <div className="max-w-6xl space-y-3">
                <h1 className="font-bold text-lg lg:text-xl text-primary">Our team</h1>
                <p className="text-sm text-gray-400">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

                {teamMembers.map((member, idx) => (
                    <TeamMemberCard key={idx} member={member} />
                ))}

            </div>

        </div>
    )
}

export default OurTeam