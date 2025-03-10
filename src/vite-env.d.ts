/// <reference types="vite/client" />

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

// CSS y otros estilos
declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

