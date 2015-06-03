---
author: Matthew Taylor
category: blog
layout: item
title: Geospatial Tracking With NuPIC
---

We have developed and open-sourced a project called the [NuPIC Geospatial
Tracking Application](https://github.com/numenta/nupic.geospatial), which
demonstrates how NuPIC can be used to provide anomaly indications for geospatial
data. Specifically, it can accept GPS track information in
[GPX](http://www.topografix.com/gpx.asp) format and output indications of
anomalous activity for each point along the tracks. This could be useful for a
number of interesting applications:

- <i></i> Air Safety
    - <i></i> Monitor location, speed and trajectory of commercial aircraft
- <i></i> Maritime Domain Awareness
    - <i></i> Detect abnormal ship routes or unexpected ports of entry
    - <i></i> Spot unexpected travel impediments — weather, malfunctions, piracy
- <i></i> Family and Pet Care
    - <i></i> Receive alerts when family members deviate from normal routes or locations
    - <i></i> Track teen driving patterns and speeds
- <i></i> Fleet and Professional Driver Tracking
    - <i></i> Monitor driver route and activity compliance
    - <i></i> Collect anomalous route data to understand traffic conditions or road obstructions
- <i></i> Personnel Compliance and Safety
    - <i></i> Monitor employee movements in hazardous industries - mining, public safety, military
    - <i></i> Ensure service coverage - security guards, hospitality workers, sales associates
- <i></i> Supply Chain Visibility
    - <i></i> Monitor inventory movement through supply chains to identify anomalies and delays
    - <i></i> Spot new bottlenecks or service disruptions in delivery networks

You can see a simple tutorial of how to import GPS information from standard GPX
files in this video:

[![NuPIC Geospatial Tracking Application Tutorial](http://img.youtube.com/vi/M4dD9wCQLkA/hqdefault.jpg)](http://www.youtube.com/watch?v=M4dD9wCQLkA)

Numenta has also authored a white paper entitled
[Geospatial Tracking: Learning the Patterns in Movement and Detecting Anomalies](http://numenta.com/assets/pdf/whitepapers/Geospatial%20Tracking%20White%20Paper.pdf),
which provides details about our motivation, potential use-cases, and underlying
technologies.

At the heart of this new capability is the `GeospatialCoordinateEncoder`, which
converts geospatial coordinate information into a format that is compatible with
NuPIC, exposing the characteristics of location information that allows the
cortical underpinnings of NuPIC to understand it. In a way, this is analogous to
providing a "new sense" of location awareness that we humans currently don't
have. For details about how the Geospatial Coordinate Encoder works to encode
this data for NuPIC, see the following video by Numenta engineer Chetan Surpur:

[![Geospatial Coordinate Encoder](http://img.youtube.com/vi/KxxHo-FtKRo/hqdefault.jpg)](http://www.youtube.com/watch?v=KxxHo-FtKRo)

We hope this demonstration of NuPIC's geospatial tracking capabilities inspires
others to create more interesting implementations in the fields listed above.
The [NuPIC Geospatial Tracking Application](https://github.com/numenta/nupic.geospatial)
is really just a showcase, and a simple implementation to demonstrate NuPIC's
efficacy in this field.

> Matt Taylor <br/>
> Open Source Community Flag-Bearer <br/>
> Numenta, Inc.

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/2dx0uc/geospatial_tracking_with_nupic/)
