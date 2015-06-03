---
author: David Ragazzi
category: blog
layout: item
title: Introducing NuPIC Studio
---

Hello NuPICers!

I am introducing a nice tool for the NuPIC community.
[NuPIC Studio](https://github.com/nupic-community/nupic.studio) is a powerful
all-in-one tool that allows users create an HTM network from scratch, train it,
collect statistics, and share it among the members of the community.

![NuStudio Screenshot]({{ site.baseurl }}/images/blog/nustudio-screenshot.png)

It is not just a visualization tool but an HTM builder, debugger and laboratory
for experiments. It is ideal for newbies with little intimacy with
[NuPIC](https://github.com/numenta/nupic) code as well as experts that wish for
better productivity. Among its features and advantages are:

* <i></i> Users can open, save, or change their "HTM projects" or of other
  developers. A typical project contains data to be trained, neural network
  configuration, statistics, etc, which can be shared to be analyzed or
  integrated with other projects.
* <i></i> The HTM engine is the own original NuPIC library (Python
  distribution). This means no port, no bindings, no re-implementation, etc. So
  any changes in the original NuPIC source can be immediately viewed. This helps
  users that wish to test improvements like new encoders or even hierarchy,
  attention, and motor integration.

![NuStudio Screenshot]({{ site.baseurl }}/images/blog/nustudio-encodings.png)

* <i></i> Source code of the HTM network architecture is automatically generated
  in order for users to simply copy and paste it into their applications and so
  consume NuPIC Network API.

![NuStudio Screenshot]({{ site.baseurl }}/images/blog/nustudio-architecture_code.png)

* <i></i> The project is pip-installable and for desktop use.

The project's site is: <https://github.com/nupic-community/nupic.studio>

Enjoy!

> David Ragazzi <br/>
> NuPIC Committer <br/>
> MSc in Software Engineering (University of Liverpool)

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/2nazbi/introducing_nupic_studio/)
