[data-aos="new-animation"] {
    opacity: 0;
    transition-property: transform, opacity;
  
    &.aos-animate {
      opacity: 1;
    }
  
    @media screen and (min-width: 768px) {
      transform: translateX(100px);
  
      &.aos-animate {
        transform: translateX(0);
      }
    }
  }