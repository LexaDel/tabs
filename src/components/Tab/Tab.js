import { PureComponent } from 'react';

const cssPrefix = 'tab';

class Tab extends PureComponent {
    render() {
        const { children, selectedTab, id } = this.props;
        if (selectedTab !== id) {
            return null;
        }

        return <div className={cssPrefix}>{children}</div>;
    }
}

export default Tab;