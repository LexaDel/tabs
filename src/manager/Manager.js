import createFocusGroup from "focus-group";

class Manager {
    constructor(options) {
        this.options = options;
        let focusGroupOptions = {
            wrap: true,
            forwardArrows: ['down', 'right'],
            backArrows: ['up', 'left'],
        };

        this.focusGroup = createFocusGroup(focusGroupOptions);
        
        this.tabs = [];
        this.tabPanels = [];
      
        this.activeTabId = options.activeTabId;
    }

    activate = () => {
        console.log('manager activate');
        this.focusGroup.activate();
    };

    registerTabPanel = (tabPanelMember) => {
        this.tabPanels.push(tabPanelMember);
        this.activateTab(this.activeTabId);
      
        this.activateTab(this.activeTabId || tabPanelMember.tabId);
    };

    activateTab = (nextActiveTabId) => {
        if (nextActiveTabId === this.activeTabId) return;
        
        this.activeTabId = nextActiveTabId;
      
        if (this.options.onChange) {
          this.options.onChange(nextActiveTabId);
          return;
        }
      
        this.tabPanels.forEach(function(tabPanelMember) {
          tabPanelMember.update(nextActiveTabId === tabPanelMember.tabId);
        });
        this.tabs.forEach(function(tabMember) {
          tabMember.update(nextActiveTabId === tabMember.id);
        });
      }

    destroy = () => {
        this.focusGroup.deactivate();
    };
      
}

export default Manager;