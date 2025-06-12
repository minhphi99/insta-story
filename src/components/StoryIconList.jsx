import React from 'react';
import StoryIcon from './StoryIcon';

const StoryIconList = ({ stories, onStoryClick }) => {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center justify-center">
            {stories.map((story, idx) => (
                <div key={story.id} className={idx !== 0 ? "-ml-4" : ""}>
                    <StoryIcon
                        story={story}
                        onClick={() => onStoryClick(story.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default StoryIconList;