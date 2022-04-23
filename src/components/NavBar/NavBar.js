import { createRef, PureComponent } from "react";
import "./NavBar.css";

const cssPrefix = "navBar";

class NavBar extends PureComponent {
    constructor(props) {
        super(props);
    
        this.refNavTab = createRef();
      }
    
      componentDidUpdate() {
        const { onClick, id, active } = this.props;
    
        if (active) {
          onClick(id, this.refNavTab);
        }
      }
    
      onClick = () => {
        const { onClick, id } = this.props;
    
        onClick(id, this.refNavTab);
      };
    
      render() {
        const { label, active } = this.props;
        return (
          <div
            className={cssPrefix}
            onClick={this.onClick}
            onFocus={this.onClick}
            ref={this.refNavTab}
            aria-selected={active}
            role="tab"
            tabIndex={active ? 0 : -1}
          >
            {label}
          </div>
        );
      }
}

export default NavBar;