/**
 * Zadatak Frontend - Home Page
 * https://github.com/umuthan/zadatak-frontend
 *
 * Author: Umuthan Uyan
 *
 */

import React, { Component } from 'react';

class Home extends Component {

  componentDidMount() {

    document.title = 'Home';

  }

  render() {

    return(

      <article>
        <img alt="Home" src={require('../Assets/img/home_header.jpg')} />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo magna eu metus porta, eget dapibus sem ultrices. Integer vitae diam id tortor fermentum faucibus ac a ligula. Maecenas non sollicitudin dolor, in consequat nunc. Sed arcu orci, tincidunt ac suscipit et, pellentesque in ante. Etiam non elementum libero. Nulla sit amet felis hendrerit, tempus velit ut, pharetra eros. Curabitur ac odio tincidunt, interdum nulla eget, imperdiet mauris. Nulla porttitor volutpat sodales.</p>

        <p>Aliquam porta laoreet molestie. Vestibulum eu orci bibendum, tincidunt lacus vitae, commodo sapien. Vestibulum posuere nibh in lacus pellentesque volutpat. Donec maximus aliquam aliquet. Morbi convallis tincidunt augue in auctor. Cras ultricies vitae sapien at pretium. Pellentesque vel consequat eros. Quisque sed mattis felis. Duis a augue sed est lobortis fringilla. Aenean molestie viverra ullamcorper. Curabitur eu ex sed augue rutrum blandit eget ut metus. Vestibulum egestas velit quis consectetur venenatis. In hac habitasse platea dictumst. Aliquam at erat sed ante faucibus tristique a sit amet augue. Morbi maximus rhoncus hendrerit. Maecenas euismod massa vel nisi vestibulum, id semper dui vehicula.</p>

        <p>Vestibulum vel justo vel nisi tristique congue ut non sem. Nulla ullamcorper sapien nec efficitur egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id felis elementum, auctor quam et, vehicula leo. Fusce scelerisque dictum fringilla. Duis nec venenatis orci. Vestibulum non sollicitudin turpis, eu rutrum ante. Duis sed mauris commodo, ornare dolor ut, interdum purus. Aenean vitae urna a ante luctus facilisis. Proin eleifend ante vel laoreet iaculis. Morbi ultrices molestie mauris, nec pulvinar leo auctor ut. Nulla elementum eleifend tempus.</p>

        <p>Cras eu orci a orci aliquet iaculis. Integer nec sapien dapibus libero sagittis convallis vehicula at purus. Mauris at condimentum est, nec hendrerit lectus. Nunc volutpat nibh justo, vel efficitur augue pretium eget. Aenean non fringilla turpis. Donec ipsum massa, porttitor at tristique ut, condimentum nec ante. Ut vulputate porta eros id semper. Phasellus viverra augue a orci rutrum, ullamcorper posuere nisi vehicula. Pellentesque id turpis sed erat sagittis laoreet accumsan id arcu. Nullam dolor metus, volutpat ut posuere in, lacinia ut mauris. Donec ac dignissim ligula. Vivamus in purus non lacus ornare cursus. Aliquam quis gravida lacus, eu varius neque. Pellentesque nec imperdiet libero. Donec tristique ac lacus eu aliquam.</p>

        <p>Morbi sit amet varius nisi, vel pretium est. Sed enim arcu, feugiat non porta eget, bibendum posuere orci. Donec tempor tellus urna. Phasellus consequat lorem quis est vulputate finibus. Nulla sed felis placerat, ornare odio ut, blandit lectus. Vivamus ut lacus luctus, accumsan ligula vitae, mollis dui. Vestibulum vehicula finibus ex ac aliquet. Vivamus ac iaculis lacus, in venenatis neque. Phasellus consectetur tempus ex, ut mattis arcu varius at. Donec interdum gravida erat a accumsan. Sed feugiat auctor efficitur.</p>
      </article>

    );

  }

}

export default Home;
