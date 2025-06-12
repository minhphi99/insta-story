import ProgressBarGroup from "./ProgressBarGroup"
import StorySlide from "./StorySlide"

function StoryView({ stories, activeIndex, onPrev, onNext, onClose, }) {
    if (!stories[activeIndex]) return null
    return (
        <div>
            <ProgressBarGroup
                stories={stories}
                activeIndex={activeIndex}
                runNext={onNext} />
            <StorySlide story={stories[activeIndex]} />
            <button onClick={onClose}>Close</button>
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default StoryView