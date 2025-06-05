import React from 'react';
import StoryIcon from './StoryIcon';

const StoryIconList = ({ stories, onStoryClick }) => {
    return (
        <div>
            {stories.map((story) => (
                <StoryIcon
                    key={story.id}
                    story={story}
                    onClick={() => onStoryClick(story.id)}
                />
            ))}
        </div>
    );
};

export default StoryIconList;