'use client';

import { Breadcrumb } from 'flowbite-react';
import { FaBuffer } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";

export default function BCPath(props) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">      
      <Breadcrumb.Item href="#" icon={FaBuffer}>Learning Path</Breadcrumb.Item>
      <Breadcrumb.Item icon={FaFileCode }>{props.courseName}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
