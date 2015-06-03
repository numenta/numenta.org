
{{ page.title }}
================

## Saturday May 3

- `10:00 - 10:30 AM`: **Kickoff with Matt and Jeff Hawkins**
- `10:30 - 12:00 AM`: **[Install-athon](#installathon)**
- `01:00 - 02:00 PM`: **[Beginner's Guide to NuPIC](#beginners_guide_to_nupic_scott_purdy)** (Scott Purdy)
- `02:30 - 03:30 PM`: **[Anomaly Detection Using The Cortical Learning Algorithm](#anomaly_detection_using_the_cortical_learning_algorithm_subutai_ahmad)** (Subutai Ahmad)
- `04:00 - 05:00 PM`: **[Temporal Pooling](#temporal_pooling_jeff_hawkins)** (Jeff Hawkins)

### Install-athon

Need help getting NuPIC building and running on your computer? Attend this workshop for hands-on assistance from NuPIC engineers.

### Beginner's Guide to NuPIC (Scott Purdy)

This is a beginner talk but assumes a software development background and a working installation of NuPIC.

NuPIC is a development framework but it can be difficult to get it working with your own data. This tutorial will start with an overview of the NuPIC codebase and live examples for how to use the different components. The talk will focus on the functional properties of the algorithm rather than the theory. There will be a walkthrough of the codebase layout and some advice on how to navigate it during development. Finally, I will do a coding example for taking a new dataset, selecting CLA model parameters with swarming, and using the best model parameters to get predictions and anomaly scores for new data.

### Anomaly Detection Using The Cortical Learning Algorithm (Subutai Ahmad)

Anomaly detection and multistep prediction are the two core capabilities implemented today in NuPIC. This talk will discuss anomaly detection in depth. I will go over the basic algorithm for anomaly detection using CLA, and give pointers to the relevant parts of the NuPIC codebase.  I'll also discuss what we've learned about anomalies while building Grok, and show examples of Grok working on some real world datasets.

### Temporal Pooling (Jeff Hawkins)

Temporal pooling is an essential component of HTM theory.  In this short talk I will describe what it is, why it is essential, how we think it is implemented in the brain, and how we plan to implement it in NuPIC.

* * *

## Sunday May 4
- `10:00 - 11:00 AM`: **[Cortical Learning Algorithm as Implemented in NuPIC](#cortical_learning_algorithm_as_implemented_in_nupic_chetan_surpur)** (Chetan Surpur)
- `01:00 - 01:30 PM`: **[The State of NuPIC](#the_state_of_nupic_matt_taylor)** (Matt Taylor)
- `04:00 - 06:00 PM`: **Demonstrations**


### Cortical Learning Algorithm as Implemented in NuPIC (Chetan Surpur)

The Cortical Learning Algorithm (CLA) is implemented in NuPIC as the Spatial Pooler (SP) and the Temporal Pooler (TP). This talk will describe how the algorithms work, and touch on the differences between their implementations in NuPIC and the [HTM whitepaper]({{ site.data.url.ext.htmpaper }}). I'll also go over plans to improve and extend the SP and TP.

### The State of NuPIC (Matt Taylor)

Matt will describe the initiative and the work that has been completed to extract the core C++ code from NuPIC, and how the resulting repositories have adjusted. Also describe the future vision, what work is left to be done, and how the community can help us realize our vision for NuPIC.
