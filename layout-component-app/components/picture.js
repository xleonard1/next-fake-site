import { useRef } from "react";
import { Picture, CloudinaryContext } from "cloudinary-react";
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";

const App = () => {


  // 2. Set your cloud name
  //========================

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dcldpb9uf'
    }
  });


  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('samples/cloudinary-group'); 


  // 4. Transform your image
  //=========================

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));


  // 5. Deliver your image
  // =========================

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )

};

export default App()