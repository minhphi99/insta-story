import React, { useState, useEffect } from 'react';
import StoryIconList from './StoryIconList';
import StoryView from './StoryViewer';

// Dummy story data
const dummyStories = [
    {
        id: 1,
        username: 'jane_doe',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        isViewed: false,
        content: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 2,
        username: 'john_smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
        isViewed: false,
        content: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg'
    },
    {
        id: 3,
        username: 'emma_likes',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        isViewed: false,
        content: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: 4,
        username: 'john_smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
        isViewed: false,
        content: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg'
    },
];

const StoriesContainer = () => {
    const [stories, setStories] = useState([]);
    const [activeStory, setActiveStory] = useState(null);

    console.log({ stories, activeStory });

    const handleClose = () => {
        setActiveStory(null);
    }

    useEffect(() => {
        // Simulate fetching from an API
        setStories(dummyStories);
    }, []);

    const handleStoryClick = (id) => {
        setStories(prev =>
            prev.map(story =>
                story.id === id ? { ...story, isViewed: true } : story
            )
        );
        const indexActiveStory = stories.findIndex(i => i.id === id)
        if (indexActiveStory === -1) return;
        setActiveStory(indexActiveStory);
    };

    const handleNext = () => {
        console.log('handleNext');

        setActiveStory((activeStory) => {
            if (activeStory === null) return 0
            return activeStory === stories.length - 1 ? 0 : activeStory + 1;
        });
    }

    const handlePrev = () => {
        console.log('handlePrev');

        setActiveStory((activeStory) => {
            if (activeStory === null) return 0
            return activeStory === 0 ? stories.length - 1 : activeStory - 1;
        });
    }

    return (
        <div className="flex row items-center justify-center">
            <StoryIconList stories={stories} onStoryClick={handleStoryClick} />
            {activeStory !== null && (
                <div className=" " >
                    <button onClick={handleClose} >
                        &times;
                    </button>
                    <StoryView
                        stories={stories}
                        activeIndex={activeStory}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onClose={handleClose}
                    />
                </div>
            )}
        </div>
    );
};

export default StoriesContainer;