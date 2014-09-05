---
layout: blogpost
title: Season of NuPIC 2014 Report
category: blog
---

The [2014 Season of NuPIC]({{ site.baseurl }}/son/2014) is officially over, and out of the [seven initially approved projects](https://github.com/numenta/nupic/wiki/SoN-2014-Projects), we have two that have produced a final report. In this blog post, I'll be introducing you to those two projects and the students who produced them.

## Successful Projects

The following students, with the help of their mentors, followed their initial project directives out to completion. Each student and mentor of the project will receive a "2014 Season of NuPIC" T-shirt and a certificate of completion for their efforts. 

### Spatial Pooler OCR

> - Student: **[Jim Bridgewater](http://www.linkedin.com/pub/jim-bridgewater/9/589/604)** (United States)
> - Mentor: [Scott Purdy](http://github.com/scottpurdy)
> - Repository: - [https://github.com/baroobob/nupic.vision](https://github.com/baroobob/nupic.vision)
> - **[Final Report](https://drive.google.com/file/d/0B99vQZHZRc_gVlc5R0tmNExoenhJZ05OSU81eGxTSlpTX2ln/)**

An excerpt from Jim's introduction:

> The goal of this project was to create a framework for applying NuPIC to visual tasks. I started with Ian Danforth’s spatial pooler visualization demo from the Fall 2013 hack-a-thon and adapted it for a usage model where the SP is trained and tested on large data sets in batch mode. This resulted in a system which is, ironically given the name of this project, not very visual. However, Ian’s code for visualizing the permanences and connected synapses was retained for the purposes of debugging and documentation.

Jim's also added an [accuracy chart](https://drive.google.com/file/d/0B99vQZHZRc_gOGtpWHdXejJIR2J6TTVRLWo1dm5NWHRTT0pz/).

![Spatial Pooler OCR Accuracy Chart]({{ site.baseurl }}/images/blog/son-2014-bridewater.png)

### Insights Into the CLA

> - Student: **[Ruaridh O'Donnell](https://github.com/rhuairahrighairidh)** (Scotland, UK)
> - Mentor: [Chetan Surpur](http://github.com/chetan51)
> - Repository: [https://github.com/rhuairahrighairidh/nitpick](https://github.com/rhuairahrighairidh/nitpick)
> - **[Final Report](https://docs.google.com/document/d/1u9yBdpRCXoMQySYeN00kF9TOEDvtTWkifcWyuuMoS5s/)**

An excerpt from Ruaridh's introduction:

> This project was run as part of the 2014 season of nupic. Its aim was to investigate the tools for visualising HTMs to aid in understanding their operation, particularly over time. Some prototypes were built and are publically available.

Check out the iPython Notebooks included with [Ruaridh's repository](https://github.com/rhuairahrighairidh/nitpick). Here are a couple of example charts he has created to visualize the cellular state of the HTM:

![Example 1 of Ruaridh's charts]({{ site.baseurl }}/images/blog/son-2014-odonnell-1.png)

![Example 2 of Ruaridh's charts]({{ site.baseurl }}/images/blog/son-2014-odonnell-2.png)

## Status of Other SoN Projects

All of the work done by Season of NuPIC students was accomplished by volunteers, dedicating their free time to working with NuPIC. It's unrealistic to think that all projects would be driven to completion. Some participants were not able to accomplish their goals in time for the SoN deadline, but they plan on continuing their work in the future. Keep an eye on these projects, and I'll publish their progress.

### Epilepsy Seizure Prediction

> - Students: 
>   - **Anubhav Chaturvedi** (Team Lead, India)
>   - [**Kaggle Team**](https://github.com/numenta/nupic/wiki/Epilepsy-Seizure-Prediction#team-members)
> - Mentor: [Matt Taylor](http://github.com/rhyolight)
> - Repository: [https://github.com/fergalbyrne/nupic.kaggle-eeg](https://github.com/fergalbyrne/nupic.kaggle-eeg)
> - Wiki: [https://github.com/numenta/nupic/wiki/Epilepsy-Seizure-Prediction](https://github.com/numenta/nupic/wiki/Epilepsy-Seizure-Prediction)
> - [Mid-Term Report](https://github.com/numenta/nupic/wiki/SoN-2014-Mid-Term-Reports#epilepsy-seizure-prediction)

This project got off to a good start, but lost steam around mid-term. Although the Kaggle competition is now closed (and we didn't submit an entry), Anubhav is planning on continuing his work on seizure prediction with EEG data. If nothing else, we all learned a lot about EEG data formats. The hard part seemed to be getting the EEG data aggregated into a lighter data format that NuPIC could understand. EEG data is *dense!*

### Simple AI for Games

> - Student: **Fernando Martinez** (United States)
> - Mentor: [Matt Keith](https://github.com/keithcom)
> - Repository: [https://github.com/FernandoMMartinez/NuPIC-ASCII-Street-Fighter](https://github.com/FernandoMMartinez/NuPIC-ASCII-Street-Fighter)
> - [Mid-Term Report](https://docs.google.com/a/numenta.org/document/d/1_e6Krh1hQfcdHsaDvU5DVHxifFpjYAms0FtXEyguIVE/)

Fernando is still working on his ascii game (see the repository and mid-term report linked above). I checked his repo out awhile back and played around with it, and it seemed to work pretty well! See a screenshot below:

![NuPIC ASCII Game]({{ site.baseurl }}/images/blog/son-2014-fernando.png)

## In Conclusion

People learned, the community grew, and everyone played nice together. I'm very happy with the turnout of this year's Season of NuPIC. Thanks to everyone who participated. Special thanks to the mentors that volunteered their time to help out student projects.

> Matt Taylor <br/>
> Open Source Community Flag-Bearer <br/>
> Numenta, Inc.

[Comments on Reddit]()
