import React, { useContext } from "react";

import { ProjectsPreviewContainer, StoryCardContainer, StoryCard, StoryLink } from "./ProjectsPreview.styles";

import { ProjectsPreviewContext } from "../../context/ProjectsPreview.context";

const ProjectsPreview = () => {
    const stories = useContext(ProjectsPreviewContext);

    return (
        <ProjectsPreviewContainer>
            <h4>Story of Our Latest Project</h4>
            <StoryCardContainer>
                {
                    stories.map(story => {
                        return (
                            <StoryCard key={story.id}>
                                <img src={story.imageLink} alt="" />
                                <h5><a href="/blogs">{story.title}</a></h5>
                                <p>{story.preview}</p>
                                <StoryLink href="/blogs">Read More</StoryLink>
                            </StoryCard>
                        )
                    })
                }
            </StoryCardContainer>
        </ProjectsPreviewContainer>
    )
}

export default ProjectsPreview;
