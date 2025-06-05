import React, { useState, useEffect } from 'react';
import StoryIconList from './StoryIconList';

// Dummy story data
const dummyStories = [
    {
        id: 1,
        username: 'jane_doe',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        isViewed: false,
    },
    {
        id: 2,
        username: 'john_smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
        isViewed: true,
    },
    {
        id: 3,
        username: 'emma_likes',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        isViewed: false,
    },
];

const StoriesContainer = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        // Simulate fetching from an API
        setStories(dummyStories);
    }, []);

    const handleStoryClick = (id) => {
        // Handle logic when a story is clicked
        console.log(`Story ${id} clicked`);
        setStories(prev =>
            prev.map(story =>
                story.id === id ? { ...story, isViewed: true } : story
            )
        );
    };

    return (
        <div>
            <h2>Stories</h2>
            <StoryIconList stories={stories} onStoryClick={handleStoryClick} />
        </div>
    );
};

export default StoriesContainer;