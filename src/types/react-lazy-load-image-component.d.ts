declare module "react-lazy-load-image-component" {
  import React from "react"

  export interface LazyLoadImageProps {
    alt?: string
    height?: number | string
    src: string
    width?: number | string
    className?: string
    afterLoad?: () => void
    beforeLoad?: () => void
    delayMethod?: "debounce" | "throttle"
    delayTime?: number
    effect?: string
    placeholder?: React.ReactElement | null
    placeholderSrc?: string
    threshold?: number
    useIntersectionObserver?: boolean
    visibleByDefault?: boolean
    wrapperClassName?: string
    wrapperProps?: object
  }

  export class LazyLoadImage extends React.Component<LazyLoadImageProps> {}

  export const trackWindowScroll: <P extends object>(Component: React.ComponentType<P>) => React.ComponentType<P>
}

