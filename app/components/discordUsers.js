'use client'

import React, { useEffect, useState } from 'react';

const DiscordUsers = () => {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://discord.com/api/guilds/1059191873547272212/widget.json');
                const data = await response.json();
                const shuffledAvatars = shuffleArray(data.members);//.slice(0, 20);
                setAvatars(shuffledAvatars);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {avatars.map((avatar, index) => (
                <img
                    className="h-12 mr-[-12px] bg-slate-950 w-12 border-2 border-gray-500 object-cover rounded-full"
                    key={index}
                    src={avatar.avatar_url}
                    alt={`Avatar ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default DiscordUsers;