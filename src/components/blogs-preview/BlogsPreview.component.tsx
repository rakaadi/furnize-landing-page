import React, { useContext } from "react";

import { SectionContainer, PreviewPostContainer, BlogPostContainer, ImageContainer, SpacerComponent } from "./BlogsPreview.styles";

import { BlogsPreviewContext } from "../../context/BlogsPreview.context";

const BlogsPreview = () => {
    const recentBlogPost = useContext(BlogsPreviewContext);

    return (
        <SectionContainer>
            <PreviewPostContainer>
                <span><i className="far fa-newspaper"></i></span>
                <h3>Recent Blog Post</h3>
                <SpacerComponent />
                <div className="space-y-6">
                    {
                        recentBlogPost.map(blogPost => (
                            <BlogPostContainer key={blogPost.id}>
                                <a href="/blog">
                                    <h3>{blogPost.title}</h3>
                                    <p>By <span>{blogPost.author}</span> - {blogPost.date}</p>
                                </a>
                            </BlogPostContainer>
                        ))
                    }
                </div>
            </PreviewPostContainer>
            <ImageContainer />
        </SectionContainer>
    )
}

export default BlogsPreview;
