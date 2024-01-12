import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from 'flowbite-react';
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
  
  export default function FooterComponent() {
    return (
      <Footer container>
        <div className="w-full">           
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-center gap-16">
            <FooterCopyright href="#" by="Sifting Bytes Technologies" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />              
              <FooterIcon href="#" icon={BsGithub} />              
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  