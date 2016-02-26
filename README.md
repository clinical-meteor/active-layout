## clinical:active-layout
Layout templates with keybindings and animations.  
[![Circle CI](https://circleci.com/gh/clinical-meteor/active-layout/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/active-layout/tree/master)

===============================
#### Installation

````
meteor add clinical:active-layout
````

===============================
#### Design Tutorial  

See the tutorial to get started!  
[Designing a Card UI for Universal Apps](https://github.com/clinical-meteor/active-layout/blob/master/design/Readme.md)

===============================
#### Configuration

````js
Meteor.startup(function (){
  ActiveLayout.configure({
    help: {
      link: "/menu",
      text: "Menu"
    },
    classes: {
      header: "",
      title: "",
      links: ""
    },
    text: {
      title: "",
      logout: "Logout"
    },
    fence: {
      north: 50,
      south: 0,
      east: 270,
      west: 270
    },
    defaults: {
      showNavbars: true,
      showSidebar: true,
      showSearchbar: false,
      useHierarchicalLayout: false,
      mainPanelIsCard: false,
      wideCard: true,
      useCardLayout: false,
      hasPagePadding: false,
      symmatricalPadding: false,
      hasPageVerticalPadding: false,
      useHorizontalFences: false,
      useVerticalFences: true,
      navIsFullscreen: true,
      fullscreenNavbars: false,
      fullscreen: false,
      secondPanelEnabled: false,
      appSurfaceOffset: true,
      useEastFence: true,
      pageWhite: true
    }
  });
});
````


````js
Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'sidebar': {
      to: 'westPanel'
    },
    'searchBar': {
      to: 'globalInput'
    },
    'configListModal': {
      to: 'modalA'
    }
  }
});
````

===============================
#### Rulers


**northRule**

**southRule**

**eastRule**

**westRule**

===============================
#### Default Properties

**showNavbars**
Slide the NavbarHeader and NavbarFooter into the ViewPort and display their respective contents.  This simply adjusts the top/bottom location of the navbars.  If you don't want a navbars rendered at all, you can omit them from the Router map.

**showSearchbar**
Slide the Searchbar into the ViewPort and display it's contents.

**showSidebar**
Slide the WestPanel into the ViewPort and display it's contents.  This simply adjusts the left location of the sidebar.  If you don't want a sidebar rendered at all, you can omit it from the Router map.



**useCardLayout**
Determines whether the navbar


useHierarchicalLayout: false,
mainPanelIsCard: false,
wideCard: true,
hasPagePadding: false,
symmatricalPadding: false,
hasPageVerticalPadding: false,
useHorizontalFences: true,
useVerticalFences: false



===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
