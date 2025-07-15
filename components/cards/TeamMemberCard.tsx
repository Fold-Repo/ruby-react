import { FaFacebookF, FaXTwitter, FaDribbble, FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import { TeamMemberType } from '@/types';

const TeamMemberCard: React.FC<{ member: TeamMemberType }> = ({ member }) => {
    return (
        <div className="bg-white shadow p-3 rounded-lg">

            <Image src={member.image} alt={member.name}  width={400} height={300}
            className="rounded-lg aspect-[7/5] object-cover w-full h-auto"/>

            <div className="space-y-3 pt-4">

                <div className="space-y-1">
                    <h2 className="text-primary font-bold">{member.name}</h2>
                    <p className="text-sm text-gray-500">{member.role}</p>
                </div>

                <p className="text-sm text-gray-600">{member.bio}</p>

                <div className="inline-flex gap-x-5 text-gray-700 items-center text-lg">
                    {member.socials.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className='size-4' />
                        </a>
                    )}
                    {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className='size-4' />
                        </a>
                    )}
                    {member.socials.dribbble && (
                        <a href={member.socials.dribbble} target="_blank" rel="noopener noreferrer">
                            <FaDribbble className='size-4' />
                        </a>
                    )}
                    {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className='size-4' />
                        </a>
                    )}
                </div>

            </div>

        </div>
    );
};

export default TeamMemberCard;
