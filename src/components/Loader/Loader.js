import ContentLoader from "react-content-loader"

export const Loader = props => (
    <ContentLoader
      width={1300}
      height={620}
      foregroundColor="#3b5e80"
 
      {...props}
    >
 
      <rect x="0" y="40" rx="2" ry="2" width="290" height="300" />
      <rect x="350" y="40" rx="2" ry="2" width="290" height="300" />
      <rect x="700" y="40" rx="2" ry="2" width="290" height="300" />
      <rect x="1030" y="40" rx="2" ry="2" width="290" height="300" />
      <rect x="0" y="360" rx="2" ry="2" width="290" height="300" />
      <rect x="350" y="360" rx="2" ry="2" width="290" height="300" />
      <rect x="700" y="360" rx="2" ry="2" width="290" height="300" />
      <rect x="1030" y="360" rx="2" ry="2" width="290" height="300" />
 
 
    </ContentLoader>
  )