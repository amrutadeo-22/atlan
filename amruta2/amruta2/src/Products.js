import React from "react";
import styled from "styled-components";
import { FcEditImage } from "react-icons/fc";

const Products = () => {
  return (
    <Wrappers>
      <div className="container">
        <div className="grid grid-three-column">
        <div className="services-1">
        
            <div><a href = "https://modelzoo.co/model/openpose-caffe">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3> OpenPose</h3>
            </div>
          </div>

          <div className="services-2">
             
            <div className="services-colum-2">
              <div><a href = "https://www.modelzoo.co/model/mask-r-cnn-keras ">
              <img src="./images/gemini9.jpg" alt="my logo img" /></a>
                <h3>Mask R-CNN </h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div><a href = "https://www.modelzoo.co/model/detectron2 ">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>detectron2 </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div><a href = " https://www.modelzoo.co/model/ray ">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>ray </h3>
            </div>
          </div>

          <div className="services-2">
             
            <div className="services-colum-2">
              <div><a href = "https://www.modelzoo.co/model/mmdetection ">
              <img src="./images/gemini9.jpg" alt="my logo img" /></a>
                <h3>MMDetection </h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div><a href = "https://www.modelzoo.co/model/pytorch-cyclegan-and-pix2pix ">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>pytorch-CycleGAN-and-pix2pix </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div><a href="https://www.modelzoo.co/model/awesome-pytorch-list">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>Awesome pytorch list </h3>
            </div>
          </div>

          <div className="services-2">
             
            <div className="services-colum-2">
              <div><a href = "https://www.modelzoo.co/model/stylegan ">
              <img src="./images/gemini9.jpg" alt="my logo img" /></a>
                <h3>StyleGAN </h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div><a href = "https://www.modelzoo.co/model/pytorch-gan ">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>PyTorch-GAN </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div><a href = "https://www.modelzoo.co/model/best-of-ml-python">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>best of ml python </h3>
            </div>
          </div>

          <div className="services-2">
             
            <div className="services-colum-2">
              <div><a href = "https://www.modelzoo.co/model/fastphotostyle ">
              <img src="./images/gemini9.jpg" alt="my logo img" /></a>
                <h3>FastPhotoStyle </h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div><a href = " https://www.modelzoo.co/model/albumentations">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3> albumentations</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div><a href="https://www.modelzoo.co/model/mathjax">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3> MathJax</h3>
            </div>
          </div>

          <div className="services-2">
             
            <div className="services-colum-2">
              <div><a href = " https://www.modelzoo.co/model/maskrcnn-benchmark">
              <img src="./images/gemini9.jpg" alt="my logo img" /></a>
                <h3>maskrcnn-benchmark </h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div><a href = "https://www.modelzoo.co/model/vid2vid ">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>vid2vid </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div><a href="https://www.modelzoo.co/model/annotated-deep-learning-paper-implementations">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>annotated_deep_learning_paper </h3>
            </div>
          </div>

          <div className="services-2">
             
            <div className="services-colum-2">
              <div><a href = "https://www.modelzoo.co/model/tensorboard-pytorch ">
              <img src="./images/gemini9.jpg" alt="my logo img" /></a>
                <h3> tensorboard-pytorch</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div><a href = "https://www.modelzoo.co/model/deep-image-prior ">
            <img src="./images/gemini9.jpg" alt="my logo img" /></a>
              <h3>deep-image-prior </h3>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};
const Wrappers = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 6rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
