'use client'

import React, { useEffect, useState } from 'react';

const UserCount = () => {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://discord.com/api/guilds/1059191873547272212/widget.json');
                const data = await response.json();
                const theAvatars = data.members;
                setAvatars(theAvatars);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

    return (
        <dd className="order-first text-3xl font-semibold tracking-tight text-white/90 sm:text-5xl">{avatars.length}</dd>
    );
};

export default UserCount;