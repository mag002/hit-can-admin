import React from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { Image } from "@material-ui/icons";
const Container = styled.div`
  flex: 1;
  margin-top: 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-width: 2px;
  border-radius: 2px;
  border-color: 1px solid black;
  border-style: dashed;
  background-color: white;
  color: #bdbdbd;
  outline: none;
  transition: all 0.24s ease-in-out;
  min-height: 150px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.16);
  }
  img {
    position: relative;
    z-index: 10;
  }
  .note {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: black; */
    top: 0;
    left: 0;
    margin: 0px;
    font-size: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function CustomDropzone(props) {
  return (
    <Container>
      <Dropzone onDrop={props.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />

            <p className="note">
              <Image />
            </p>
            <img src={props.img} />
          </div>
        )}
      </Dropzone>
    </Container>
  );
}

export default CustomDropzone;
