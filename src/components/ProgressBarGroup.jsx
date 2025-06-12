import ProgressBar from "./ProgressBar";

function ProgressBarGroup({ stories, activeIndex, runNext }) {
    return (
        <div className="flex w-full max-w-md gap-1 px-4">
            {stories.map((story, idx) => (
                <ProgressBar
                    key={story.id}
                    isActive={idx === activeIndex}
                    isViewed={story.isViewed}
                    runNext={idx === activeIndex ? runNext : undefined}
                />
            ))}
        </div>
    );
}

export default ProgressBarGroup;