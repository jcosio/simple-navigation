/**
* 
* Creates a simple, minimalist navigation bar using a (JSON) list of cities 
* 
*/
// import { updateClock } from './Clock.js';
const navigationElement = document.getElementById("simple-nav");
const navigationTabMarker = document.getElementById("simple-nav-line");
const JSON_LABEL = "cities";
const NAVIGATION_DOM_LABEL = "label";
const NAVIGATION_DOM_SECTION = "section";
const NAVIGATION_GMT_DATA = "GMT";
const MARGIN = 25;
let activeNavigationItem;

// util function
function calculate(element) {
    navigationTabMarker.style.width = ( element.offsetWidth ) + "px";
    navigationTabMarker.style.left = ( element.offsetLeft + MARGIN) + "px";
}

export default class SimpleNavigation {
    /**
     * prepareNavigationPanel: creates and appends navigation items to DOM
     */
    prepareNavigationPanel (navigationList) {
        let self = this;
        for(let index = 0; index < Object.keys(navigationList[JSON_LABEL]).length; index++) {
            var navigationListItem = document.createElement("li");
            var navigationAnchor = document.createElement("a");
            var navigationLabel = document.createTextNode(navigationList[JSON_LABEL][index][NAVIGATION_DOM_LABEL]);
            
            navigationAnchor.id = navigationList[JSON_LABEL][index][NAVIGATION_DOM_SECTION];
            navigationAnchor.href = "#";
            navigationAnchor.setAttribute('data-gmt', navigationList[JSON_LABEL][index][NAVIGATION_GMT_DATA] );
            navigationListItem.addEventListener('click', self.navigate.bind(this));
            navigationAnchor.appendChild( navigationLabel );
            navigationListItem.appendChild( navigationAnchor );
            navigationElement.appendChild( navigationListItem );
        }
    }

    /**
     * navigate: indicates user navigation by reassigning active tab
     */
    navigate (e){
        if (activeNavigationItem) {
            activeNavigationItem.classList.remove('active');
        }
        e.currentTarget.classList.add('active');
        activeNavigationItem = e.currentTarget;
        calculate(activeNavigationItem);
    }

    /**
     * initialize: initializes navigation panel
     */
    initialize ( ) {
        this.navList = navigationItems;
        // Send JSON city data to prepare navigation items
        this.prepareNavigationPanel(navigationItems);
    }
}