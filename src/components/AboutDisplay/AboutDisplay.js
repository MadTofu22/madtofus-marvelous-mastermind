import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class AboutDisplay extends Component {
    
    render () {
        return (
            <section id='aboutDisplayWrapper'>
                <h1>About MadTofu's Marvelous Mastermind</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit odio, cursus vitae gravida ut, efficitur mollis ligula. Nulla ornare vulputate iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at ipsum ac libero tincidunt tincidunt ac sit amet leo. Duis sem ante, lobortis et ex ac, mollis porta quam. Vestibulum quis justo sit amet erat convallis tempus. Curabitur feugiat justo vel felis tincidunt luctus. Nam eget tortor quis nisl blandit blandit. Vestibulum et neque ut nisl placerat iaculis sed eu augue. Duis sed lectus malesuada, vulputate lorem id, interdum nunc. Curabitur fringilla facilisis justo, non accumsan nibh varius sit amet. Suspendisse cursus vel ipsum quis suscipit. Proin eu felis a nisl semper varius. Pellentesque pretium mi ac velit eleifend, vel auctor tortor aliquam. Etiam et lacus urna. Proin vitae tristique purus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit odio, cursus vitae gravida ut, efficitur mollis ligula. Nulla ornare vulputate iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at ipsum ac libero tincidunt tincidunt ac sit amet leo. Duis sem ante, lobortis et ex ac, mollis porta quam. Vestibulum quis justo sit amet erat convallis tempus. Curabitur feugiat justo vel felis tincidunt luctus. Nam eget tortor quis nisl blandit blandit. Vestibulum et neque ut nisl placerat iaculis sed eu augue. Duis sed lectus malesuada, vulputate lorem id, interdum nunc. Curabitur fringilla facilisis justo, non accumsan nibh varius sit amet. Suspendisse cursus vel ipsum quis suscipit. Proin eu felis a nisl semper varius. Pellentesque pretium mi ac velit eleifend, vel auctor tortor aliquam. Etiam et lacus urna. Proin vitae tristique purus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit odio, cursus vitae gravida ut, efficitur mollis ligula. Nulla ornare vulputate iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce at ipsum ac libero tincidunt tincidunt ac sit amet leo. Duis sem ante, lobortis et ex ac, mollis porta quam. Vestibulum quis justo sit amet erat convallis tempus. Curabitur feugiat justo vel felis tincidunt luctus. Nam eget tortor quis nisl blandit blandit. Vestibulum et neque ut nisl placerat iaculis sed eu augue. Duis sed lectus malesuada, vulputate lorem id, interdum nunc. Curabitur fringilla facilisis justo, non accumsan nibh varius sit amet. Suspendisse cursus vel ipsum quis suscipit. Proin eu felis a nisl semper varius. Pellentesque pretium mi ac velit eleifend, vel auctor tortor aliquam. Etiam et lacus urna. Proin vitae tristique purus.</p>
            </section> 
        );
    }
}

export default connect(mapStoreToProps)(AboutDisplay);