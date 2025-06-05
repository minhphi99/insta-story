import React from 'react';

const StoryIcon = ({ story, onClick }) => {
    return (
        <div onClick={onClick}>
            <img
                src={story.avatarUrl}
                alt={story.username}
            />
            <span>{story.username}</span>
        </div>
    );
};

export default StoryIcon;