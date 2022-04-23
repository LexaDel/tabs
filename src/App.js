import './App.css';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tab/Tab';
import { PureComponent } from 'react';
import Manager from './manager/Manager';

class App extends PureComponent {
  componentWillMount() {
    this.manager = new Manager({
      onChange: this.props.onChange,
      activeTabId: this.props.activeTabId,
      letterNavigation: this.props.letterNavigation,
    });
  };

  componentWillUnmount() {
    this.manager.destroy();
  };

  componentDidMount() {
    this.manager.activate();
  };

  render() {
    return (
      <div className="App">
        <Tabs focusManager={this.manager}>
          <Tab label="About" id="Tab1">About</Tab>
          <Tab label="Help" id="Tab2" >Help</Tab>
          <Tab label="Page 1" id="Tab3" >Page 1</Tab>
          <Tab label="I can be a different width" id="Tab4" >I can be a different width</Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
