---
layout: blogpost
title: Introducing NuPIC Studio
category: blog
---

I have been working on a tool that I believe will be a breakthrough for the NuPIC community. This tool is called "NuPIC Studio", or just "NuStudio". NuStudio is an all­-in-­one tool that allows users to create an HTM neural network from scratch, train it, collect statistics, and share it among the members of the community. It is not just a visualization tool but an HTM builder, debugger and laboratory for experiments. It is ideal for newbies with little intimacy with NuPIC code as well as experts that wish for better productivity.

[![NuStudio Splash Screen]({{ site.baseurl }}/images/blog/nustudio-splash.png)](https://github.com/DavidRagazzi/nupic.studio)

### Key Features

- Users can open, save, or change their own "HTM projects" and share with other developers. A typical project contains data to be trained, neural network configuration, statistics, etc, which can be shared to be analyzed or integrated with other projects.
- The HTM engine is the original [NuPIC](https://github.com/numenta/nupic) library. This means no port, no bindings, no re-implementation, etc. So any changes in the original NuPIC source can be immediately analyzed. This helps users that wish test improvements like new encoders or even hierarchy, attention, and motor integration.
- The project is pip-installable and for desktop use.

### Project details:

- **All** code is implemented in Python and cross-platform.
- All GUI components (forms, controls, etc) are implemented in [PyQT](http://www.riverbankcomputing.co.uk/software/pyqt/intro). PyQT is the version of the famous [QT](http://qt-project.org/) adapted for python apps, which is open-source, cross-platform, complete, and very easy to code and change.
- All utilities like XML serialization, canvas 2D, etc, also are implemented in PyQT.
- A front-end object-oriented layer also written in Python is provided in order to ease the understanding of the NuPIC code and keep backwards compatibility. This means that someone with less experience in NuPIC could re-use this front-end in her projects.

[Check out and use NuPIC Studio here](https://github.com/DavidRagazzi/nupic.studio). For a detailed tutorial on installing and using NuPIC Studio, [check out the wiki](https://github.com/DavidRagazzi/nupic.studio/wiki).

![NuStudio Screenshot]({{ site.baseurl }}/images/blog/nustudio-screenshot.png)

This project is definitely not 100% complete, and it's expected that some bugs will arise. Please try it out and [file issues](https://github.com/DavidRagazzi/nupic.studio/issues/new) if you run into any problems.

I look forward for your feedback, it is very important!

> David Ragazzi <br/>
> NuPIC Committer <br/>
> MSc in Software Engineering (University of Liverpool)

[Comments on Reddit]()
