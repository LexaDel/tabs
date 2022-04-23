import { Children, cloneElement, createRef, PureComponent } from "react";
import NavBar from './../NavBar/NavBar';
import "./Tabs.css";


const cssPrefix = "tabs";

class Tabs extends PureComponent {
    constructor(props) {
      super(props);
      this.refTabs = createRef();
      this.tabContainer = createRef();
  
      this.state = {
        selectedTab: undefined,
        offsetWidth: undefined,
        offsetLeft: undefined
      };

    }
  
    componentDidMount() {
      const { children, focusManager } = this.props;
      const selectedTab = children[0].props.id;
  
      this.setState({
        selectedTab
      });

      if (this.isRegistered) return;
      this.isRegistered = true;

      focusManager.registerTabPanel({

      });
    }
  
    selectTab = (id, refNavTab) => {  
      const { offsetWidth, offsetLeft } = refNavTab?.current;
      const width = this.refTabs?.current.offsetWidth;
      const translate = `translate3d(${offsetLeft}px, 0px, 0px)`;
      const transform = `${translate} scaleX(${ offsetWidth / width })`;
  
      this.setState({
        selectedTab: id,
        transform
      });
    };
  
    renderTabs = () => {
      const { children = [] } = this.props;
      const { selectedTab } = this.state;
  
      return children.map((tabItem, index) => {
        return (
          <NavBar
            key={tabItem.props.id}
            id={tabItem.props.id}
            label={tabItem.props.label}
            active={tabItem.props.id === selectedTab}
            onClick={this.selectTab}
            index={index}
          />
        );
      });
    };
  
    render() {
      const { children } = this.props;
      const { transform, selectedTab } = this.state;
  
      return (
        <div className={cssPrefix}>
          <nav className={`${cssPrefix}-nav`} ref={this.refTabs}>
            {this.renderTabs()}
            <div
              className={`${cssPrefix}-ink`}
              style={{
                transform: `${transform}`
              }}
            />
          </nav>
          <div className={`${cssPrefix}-container`} ref={this.tabContainer}>{
              Children.map(children, (child) => cloneElement(child, { selectedTab }))
          }</div>
        </div>
      );
    }
  }

  export default Tabs;