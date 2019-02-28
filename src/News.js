import React, { Component } from 'react';
import {
  Jumbotron,
} from 'reactstrap';
import '../src/App.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showme: false,
    }
  }

  readMore() {
    this.setState({
      showme: !this.state.showme
    })
  }

  render() {
    return (
      <div>

<Jumbotron className="mt-2 mx-2">
   <div className="text-center">
<img class="img-fluid" src="https://picsum.photos/1200/600/?random" alt=""></img>
</div>

<hr class="my-4"></hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
      lorem egestas vitae scel
      </p>
      {this.state.showme ?
      <p> erisque enim ligula venenatis dolor. Maecenas
        nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis
        dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
        Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar
        nibh tempor porta.</p>
        : null}

        <button onClick={() => this.readMore()}>Read More</button>

        </Jumbotron>

      </div>
    );
  }
}

export default News