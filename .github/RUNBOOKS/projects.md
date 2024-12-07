# Adding Projects

## Requirements

Make sure that when adding projects, the added information fits the following guidelines:

- A project can have one or two images. If only one, it should be of aspect ratio 3:2. If it has the optional second one, the aspect ratio should be 1:2.
- A project should have between 1 - 3 tags associated with it which should be selected from the following options:
  - Web Dev
  - Data Science
  - Research
  - Machine Learning
  - Policy Analysis
  - Education
- The short project description should be 15 words maximum.

## Instructions

Adding a project is easy. The information will automatically populate on the page. Navigate to `~/public/data/index.ts` and locate the section which has

```
export const projects: ProjectCardProps[] = [
    ...
]
```

First, ensure you add your image(s) to the `~/public/images/` folder and name them according to the following scheme:

- 3:2 aspect ratio image: `[project-name]-landscape.(png|jpg)`
- 1:2 aspect ratio image: `[project-name]-portrait.(png|jpg)`

For example, for the project with title `FoodWatch`, the images are named `foodwatch-landscape.png` and `foodwatch-portait.png`. Please use lowercase for consistency. You can then import then at the top of the `index.ts` file and alias them similarly.

After getting images ready, you can add an item of type `ProjectCardProps` to the list there and it will appear on the page. All other functionality is taken care of. These are the current props for projects:

```
/**
 * Props for the `ProjectCard` component which renders the project given a certain image with the provided info.
 * @param projectName the name of the project.
 * @param projectDescription a short (7 - 12 words) project description, often starting with an action verb.
 * @param tags identifiers like "Web Dev" or "Policy Analysis" that describe the project. 1 - 3 ideally.
 * @param landscapePhoto a 2:3 dimension photo which will default as the main photo for the project.
 * @param portraitPhoto OPTIONAL a 2:1 dimension photo which will render paritally over the landscape photo if provided.
 */
export interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    tags: string[];
    landscapePhoto: string;
    portraitPhoto?: string;
}
```

If you need to change the typing for projects in any way, please navigate to the `~/src/pages/utils/interfaces/props.ts` file and directly edit it. Please ensure that added fields are populated for existing projects or signified as optional as to not break the current site.
