import React, { createContext, useState } from "react";

import { Props } from "../types";
import { IprojectPreview, projectsStory } from "./ProjectsPreview";

export const ProjectsPreviewContext = createContext<IprojectPreview[]>([]);

const ProjectsPreviewProvider = ({ children }: Props) => {
    const [projectPreview, setProjectPreview] = useState<IprojectPreview[]>(projectsStory);

    console.log(setProjectPreview);
    return (
        <ProjectsPreviewContext.Provider value={projectPreview}>
            {children}
        </ProjectsPreviewContext.Provider>
    )
}

export default ProjectsPreviewProvider;