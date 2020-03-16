import { PureComponent } from "react";
import { SplashScreen } from "expo";
import { withFirebase } from "../hoc";

class Initialization extends PureComponent {
  state = {
    loading: true,
    user: null
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  getUser = () => {
    SplashScreen.hide();
    this.props.api.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          loading: false
        });
      } else {
        this.setState({
          user: null,
          loading: false
        });
      }
    });
  };

  render() {
    {
      return this.props.children({
        loading: this.state.loading,
        user: this.state.user,
        getUser: this.getUser
      });
    }
  }
}

const InitializationComponent = withFirebase(Initialization);

export { InitializationComponent as Initialization };
