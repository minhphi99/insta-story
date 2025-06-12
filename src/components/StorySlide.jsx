function StorySlide({ story, onClick }) {
    return (
        <div onClick={onClick}>
            <img
                src={story.content}
                alt="pictures"
                className="max-w-[1080px] max-h-[1920px] w-auto h-auto mx-auto"
            />
        </div>
    )
}

export default StorySlide