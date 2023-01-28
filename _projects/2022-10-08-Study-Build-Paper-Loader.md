---
title: "Study Build - Paper Loading"
categories: work
image: /projects/sheet-loader.jpg
---

While working at Study Build in collaboration with G2CNC, we designed a machine that streamlines the production of thermally performant cardboard boxes. Allowing us to decrease the impact of single use styrofoams in the seafood industry.

Designing the machine from the ground up allowed me to learn both hardware and software design, while developing tools to collaborate with the rest of the team.

## Hardware

### What

{:refdef: style="text-align: center;"}
![My Image](/images/projects/sheet-loader-CAD.jpg){:class="project-post-image"}
{: refdef}

- Reduce paper loading process into industrial printers
- Store paper pile allowing operators to leave machine unattended while getting live updates about machine’s status
- Performed a needs analysis to initiate design process defining requirements, user driven values and KPI metrics

### How

{:refdef: style="text-align: center;"}
![My Image](/images/projects/sheet-loader-closeup.jpg){:class="project-post-image"}
{: refdef}

- Used 3D printing for fast prototyping (seen above) and CNC machining to manufacture the first paper loader prototype
- Fusion 360 allowed me to apply DFM principles for expensive CNC parts, decreasing manufacturing failure rates and saving resources during development
- Used 80/20 platform as a building material for flexible prototyping

### Results

{:refdef: style="text-align: center;"}
![My Image](/images/projects/sheet-loader.jpg){:class="project-post-image"}
{: refdef}

- Design fulfilled its purpose by decreasing loading times from 60 to 15s.
- Increased safety of operators, while retaining high precision during paper indexing.
- Intuitive user interface for ease of operation

## Software

### What

{:refdef: style="text-align: center;"}
![My Image](/images/projects/sheet-loader-software-base.png){:class="project-post-image"}
{: refdef}

The team needed a way to integrate all systems of the machine. We relied on an agile product development approach to develop functions for the loader. Part of that was bringing to life the values articulated by our users. Here are some examples:

- As an operator, I would like to leave the machine unattended and get notified when it runs out of stock to load so that I can add material and keep printing.
- As a business owner, I want to be able to print different sizes and thicknesses of paper so that I can adapt to the production run my client is requesting.
- As an engineer, I would like to add new components to the system so that I can address any changes in the production needs.

With these user stories, I developed a C++ library following the system architecture you see above. This allowed me to roll out features during the development phase by orienting myself clearly in the codebase.

### How

{:refdef: style="text-align: center;"}
![My Image](/images/projects/sheet-loader-P1AM.jpg){:class="project-post-image"}
{: refdef}

After a long selection process, the hardened version of the Arduino made by AutomationDirect became our microcontroller (seen above). The platform also allowed for expansion by attaching different modules to the main microcontroller. This is an example of how we addressed all of our user stories.

I developed the code gradually by introducing new features every week, ensuring to perform tests after every integration. Sprints and scrums kept me up to date with the rest of the team and made us collaborate more efficiently.

### Results

{:refdef: style="text-align: center;"}
![My Image](/images/projects/sheet-loader-gantry-extend-code.png){:class="project-post-image"}
{: refdef}

- Addressed all of the requested user stories
- Created a codebase that is simple to re-factor and navigate
- An email client through a Raspberry Pi, for operator notifications
- Menus and operational modes allow operators to customize machine behaviour
- Safety features:
  - E-Stop handling
  - Soft restart of th emachine
  - Halt mode to de-pressurize pneumatics in case of limb detection
