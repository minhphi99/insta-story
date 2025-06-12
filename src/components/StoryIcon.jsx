import React from 'react';

const StoryIcon = ({ story, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="flex flex-col justify-center items-center cursor-pointer mx-[10px]"
        >
            <img
                src={story.avatarUrl}
                alt={story.username}
                className="w-10 h-10 rounded-full object-cover mb-1"
            />
            <span className="text-xs">{story.username}</span>
        </div>
    );
};

export default StoryIcon;