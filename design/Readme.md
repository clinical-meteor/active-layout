Universal Card UI Design
===============
The ActiveLayout package implements a Universal Card UI, which is considerably different than traditional web templates, in that it's both optimized for mobile first, and scales up to ultra-high resolution HDTV monitors.  The reason we both _can_ and _want_ to consider a universal app is due to the economics of the healthcare market.  

Regulatory approval makes it very difficult to bring an application to market, and costly to make changes.  So, when a version of an app gets certified, we want it to run on as many devices as we can.  Put another way, given limited resources, budget that would normally get spent on extra developers making device-optimized versions of an app often winds up getting spent on the regulatory and credentialing process in the healthcare industry.

We're also able to make this design decision because the healthcare market is highly constrained in its uses cases and users.  A universal app might not work in other industries such as gaming; but in healthcare, device usage is usually a function of ergonomics, and we can make a number of informed decisions about how patients and clinicians will use an app on different devices.  As such, the design space is constrained enough that a universal template begins to make a lot of business sense.

The cost of a universal template, of course, is that it is a different paradigm of application design, and will feel unfamiliar until people are trained or work with it for awhile.

================
###Microservice Architecture  

Our Universal Card UI is built upon a Microservice...  a set of technologies which coordinate data synchronization between the server and the client and renders that data to a screen.  It's recommended for Clinical Meteor apps that each HL7 resource be implemented in its own Mongo collection, with its own microservice.  That is, there will only be one data schema for all of the subsequent UI wireframes we create.  Assume we are using the DiagnosticOrder FHIR resource.  When we add the ``clinical:hl7-resource-diagnostic-order`` package to our app, it will add the following data infrastructure to our app, and it will be our responsibility to design theUi for it. 

![Microservice](https://raw.githubusercontent.com/clinical-meteor/cookbook/master/images/whitepapers/redwood/CollectionsAndModels.PNG)

================
###Mobile - Alerts, Status Updates, Etc

We begin the design process with the device that has the smallest screen footprint, and is most likely to be carried around by our users the most:  the phone.  Ask yourself 'what functions might my app need when mobile?'  This is a useful excercize, even if your app is likely to be primarily used on the desktop.  The ergonomics of mobile devices don't make them good for data analysis, text authoring, and similar tasks....  but they are great for alerts and status updates.  In our DiagnisticOrder example, we might want "Today's Tasks" on our phone.  Also note the header and footer.  We have three components on this screen: 

- [ ] list
- [ ] header
- [ ] footer

![iPhone-Portrait-Fullscreen](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/iPhone6%20-%20Portrait%20-%20Fullscreen.png)

================
###Mobile - Virtual a Paper - Data Collection and Input

The next step in the design process is to consider a slightly larger device...  a tablet or digital paper.  This is a particularly important use-case, because healthcare has traditionally been a paper-based industry, we are using a document oriented database, and we are implementing a card UI.  Consider what the mobile app would look like if given a little extra space and rendered on a piece of paper.  If there is extra information to be displayed on a tablet, one would want to specify a breakpoint.  Generally, however, it is easiest to simply give the mobile view a little extra breathing room.

- [ ] phone breakpoint

![iPad-Portrait-Fullscreen](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/iPad%20-%20Portrait%20-%20Fullscreen.png)

================
###Mobile - Data Visualization Preview

When the tablet is rotated sideways, we have the choice of displaying our checklist at 100% of the screen width, or to keep the same width as the tablet in portrait view.  Begin by simply designing a wireframe that's 100% width.  In our checklist example, we could choose to start displaying extra information here; although it's common for some apps to switch to a completely different workflow and present a data visualization preview.  This is a good place to display a single full-page chart or 3D rendering engine to display radiology images, for example.

- [ ] tablet portrait breakpoint
- [ ] onorientationchange

![iPad-Landscape-Fullscreen](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/iPad%20-%20Landscape%20-%20Fullscreen.png)

================
###Mobile - Contextual Data Input 

In Clinical Meteor, however, we are often concerned with the use-case of replacing paper workflows.  As such, one particularly important design for the tablet in landscape mode is where we keep the dimensions of our page constant and introduce a sidebar.  We are able to do this by introducing the notion of a viewport, virtual canvas, and panels.  In effect, our task list is no longer simply the dimensions of our screen.  Rather, we have a bigger workspace to design with.  And it's that bigger workspace that we will eventually apply origami to and create animation effects with.  In our example here, we fill the extra space with a sidebar.  We also attach an event to our header that toggles the panel between fullscreen and pagescreen modes.

- [ ] tablet landscape breakpoint
- [ ] sidebar

![iPad-Landscape-Pagescreen](https://github.com/clinical-meteor/clinical-active-layout/blob/master/design/iPad%20-%20Landscape%20-%20Pagescreen.png)


================
###Office - Data Management 

Going to yet a larger device, we now consider the application as it might run on a desktop computer.  In this situation, it becomes increasingly likely that our application may be connected to multiple monitors or controlling external devices.  That is, it's not simply working as a checklist, but as a workqueue in a shared environment.  For this use-case, we layer in user management controls (so others know who we're logged in as), and a breakpoint to display workqueue controls.

- [ ] desktop breakpoint
- [ ] desktop workqueue controls
- [ ] user login header controls

![Desktop-Landscape-Pagescreen](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/Desktop%20-%20Landscape%20-%20Pagescreen.png)

================
###Office - Data Visualization 

![Desktop-Landscape-Fullscreen](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/Desktop%20-%20Landscape%20-%20Fullscreen.png)

![Desktop-Landscape-Fullscreen-Navbars](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/Desktop%20-%20Landscape%20-%20Fullscreen%20-%20Navbars.png)

================
###Public Education & Collaboration  


![Thunderbolt-Pagescreen-Navbars](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/Thunderbolt%20-%20Pagescreen%20-%20Navbars.png)

![Thunderbolt-Pagescreen](https://raw.githubusercontent.com/clinical-meteor/clinical-active-layout/master/design/Thunderbolt%20-%20Pagescreen.png)



================
###Collaborative Data Analysis

![Thunderbolt - Two Panel - Canvas](https://raw.githubusercontent.com/clinical-meteor/active-layout/master/design/Desktop%20-%20Two%20Panel.png)



================
###Layout Use Cases

####Navbars

####Global Search/Input

####Rulers

####Device Support

####Card Layout

####Fullscreen/Pagescreen


================
###Theming Use Cases

####Darkroom Mode

####Brand Theming

####Background

####Opacity






