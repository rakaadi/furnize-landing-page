import React, { createContext, useState } from "react";

import { Props } from "../types";
import { blogPost, blogsPreview } from "./blogsPreview";

export const BlogsPreviewContext = createContext<blogPost[]>([]);

const BlogsPreviewProvider = ({ children }: Props) => {
    const [blogPost, setblogPost] = useState<blogPost[]>(blogsPreview);

    console.log(setblogPost);
    return (
        <BlogsPreviewContext.Provider value={blogPost}>
            {children}
        </BlogsPreviewContext.Provider>
    )
}

export default BlogsPreviewProvider;